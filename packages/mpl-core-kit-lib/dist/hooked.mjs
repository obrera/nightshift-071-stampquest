import { Hc as getBasePluginAuthorityDecoder, Is as ExternalPluginAdapterType, No as getPluginTypeDecoder, Pa as getPluginHeaderV1Decoder, Qa as getCollectionV1Decoder, Rs as getExternalPluginAdapterTypeDecoder, Xs as getExternalCheckResultDecoder, cs as getKeyDecoder, hs as getHookableLifecycleEventDecoder, jo as PluginType, oo as getAssetV1Decoder, os as Key } from "./instructions-COrDW8gH.mjs";
import "./generated.mjs";
import { createDecoder, getArrayDecoder, getOptionDecoder, getTupleDecoder, getU64Decoder } from "@solana/codecs";

//#region src/hooked/pluginRegistryV1Data.ts
function getExternalRegistryRecordWithUnknownDecoder() {
	return createDecoder({ read: (bytes, offset) => {
		let pluginType = ExternalPluginAdapterType.AppData;
		let pluginTypeOffset = offset + 1;
		let isUnknown = true;
		try {
			[pluginType, pluginTypeOffset] = getExternalPluginAdapterTypeDecoder().read(bytes, offset);
			isUnknown = false;
		} catch {}
		const [authority, authorityOffset] = getBasePluginAuthorityDecoder().read(bytes, pluginTypeOffset);
		const [lifecycleChecks, lifecycleChecksOffset] = getOptionDecoder(getArrayDecoder(getTupleDecoder([getHookableLifecycleEventDecoder(), getExternalCheckResultDecoder()]))).read(bytes, authorityOffset);
		const [pluginOffset, pluginOffsetOffset] = getU64Decoder().read(bytes, lifecycleChecksOffset);
		const optionU64Decoder = getOptionDecoder(getU64Decoder());
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
	return createDecoder({ read: (bytes, offset) => {
		const [key, keyOffset] = getKeyDecoder().read(bytes, offset);
		if (key !== Key.PluginRegistryV1) throw new Error(`Expected a PluginRegistryV1 account, got key: ${key}`);
		const [registry, registryOffset] = getArrayDecoder(getRegistryRecordWithUnknownDecoder()).read(bytes, keyOffset);
		const [externalRegistry, externalRegistryOffset] = getArrayDecoder(getExternalRegistryRecordWithUnknownDecoder()).read(bytes, registryOffset);
		return [{
			externalRegistry: externalRegistry.filter((record) => !record.isUnknown),
			key,
			registry: registry.filter((record) => !record.isUnknown)
		}, externalRegistryOffset];
	} });
}
function getRegistryRecordWithUnknownDecoder() {
	return createDecoder({ read: (bytes, offset) => {
		let pluginType = PluginType.Attributes;
		let pluginTypeOffset = offset + 1;
		let isUnknown = true;
		try {
			[pluginType, pluginTypeOffset] = getPluginTypeDecoder().read(bytes, offset);
			isUnknown = false;
		} catch {}
		const [authority, authorityOffset] = getBasePluginAuthorityDecoder().read(bytes, pluginTypeOffset);
		const [pluginOffset, pluginOffsetOffset] = getU64Decoder().read(bytes, authorityOffset);
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
	return createDecoder({ read: (bytes, offset) => {
		const [asset, assetOffset] = getAssetV1Decoder().read(bytes, offset);
		if (asset.key !== Key.AssetV1) throw new Error(`Expected an Asset account, got key: ${asset.key}`);
		let pluginHeader;
		let finalOffset = assetOffset;
		if (bytes.length !== assetOffset) {
			[pluginHeader] = getPluginHeaderV1Decoder().read(bytes, assetOffset);
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
	return createDecoder({ read: (bytes, offset) => {
		const [collection, collectionOffset] = getCollectionV1Decoder().read(bytes, offset);
		if (collection.key !== Key.CollectionV1) throw new Error(`Expected a Collection account, got key: ${collection.key}`);
		let pluginHeader;
		let finalOffset = collectionOffset;
		if (bytes.length !== collectionOffset) {
			[pluginHeader] = getPluginHeaderV1Decoder().read(bytes, collectionOffset);
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
export { getAssetV1AccountDataDecoder, getCollectionV1AccountDataDecoder, getExternalRegistryRecordWithUnknownDecoder, getPluginRegistryV1AccountDataDecoder, getRegistryRecordWithUnknownDecoder };
//# sourceMappingURL=hooked.mjs.map