import { Al as VerifiedCreatorsArgs, Ap as BaseOracleInitInfoArgs, Bp as BaseMasterEditionArgs, Du as PermanentFreezeExecute, Ed as FreezeDelegateArgs, Eh as BaseDataSection, Fd as ExternalRegistryRecord, Gd as ExternalPluginAdapterSchema, Gf as BaseUpdateAuthority, Gl as UpdateDelegateArgs, Gp as BaseLinkedLifecycleHookUpdateInfoArgs, Hm as BaseExtraAccount, Hu as OracleValidation, Ic as PluginHeaderV1, Lh as BaseAppDataInitInfoArgs, Lm as BaseLifecycleHook, Lu as PermanentBurnDelegate, Mh as BaseAppDataUpdateInfoArgs, Mu as PermanentFreezeDelegate, Nf as BubblegumV2, Nm as BaseLifecycleHookInitInfoArgs, Nu as PermanentFreezeDelegateArgs, Of as BurnDelegate, Om as BaseLifecycleHookUpdateInfoArgs, Ou as PermanentFreezeExecuteArgs, Pp as BaseOracle, Qf as BaseSeed, Qh as AutographArgs, Rf as BaseValidationResultsOffset, Sh as BaseDataSectionInitInfoArgs, Sm as BaseLinkedAppData, Su as PermanentTransferDelegate, Td as FreezeDelegate, Tp as BaseOracleUpdateInfoArgs, Vh as BaseAppData, Wl as UpdateDelegate, Xm as BaseExternalPluginAdapterUpdateInfoArgs, Xp as BaseLinkedLifecycleHookInitInfoArgs, Yl as TransferDelegate, Yu as Key, Zh as Autograph, _h as BaseDataSectionUpdateInfoArgs, _p as BasePluginAuthority, ad as HookableLifecycleEvent, am as BaseLinkedDataKey, ap as BaseRuleSet, au as PluginType, bd as FreezeExecute, cf as Edition, ed as ImmutableMetadata, em as BaseLinkedLifecycleHook, eu as RegistryRecord, fg as AddBlocker, fp as BaseRoyalties, gh as BaseDataSectionUpdateInfo, hu as Plugin, il as CollectionV1, kl as VerifiedCreators, lf as EditionArgs, ml as AssetV1, ng as Attributes, nh as BaseExternalPluginAdapterKey, pm as BaseLinkedAppDataUpdateInfoArgs, pp as BaseRoyaltiesArgs, rf as ExternalCheckResult, rg as AttributesArgs, uh as BaseExternalPluginAdapterInitInfoArgs, uu as PluginAuthorityPair, vm as BaseLinkedAppDataInitInfoArgs, xd as FreezeExecuteArgs, zp as BaseMasterEdition } from "./writeExternalPluginAdapterDataV1-B5ZRlDeD.cjs";
import { Address } from "@solana/addresses";
import { Decoder, Option, ReadonlyUint8Array } from "@solana/codecs";
import { Account } from "@solana/accounts";
import { Rpc, SolanaRpcApi } from "@solana/rpc";

//#region src/plugins/pluginAuthority.d.ts
type PluginAuthority = {
  address?: Address;
  type: PluginAuthorityType;
};
type PluginAuthorityType = BasePluginAuthority['__kind'];
declare function comparePluginAuthorities(a: PluginAuthority, b: PluginAuthority): boolean;
declare function pluginAuthority(type: 'None' | 'Owner' | 'UpdateAuthority'): PluginAuthority;
declare function pluginAuthority(type: 'Address', options: {
  address: Address;
}): PluginAuthority;
declare function pluginAuthorityFromBase(authority: BasePluginAuthority): PluginAuthority;
declare function pluginAuthorityToBase(u: PluginAuthority): BasePluginAuthority;
//#endregion
//#region src/plugins/linkedDataKey.d.ts
type LinkedDataKey = {
  dataAuthority: PluginAuthority;
  type: 'LinkedAppData';
} | {
  hookedProgram: Address;
  type: 'LinkedLifecycleHook';
};
declare function linkedDataKeyFromBase(e: BaseLinkedDataKey): LinkedDataKey;
declare function linkedDataKeyToBase(e: LinkedDataKey): BaseLinkedDataKey;
//#endregion
//#region src/plugins/externalPluginAdapterKey.d.ts
type ExternalPluginAdapterKey = {
  baseAddress: Address;
  type: 'Oracle';
} | {
  dataAuthority: PluginAuthority;
  type: 'AppData';
} | {
  dataAuthority: PluginAuthority;
  type: 'LinkedAppData';
} | {
  hookedProgram: Address;
  type: 'LifecycleHook';
} | {
  hookedProgram: Address;
  type: 'LinkedLifecycleHook';
} | {
  parentKey: LinkedDataKey;
  type: 'DataSection';
};
declare function externalPluginAdapterKeyToBase(e: ExternalPluginAdapterKey): BaseExternalPluginAdapterKey;
//#endregion
//#region src/hash.d.ts
declare function hash(input: Uint8Array | Uint8Array[]): Uint8Array;
//#endregion
//#region src/hooked/assetAccountData.d.ts
type AssetV1AccountData = {
  pluginHeader?: PluginHeaderV1;
  updateAuthority: UpdateAuthority;
} & AssetPluginsList$1 & Omit<AssetV1, 'updateAuthority'>;
type AssetPluginsList$1 = AssetPluginsList;
declare function getAssetV1AccountDataDecoder(): Decoder<AssetV1AccountData>;
//#endregion
//#region src/plugins/masterEdition.d.ts
type MasterEdition = {
  maxSupply?: number;
  name?: string;
  uri?: string;
};
type MasterEditionArgs = MasterEdition;
declare function masterEditionFromBase(s: BaseMasterEdition): MasterEdition;
declare function masterEditionToBase(s: MasterEdition): BaseMasterEdition;
//#endregion
//#region src/plugins/royalties.d.ts
type Royalties = {
  ruleSet: RuleSet;
} & Omit<BaseRoyalties, 'ruleSet'>;
type RoyaltiesArgs = Royalties;
type RoyaltiesPlugin = BasePlugin & Royalties;
type RuleSet = BaseRuleSet | UnwrappedRuleSet;
type UnwrappedRuleSet = {
  addresses: Address[];
  type: 'ProgramAllowList';
} | {
  addresses: Address[];
  type: 'ProgramDenyList';
} | {
  type: 'None';
};
declare function royaltiesFromBase(r: BaseRoyalties): Royalties;
declare function royaltiesToBase(r: Royalties): BaseRoyalties;
declare function ruleSetToBase(r: RuleSet): BaseRuleSet;
//#endregion
//#region src/plugins/types.d.ts
type AddBlockerPlugin = AddBlocker & BasePlugin;
type AssetAddablePluginArgsV2 = AuthorityManagedPluginArgsV2 | OwnerManagedPluginArgsV2;
type AssetAddablePluginAuthorityPairArgsV2 = AssetAddablePluginArgsV2 & AuthorityArgsV2;
type AssetAllPluginArgsV2 = AssetAddablePluginArgsV2 | CreateOnlyPluginArgsV2;
type AssetPluginAuthorityPairArgsV2 = AssetAllPluginArgsV2 & AuthorityArgsV2;
type AssetPluginsList = {
  burnDelegate?: BurnDelegatePlugin;
  edition?: EditionPlugin;
  freezeDelegate?: FreezeDelegatePlugin;
  transferDelegate?: TransferDelegatePlugin;
} & CommonPluginsList;
type AttributesPlugin = Attributes & BasePlugin;
type AuthorityArgsV2 = {
  authority?: PluginAuthority;
};
type AuthorityManagedPluginArgsV2 = {
  type: 'AddBlocker';
} | ({
  type: 'Attributes';
} & AttributesArgs) | {
  type: 'ImmutableMetadata';
} | ({
  type: 'MasterEdition';
} & MasterEditionArgs) | ({
  type: 'Royalties';
} & RoyaltiesArgs) | ({
  type: 'UpdateDelegate';
} & UpdateDelegateArgs) | ({
  type: 'VerifiedCreators';
} & VerifiedCreatorsArgs);
type AutographPlugin = Autograph & BasePlugin;
type BasePlugin = {
  authority: PluginAuthority;
  offset?: bigint;
};
type BubblegumV2Plugin = BasePlugin & BubblegumV2;
type BurnDelegatePlugin = BasePlugin & BurnDelegate;
type CollectionAddablePluginArgsV2 = AuthorityManagedPluginArgsV2;
type CollectionAddablePluginAuthorityPairArgsV2 = AuthorityArgsV2 & CollectionAddablePluginArgsV2;
type CollectionAllPluginArgsV2 = CollectionAddablePluginArgsV2 | CreateOnlyPluginArgsV2;
type CollectionPluginAuthorityPairArgsV2 = AuthorityArgsV2 & CollectionAllPluginArgsV2;
type CollectionPluginsList$1 = {
  bubblegumV2?: BubblegumV2Plugin;
  masterEdition?: MasterEditionPlugin;
} & CommonPluginsList;
type CommonPluginsList = {
  addBlocker?: AddBlockerPlugin;
  attributes?: AttributesPlugin;
  autograph?: AutographPlugin;
  freezeExecute?: FreezeExecutePlugin;
  immutableMetadata?: ImmutableMetadataPlugin;
  permanentBurnDelegate?: PermanentBurnDelegatePlugin;
  permanentFreezeDelegate?: PermanentFreezeDelegatePlugin;
  permanentFreezeExecute?: PermanentFreezeExecutePlugin;
  permanentTransferDelegate?: PermanentTransferDelegatePlugin;
  royalties?: RoyaltiesPlugin;
  updateDelegate?: UpdateDelegatePlugin;
  verifiedCreators?: VerifiedCreatorsPlugin;
};
type CreateOnlyPluginArgsV2 = {
  type: 'BubblegumV2';
} | ({
  type: 'Edition';
} & EditionArgs) | {
  type: 'PermanentBurnDelegate';
} | ({
  type: 'PermanentFreezeDelegate';
} & PermanentFreezeDelegateArgs) | ({
  type: 'PermanentFreezeExecute';
} & PermanentFreezeExecuteArgs) | {
  type: 'PermanentTransferDelegate';
};
type CreatePluginArgs = {
  data: AttributesArgs;
  type: 'Attributes';
} | {
  data: AutographArgs;
  type: 'Autograph';
} | {
  data: BaseMasterEditionArgs;
  type: 'MasterEdition';
} | {
  data: BaseRoyaltiesArgs;
  type: 'Royalties';
} | {
  data: EditionArgs;
  type: 'Edition';
} | {
  data: FreezeDelegateArgs;
  type: 'FreezeDelegate';
} | {
  data: FreezeExecuteArgs;
  type: 'FreezeExecute';
} | {
  data: PermanentFreezeDelegateArgs;
  type: 'PermanentFreezeDelegate';
} | {
  data: PermanentFreezeExecuteArgs;
  type: 'PermanentFreezeExecute';
} | {
  data: VerifiedCreatorsArgs;
  type: 'VerifiedCreators';
} | {
  data?: UpdateDelegateArgs;
  type: 'UpdateDelegate';
} | {
  type: 'AddBlocker';
} | {
  type: 'BubblegumV2';
} | {
  type: 'BurnDelegate';
} | {
  type: 'ImmutableMetadata';
} | {
  type: 'PermanentBurnDelegate';
} | {
  type: 'PermanentTransferDelegate';
} | {
  type: 'TransferDelegate';
};
type EditionPlugin = BasePlugin & Edition;
type FreezeDelegatePlugin = BasePlugin & FreezeDelegate;
type FreezeExecutePlugin = BasePlugin & FreezeExecute;
type ImmutableMetadataPlugin = BasePlugin & ImmutableMetadata;
type MasterEditionPlugin = BasePlugin & MasterEdition;
type OwnerManagedPluginArgsV2 = ({
  type: 'Autograph';
} & AutographArgs) | {
  type: 'BurnDelegate';
} | ({
  type: 'FreezeDelegate';
} & FreezeDelegateArgs) | ({
  type: 'FreezeExecute';
} & FreezeExecuteArgs) | {
  type: 'TransferDelegate';
};
type PermanentBurnDelegatePlugin = BasePlugin & PermanentBurnDelegate;
type PermanentFreezeDelegatePlugin = BasePlugin & PermanentFreezeDelegate;
type PermanentFreezeExecutePlugin = BasePlugin & PermanentFreezeExecute;
type PermanentTransferDelegatePlugin = BasePlugin & PermanentTransferDelegate;
type PluginAuthorityPairHelperArgs = {
  authority?: BasePluginAuthority | PluginAuthority;
} & CreatePluginArgs;
type PluginsList = AssetPluginsList & CollectionPluginsList$1;
type TransferDelegatePlugin = BasePlugin & TransferDelegate;
type UpdateDelegatePlugin = BasePlugin & UpdateDelegate;
type VerifiedCreatorsPlugin = BasePlugin & VerifiedCreators;
//#endregion
//#region src/hooked/collectionAccountData.d.ts
type CollectionV1AccountData = {
  pluginHeader?: PluginHeaderV1;
} & CollectionPluginsList & CollectionV1;
type CollectionPluginsList = CollectionPluginsList$1;
declare function getCollectionV1AccountDataDecoder(): Decoder<CollectionV1AccountData>;
//#endregion
//#region src/hooked/pluginRegistryV1Data.d.ts
type ExternalRegistryRecordWithUnknown = {
  isUnknown?: boolean;
} & ExternalRegistryRecord;
type PluginRegistryV1AccountData = {
  externalRegistry: ExternalRegistryRecord[];
  key: Key;
  registry: RegistryRecord[];
};
type RegistryRecordWithUnknown = {
  isUnknown?: boolean;
} & RegistryRecord;
declare function getExternalRegistryRecordWithUnknownDecoder(): Decoder<ExternalRegistryRecordWithUnknown>;
declare function getPluginRegistryV1AccountDataDecoder(): Decoder<PluginRegistryV1AccountData>;
declare function getRegistryRecordWithUnknownDecoder(): Decoder<RegistryRecordWithUnknown>;
//#endregion
//#region src/utils.d.ts
type RenameField<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & (undefined extends T[K] ? { [P in R]?: T[K] } : { [P in R]: T[K] });
type RenameToType<T extends {
  __kind: string;
}> = T extends T ? RenameField<T, '__kind', 'type'> : never;
declare function capitalizeFirstLetter(str: string): string;
declare function lowercaseFirstLetter(str: string): string;
declare function someOrNone<T>(value: T | undefined): Option<T>;
declare function toWords(str: string): string;
declare function unwrapOption<T>(value: Option<T>): T | undefined;
//#endregion
//#region src/plugins/dataSection.d.ts
type DataSection = {
  data?: unknown;
  dataAuthority?: PluginAuthority;
  parentKey: LinkedDataKey;
} & Omit<BaseDataSection, 'dataAuthority' | 'parentKey'>;
type DataSectionInitInfoArgs = {
  parentKey: LinkedDataKey;
  type: 'DataSection';
} & Omit<BaseDataSectionInitInfoArgs, 'parentKey'>;
type DataSectionPlugin = {
  type: 'DataSection';
} & BaseExternalPluginAdapter & DataSection;
type DataSectionUpdateInfoArgs = {
  key: ExternalPluginAdapterKey;
} & BaseDataSectionUpdateInfoArgs;
declare function dataSectionFromBase(s: BaseDataSection, r: ExternalRegistryRecord, account: Uint8Array): DataSection;
declare function dataSectionInitInfoArgsToBase(d: DataSectionInitInfoArgs): BaseDataSectionInitInfoArgs;
declare function dataSectionUpdateInfoArgsToBase(_d: DataSectionUpdateInfoArgs): BaseDataSectionUpdateInfoArgs;
declare const dataSectionManifest: ExternalPluginAdapterManifest<DataSection, BaseDataSection, DataSectionInitInfoArgs, BaseDataSectionInitInfoArgs, DataSectionUpdateInfoArgs, BaseDataSectionUpdateInfoArgs>;
//#endregion
//#region src/plugins/seed.d.ts
type Seed = {
  bytes: ReadonlyUint8Array;
  type: 'Bytes';
} | {
  pubkey: Address;
  type: 'Address';
} | Exclude<RenameToType<BaseSeed>, {
  type: 'Address';
} | {
  type: 'Bytes';
}>;
declare function seedFromBase(s: BaseSeed): Seed;
declare function seedToBase(s: Seed): BaseSeed;
//#endregion
//#region src/plugins/extraAccount.d.ts
declare const PRECONFIGURED_SEED = "mpl-core";
type ExtraAccount = {
  address: Address;
  isSigner?: boolean;
  isWritable?: boolean;
  type: 'Address';
} | {
  customProgramId?: Address;
  isSigner?: boolean;
  isWritable?: boolean;
  seeds: Array<Seed>;
  type: 'CustomPda';
} | ({
  isSigner?: boolean;
  isWritable?: boolean;
} & Omit<Exclude<RenameToType<BaseExtraAccount>, {
  type: 'Address';
} | {
  type: 'CustomPda';
}>, 'isSigner' | 'isWritable'>);
type ExtraAccountInput = 'asset' | 'collection' | 'owner' | 'program' | 'recipient';
declare function extraAccountFromBase(s: BaseExtraAccount): ExtraAccount;
declare function extraAccountToBase(s: ExtraAccount): BaseExtraAccount;
declare function getExtraAccountRequiredInputs(s: ExtraAccount): ExtraAccountInput[];
//#endregion
//#region src/plugins/lifecycleChecks.d.ts
declare enum CheckResult {
  CAN_LISTEN = 0,
  CAN_APPROVE = 1,
  CAN_REJECT = 2
}
type LifecycleEvent = 'burn' | 'create' | 'transfer' | 'update';
declare const adapterCheckResultToCheckResults: (check: ExternalCheckResult) => CheckResult[];
declare const checkResultsToAdapterCheckResult: (results: CheckResult[]) => ExternalCheckResult;
type LifecycleChecks = { [key in LifecycleEvent]?: CheckResult[] };
type LifecycleChecksContainer = {
  lifecycleChecks?: LifecycleChecks;
};
declare function hookableLifecycleEventToLifecycleCheckKey(event: HookableLifecycleEvent): keyof LifecycleChecks;
declare function lifecycleCheckKeyToEnum(key: keyof LifecycleChecks): HookableLifecycleEvent;
declare function lifecycleChecksFromBase(l: [HookableLifecycleEvent, ExternalCheckResult][]): LifecycleChecks;
declare function lifecycleChecksToBase(l: LifecycleChecks): [HookableLifecycleEvent, ExternalCheckResult][];
//#endregion
//#region src/plugins/lifecycleHook.d.ts
type LifecycleHook = {
  data?: unknown;
  dataAuthority?: PluginAuthority;
  extraAccounts?: Array<ExtraAccount>;
} & Omit<BaseLifecycleHook, 'dataAuthority' | 'extraAccounts'>;
type LifecycleHookInitInfoArgs = {
  dataAuthority?: PluginAuthority;
  extraAccounts?: Array<ExtraAccount>;
  initPluginAuthority?: PluginAuthority;
  lifecycleChecks: LifecycleChecks;
  schema?: ExternalPluginAdapterSchema;
  type: 'LifecycleHook';
} & Omit<BaseLifecycleHookInitInfoArgs, 'dataAuthority' | 'extraAccounts' | 'initPluginAuthority' | 'lifecycleChecks' | 'schema'>;
type LifecycleHookPlugin = {
  hookedProgram: Address;
  type: 'LifecycleHook';
} & BaseExternalPluginAdapter & LifecycleHook;
type LifecycleHookUpdateInfoArgs = {
  extraAccounts?: Array<ExtraAccount>;
  key: ExternalPluginAdapterKey;
  lifecycleChecks?: LifecycleChecks;
  schema?: ExternalPluginAdapterSchema;
} & Omit<BaseLifecycleHookUpdateInfoArgs, 'extraAccounts' | 'lifecycleChecks' | 'schema'>;
declare function lifecycleHookFromBase(s: BaseLifecycleHook, r: ExternalRegistryRecord, account: Uint8Array): LifecycleHook;
declare function lifecycleHookInitInfoArgsToBase(l: LifecycleHookInitInfoArgs): BaseLifecycleHookInitInfoArgs;
declare function lifecycleHookUpdateInfoArgsToBase(l: LifecycleHookUpdateInfoArgs): BaseLifecycleHookUpdateInfoArgs;
declare const lifecycleHookManifest: ExternalPluginAdapterManifest<LifecycleHook, BaseLifecycleHook, LifecycleHookInitInfoArgs, BaseLifecycleHookInitInfoArgs, LifecycleHookUpdateInfoArgs, BaseLifecycleHookUpdateInfoArgs>;
//#endregion
//#region src/plugins/linkedAppData.d.ts
type LinkedAppData = {
  data?: unknown;
  dataAuthority: PluginAuthority;
} & Omit<BaseLinkedAppData, 'dataAuthority'>;
type LinkedAppDataInitInfoArgs = {
  dataAuthority: PluginAuthority;
  initPluginAuthority?: PluginAuthority;
  lifecycleChecks?: LifecycleChecks;
  schema?: ExternalPluginAdapterSchema;
  type: 'LinkedAppData';
} & Omit<BaseLinkedAppDataInitInfoArgs, 'dataAuthority' | 'initPluginAuthority' | 'lifecycleChecks'>;
type LinkedAppDataPlugin = {
  dataAuthority: PluginAuthority;
  type: 'LinkedAppData';
} & BaseExternalPluginAdapter & LinkedAppData;
type LinkedAppDataUpdateInfoArgs = {
  key: ExternalPluginAdapterKey;
  schema?: ExternalPluginAdapterSchema;
} & Omit<BaseLinkedAppDataUpdateInfoArgs, 'schema'>;
declare function linkedAppDataFromBase(s: BaseLinkedAppData, _r: ExternalRegistryRecord, _account: Uint8Array): LinkedAppData;
declare function linkedAppDataInitInfoArgsToBase(d: LinkedAppDataInitInfoArgs): BaseLinkedAppDataInitInfoArgs;
declare function linkedAppDataUpdateInfoArgsToBase(d: LinkedAppDataUpdateInfoArgs): BaseLinkedAppDataUpdateInfoArgs;
declare const linkedAppDataManifest: ExternalPluginAdapterManifest<LinkedAppData, BaseLinkedAppData, LinkedAppDataInitInfoArgs, BaseLinkedAppDataInitInfoArgs, LinkedAppDataUpdateInfoArgs, BaseLinkedAppDataUpdateInfoArgs>;
//#endregion
//#region src/plugins/linkedLifecycleHook.d.ts
type LinkedLifecycleHook = {
  data?: unknown;
  dataAuthority?: PluginAuthority;
  extraAccounts?: Array<ExtraAccount>;
} & Omit<BaseLinkedLifecycleHook, 'dataAuthority' | 'extraAccounts'>;
type LinkedLifecycleHookInitInfoArgs = {
  dataAuthority?: PluginAuthority;
  extraAccounts?: Array<ExtraAccount>;
  initPluginAuthority?: PluginAuthority;
  lifecycleChecks: LifecycleChecks;
  schema?: ExternalPluginAdapterSchema;
  type: 'LinkedLifecycleHook';
} & Omit<BaseLinkedLifecycleHookInitInfoArgs, 'dataAuthority' | 'extraAccounts' | 'initPluginAuthority' | 'lifecycleChecks' | 'schema'>;
type LinkedLifecycleHookPlugin = {
  hookedProgram: Address;
  type: 'LinkedLifecycleHook';
} & BaseExternalPluginAdapter & LinkedLifecycleHook;
type LinkedLifecycleHookUpdateInfoArgs = {
  extraAccounts?: Array<ExtraAccount>;
  key: ExternalPluginAdapterKey;
  lifecycleChecks?: LifecycleChecks;
  schema?: ExternalPluginAdapterSchema;
} & Omit<BaseLinkedLifecycleHookUpdateInfoArgs, 'extraAccounts' | 'lifecycleChecks' | 'schema'>;
declare function linkedLifecycleHookFromBase(s: BaseLinkedLifecycleHook, _r: ExternalRegistryRecord, _account: Uint8Array): LinkedLifecycleHook;
declare function linkedLifecycleHookInitInfoArgsToBase(l: LinkedLifecycleHookInitInfoArgs): BaseLinkedLifecycleHookInitInfoArgs;
declare function linkedLifecycleHookUpdateInfoArgsToBase(l: LinkedLifecycleHookUpdateInfoArgs): BaseLinkedLifecycleHookUpdateInfoArgs;
declare const linkedLifecycleHookManifest: ExternalPluginAdapterManifest<LinkedLifecycleHook, BaseLinkedLifecycleHook, LinkedLifecycleHookInitInfoArgs, BaseLinkedLifecycleHookInitInfoArgs, LinkedLifecycleHookUpdateInfoArgs, BaseLinkedLifecycleHookUpdateInfoArgs>;
//#endregion
//#region src/plugins/validationResultsOffset.d.ts
type ValidationResultsOffset = {
  offset: bigint;
  type: 'Custom';
} | {
  type: 'Anchor';
} | {
  type: 'NoOffset';
};
declare function validationResultsOffsetFromBase(e: BaseValidationResultsOffset): ValidationResultsOffset;
declare function validationResultsOffsetToBase(e: ValidationResultsOffset): BaseValidationResultsOffset;
//#endregion
//#region src/plugins/oracle.d.ts
type Oracle = {
  baseAddressConfig?: ExtraAccount;
  resultsOffset: ValidationResultsOffset;
} & Omit<BaseOracle, 'baseAddressConfig' | 'resultsOffset'>;
type OracleInitInfoArgs = {
  baseAddressConfig?: ExtraAccount;
  initPluginAuthority?: PluginAuthority;
  lifecycleChecks: LifecycleChecks;
  resultsOffset?: ValidationResultsOffset;
  type: 'Oracle';
} & Omit<BaseOracleInitInfoArgs, 'baseAddressConfig' | 'initPluginAuthority' | 'lifecycleChecks' | 'resultsOffset'>;
type OraclePlugin = {
  type: 'Oracle';
} & BaseExternalPluginAdapter & Oracle;
type OracleUpdateInfoArgs = {
  baseAddressConfig?: ExtraAccount;
  key: ExternalPluginAdapterKey;
  lifecycleChecks?: LifecycleChecks;
  resultsOffset?: ValidationResultsOffset;
} & Omit<BaseOracleUpdateInfoArgs, 'baseAddressConfig' | 'lifecycleChecks' | 'resultsOffset'>;
declare function deserializeOracleValidation(data: Uint8Array, offset: ValidationResultsOffset): OracleValidation;
declare function oracleFromBase(s: BaseOracle, _r: ExternalRegistryRecord, _account: Uint8Array): Oracle;
declare function oracleInitInfoArgsToBase(o: OracleInitInfoArgs): BaseOracleInitInfoArgs;
declare function oracleUpdateInfoArgsToBase(o: OracleUpdateInfoArgs): BaseOracleUpdateInfoArgs;
declare const oracleManifest: ExternalPluginAdapterManifest<Oracle, BaseOracle, OracleInitInfoArgs, BaseOracleInitInfoArgs, OracleUpdateInfoArgs, BaseOracleUpdateInfoArgs>;
//#endregion
//#region src/plugins/externalPluginAdapters.d.ts
type BaseExternalPluginAdapter = BasePlugin & ExternalPluginAdapterData & LifecycleChecksContainer;
type ExternalPluginAdapterInitInfoArgs = ({
  type: 'AppData';
} & AppDataInitInfoArgs) | ({
  type: 'DataSection';
} & AppDataInitInfoArgs) | ({
  type: 'LifecycleHook';
} & LifecycleHookInitInfoArgs) | ({
  type: 'LinkedAppData';
} & LinkedAppDataInitInfoArgs) | ({
  type: 'LinkedLifecycleHook';
} & LinkedLifecycleHookInitInfoArgs) | ({
  type: 'Oracle';
} & OracleInitInfoArgs);
type ExternalPluginAdapters = AppDataPlugin | DataSectionPlugin | LifecycleHookPlugin | LinkedAppDataPlugin | LinkedLifecycleHookPlugin | OraclePlugin;
type ExternalPluginAdaptersList = {
  appDatas?: AppDataPlugin[];
  dataSections?: DataSectionPlugin[];
  lifecycleHooks?: LifecycleHookPlugin[];
  linkedAppDatas?: LinkedAppDataPlugin[];
  linkedLifecycleHooks?: LinkedLifecycleHookPlugin[];
  oracles?: OraclePlugin[];
};
type ExternalPluginAdapterTypeString = BaseExternalPluginAdapterKey['__kind'];
type ExternalPluginAdapterUpdateInfoArgs = ({
  type: 'AppData';
} & AppDataUpdateInfoArgs) | ({
  type: 'LifecycleHook';
} & LifecycleHookUpdateInfoArgs) | ({
  type: 'LinkedAppData';
} & LinkedAppDataUpdateInfoArgs) | ({
  type: 'LinkedLifecycleHook';
} & LinkedLifecycleHookUpdateInfoArgs) | ({
  type: 'Oracle';
} & OracleUpdateInfoArgs);
declare const externalPluginAdapterManifests: {
  AppData: ExternalPluginAdapterManifest<AppData, BaseAppData, AppDataInitInfoArgs, BaseAppDataInitInfoArgs, AppDataUpdateInfoArgs, BaseAppDataUpdateInfoArgs>;
  DataSection: ExternalPluginAdapterManifest<DataSection, BaseDataSection, DataSectionInitInfoArgs, BaseDataSectionInitInfoArgs, {
    key: ExternalPluginAdapterKey;
  }, BaseDataSectionUpdateInfo>;
  LifecycleHook: ExternalPluginAdapterManifest<LifecycleHook, BaseLifecycleHook, LifecycleHookInitInfoArgs, BaseLifecycleHookInitInfoArgs, LifecycleHookUpdateInfoArgs, BaseLifecycleHookUpdateInfoArgs>;
  LinkedAppData: ExternalPluginAdapterManifest<LinkedAppData, BaseLinkedAppData, LinkedAppDataInitInfoArgs, BaseLinkedAppDataInitInfoArgs, LinkedAppDataUpdateInfoArgs, BaseLinkedAppDataUpdateInfoArgs>;
  LinkedLifecycleHook: ExternalPluginAdapterManifest<LinkedLifecycleHook, BaseLinkedLifecycleHook, LinkedLifecycleHookInitInfoArgs, BaseLinkedLifecycleHookInitInfoArgs, LinkedLifecycleHookUpdateInfoArgs, BaseLinkedLifecycleHookUpdateInfoArgs>;
  Oracle: ExternalPluginAdapterManifest<Oracle, BaseOracle, OracleInitInfoArgs, BaseOracleInitInfoArgs, OracleUpdateInfoArgs, BaseOracleUpdateInfoArgs>;
};
type ExternalPluginAdapterData = {
  dataLen?: bigint;
  dataOffset?: bigint;
};
declare function externalRegistryRecordsToExternalPluginAdapterList(records: ExternalRegistryRecord[], accountData: Uint8Array): ExternalPluginAdaptersList;
declare const isExternalPluginAdapterType: (plugin: {
  type: string;
}) => boolean;
declare function createExternalPluginAdapterInitInfo({
  type,
  ...args
}: ExternalPluginAdapterInitInfoArgs): BaseExternalPluginAdapterInitInfoArgs;
declare function createExternalPluginAdapterUpdateInfo({
  type,
  ...args
}: ExternalPluginAdapterUpdateInfoArgs): BaseExternalPluginAdapterUpdateInfoArgs;
//#endregion
//#region src/plugins/externalPluginAdapterManifest.d.ts
type ExternalPluginAdapterManifest<T extends object, Base extends object, Init extends object, InitBase extends object, Update extends object, UpdateBase extends object> = {
  fromBase: (input: Base, record: ExternalRegistryRecord, account: Uint8Array) => T;
  initToBase: (input: Init) => InitBase;
  type: ExternalPluginAdapterTypeString;
  updateToBase: (input: Update) => UpdateBase;
};
//#endregion
//#region src/plugins/appData.d.ts
type AppData = {
  data?: unknown;
  dataAuthority: PluginAuthority;
} & Omit<BaseAppData, 'dataAuthority'>;
type AppDataInitInfoArgs = {
  dataAuthority: PluginAuthority;
  initPluginAuthority?: PluginAuthority;
  lifecycleChecks?: LifecycleChecks;
  schema?: ExternalPluginAdapterSchema;
  type: 'AppData';
} & Omit<BaseAppDataInitInfoArgs, 'dataAuthority' | 'initPluginAuthority' | 'lifecycleChecks'>;
type AppDataPlugin = {
  dataAuthority: PluginAuthority;
  type: 'AppData';
} & AppData & BaseExternalPluginAdapter;
type AppDataUpdateInfoArgs = {
  key: ExternalPluginAdapterKey;
  schema?: ExternalPluginAdapterSchema;
} & Omit<BaseAppDataUpdateInfoArgs, 'schema'>;
declare function appDataFromBase(s: BaseAppData, r: ExternalRegistryRecord, account: Uint8Array): AppData;
declare function appDataInitInfoArgsToBase(d: AppDataInitInfoArgs): BaseAppDataInitInfoArgs;
declare function appDataUpdateInfoArgsToBase(d: AppDataUpdateInfoArgs): BaseAppDataUpdateInfoArgs;
declare const appDataManifest: ExternalPluginAdapterManifest<AppData, BaseAppData, AppDataInitInfoArgs, BaseAppDataInitInfoArgs, AppDataUpdateInfoArgs, BaseAppDataUpdateInfoArgs>;
//#endregion
//#region src/plugins/lib.d.ts
/**
 * @deprecated Use the new 1.0 sdk instruction helpers like `create` instead of `createV1` which no longer require sub create functions like this.
 * @param args
 * @returns
 */
declare function createPlugin(args: CreatePluginArgs): Plugin;
declare function createPluginV2(args: AssetAllPluginArgsV2): Plugin;
declare function formPluginHeaderV1(pluginRegistryOffset: bigint): Omit<PluginHeaderV1, 'header' | 'publicKey'>;
declare function mapPlugin({
  authority,
  offset,
  plugin: plug
}: {
  authority: PluginAuthority;
  offset: bigint;
  plugin: Exclude<Plugin, {
    __kind: 'Reserved';
  }>;
}): PluginsList;
declare function mapPluginFields(fields: Array<Record<string, unknown>>): Record<string, unknown>;
declare function parseExternalPluginAdapterData(plugin: {
  schema: ExternalPluginAdapterSchema;
}, record: {
  dataLen: Option<bigint | number>;
  dataOffset: Option<bigint | number>;
}, account: Uint8Array): unknown;
/**
 * @deprecated Use the new 1.0 sdk instruction helpers like `create` instead of `createV1` which no longer require sub create functions like this.
 * @param args
 * @returns
 */
declare function pluginAuthorityPair(args: PluginAuthorityPairHelperArgs): PluginAuthorityPair;
/**
 * @deprecated Use the new 1.0 sdk instruction helpers like `create` instead of `createV1` which no longer require sub create functions like this.
 * @param args
 * @returns
 */
declare function pluginAuthorityPairV2({
  authority,
  type,
  ...args
}: AssetPluginAuthorityPairArgsV2): PluginAuthorityPair;
declare function pluginKeyToPluginType(pluginKey: keyof PluginsList): keyof typeof PluginType;
declare function registryRecordsToPluginsList(registryRecords: RegistryRecord[], accountData: Uint8Array): PluginsList;
//#endregion
//#region src/plugins/updateAuthority.d.ts
type UpdateAuthority = {
  address?: Address;
  type: UpdateAuthorityType;
};
type UpdateAuthorityType = BaseUpdateAuthority['__kind'];
declare function updateAuthority(type: 'None'): UpdateAuthority;
declare function updateAuthority(type: 'Address' | 'Collection', address: Address): UpdateAuthority;
declare function updateAuthorityFromBase(authority: BaseUpdateAuthority): UpdateAuthority;
declare function updateAuthorityToBase(u: UpdateAuthority): BaseUpdateAuthority;
//#endregion
//#region src/helpers/authority.d.ts
/**
 * Check if the given address has the update authority for the asset.
 * If the asset specifies a collection as the update authority, the collection's update authority is checked.
 * If there are update delegates, they are also checked
 * @param {string | Address} addr Address
 * @param {AssetV1 & AssetPluginsList} asset Asset
 * @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection
 * @returns {boolean} True if the address is the update authority
 */
declare function hasAssetUpdateAuthority(addr: Address | string, asset: {
  updateAuthority: UpdateAuthority;
} & AssetPluginsList & AssetV1, collection?: CollectionPluginsList$1 & CollectionV1): boolean;
/**
 * Check if the given address has update authority for the collection.
 * @param {string | Address} addr Address
 * @param {CollectionV1 & CollectionPluginsList} collection Collection
 * @returns {boolean} True if the address is the update authority
 */
declare function hasCollectionUpdateAuthority(addr: Address | string, collection: CollectionPluginsList$1 & CollectionV1): boolean;
/**
 * Check if the given address has the Address authority for the plugin.
 * @param {Address | string} addr Address
 * @param {PluginAuthority} authority Plugin authority
 * @returns {boolean} True if the address has the authority
 */
declare function hasPluginAddressAuthority(addr: Address | string, authority: PluginAuthority): boolean;
/**
 * Check if the given address has the Owner authority for the plugin.
 * @param {Address | string} addr Address
 * @param {PluginAuthority} authority Plugin authority
 * @param {AssetV1} asset Asset
 * @returns {boolean} True if the address has the authority
 */
declare function hasPluginOwnerAuthority(addr: Address | string, authority: PluginAuthority, asset: AssetV1): boolean;
/**
 * Check if the given address has the UpdateAuthority authority for the plugin.
 * @param {Address | string} addr Address
 * @param {PluginAuthority} authority Plugin authority
 * @param {AssetV1 & AssetPluginsList} asset Asset
 * @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection
 * @returns {boolean} True if the address has the authority
 */
declare function hasPluginUpdateAuthority(addr: Address | string, authority: PluginAuthority, asset: {
  updateAuthority: UpdateAuthority;
} & AssetPluginsList & AssetV1, collection?: CollectionPluginsList$1 & CollectionV1): boolean;
//#endregion
//#region src/helpers/gpa.d.ts
/**
 * Fetch all assets in a specific collection
 */
declare function fetchAssetsByCollection(rpc: Rpc<SolanaRpcApi>, collection: Address): Promise<Account<AssetV1>[]>;
/**
 * Fetch all assets owned by a specific address
 */
declare function fetchAssetsByOwner(rpc: Rpc<SolanaRpcApi>, owner: Address): Promise<Account<AssetV1>[]>;
/**
 * Fetch all assets with a specific update authority address
 */
declare function fetchAssetsByUpdateAuthority(rpc: Rpc<SolanaRpcApi>, updateAuthority: Address): Promise<Account<AssetV1>[]>;
/**
 * Fetch all collections with a specific update authority
 */
declare function fetchCollectionsByUpdateAuthority(rpc: Rpc<SolanaRpcApi>, updateAuthority: Address): Promise<Account<CollectionV1>[]>;
//#endregion
//#region src/helpers/plugin.d.ts
type AssetPluginKey = keyof AssetPluginsList;
type CheckPluginAuthoritiesArgs = {
  asset: {
    updateAuthority: UpdateAuthority;
  } & AssetPluginsList & AssetV1;
  authority: Address | string;
  collection?: AssetPluginsList & CollectionV1;
  pluginTypes: PluginType[];
};
/**
 * Convert a plugin type to a key for the asset plugins.
 * @param {PluginType} pluginType Plugin type
 * @returns {AssetPluginKey}
 */
declare function assetPluginKeyFromType(pluginType: PluginType): AssetPluginKey;
/**
 * Check the authority for the given plugin types on an asset.
 * @param {CheckPluginAuthoritiesArgs} args Arguments
 * @returns {boolean[]} Array of booleans indicating if the authority matches the plugin authority
 */
declare function checkPluginAuthorities({
  asset,
  authority,
  collection,
  pluginTypes
}: CheckPluginAuthoritiesArgs): boolean[];
/**
 * Convert a plugin key to a type.
 * @param {AssetPluginKey} key Asset plugin key
 * @returns {PluginType}
 */
declare function pluginTypeFromAssetPluginKey(key: AssetPluginKey): PluginType;
//#endregion
//#region src/helpers/state.d.ts
/**
 * Find the collection address for the given asset if it is part of a collection.
 * @param {AssetV1} asset Asset
 * @returns {Address | undefined} Collection address
 */
declare function collectionAddress(asset: {
  updateAuthority: {
    address?: Address;
    type: string;
  };
} & AssetV1): Address | undefined;
/**
 * Derive the asset plugins from the asset and collection. Plugins on the asset take precedence over plugins on the collection.
 * @param {AssetV1 & AssetPluginsList} asset Asset with plugins
 * @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection with plugins
 * @returns {AssetV1 & AssetPluginsList} Asset with derived plugins
 */
declare function deriveAssetPlugins<T extends AssetPluginsList & AssetV1>(asset: T, collection?: CollectionPluginsList$1 & CollectionV1): T;
/**
 * Check if the given address is the owner of the asset.
 * @param {string | Address} addr Address
 * @param {AssetV1} asset Asset
 * @returns {boolean} True if the address is the owner
 */
declare function isAssetOwner(addr: Address | string, asset: AssetV1): boolean;
/**
 * Check if the asset is frozen.
 * @param {AssetV1 & AssetPluginsList} asset Asset with plugins
 * @param {CollectionV1 & CollectionPluginsList | undefined} collection Collection with plugins
 * @returns {boolean} True if the asset is frozen
 */
declare function isFrozen(asset: AssetPluginsList & AssetV1, collection?: CollectionPluginsList$1 & CollectionV1): boolean;
//#endregion
export { externalRegistryRecordsToExternalPluginAdapterList as $, PermanentFreezeDelegatePlugin as $n, Seed as $t, pluginAuthorityPair as A, AssetPluginsList as An, pluginAuthority as Ar, LifecycleHookInitInfoArgs as At, appDataManifest as B, CollectionAllPluginArgsV2 as Bn, LifecycleEvent as Bt, updateAuthorityToBase as C, CollectionV1AccountData as Cn, externalPluginAdapterKeyToBase as Cr, LinkedAppDataPlugin as Ct, mapPlugin as D, AssetAddablePluginAuthorityPairArgsV2 as Dn, PluginAuthority as Dr, linkedAppDataManifest as Dt, formPluginHeaderV1 as E, AssetAddablePluginArgsV2 as En, linkedDataKeyToBase as Er, linkedAppDataInitInfoArgsToBase as Et, AppDataInitInfoArgs as F, BasePlugin as Fn, lifecycleHookManifest as Ft, ExternalPluginAdapterInitInfoArgs as G, CreatePluginArgs as Gn, lifecycleChecksFromBase as Gt, ExternalPluginAdapterManifest as H, CollectionPluginsList$1 as Hn, checkResultsToAdapterCheckResult as Ht, AppDataPlugin as I, BubblegumV2Plugin as In, lifecycleHookUpdateInfoArgsToBase as It, ExternalPluginAdapters as J, FreezeExecutePlugin as Jn, ExtraAccountInput as Jt, ExternalPluginAdapterTypeString as K, EditionPlugin as Kn, lifecycleChecksToBase as Kt, AppDataUpdateInfoArgs as L, BurnDelegatePlugin as Ln, CheckResult as Lt, pluginKeyToPluginType as M, AuthorityArgsV2 as Mn, pluginAuthorityToBase as Mr, LifecycleHookUpdateInfoArgs as Mt, registryRecordsToPluginsList as N, AuthorityManagedPluginArgsV2 as Nn, lifecycleHookFromBase as Nt, mapPluginFields as O, AssetAllPluginArgsV2 as On, PluginAuthorityType as Or, linkedAppDataUpdateInfoArgsToBase as Ot, AppData as P, AutographPlugin as Pn, lifecycleHookInitInfoArgsToBase as Pt, externalPluginAdapterManifests as Q, PermanentBurnDelegatePlugin as Qn, getExtraAccountRequiredInputs as Qt, appDataFromBase as R, CollectionAddablePluginArgsV2 as Rn, LifecycleChecks as Rt, updateAuthorityFromBase as S, getRegistryRecordWithUnknownDecoder as Sn, ExternalPluginAdapterKey as Sr, LinkedAppDataInitInfoArgs as St, createPluginV2 as T, AddBlockerPlugin as Tn, linkedDataKeyFromBase as Tr, linkedAppDataFromBase as Tt, BaseExternalPluginAdapter as U, CommonPluginsList as Un, hookableLifecycleEventToLifecycleCheckKey as Ut, appDataUpdateInfoArgsToBase as V, CollectionPluginAuthorityPairArgsV2 as Vn, adapterCheckResultToCheckResults as Vt, ExternalPluginAdapterData as W, CreateOnlyPluginArgsV2 as Wn, lifecycleCheckKeyToEnum as Wt, createExternalPluginAdapterInitInfo as X, MasterEditionPlugin as Xn, extraAccountFromBase as Xt, ExternalPluginAdaptersList as Y, ImmutableMetadataPlugin as Yn, PRECONFIGURED_SEED as Yt, createExternalPluginAdapterUpdateInfo as Z, OwnerManagedPluginArgsV2 as Zn, extraAccountToBase as Zt, hasPluginOwnerAuthority as _, ExternalRegistryRecordWithUnknown as _n, masterEditionFromBase as _r, linkedLifecycleHookFromBase as _t, AssetPluginKey as a, DataSectionUpdateInfoArgs as an, UpdateDelegatePlugin as ar, deserializeOracleValidation as at, UpdateAuthorityType as b, getExternalRegistryRecordWithUnknownDecoder as bn, getAssetV1AccountDataDecoder as br, linkedLifecycleHookUpdateInfoArgsToBase as bt, checkPluginAuthorities as c, dataSectionManifest as cn, RoyaltiesArgs as cr, oracleManifest as ct, fetchAssetsByOwner as d, RenameToType as dn, UnwrappedRuleSet as dr, validationResultsOffsetFromBase as dt, seedFromBase as en, PermanentFreezeExecutePlugin as er, isExternalPluginAdapterType as et, fetchAssetsByUpdateAuthority as f, capitalizeFirstLetter as fn, royaltiesFromBase as fr, validationResultsOffsetToBase as ft, hasPluginAddressAuthority as g, unwrapOption as gn, MasterEditionArgs as gr, LinkedLifecycleHookUpdateInfoArgs as gt, hasCollectionUpdateAuthority as h, toWords as hn, MasterEdition as hr, LinkedLifecycleHookPlugin as ht, isFrozen as i, DataSectionPlugin as in, TransferDelegatePlugin as ir, OracleUpdateInfoArgs as it, pluginAuthorityPairV2 as j, AttributesPlugin as jn, pluginAuthorityFromBase as jr, LifecycleHookPlugin as jt, parseExternalPluginAdapterData as k, AssetPluginAuthorityPairArgsV2 as kn, comparePluginAuthorities as kr, LifecycleHook as kt, pluginTypeFromAssetPluginKey as l, dataSectionUpdateInfoArgsToBase as ln, RoyaltiesPlugin as lr, oracleUpdateInfoArgsToBase as lt, hasAssetUpdateAuthority as m, someOrNone as mn, ruleSetToBase as mr, LinkedLifecycleHookInitInfoArgs as mt, deriveAssetPlugins as n, DataSection as nn, PluginAuthorityPairHelperArgs as nr, OracleInitInfoArgs as nt, CheckPluginAuthoritiesArgs as o, dataSectionFromBase as on, VerifiedCreatorsPlugin as or, oracleFromBase as ot, fetchCollectionsByUpdateAuthority as p, lowercaseFirstLetter as pn, royaltiesToBase as pr, LinkedLifecycleHook as pt, ExternalPluginAdapterUpdateInfoArgs as q, FreezeDelegatePlugin as qn, ExtraAccount as qt, isAssetOwner as r, DataSectionInitInfoArgs as rn, PluginsList as rr, OraclePlugin as rt, assetPluginKeyFromType as s, dataSectionInitInfoArgsToBase as sn, Royalties as sr, oracleInitInfoArgsToBase as st, collectionAddress as t, seedToBase as tn, PermanentTransferDelegatePlugin as tr, Oracle as tt, fetchAssetsByCollection as u, RenameField as un, RuleSet as ur, ValidationResultsOffset as ut, hasPluginUpdateAuthority as v, PluginRegistryV1AccountData as vn, masterEditionToBase as vr, linkedLifecycleHookInitInfoArgsToBase as vt, createPlugin as w, getCollectionV1AccountDataDecoder as wn, LinkedDataKey as wr, LinkedAppDataUpdateInfoArgs as wt, updateAuthority as x, getPluginRegistryV1AccountDataDecoder as xn, hash as xr, LinkedAppData as xt, UpdateAuthority as y, RegistryRecordWithUnknown as yn, AssetV1AccountData as yr, linkedLifecycleHookManifest as yt, appDataInitInfoArgsToBase as z, CollectionAddablePluginAuthorityPairArgsV2 as zn, LifecycleChecksContainer as zt };
//# sourceMappingURL=state-Cjf_Yqsk.d.cts.map