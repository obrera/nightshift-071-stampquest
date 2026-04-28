import { Bs as ExternalPluginAdapterSchema, Ks as getExternalPluginAdapterDecoder, ns as getOracleValidationDecoder, os as Key, ps as HookableLifecycleEvent, zo as getPluginDecoder } from "./instructions-COrDW8gH.mjs";
import "./generated.mjs";
import { a as unwrapOption, i as toWords, r as someOrNone, t as capitalizeFirstLetter } from "./utils-D2Jm8keN.mjs";

//#region src/plugins/masterEdition.ts
function masterEditionFromBase(s) {
	return {
		maxSupply: unwrapOption(s.maxSupply),
		name: unwrapOption(s.name),
		uri: unwrapOption(s.uri)
	};
}
function masterEditionToBase(s) {
	return {
		maxSupply: someOrNone(s.maxSupply),
		name: someOrNone(s.name),
		uri: someOrNone(s.uri)
	};
}

//#endregion
//#region src/plugins/pluginAuthority.ts
function comparePluginAuthorities(a, b) {
	if (a.type !== b.type) return false;
	return a.address === b.address;
}
function pluginAuthority(type, options) {
	return {
		address: options?.address,
		type
	};
}
function pluginAuthorityFromBase(authority) {
	return {
		address: authority.address,
		type: authority.__kind
	};
}
function pluginAuthorityToBase(u) {
	if (u.type === "Address") return {
		__kind: "Address",
		address: u.address
	};
	return { __kind: u.type };
}

//#endregion
//#region src/plugins/royalties.ts
function royaltiesFromBase(r) {
	let ruleSet;
	if (r.ruleSet.__kind === "ProgramAllowList") ruleSet = {
		...r.ruleSet,
		addresses: r.ruleSet.fields[0],
		type: "ProgramAllowList"
	};
	else if (r.ruleSet.__kind === "ProgramDenyList") ruleSet = {
		...r.ruleSet,
		addresses: r.ruleSet.fields[0],
		type: "ProgramDenyList"
	};
	else ruleSet = {
		...r.ruleSet,
		type: r.ruleSet.__kind
	};
	return {
		...r,
		ruleSet
	};
}
function royaltiesToBase(r) {
	return {
		...r,
		ruleSet: ruleSetToBase(r.ruleSet)
	};
}
function ruleSetToBase(r) {
	if (r.__kind) return r;
	const ruleSet = r;
	if (ruleSet.type === "ProgramAllowList" || ruleSet.type === "ProgramDenyList") return {
		__kind: ruleSet.type,
		fields: [ruleSet.addresses]
	};
	return { __kind: ruleSet.type };
}

//#endregion
//#region src/plugins/lib.ts
/**
* @deprecated Use the new 1.0 sdk instruction helpers like `create` instead of `createV1` which no longer require sub create functions like this.
* @param args
* @returns
*/
function createPlugin(args) {
	if (args.type === "UpdateDelegate") return {
		__kind: args.type,
		fields: [args.data || { additionalDelegates: [] }]
	};
	return {
		__kind: args.type,
		fields: [args.data || {}]
	};
}
function createPluginV2(args) {
	const { type } = args;
	if (type === "UpdateDelegate") return {
		__kind: type,
		fields: [args || { additionalDelegates: [] }]
	};
	if (type === "Royalties") return {
		__kind: type,
		fields: [royaltiesToBase(args)]
	};
	if (type === "MasterEdition") return {
		__kind: type,
		fields: [masterEditionToBase(args)]
	};
	return {
		__kind: type,
		fields: [args || {}]
	};
}
function formPluginHeaderV1(pluginRegistryOffset) {
	return {
		key: Key.PluginHeaderV1,
		pluginRegistryOffset
	};
}
function mapPlugin({ authority, offset, plugin: plug }) {
	const pluginKey = toWords(plug.__kind).toLowerCase().split(" ").reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
	if (plug.__kind === "Royalties") return { [pluginKey]: {
		authority,
		offset,
		...royaltiesFromBase(plug.fields[0])
	} };
	if (plug.__kind === "MasterEdition") return { [pluginKey]: {
		authority,
		offset,
		...masterEditionFromBase(plug.fields[0])
	} };
	return { [pluginKey]: {
		authority,
		offset,
		..."fields" in plug ? mapPluginFields(plug.fields) : {}
	} };
}
function mapPluginFields(fields) {
	return fields.reduce((acc2, field) => {
		Object.assign(acc2, field);
		return acc2;
	}, {});
}
function parseExternalPluginAdapterData(plugin, record, account) {
	let data;
	if (record.dataOffset.__option === "Some" && record.dataLen.__option === "Some") {
		const dataSlice = account.slice(Number(record.dataOffset.value), Number(record.dataOffset.value) + Number(record.dataLen.value));
		if (plugin.schema === ExternalPluginAdapterSchema.Binary) data = dataSlice;
		else if (plugin.schema === ExternalPluginAdapterSchema.Json) {
			if (dataSlice.length !== 0) try {
				data = JSON.parse(new TextDecoder().decode(dataSlice));
			} catch (e) {
				console.warn("Invalid JSON in external plugin data", e.message);
			}
		} else if (plugin.schema === ExternalPluginAdapterSchema.MsgPack) if (dataSlice.length === 0) data = null;
		else try {
			data = dataSlice;
		} catch {
			data = dataSlice;
		}
		return data;
	}
}
/**
* @deprecated Use the new 1.0 sdk instruction helpers like `create` instead of `createV1` which no longer require sub create functions like this.
* @param args
* @returns
*/
function pluginAuthorityPair(args) {
	const { authority, data, type } = args;
	let baseAuthority;
	if (authority) if ("__kind" in authority) baseAuthority = authority;
	else baseAuthority = pluginAuthorityToBase(authority);
	return {
		authority: baseAuthority ? someOrNone(baseAuthority) : { __option: "None" },
		plugin: createPlugin({
			data,
			type
		})
	};
}
/**
* @deprecated Use the new 1.0 sdk instruction helpers like `create` instead of `createV1` which no longer require sub create functions like this.
* @param args
* @returns
*/
function pluginAuthorityPairV2({ authority, type, ...args }) {
	return {
		authority: authority ? someOrNone(pluginAuthorityToBase(authority)) : { __option: "None" },
		plugin: createPluginV2({
			type,
			...args
		})
	};
}
function pluginKeyToPluginType(pluginKey) {
	return pluginKey.charAt(0).toUpperCase() + pluginKey.slice(1);
}
function registryRecordsToPluginsList(registryRecords, accountData) {
	return registryRecords.reduce((acc, record) => {
		const mappedAuthority = pluginAuthorityFromBase(record.authority);
		const deserializedPlugin = getPluginDecoder().read(accountData, Number(record.offset))[0];
		Object.assign(acc, mapPlugin({
			authority: mappedAuthority,
			offset: record.offset,
			plugin: deserializedPlugin
		}));
		return acc;
	}, {});
}

//#endregion
//#region src/plugins/appData.ts
function appDataFromBase(s, r, account) {
	return {
		...s,
		data: parseExternalPluginAdapterData(s, r, account),
		dataAuthority: pluginAuthorityFromBase(s.dataAuthority)
	};
}
function appDataInitInfoArgsToBase(d) {
	return {
		dataAuthority: pluginAuthorityToBase(d.dataAuthority),
		initPluginAuthority: d.initPluginAuthority ? pluginAuthorityToBase(d.initPluginAuthority) : null,
		schema: d.schema ?? null
	};
}
function appDataUpdateInfoArgsToBase(d) {
	return { schema: d.schema ?? null };
}
const appDataManifest = {
	fromBase: appDataFromBase,
	initToBase: appDataInitInfoArgsToBase,
	type: "AppData",
	updateToBase: appDataUpdateInfoArgsToBase
};

//#endregion
//#region src/plugins/linkedDataKey.ts
function linkedDataKeyFromBase(e) {
	switch (e.__kind) {
		case "LinkedAppData": return {
			dataAuthority: pluginAuthorityFromBase(e.fields[0]),
			type: e.__kind
		};
		case "LinkedLifecycleHook": return {
			hookedProgram: e.fields[0],
			type: e.__kind
		};
		default: throw new Error("Unknown LinkedDataKey type");
	}
}
function linkedDataKeyToBase(e) {
	switch (e.type) {
		case "LinkedAppData": return {
			__kind: e.type,
			fields: [pluginAuthorityToBase(e.dataAuthority)]
		};
		case "LinkedLifecycleHook": return {
			__kind: e.type,
			fields: [e.hookedProgram]
		};
		default: throw new Error("Unknown LinkedDataKey type");
	}
}

//#endregion
//#region src/plugins/dataSection.ts
function dataSectionFromBase(s, r, account) {
	return {
		...s,
		data: parseExternalPluginAdapterData(s, r, account),
		dataAuthority: s.parentKey.__kind !== "LinkedLifecycleHook" ? pluginAuthorityFromBase(s.parentKey.fields[0]) : void 0,
		parentKey: linkedDataKeyFromBase(s.parentKey)
	};
}
function dataSectionInitInfoArgsToBase(d) {
	return {
		parentKey: linkedDataKeyToBase(d.parentKey),
		schema: d.schema
	};
}
function dataSectionUpdateInfoArgsToBase(_d) {
	return {};
}
const dataSectionManifest = {
	fromBase: dataSectionFromBase,
	initToBase: dataSectionInitInfoArgsToBase,
	type: "DataSection",
	updateToBase: dataSectionUpdateInfoArgsToBase
};

//#endregion
//#region src/plugins/externalPluginAdapterKey.ts
function externalPluginAdapterKeyToBase(e) {
	switch (e.type) {
		case "AppData":
		case "LinkedAppData": return {
			__kind: e.type,
			fields: [pluginAuthorityToBase(e.dataAuthority)]
		};
		case "DataSection": return {
			__kind: e.type,
			fields: [linkedDataKeyToBase(e.parentKey)]
		};
		case "LifecycleHook": return {
			__kind: e.type,
			fields: [e.hookedProgram]
		};
		case "LinkedLifecycleHook": return {
			__kind: e.type,
			fields: [e.hookedProgram]
		};
		case "Oracle": return {
			__kind: e.type,
			fields: [e.baseAddress]
		};
		default: throw new Error("Unknown ExternalPluginAdapterKey type");
	}
}

//#endregion
//#region src/plugins/lifecycleChecks.ts
let CheckResult = /* @__PURE__ */ function(CheckResult) {
	CheckResult[CheckResult["CAN_LISTEN"] = 0] = "CAN_LISTEN";
	CheckResult[CheckResult["CAN_APPROVE"] = 1] = "CAN_APPROVE";
	CheckResult[CheckResult["CAN_REJECT"] = 2] = "CAN_REJECT";
	return CheckResult;
}({});
const adapterCheckResultToCheckResults = (check) => {
	const results = [];
	if (check.flags & 1) results.push(CheckResult.CAN_LISTEN);
	if (check.flags & 2) results.push(CheckResult.CAN_APPROVE);
	if (check.flags & 4) results.push(CheckResult.CAN_REJECT);
	return results;
};
const checkResultsToAdapterCheckResult = (results) => {
	let flags = 0;
	results.forEach((result) => {
		switch (result) {
			case CheckResult.CAN_APPROVE:
				flags |= 2;
				break;
			case CheckResult.CAN_LISTEN:
				flags |= 1;
				break;
			case CheckResult.CAN_REJECT:
				flags |= 4;
				break;
			default:
		}
	});
	return { flags };
};
function hookableLifecycleEventToLifecycleCheckKey(event) {
	return HookableLifecycleEvent[event].toLowerCase();
}
function lifecycleCheckKeyToEnum(key) {
	return HookableLifecycleEvent[capitalizeFirstLetter(key)];
}
function lifecycleChecksFromBase(l) {
	const checks = {};
	l.forEach(([event, check]) => {
		checks[hookableLifecycleEventToLifecycleCheckKey(event)] = adapterCheckResultToCheckResults(check);
	});
	return checks;
}
function lifecycleChecksToBase(l) {
	return Object.keys(l).map((key) => {
		const k = key;
		const value = l[k];
		if (value) return [lifecycleCheckKeyToEnum(k), checkResultsToAdapterCheckResult(value)];
		return null;
	}).filter((x) => x !== null);
}

//#endregion
//#region src/plugins/seed.ts
function seedFromBase(s) {
	if (s.__kind === "Address") return {
		pubkey: s.fields[0],
		type: "Address"
	};
	if (s.__kind === "Bytes") return {
		bytes: s.fields[0],
		type: "Bytes"
	};
	return { type: s.__kind };
}
function seedToBase(s) {
	if (s.type === "Address") return {
		__kind: "Address",
		fields: [s.pubkey]
	};
	if (s.type === "Bytes") return {
		__kind: "Bytes",
		fields: [s.bytes]
	};
	return { __kind: s.type };
}

//#endregion
//#region src/plugins/extraAccount.ts
const PRECONFIGURED_SEED = "mpl-core";
function extraAccountFromBase(s) {
	if (s.__kind === "CustomPda") return {
		customProgramId: unwrapOption(s.customProgramId),
		isSigner: s.isSigner,
		isWritable: s.isWritable,
		seeds: s.seeds.map(seedFromBase),
		type: "CustomPda"
	};
	if (s.__kind === "Address") return {
		address: s.address,
		isSigner: s.isSigner,
		isWritable: s.isWritable,
		type: "Address"
	};
	return {
		isSigner: s.isSigner,
		isWritable: s.isWritable,
		type: s.__kind
	};
}
function extraAccountToBase(s) {
	const accountMeta = {
		isSigner: s.isSigner || false,
		isWritable: s.isWritable || false
	};
	if (s.type === "CustomPda") return {
		__kind: "CustomPda",
		...accountMeta,
		customProgramId: someOrNone(s.customProgramId),
		seeds: s.seeds.map(seedToBase)
	};
	if (s.type === "Address") return {
		__kind: "Address",
		...accountMeta,
		address: s.address
	};
	return {
		__kind: s.type,
		...accountMeta
	};
}
const EXTRA_ACCOUNT_INPUT_MAP = {
	PreconfiguredAsset: "asset",
	PreconfiguredCollection: "collection",
	PreconfiguredOwner: "owner",
	PreconfiguredProgram: "program",
	PreconfiguredRecipient: "recipient"
};
function getExtraAccountRequiredInputs(s) {
	const preconfigured = EXTRA_ACCOUNT_INPUT_MAP[s.type];
	if (preconfigured) return [preconfigured];
	if (s.type === "CustomPda") return s.seeds.map((seed) => {
		switch (seed.type) {
			case "Asset": return "asset";
			case "Collection": return "collection";
			case "Owner": return "owner";
			case "Recipient": return "recipient";
			default: return null;
		}
	}).filter((input) => input);
	return [];
}

//#endregion
//#region src/plugins/lifecycleHook.ts
function lifecycleHookFromBase(s, r, account) {
	return {
		...s,
		data: parseExternalPluginAdapterData(s, r, account),
		dataAuthority: s.dataAuthority.__option === "Some" ? pluginAuthorityFromBase(s.dataAuthority.value) : void 0,
		extraAccounts: s.extraAccounts.__option === "Some" ? s.extraAccounts.value.map(extraAccountFromBase) : void 0
	};
}
function lifecycleHookInitInfoArgsToBase(l) {
	return {
		dataAuthority: l.dataAuthority ? pluginAuthorityToBase(l.dataAuthority) : null,
		extraAccounts: l.extraAccounts ? l.extraAccounts.map(extraAccountToBase) : null,
		hookedProgram: l.hookedProgram,
		initPluginAuthority: l.initPluginAuthority ? pluginAuthorityToBase(l.initPluginAuthority) : null,
		lifecycleChecks: lifecycleChecksToBase(l.lifecycleChecks),
		schema: l.schema ?? null
	};
}
function lifecycleHookUpdateInfoArgsToBase(l) {
	return {
		extraAccounts: l.extraAccounts ? l.extraAccounts.map(extraAccountToBase) : null,
		lifecycleChecks: l.lifecycleChecks ? lifecycleChecksToBase(l.lifecycleChecks) : null,
		schema: l.schema ?? null
	};
}
const lifecycleHookManifest = {
	fromBase: lifecycleHookFromBase,
	initToBase: lifecycleHookInitInfoArgsToBase,
	type: "LifecycleHook",
	updateToBase: lifecycleHookUpdateInfoArgsToBase
};

//#endregion
//#region src/plugins/linkedAppData.ts
function linkedAppDataFromBase(s, _r, _account) {
	return {
		...s,
		dataAuthority: pluginAuthorityFromBase(s.dataAuthority)
	};
}
function linkedAppDataInitInfoArgsToBase(d) {
	return {
		dataAuthority: pluginAuthorityToBase(d.dataAuthority),
		initPluginAuthority: d.initPluginAuthority ? pluginAuthorityToBase(d.initPluginAuthority) : null,
		schema: d.schema ?? null
	};
}
function linkedAppDataUpdateInfoArgsToBase(d) {
	return { schema: d.schema ?? null };
}
const linkedAppDataManifest = {
	fromBase: linkedAppDataFromBase,
	initToBase: linkedAppDataInitInfoArgsToBase,
	type: "LinkedAppData",
	updateToBase: linkedAppDataUpdateInfoArgsToBase
};

//#endregion
//#region src/plugins/linkedLifecycleHook.ts
function linkedLifecycleHookFromBase(s, _r, _account) {
	return {
		...s,
		dataAuthority: s.dataAuthority.__option === "Some" ? pluginAuthorityFromBase(s.dataAuthority.value) : void 0,
		extraAccounts: s.extraAccounts.__option === "Some" ? s.extraAccounts.value.map(extraAccountFromBase) : void 0
	};
}
function linkedLifecycleHookInitInfoArgsToBase(l) {
	return {
		dataAuthority: l.dataAuthority ? pluginAuthorityToBase(l.dataAuthority) : null,
		extraAccounts: l.extraAccounts ? l.extraAccounts.map(extraAccountToBase) : null,
		hookedProgram: l.hookedProgram,
		initPluginAuthority: l.initPluginAuthority ? pluginAuthorityToBase(l.initPluginAuthority) : null,
		lifecycleChecks: lifecycleChecksToBase(l.lifecycleChecks),
		schema: l.schema ? l.schema : null
	};
}
function linkedLifecycleHookUpdateInfoArgsToBase(l) {
	return {
		extraAccounts: l.extraAccounts ? l.extraAccounts.map(extraAccountToBase) : null,
		lifecycleChecks: l.lifecycleChecks ? lifecycleChecksToBase(l.lifecycleChecks) : null,
		schema: l.schema ?? null
	};
}
const linkedLifecycleHookManifest = {
	fromBase: linkedLifecycleHookFromBase,
	initToBase: linkedLifecycleHookInitInfoArgsToBase,
	type: "LinkedLifecycleHook",
	updateToBase: linkedLifecycleHookUpdateInfoArgsToBase
};

//#endregion
//#region src/plugins/validationResultsOffset.ts
function validationResultsOffsetFromBase(e) {
	if (e.__kind === "Custom") return {
		offset: e.fields[0],
		type: "Custom"
	};
	return { type: e.__kind };
}
function validationResultsOffsetToBase(e) {
	if (e.type === "Custom") return {
		__kind: "Custom",
		fields: [e.offset]
	};
	return { __kind: e.type };
}

//#endregion
//#region src/plugins/oracle.ts
function deserializeOracleValidation(data, offset) {
	let offs = 0;
	if (offset.type === "Custom") offs = Number(offset.offset);
	else if (offset.type === "Anchor") offs = 8;
	return getOracleValidationDecoder().read(data, offs)[0];
}
function oracleFromBase(s, _r, _account) {
	return {
		...s,
		baseAddressConfig: s.baseAddressConfig.__option === "Some" ? extraAccountFromBase(s.baseAddressConfig.value) : void 0,
		resultsOffset: validationResultsOffsetFromBase(s.resultsOffset)
	};
}
function oracleInitInfoArgsToBase(o) {
	return {
		baseAddress: o.baseAddress,
		baseAddressConfig: o.baseAddressConfig ? extraAccountToBase(o.baseAddressConfig) : null,
		initPluginAuthority: o.initPluginAuthority ? pluginAuthorityToBase(o.initPluginAuthority) : null,
		lifecycleChecks: lifecycleChecksToBase(o.lifecycleChecks),
		resultsOffset: o.resultsOffset ? validationResultsOffsetToBase(o.resultsOffset) : null
	};
}
function oracleUpdateInfoArgsToBase(o) {
	return {
		baseAddressConfig: o.baseAddressConfig ? extraAccountToBase(o.baseAddressConfig) : null,
		lifecycleChecks: o.lifecycleChecks ? lifecycleChecksToBase(o.lifecycleChecks) : null,
		resultsOffset: o.resultsOffset ? validationResultsOffsetToBase(o.resultsOffset) : null
	};
}
const oracleManifest = {
	fromBase: oracleFromBase,
	initToBase: oracleInitInfoArgsToBase,
	type: "Oracle",
	updateToBase: oracleUpdateInfoArgsToBase
};

//#endregion
//#region src/plugins/externalPluginAdapters.ts
const externalPluginAdapterManifests = {
	AppData: appDataManifest,
	DataSection: dataSectionManifest,
	LifecycleHook: lifecycleHookManifest,
	LinkedAppData: linkedAppDataManifest,
	LinkedLifecycleHook: linkedLifecycleHookManifest,
	Oracle: oracleManifest
};
function externalRegistryRecordsToExternalPluginAdapterList(records, accountData) {
	const result = {};
	records.forEach((record) => {
		const deserializedPlugin = getExternalPluginAdapterDecoder().read(accountData, Number(record.offset))[0];
		const mappedPlugin = {
			authority: pluginAuthorityFromBase(record.authority),
			lifecycleChecks: record.lifecycleChecks.__option === "Some" ? lifecycleChecksFromBase(record.lifecycleChecks.value) : void 0,
			offset: record.offset
		};
		if (deserializedPlugin.__kind === "LifecycleHook") {
			if (!result.lifecycleHooks) result.lifecycleHooks = [];
			result.lifecycleHooks.push({
				dataLen: record.dataLen.__option === "Some" ? record.dataLen.value : void 0,
				dataOffset: record.dataOffset.__option === "Some" ? record.dataOffset.value : void 0,
				type: "LifecycleHook",
				...mappedPlugin,
				...lifecycleHookFromBase(deserializedPlugin.fields[0], record, accountData)
			});
		} else if (deserializedPlugin.__kind === "AppData") {
			if (!result.appDatas) result.appDatas = [];
			result.appDatas.push({
				dataLen: record.dataLen.__option === "Some" ? record.dataLen.value : void 0,
				dataOffset: record.dataOffset.__option === "Some" ? record.dataOffset.value : void 0,
				type: "AppData",
				...mappedPlugin,
				...appDataFromBase(deserializedPlugin.fields[0], record, accountData)
			});
		} else if (deserializedPlugin.__kind === "Oracle") {
			if (!result.oracles) result.oracles = [];
			result.oracles.push({
				type: "Oracle",
				...mappedPlugin,
				...oracleFromBase(deserializedPlugin.fields[0], record, accountData)
			});
		} else if (deserializedPlugin.__kind === "LinkedLifecycleHook") {
			if (!result.linkedLifecycleHooks) result.linkedLifecycleHooks = [];
			result.linkedLifecycleHooks.push({
				type: "LinkedLifecycleHook",
				...mappedPlugin,
				...linkedLifecycleHookFromBase(deserializedPlugin.fields[0], record, accountData)
			});
		} else if (deserializedPlugin.__kind === "LinkedAppData") {
			if (!result.linkedAppDatas) result.linkedAppDatas = [];
			result.linkedAppDatas.push({
				type: "LinkedAppData",
				...mappedPlugin,
				...linkedAppDataFromBase(deserializedPlugin.fields[0], record, accountData)
			});
		} else if (deserializedPlugin.__kind === "DataSection") {
			if (!result.dataSections) result.dataSections = [];
			result.dataSections.push({
				dataLen: record.dataLen.__option === "Some" ? record.dataLen.value : void 0,
				dataOffset: record.dataOffset.__option === "Some" ? record.dataOffset.value : void 0,
				type: "DataSection",
				...mappedPlugin,
				...dataSectionFromBase(deserializedPlugin.fields[0], record, accountData)
			});
		}
	});
	return result;
}
const isExternalPluginAdapterType = (plugin) => {
	if (plugin.type === "LifecycleHook" || plugin.type === "Oracle" || plugin.type === "AppData" || plugin.type === "LinkedLifecycleHook" || plugin.type === "DataSection" || plugin.type === "LinkedAppData") return true;
	return false;
};
function createExternalPluginAdapterInitInfo({ type, ...args }) {
	return {
		__kind: type,
		fields: [externalPluginAdapterManifests[type].initToBase(args)]
	};
}
function createExternalPluginAdapterUpdateInfo({ type, ...args }) {
	return {
		__kind: type,
		fields: [externalPluginAdapterManifests[type].updateToBase(args)]
	};
}

//#endregion
//#region src/plugins/updateAuthority.ts
function updateAuthority(type, address) {
	return {
		address,
		type
	};
}
function updateAuthorityFromBase(authority) {
	return {
		address: authority.__kind === "None" ? void 0 : authority.fields[0],
		type: authority.__kind
	};
}
function updateAuthorityToBase(u) {
	if (u.type === "None") return { __kind: "None" };
	return {
		__kind: u.type,
		fields: [u.address]
	};
}

//#endregion
export { CheckResult, PRECONFIGURED_SEED, adapterCheckResultToCheckResults, appDataFromBase, appDataInitInfoArgsToBase, appDataManifest, appDataUpdateInfoArgsToBase, checkResultsToAdapterCheckResult, comparePluginAuthorities, createExternalPluginAdapterInitInfo, createExternalPluginAdapterUpdateInfo, createPlugin, createPluginV2, dataSectionFromBase, dataSectionInitInfoArgsToBase, dataSectionManifest, dataSectionUpdateInfoArgsToBase, deserializeOracleValidation, externalPluginAdapterKeyToBase, externalPluginAdapterManifests, externalRegistryRecordsToExternalPluginAdapterList, extraAccountFromBase, extraAccountToBase, formPluginHeaderV1, getExtraAccountRequiredInputs, hookableLifecycleEventToLifecycleCheckKey, isExternalPluginAdapterType, lifecycleCheckKeyToEnum, lifecycleChecksFromBase, lifecycleChecksToBase, lifecycleHookFromBase, lifecycleHookInitInfoArgsToBase, lifecycleHookManifest, lifecycleHookUpdateInfoArgsToBase, linkedAppDataFromBase, linkedAppDataInitInfoArgsToBase, linkedAppDataManifest, linkedAppDataUpdateInfoArgsToBase, linkedDataKeyFromBase, linkedDataKeyToBase, linkedLifecycleHookFromBase, linkedLifecycleHookInitInfoArgsToBase, linkedLifecycleHookManifest, linkedLifecycleHookUpdateInfoArgsToBase, mapPlugin, mapPluginFields, masterEditionFromBase, masterEditionToBase, oracleFromBase, oracleInitInfoArgsToBase, oracleManifest, oracleUpdateInfoArgsToBase, parseExternalPluginAdapterData, pluginAuthority, pluginAuthorityFromBase, pluginAuthorityPair, pluginAuthorityPairV2, pluginAuthorityToBase, pluginKeyToPluginType, registryRecordsToPluginsList, royaltiesFromBase, royaltiesToBase, ruleSetToBase, seedFromBase, seedToBase, updateAuthority, updateAuthorityFromBase, updateAuthorityToBase, validationResultsOffsetFromBase, validationResultsOffsetToBase };
//# sourceMappingURL=plugins.mjs.map