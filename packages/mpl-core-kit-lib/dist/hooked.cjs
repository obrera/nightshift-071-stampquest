Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const require_instructions = require('./instructions-ICgchO9B.cjs');
require('./generated.cjs');
let _solana_codecs = require("@solana/codecs");

//#region src/hooked/pluginRegistryV1Data.ts
function getExternalRegistryRecordWithUnknownDecoder() {
	return (0, _solana_codecs.createDecoder)({ read: (bytes, offset) => {
		let pluginType = require_instructions.ExternalPluginAdapterType.AppData;
		let pluginTypeOffset = offset + 1;
		let isUnknown = true;
		try {
			[pluginType, pluginTypeOffset] = require_instructions.getExternalPluginAdapterTypeDecoder().read(bytes, offset);
			isUnknown = false;
		} catch {}
		const [authority, authorityOffset] = require_instructions.getBasePluginAuthorityDecoder().read(bytes, pluginTypeOffset);
		const [lifecycleChecks, lifecycleChecksOffset] = (0, _solana_codecs.getOptionDecoder)((0, _solana_codecs.getArrayDecoder)((0, _solana_codecs.getTupleDecoder)([require_instructions.getHookableLifecycleEventDecoder(), require_instructions.getExternalCheckResultDecoder()]))).read(bytes, authorityOffset);
		const [pluginOffset, pluginOffsetOffset] = (0, _solana_codecs.getU64Decoder)().read(bytes, lifecycleChecksOffset);
		const optionU64Decoder = (0, _solana_codecs.getOptionDecoder)((0, _solana_codecs.getU64Decoder)());
		const [dataOffset, dataOffsetOffset] = optionU64Decoder.read(bytes, pluginOffsetOffset);
		const [dataLen, dataLenOffset] = optionU64Decoder.read(bytes, dataOffsetOffset);
		return [{
			authority,
			dataLen,
			dataOffset,
			isUnknown,
			lifecycleChecks,
			offset: pluginOffset,
			pluginType
		}, dataLenOffset];
	} });
}
function getPluginRegistryV1AccountDataDecoder() {
	return (0, _solana_codecs.createDecoder)({ read: (bytes, offset) => {
		const [key, keyOffset] = require_instructions.getKeyDecoder().read(bytes, offset);
		if (key !== require_instructions.Key.PluginRegistryV1) throw new Error(`Expected a PluginRegistryV1 account, got key: ${key}`);
		const [registry, registryOffset] = (0, _solana_codecs.getArrayDecoder)(getRegistryRecordWithUnknownDecoder()).read(bytes, keyOffset);
		const [externalRegistry, externalRegistryOffset] = (0, _solana_codecs.getArrayDecoder)(getExternalRegistryRecordWithUnknownDecoder()).read(bytes, registryOffset);
		return [{
			externalRegistry: externalRegistry.filter((record) => !record.isUnknown),
			key,
			registry: registry.filter((record) => !record.isUnknown)
		}, externalRegistryOffset];
	} });
}
function getRegistryRecordWithUnknownDecoder() {
	return (0, _solana_codecs.createDecoder)({ read: (bytes, offset) => {
		let pluginType = require_instructions.PluginType.Attributes;
		let pluginTypeOffset = offset + 1;
		let isUnknown = true;
		try {
			[pluginType, pluginTypeOffset] = require_instructions.getPluginTypeDecoder().read(bytes, offset);
			isUnknown = false;
		} catch {}
		const [authority, authorityOffset] = require_instructions.getBasePluginAuthorityDecoder().read(bytes, pluginTypeOffset);
		const [pluginOffset, pluginOffsetOffset] = (0, _solana_codecs.getU64Decoder)().read(bytes, authorityOffset);
		return [{
			authority,
			isUnknown,
			offset: pluginOffset,
			pluginType
		}, pluginOffsetOffset];
	} });
}

//#endregion
//#region src/hooked/assetAccountData.ts
function getAssetV1AccountDataDecoder() {
	return (0, _solana_codecs.createDecoder)({ read: (bytes, offset) => {
		const [asset, assetOffset] = require_instructions.getAssetV1Decoder().read(bytes, offset);
		if (asset.key !== require_instructions.Key.AssetV1) throw new Error(`Expected an Asset account, got key: ${asset.key}`);
		let pluginHeader;
		let finalOffset = assetOffset;
		if (bytes.length !== assetOffset) {
			[pluginHeader] = require_instructions.getPluginHeaderV1Decoder().read(bytes, assetOffset);
			const [, registryOffset] = getPluginRegistryV1AccountDataDecoder().read(bytes, Number(pluginHeader.pluginRegistryOffset));
			finalOffset = registryOffset;
		}
		const updateAuth = {
			address: asset.updateAuthority.__kind === "None" ? void 0 : asset.updateAuthority.fields[0],
			type: asset.updateAuthority.__kind
		};
		return [{
			pluginHeader,
			...asset,
			updateAuthority: updateAuth
		}, finalOffset];
	} });
}

//#endregion
//#region src/hooked/collectionAccountData.ts
function getCollectionV1AccountDataDecoder() {
	return (0, _solana_codecs.createDecoder)({ read: (bytes, offset) => {
		const [collection, collectionOffset] = require_instructions.getCollectionV1Decoder().read(bytes, offset);
		if (collection.key !== require_instructions.Key.CollectionV1) throw new Error(`Expected a Collection account, got key: ${collection.key}`);
		let pluginHeader;
		let finalOffset = collectionOffset;
		if (bytes.length !== collectionOffset) {
			[pluginHeader] = require_instructions.getPluginHeaderV1Decoder().read(bytes, collectionOffset);
			const [, registryOffset] = getPluginRegistryV1AccountDataDecoder().read(bytes, Number(pluginHeader.pluginRegistryOffset));
			finalOffset = registryOffset;
		}
		return [{
			pluginHeader,
			...collection
		}, finalOffset];
	} });
}

//#endregion
exports.getAssetV1AccountDataDecoder = getAssetV1AccountDataDecoder;
exports.getCollectionV1AccountDataDecoder = getCollectionV1AccountDataDecoder;
exports.getExternalRegistryRecordWithUnknownDecoder = getExternalRegistryRecordWithUnknownDecoder;
exports.getPluginRegistryV1AccountDataDecoder = getPluginRegistryV1AccountDataDecoder;
exports.getRegistryRecordWithUnknownDecoder = getRegistryRecordWithUnknownDecoder;
//# sourceMappingURL=hooked.cjs.map