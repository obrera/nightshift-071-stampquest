Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const require_instructions = require('./instructions-ICgchO9B.cjs');
require('./generated.cjs');
const require_utils = require('./utils-lOLbmjEr.cjs');
let _solana_kit = require("@solana/kit");
let _solana_addresses = require("@solana/addresses");

//#region src/helpers/state.ts
/**
* Find the collection address for the given asset if it is part of a collection.
* @param {AssetV1} asset Asset
* @returns {Address | undefined} Collection address
*/
function collectionAddress(asset) {
	if (asset.updateAuthority.type === "Collection") return asset.updateAuthority.address;
}
/**
* Derive the asset plugins from the asset and collection. Plugins on the asset take precedence over plugins on the collection.
* @param {AssetV1 & AssetPluginsList} asset Asset with plugins
* @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection with plugins
* @returns {AssetV1 & AssetPluginsList} Asset with derived plugins
*/
function deriveAssetPlugins(asset, collection) {
	if (!collection) return asset;
	const mergedPlugins = [
		"addBlocker",
		"attributes",
		"autograph",
		"freezeExecute",
		"immutableMetadata",
		"permanentBurnDelegate",
		"permanentFreezeDelegate",
		"permanentFreezeExecute",
		"permanentTransferDelegate",
		"royalties",
		"updateDelegate",
		"verifiedCreators"
	].reduce((plugins, key) => {
		const assetPlugin = asset[key];
		const collectionPlugin = collection[key];
		if (assetPlugin) return {
			...plugins,
			[key]: assetPlugin
		};
		if (collectionPlugin) return {
			...plugins,
			[key]: collectionPlugin
		};
		return plugins;
	}, {});
	return {
		...asset,
		...mergedPlugins
	};
}
/**
* Check if the given address is the owner of the asset.
* @param {string | Address} addr Address
* @param {AssetV1} asset Asset
* @returns {boolean} True if the address is the owner
*/
function isAssetOwner(addr, asset) {
	return (0, _solana_addresses.address)(addr) === asset.owner;
}
/**
* Check if the asset is frozen.
* @param {AssetV1 & AssetPluginsList} asset Asset with plugins
* @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection with plugins
* @returns {boolean} True if the asset is frozen
*/
function isFrozen(asset, collection) {
	const dAsset = deriveAssetPlugins(asset, collection);
	return dAsset.freezeDelegate?.frozen || dAsset.permanentFreezeDelegate?.frozen || false;
}

//#endregion
//#region src/helpers/authority.ts
/**
* Check if the given address has the update authority for the asset.
* If the asset specifies a collection as the update authority, the collection's update authority is checked.
* If there are update delegates, they are also checked
* @param {string | Address} addr Address
* @param {AssetV1 & AssetPluginsList} asset Asset
* @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection
* @returns {boolean} True if the address is the update authority
*/
function hasAssetUpdateAuthority(addr, asset, collection) {
	const key = (0, _solana_addresses.address)(addr);
	const dAsset = deriveAssetPlugins(asset, collection);
	const updateAuth = dAsset.updateAuthority;
	if (updateAuth.type === "Collection" && updateAuth.address !== collection?.updateAuthority) throw Error("Collection mismatch");
	if (updateAuth.type === "Address" && updateAuth.address === key || dAsset.updateDelegate?.authority.type === "Address" && dAsset.updateDelegate?.authority.address === key || dAsset.updateDelegate?.authority.type === "Owner" && dAsset.owner === key || updateAuth.type === "Collection" && collection?.updateAuthority === key) return true;
	return false;
}
/**
* Check if the given address has update authority for the collection.
* @param {string | Address} addr Address
* @param {CollectionV1 & CollectionPluginsList} collection Collection
* @returns {boolean} True if the address is the update authority
*/
function hasCollectionUpdateAuthority(addr, collection) {
	const key = (0, _solana_addresses.address)(addr);
	if (collection.updateAuthority === key || collection.updateDelegate?.authority.type === "Address" && collection.updateDelegate?.authority.address === key) return true;
	return false;
}
/**
* Check if the given address has the Address authority for the plugin.
* @param {Address | string} addr Address
* @param {PluginAuthority} authority Plugin authority
* @returns {boolean} True if the address has the authority
*/
function hasPluginAddressAuthority(addr, authority) {
	return authority.type === "Address" && authority.address === (0, _solana_addresses.address)(addr);
}
/**
* Check if the given address has the Owner authority for the plugin.
* @param {Address | string} addr Address
* @param {PluginAuthority} authority Plugin authority
* @param {AssetV1} asset Asset
* @returns {boolean} True if the address has the authority
*/
function hasPluginOwnerAuthority(addr, authority, asset) {
	return authority.type === "Owner" && isAssetOwner(addr, asset);
}
/**
* Check if the given address has the UpdateAuthority authority for the plugin.
* @param {Address | string} addr Address
* @param {PluginAuthority} authority Plugin authority
* @param {AssetV1 & AssetPluginsList} asset Asset
* @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection
* @returns {boolean} True if the address has the authority
*/
function hasPluginUpdateAuthority(addr, authority, asset, collection) {
	return authority.type === "UpdateAuthority" && hasAssetUpdateAuthority(addr, asset, collection);
}

//#endregion
//#region src/helpers/gpa.ts
/**
* Account layout offsets for AssetV1:
* - key: offset 0, 1 byte (enum)
* - owner: offset 1, 32 bytes (Address)
* - updateAuthority: offset 33, variable (discriminated union)
*   - discriminator: 1 byte (0=None, 1=Address, 2=Collection)
*   - address (if Address or Collection): 32 bytes
*/
const ASSET_KEY_OFFSET = 0;
const ASSET_OWNER_OFFSET = 1;
const ASSET_UPDATE_AUTHORITY_OFFSET = 33;
/**
* Account layout offsets for CollectionV1:
* - key: offset 0, 1 byte (enum)
* - updateAuthority: offset 1, 32 bytes (Address)
*/
const COLLECTION_KEY_OFFSET = 0;
const COLLECTION_UPDATE_AUTHORITY_OFFSET = 1;
const BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const BASE10_256 = 256n;
const BASE58 = 58n;
/**
* Fetch all assets in a specific collection
*/
async function fetchAssetsByCollection(rpc, collection) {
	const collectionBytes = decodeBase58(collection);
	const updateAuthorityBytes = new Uint8Array(33);
	updateAuthorityBytes[0] = 2;
	updateAuthorityBytes.set(collectionBytes, 1);
	const response = await rpc.getProgramAccounts(require_instructions.MPL_CORE_PROGRAM_ADDRESS, {
		encoding: "base64",
		filters: [{ memcmp: {
			bytes: encodeBase58(new Uint8Array([require_instructions.Key.AssetV1])),
			encoding: "base58",
			offset: BigInt(ASSET_KEY_OFFSET)
		} }, { memcmp: {
			bytes: encodeBase58(updateAuthorityBytes),
			encoding: "base58",
			offset: BigInt(ASSET_UPDATE_AUTHORITY_OFFSET)
		} }]
	}).send();
	const decoder = require_instructions.getAssetV1Decoder();
	return response.map((item) => {
		const data = decodeBase64(item.account.data[0]);
		return {
			address: item.pubkey,
			data: decoder.decode(data),
			executable: item.account.executable,
			lamports: item.account.lamports,
			programAddress: item.account.owner
		};
	});
}
/**
* Fetch all assets owned by a specific address
*/
async function fetchAssetsByOwner(rpc, owner) {
	const response = await rpc.getProgramAccounts(require_instructions.MPL_CORE_PROGRAM_ADDRESS, {
		encoding: "base64",
		filters: [{ memcmp: {
			bytes: encodeBase58(new Uint8Array([require_instructions.Key.AssetV1])),
			encoding: "base58",
			offset: BigInt(ASSET_KEY_OFFSET)
		} }, { memcmp: {
			bytes: owner,
			encoding: "base58",
			offset: BigInt(ASSET_OWNER_OFFSET)
		} }]
	}).send();
	const decoder = require_instructions.getAssetV1Decoder();
	return response.map((item) => {
		const data = decodeBase64(item.account.data[0]);
		return {
			address: item.pubkey,
			data: decoder.decode(data),
			executable: item.account.executable,
			lamports: item.account.lamports,
			programAddress: item.account.owner
		};
	});
}
/**
* Fetch all assets with a specific update authority address
*/
async function fetchAssetsByUpdateAuthority(rpc, updateAuthority) {
	const authorityBytes = decodeBase58(updateAuthority);
	const updateAuthorityBytes = new Uint8Array(33);
	updateAuthorityBytes[0] = 1;
	updateAuthorityBytes.set(authorityBytes, 1);
	const response = await rpc.getProgramAccounts(require_instructions.MPL_CORE_PROGRAM_ADDRESS, {
		encoding: "base64",
		filters: [{ memcmp: {
			bytes: encodeBase58(new Uint8Array([require_instructions.Key.AssetV1])),
			encoding: "base58",
			offset: BigInt(ASSET_KEY_OFFSET)
		} }, { memcmp: {
			bytes: encodeBase58(updateAuthorityBytes),
			encoding: "base58",
			offset: BigInt(ASSET_UPDATE_AUTHORITY_OFFSET)
		} }]
	}).send();
	const decoder = require_instructions.getAssetV1Decoder();
	return response.map((item) => {
		const data = decodeBase64(item.account.data[0]);
		return {
			address: item.pubkey,
			data: decoder.decode(data),
			executable: item.account.executable,
			lamports: item.account.lamports,
			programAddress: item.account.owner
		};
	});
}
/**
* Fetch all collections with a specific update authority
*/
async function fetchCollectionsByUpdateAuthority(rpc, updateAuthority) {
	const response = await rpc.getProgramAccounts(require_instructions.MPL_CORE_PROGRAM_ADDRESS, {
		encoding: "base64",
		filters: [{ memcmp: {
			bytes: encodeBase58(new Uint8Array([require_instructions.Key.CollectionV1])),
			encoding: "base58",
			offset: BigInt(COLLECTION_KEY_OFFSET)
		} }, { memcmp: {
			bytes: updateAuthority,
			encoding: "base58",
			offset: BigInt(COLLECTION_UPDATE_AUTHORITY_OFFSET)
		} }]
	}).send();
	const decoder = require_instructions.getCollectionV1Decoder();
	return response.map((item) => {
		const data = decodeBase64(item.account.data[0]);
		return {
			address: item.pubkey,
			data: decoder.decode(data),
			executable: item.account.executable,
			lamports: item.account.lamports,
			programAddress: item.account.owner
		};
	});
}
function bigintToBytes(value) {
	if (value === 0n) return [];
	const quotient = value / BASE10_256;
	const remainder = Number(value % BASE10_256);
	return [...bigintToBytes(quotient), remainder];
}
function countLeadingCharacter(str, character) {
	const firstDifferentCharacter = str.split("").findIndex((char) => char !== character);
	return firstDifferentCharacter === -1 ? str.length : firstDifferentCharacter;
}
function countLeadingZeroBytes(bytes) {
	const firstNonZeroByte = bytes.findIndex((byte) => byte !== 0);
	return firstNonZeroByte === -1 ? bytes.length : firstNonZeroByte;
}
function decodeBase58(str) {
	if (str.length === 0) return new Uint8Array(0);
	const leadingZeroCount = countLeadingCharacter(str, "1");
	const decodedValue = decodeBase58Value(str.slice(leadingZeroCount));
	return Uint8Array.from([...Array.from({ length: leadingZeroCount }, () => 0), ...bigintToBytes(decodedValue)]);
}
function decodeBase58Value(str) {
	return str.split("").reduce((value, char) => {
		const nextDigit = BASE58_ALPHABET.indexOf(char);
		if (nextDigit === -1) throw new Error(`Invalid base58 character: ${char}`);
		return value * BASE58 + BigInt(nextDigit);
	}, 0n);
}
function decodeBase64(value) {
	return new Uint8Array((0, _solana_kit.getBase64Encoder)().encode(value));
}
function encodeBase58(bytes) {
	if (bytes.length === 0) return "";
	const leadingZeroCount = countLeadingZeroBytes(bytes);
	const encodedValue = bytes.reduce((value, byte) => value * BASE10_256 + BigInt(byte), 0n);
	return `${"1".repeat(leadingZeroCount)}${encodeBase58Value(encodedValue)}`;
}
function encodeBase58Value(value) {
	if (value === 0n) return "";
	const quotient = value / BASE58;
	const remainder = Number(value % BASE58);
	return `${encodeBase58Value(quotient)}${BASE58_ALPHABET[remainder]}`;
}

//#endregion
//#region src/helpers/plugin.ts
/**
* Convert a plugin type to a key for the asset plugins.
* @param {PluginType} pluginType Plugin type
* @returns {AssetPluginKey}
*/
function assetPluginKeyFromType(pluginType) {
	return require_utils.lowercaseFirstLetter(require_instructions.PluginType[pluginType]);
}
/**
* Check the authority for the given plugin types on an asset.
* @param {CheckPluginAuthoritiesArgs} args Arguments
* @returns {boolean[]} Array of booleans indicating if the authority matches the plugin authority
*/
function checkPluginAuthorities({ asset, authority, collection, pluginTypes }) {
	const cAddress = collectionAddress(asset);
	if (cAddress && collection && cAddress !== collection.updateAuthority) throw new Error("Collection mismatch");
	const dAsset = deriveAssetPlugins(asset, collection);
	const auth = (0, _solana_addresses.address)(authority);
	const isUpdateAuth = hasAssetUpdateAuthority(auth, asset, collection);
	const isOwner = isAssetOwner(auth, asset);
	return pluginTypes.map((type) => {
		const plugin = dAsset[assetPluginKeyFromType(type)];
		if (plugin) {
			if (hasPluginAddressAuthority(auth, plugin.authority) || plugin.authority.type === "UpdateAuthority" && isUpdateAuth || plugin.authority.type === "Owner" && isOwner) return true;
		}
		return false;
	});
}
/**
* Convert a plugin key to a type.
* @param {AssetPluginKey} key Asset plugin key
* @returns {PluginType}
*/
function pluginTypeFromAssetPluginKey(key) {
	return require_instructions.PluginType[require_utils.capitalizeFirstLetter(key)];
}

//#endregion
exports.assetPluginKeyFromType = assetPluginKeyFromType;
exports.checkPluginAuthorities = checkPluginAuthorities;
exports.collectionAddress = collectionAddress;
exports.deriveAssetPlugins = deriveAssetPlugins;
exports.fetchAssetsByCollection = fetchAssetsByCollection;
exports.fetchAssetsByOwner = fetchAssetsByOwner;
exports.fetchAssetsByUpdateAuthority = fetchAssetsByUpdateAuthority;
exports.fetchCollectionsByUpdateAuthority = fetchCollectionsByUpdateAuthority;
exports.hasAssetUpdateAuthority = hasAssetUpdateAuthority;
exports.hasCollectionUpdateAuthority = hasCollectionUpdateAuthority;
exports.hasPluginAddressAuthority = hasPluginAddressAuthority;
exports.hasPluginOwnerAuthority = hasPluginOwnerAuthority;
exports.hasPluginUpdateAuthority = hasPluginUpdateAuthority;
exports.isAssetOwner = isAssetOwner;
exports.isFrozen = isFrozen;
exports.pluginTypeFromAssetPluginKey = pluginTypeFromAssetPluginKey;
//# sourceMappingURL=helpers.cjs.map