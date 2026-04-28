import { Account, AccountMeta, AccountSignerMeta, Address, Codec, Decoder, EncodedAccount, Encoder, FetchAccountConfig, FetchAccountsConfig, FixedSizeCodec, FixedSizeDecoder, FixedSizeEncoder, GetDiscriminatedUnionVariant, GetDiscriminatedUnionVariantContent, Instruction, InstructionWithAccounts, InstructionWithData, MaybeAccount, MaybeEncodedAccount, Option, OptionOrNullable, ProgramDerivedAddress, ReadonlyAccount, ReadonlySignerAccount, ReadonlyUint8Array, SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM, SolanaError, TransactionSigner, WritableAccount, WritableSignerAccount, fetchEncodedAccount, fetchEncodedAccounts } from "@solana/kit";

//#region src/generated/pdas/assetSigner.d.ts
type AssetSignerSeeds = {
  /** The address of the asset account */asset: Address;
};
declare function findAssetSignerPda(seeds: AssetSignerSeeds, config?: {
  programAddress?: Address | undefined;
}): Promise<ProgramDerivedAddress>;
//#endregion
//#region src/generated/accounts/assetSigner.d.ts
type AssetSigner = {
  data: ReadonlyUint8Array;
};
type AssetSignerArgs = AssetSigner;
declare function decodeAssetSigner<TAddress extends string = string>(encodedAccount: EncodedAccount<TAddress>): Account<AssetSigner, TAddress>;
declare function decodeAssetSigner<TAddress extends string = string>(encodedAccount: MaybeEncodedAccount<TAddress>): MaybeAccount<AssetSigner, TAddress>;
declare function fetchAllAssetSigner(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<Account<AssetSigner>[]>;
declare function fetchAllMaybeAssetSigner(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<MaybeAccount<AssetSigner>[]>;
declare function fetchAssetSigner<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<Account<AssetSigner, TAddress>>;
declare function fetchAssetSignerFromSeeds(rpc: Parameters<typeof fetchEncodedAccount>[0], seeds: AssetSignerSeeds, config?: {
  programAddress?: Address;
} & FetchAccountConfig): Promise<Account<AssetSigner>>;
declare function fetchMaybeAssetSigner<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<MaybeAccount<AssetSigner, TAddress>>;
declare function fetchMaybeAssetSignerFromSeeds(rpc: Parameters<typeof fetchEncodedAccount>[0], seeds: AssetSignerSeeds, config?: {
  programAddress?: Address;
} & FetchAccountConfig): Promise<MaybeAccount<AssetSigner>>;
declare function getAssetSignerCodec(): Codec<AssetSignerArgs, AssetSigner>;
declare function getAssetSignerDecoder(): Decoder<AssetSigner>;
declare function getAssetSignerEncoder(): Encoder<AssetSignerArgs>;
declare function getAssetSignerSize(): number;
//#endregion
//#region src/generated/types/addBlocker.d.ts
type AddBlocker = {};
type AddBlockerArgs = AddBlocker;
declare function getAddBlockerCodec(): FixedSizeCodec<AddBlockerArgs, AddBlocker>;
declare function getAddBlockerDecoder(): FixedSizeDecoder<AddBlocker>;
declare function getAddBlockerEncoder(): FixedSizeEncoder<AddBlockerArgs>;
//#endregion
//#region src/generated/types/attribute.d.ts
type Attribute = {
  key: string;
  value: string;
};
type AttributeArgs = Attribute;
declare function getAttributeCodec(): Codec<AttributeArgs, Attribute>;
declare function getAttributeDecoder(): Decoder<Attribute>;
declare function getAttributeEncoder(): Encoder<AttributeArgs>;
//#endregion
//#region src/generated/types/attributes.d.ts
type Attributes = {
  attributeList: Array<Attribute>;
};
type AttributesArgs = {
  attributeList: Array<AttributeArgs>;
};
declare function getAttributesCodec(): Codec<AttributesArgs, Attributes>;
declare function getAttributesDecoder(): Decoder<Attributes>;
declare function getAttributesEncoder(): Encoder<AttributesArgs>;
//#endregion
//#region src/generated/types/autograph.d.ts
type Autograph = {
  signatures: Array<AutographSignature>;
};
type AutographArgs = {
  signatures: Array<AutographSignatureArgs>;
};
declare function getAutographCodec(): Codec<AutographArgs, Autograph>;
declare function getAutographDecoder(): Decoder<Autograph>;
declare function getAutographEncoder(): Encoder<AutographArgs>;
//#endregion
//#region src/generated/types/autographSignature.d.ts
type AutographSignature = {
  address: Address;
  message: string;
};
type AutographSignatureArgs = AutographSignature;
declare function getAutographSignatureCodec(): Codec<AutographSignatureArgs, AutographSignature>;
declare function getAutographSignatureDecoder(): Decoder<AutographSignature>;
declare function getAutographSignatureEncoder(): Encoder<AutographSignatureArgs>;
//#endregion
//#region src/generated/types/baseAppData.d.ts
type BaseAppData = {
  dataAuthority: BasePluginAuthority;
  schema: ExternalPluginAdapterSchema;
};
type BaseAppDataArgs = {
  dataAuthority: BasePluginAuthorityArgs;
  schema: ExternalPluginAdapterSchemaArgs;
};
declare function getBaseAppDataCodec(): Codec<BaseAppDataArgs, BaseAppData>;
declare function getBaseAppDataDecoder(): Decoder<BaseAppData>;
declare function getBaseAppDataEncoder(): Encoder<BaseAppDataArgs>;
//#endregion
//#region src/generated/types/baseAppDataInitInfo.d.ts
type BaseAppDataInitInfo = {
  dataAuthority: BasePluginAuthority;
  initPluginAuthority: Option<BasePluginAuthority>;
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseAppDataInitInfoArgs = {
  dataAuthority: BasePluginAuthorityArgs;
  initPluginAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseAppDataInitInfoCodec(): Codec<BaseAppDataInitInfoArgs, BaseAppDataInitInfo>;
declare function getBaseAppDataInitInfoDecoder(): Decoder<BaseAppDataInitInfo>;
declare function getBaseAppDataInitInfoEncoder(): Encoder<BaseAppDataInitInfoArgs>;
//#endregion
//#region src/generated/types/baseAppDataUpdateInfo.d.ts
type BaseAppDataUpdateInfo = {
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseAppDataUpdateInfoArgs = {
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseAppDataUpdateInfoCodec(): Codec<BaseAppDataUpdateInfoArgs, BaseAppDataUpdateInfo>;
declare function getBaseAppDataUpdateInfoDecoder(): Decoder<BaseAppDataUpdateInfo>;
declare function getBaseAppDataUpdateInfoEncoder(): Encoder<BaseAppDataUpdateInfoArgs>;
//#endregion
//#region src/generated/types/baseDataSection.d.ts
type BaseDataSection = {
  parentKey: BaseLinkedDataKey;
  schema: ExternalPluginAdapterSchema;
};
type BaseDataSectionArgs = {
  parentKey: BaseLinkedDataKeyArgs;
  schema: ExternalPluginAdapterSchemaArgs;
};
declare function getBaseDataSectionCodec(): Codec<BaseDataSectionArgs, BaseDataSection>;
declare function getBaseDataSectionDecoder(): Decoder<BaseDataSection>;
declare function getBaseDataSectionEncoder(): Encoder<BaseDataSectionArgs>;
//#endregion
//#region src/generated/types/baseDataSectionInitInfo.d.ts
type BaseDataSectionInitInfo = {
  parentKey: BaseLinkedDataKey;
  schema: ExternalPluginAdapterSchema;
};
type BaseDataSectionInitInfoArgs = {
  parentKey: BaseLinkedDataKeyArgs;
  schema: ExternalPluginAdapterSchemaArgs;
};
declare function getBaseDataSectionInitInfoCodec(): Codec<BaseDataSectionInitInfoArgs, BaseDataSectionInitInfo>;
declare function getBaseDataSectionInitInfoDecoder(): Decoder<BaseDataSectionInitInfo>;
declare function getBaseDataSectionInitInfoEncoder(): Encoder<BaseDataSectionInitInfoArgs>;
//#endregion
//#region src/generated/types/baseDataSectionUpdateInfo.d.ts
type BaseDataSectionUpdateInfo = {};
type BaseDataSectionUpdateInfoArgs = BaseDataSectionUpdateInfo;
declare function getBaseDataSectionUpdateInfoCodec(): FixedSizeCodec<BaseDataSectionUpdateInfoArgs, BaseDataSectionUpdateInfo>;
declare function getBaseDataSectionUpdateInfoDecoder(): FixedSizeDecoder<BaseDataSectionUpdateInfo>;
declare function getBaseDataSectionUpdateInfoEncoder(): FixedSizeEncoder<BaseDataSectionUpdateInfoArgs>;
//#endregion
//#region src/generated/types/baseExternalPluginAdapterInitInfo.d.ts
type BaseExternalPluginAdapterInitInfo = {
  __kind: 'AppData';
  fields: readonly [BaseAppDataInitInfo];
} | {
  __kind: 'DataSection';
  fields: readonly [BaseDataSectionInitInfo];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [BaseLifecycleHookInitInfo];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BaseLinkedAppDataInitInfo];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [BaseLinkedLifecycleHookInitInfo];
} | {
  __kind: 'Oracle';
  fields: readonly [BaseOracleInitInfo];
};
type BaseExternalPluginAdapterInitInfoArgs = {
  __kind: 'AppData';
  fields: readonly [BaseAppDataInitInfoArgs];
} | {
  __kind: 'DataSection';
  fields: readonly [BaseDataSectionInitInfoArgs];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [BaseLifecycleHookInitInfoArgs];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BaseLinkedAppDataInitInfoArgs];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [BaseLinkedLifecycleHookInitInfoArgs];
} | {
  __kind: 'Oracle';
  fields: readonly [BaseOracleInitInfoArgs];
};
declare function baseExternalPluginAdapterInitInfo(kind: 'LifecycleHook', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'LifecycleHook'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'LifecycleHook'>;
declare function baseExternalPluginAdapterInitInfo(kind: 'Oracle', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'Oracle'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'Oracle'>;
declare function baseExternalPluginAdapterInitInfo(kind: 'AppData', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'AppData'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'AppData'>;
declare function baseExternalPluginAdapterInitInfo(kind: 'LinkedLifecycleHook', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'LinkedLifecycleHook'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'LinkedLifecycleHook'>;
declare function baseExternalPluginAdapterInitInfo(kind: 'LinkedAppData', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'LinkedAppData'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'LinkedAppData'>;
declare function baseExternalPluginAdapterInitInfo(kind: 'DataSection', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'DataSection'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterInitInfoArgs, '__kind', 'DataSection'>;
declare function getBaseExternalPluginAdapterInitInfoCodec(): Codec<BaseExternalPluginAdapterInitInfoArgs, BaseExternalPluginAdapterInitInfo>;
declare function getBaseExternalPluginAdapterInitInfoDecoder(): Decoder<BaseExternalPluginAdapterInitInfo>;
declare function getBaseExternalPluginAdapterInitInfoEncoder(): Encoder<BaseExternalPluginAdapterInitInfoArgs>;
declare function isBaseExternalPluginAdapterInitInfo<K extends BaseExternalPluginAdapterInitInfo['__kind']>(kind: K, value: BaseExternalPluginAdapterInitInfo): value is {
  __kind: K;
} & BaseExternalPluginAdapterInitInfo;
//#endregion
//#region src/generated/types/baseExternalPluginAdapterKey.d.ts
type BaseExternalPluginAdapterKey = {
  __kind: 'AppData';
  fields: readonly [BasePluginAuthority];
} | {
  __kind: 'DataSection';
  fields: readonly [BaseLinkedDataKey];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [Address];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BasePluginAuthority];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [Address];
} | {
  __kind: 'Oracle';
  fields: readonly [Address];
};
type BaseExternalPluginAdapterKeyArgs = {
  __kind: 'AppData';
  fields: readonly [BasePluginAuthorityArgs];
} | {
  __kind: 'DataSection';
  fields: readonly [BaseLinkedDataKeyArgs];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [Address];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BasePluginAuthorityArgs];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [Address];
} | {
  __kind: 'Oracle';
  fields: readonly [Address];
};
declare function baseExternalPluginAdapterKey(kind: 'LifecycleHook', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterKeyArgs, '__kind', 'LifecycleHook'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterKeyArgs, '__kind', 'LifecycleHook'>;
declare function baseExternalPluginAdapterKey(kind: 'Oracle', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterKeyArgs, '__kind', 'Oracle'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterKeyArgs, '__kind', 'Oracle'>;
declare function baseExternalPluginAdapterKey(kind: 'AppData', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterKeyArgs, '__kind', 'AppData'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterKeyArgs, '__kind', 'AppData'>;
declare function baseExternalPluginAdapterKey(kind: 'LinkedLifecycleHook', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterKeyArgs, '__kind', 'LinkedLifecycleHook'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterKeyArgs, '__kind', 'LinkedLifecycleHook'>;
declare function baseExternalPluginAdapterKey(kind: 'LinkedAppData', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterKeyArgs, '__kind', 'LinkedAppData'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterKeyArgs, '__kind', 'LinkedAppData'>;
declare function baseExternalPluginAdapterKey(kind: 'DataSection', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterKeyArgs, '__kind', 'DataSection'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterKeyArgs, '__kind', 'DataSection'>;
declare function getBaseExternalPluginAdapterKeyCodec(): Codec<BaseExternalPluginAdapterKeyArgs, BaseExternalPluginAdapterKey>;
declare function getBaseExternalPluginAdapterKeyDecoder(): Decoder<BaseExternalPluginAdapterKey>;
declare function getBaseExternalPluginAdapterKeyEncoder(): Encoder<BaseExternalPluginAdapterKeyArgs>;
declare function isBaseExternalPluginAdapterKey<K extends BaseExternalPluginAdapterKey['__kind']>(kind: K, value: BaseExternalPluginAdapterKey): value is {
  __kind: K;
} & BaseExternalPluginAdapterKey;
//#endregion
//#region src/generated/types/baseExternalPluginAdapterUpdateInfo.d.ts
type BaseExternalPluginAdapterUpdateInfo = {
  __kind: 'AppData';
  fields: readonly [BaseAppDataUpdateInfo];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [BaseLifecycleHookUpdateInfo];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BaseLinkedAppDataUpdateInfo];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [BaseLinkedLifecycleHookUpdateInfo];
} | {
  __kind: 'Oracle';
  fields: readonly [BaseOracleUpdateInfo];
};
type BaseExternalPluginAdapterUpdateInfoArgs = {
  __kind: 'AppData';
  fields: readonly [BaseAppDataUpdateInfoArgs];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [BaseLifecycleHookUpdateInfoArgs];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BaseLinkedAppDataUpdateInfoArgs];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [BaseLinkedLifecycleHookUpdateInfoArgs];
} | {
  __kind: 'Oracle';
  fields: readonly [BaseOracleUpdateInfoArgs];
};
declare function baseExternalPluginAdapterUpdateInfo(kind: 'LifecycleHook', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'LifecycleHook'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'LifecycleHook'>;
declare function baseExternalPluginAdapterUpdateInfo(kind: 'Oracle', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'Oracle'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'Oracle'>;
declare function baseExternalPluginAdapterUpdateInfo(kind: 'AppData', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'AppData'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'AppData'>;
declare function baseExternalPluginAdapterUpdateInfo(kind: 'LinkedLifecycleHook', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'LinkedLifecycleHook'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'LinkedLifecycleHook'>;
declare function baseExternalPluginAdapterUpdateInfo(kind: 'LinkedAppData', data: GetDiscriminatedUnionVariantContent<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'LinkedAppData'>['fields']): GetDiscriminatedUnionVariant<BaseExternalPluginAdapterUpdateInfoArgs, '__kind', 'LinkedAppData'>;
declare function getBaseExternalPluginAdapterUpdateInfoCodec(): Codec<BaseExternalPluginAdapterUpdateInfoArgs, BaseExternalPluginAdapterUpdateInfo>;
declare function getBaseExternalPluginAdapterUpdateInfoDecoder(): Decoder<BaseExternalPluginAdapterUpdateInfo>;
declare function getBaseExternalPluginAdapterUpdateInfoEncoder(): Encoder<BaseExternalPluginAdapterUpdateInfoArgs>;
declare function isBaseExternalPluginAdapterUpdateInfo<K extends BaseExternalPluginAdapterUpdateInfo['__kind']>(kind: K, value: BaseExternalPluginAdapterUpdateInfo): value is {
  __kind: K;
} & BaseExternalPluginAdapterUpdateInfo;
//#endregion
//#region src/generated/types/baseExtraAccount.d.ts
type BaseExtraAccount = {
  __kind: 'Address';
  address: Address;
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'CustomPda';
  customProgramId: Option<Address>;
  isSigner: boolean;
  isWritable: boolean;
  seeds: Array<BaseSeed>;
} | {
  __kind: 'PreconfiguredAsset';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredCollection';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredOwner';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredProgram';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredRecipient';
  isSigner: boolean;
  isWritable: boolean;
};
type BaseExtraAccountArgs = {
  __kind: 'Address';
  address: Address;
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'CustomPda';
  customProgramId: OptionOrNullable<Address>;
  isSigner: boolean;
  isWritable: boolean;
  seeds: Array<BaseSeedArgs>;
} | {
  __kind: 'PreconfiguredAsset';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredCollection';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredOwner';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredProgram';
  isSigner: boolean;
  isWritable: boolean;
} | {
  __kind: 'PreconfiguredRecipient';
  isSigner: boolean;
  isWritable: boolean;
};
declare function baseExtraAccount(kind: 'PreconfiguredProgram', data: GetDiscriminatedUnionVariantContent<BaseExtraAccountArgs, '__kind', 'PreconfiguredProgram'>): GetDiscriminatedUnionVariant<BaseExtraAccountArgs, '__kind', 'PreconfiguredProgram'>;
declare function baseExtraAccount(kind: 'PreconfiguredCollection', data: GetDiscriminatedUnionVariantContent<BaseExtraAccountArgs, '__kind', 'PreconfiguredCollection'>): GetDiscriminatedUnionVariant<BaseExtraAccountArgs, '__kind', 'PreconfiguredCollection'>;
declare function baseExtraAccount(kind: 'PreconfiguredOwner', data: GetDiscriminatedUnionVariantContent<BaseExtraAccountArgs, '__kind', 'PreconfiguredOwner'>): GetDiscriminatedUnionVariant<BaseExtraAccountArgs, '__kind', 'PreconfiguredOwner'>;
declare function baseExtraAccount(kind: 'PreconfiguredRecipient', data: GetDiscriminatedUnionVariantContent<BaseExtraAccountArgs, '__kind', 'PreconfiguredRecipient'>): GetDiscriminatedUnionVariant<BaseExtraAccountArgs, '__kind', 'PreconfiguredRecipient'>;
declare function baseExtraAccount(kind: 'PreconfiguredAsset', data: GetDiscriminatedUnionVariantContent<BaseExtraAccountArgs, '__kind', 'PreconfiguredAsset'>): GetDiscriminatedUnionVariant<BaseExtraAccountArgs, '__kind', 'PreconfiguredAsset'>;
declare function baseExtraAccount(kind: 'CustomPda', data: GetDiscriminatedUnionVariantContent<BaseExtraAccountArgs, '__kind', 'CustomPda'>): GetDiscriminatedUnionVariant<BaseExtraAccountArgs, '__kind', 'CustomPda'>;
declare function baseExtraAccount(kind: 'Address', data: GetDiscriminatedUnionVariantContent<BaseExtraAccountArgs, '__kind', 'Address'>): GetDiscriminatedUnionVariant<BaseExtraAccountArgs, '__kind', 'Address'>;
declare function getBaseExtraAccountCodec(): Codec<BaseExtraAccountArgs, BaseExtraAccount>;
declare function getBaseExtraAccountDecoder(): Decoder<BaseExtraAccount>;
declare function getBaseExtraAccountEncoder(): Encoder<BaseExtraAccountArgs>;
declare function isBaseExtraAccount<K extends BaseExtraAccount['__kind']>(kind: K, value: BaseExtraAccount): value is {
  __kind: K;
} & BaseExtraAccount;
//#endregion
//#region src/generated/types/baseLifecycleHook.d.ts
type BaseLifecycleHook = {
  dataAuthority: Option<BasePluginAuthority>;
  extraAccounts: Option<Array<BaseExtraAccount>>;
  hookedProgram: Address;
  schema: ExternalPluginAdapterSchema;
};
type BaseLifecycleHookArgs = {
  dataAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  extraAccounts: OptionOrNullable<Array<BaseExtraAccountArgs>>;
  hookedProgram: Address;
  schema: ExternalPluginAdapterSchemaArgs;
};
declare function getBaseLifecycleHookCodec(): Codec<BaseLifecycleHookArgs, BaseLifecycleHook>;
declare function getBaseLifecycleHookDecoder(): Decoder<BaseLifecycleHook>;
declare function getBaseLifecycleHookEncoder(): Encoder<BaseLifecycleHookArgs>;
//#endregion
//#region src/generated/types/baseLifecycleHookInitInfo.d.ts
type BaseLifecycleHookInitInfo = {
  dataAuthority: Option<BasePluginAuthority>;
  extraAccounts: Option<Array<BaseExtraAccount>>;
  hookedProgram: Address;
  initPluginAuthority: Option<BasePluginAuthority>;
  lifecycleChecks: Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>;
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseLifecycleHookInitInfoArgs = {
  dataAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  extraAccounts: OptionOrNullable<Array<BaseExtraAccountArgs>>;
  hookedProgram: Address;
  initPluginAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  lifecycleChecks: Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>;
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseLifecycleHookInitInfoCodec(): Codec<BaseLifecycleHookInitInfoArgs, BaseLifecycleHookInitInfo>;
declare function getBaseLifecycleHookInitInfoDecoder(): Decoder<BaseLifecycleHookInitInfo>;
declare function getBaseLifecycleHookInitInfoEncoder(): Encoder<BaseLifecycleHookInitInfoArgs>;
//#endregion
//#region src/generated/types/baseLifecycleHookUpdateInfo.d.ts
type BaseLifecycleHookUpdateInfo = {
  extraAccounts: Option<Array<BaseExtraAccount>>;
  lifecycleChecks: Option<Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>>;
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseLifecycleHookUpdateInfoArgs = {
  extraAccounts: OptionOrNullable<Array<BaseExtraAccountArgs>>;
  lifecycleChecks: OptionOrNullable<Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>>;
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseLifecycleHookUpdateInfoCodec(): Codec<BaseLifecycleHookUpdateInfoArgs, BaseLifecycleHookUpdateInfo>;
declare function getBaseLifecycleHookUpdateInfoDecoder(): Decoder<BaseLifecycleHookUpdateInfo>;
declare function getBaseLifecycleHookUpdateInfoEncoder(): Encoder<BaseLifecycleHookUpdateInfoArgs>;
//#endregion
//#region src/generated/types/baseLinkedAppData.d.ts
type BaseLinkedAppData = {
  dataAuthority: BasePluginAuthority;
  schema: ExternalPluginAdapterSchema;
};
type BaseLinkedAppDataArgs = {
  dataAuthority: BasePluginAuthorityArgs;
  schema: ExternalPluginAdapterSchemaArgs;
};
declare function getBaseLinkedAppDataCodec(): Codec<BaseLinkedAppDataArgs, BaseLinkedAppData>;
declare function getBaseLinkedAppDataDecoder(): Decoder<BaseLinkedAppData>;
declare function getBaseLinkedAppDataEncoder(): Encoder<BaseLinkedAppDataArgs>;
//#endregion
//#region src/generated/types/baseLinkedAppDataInitInfo.d.ts
type BaseLinkedAppDataInitInfo = {
  dataAuthority: BasePluginAuthority;
  initPluginAuthority: Option<BasePluginAuthority>;
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseLinkedAppDataInitInfoArgs = {
  dataAuthority: BasePluginAuthorityArgs;
  initPluginAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseLinkedAppDataInitInfoCodec(): Codec<BaseLinkedAppDataInitInfoArgs, BaseLinkedAppDataInitInfo>;
declare function getBaseLinkedAppDataInitInfoDecoder(): Decoder<BaseLinkedAppDataInitInfo>;
declare function getBaseLinkedAppDataInitInfoEncoder(): Encoder<BaseLinkedAppDataInitInfoArgs>;
//#endregion
//#region src/generated/types/baseLinkedAppDataUpdateInfo.d.ts
type BaseLinkedAppDataUpdateInfo = {
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseLinkedAppDataUpdateInfoArgs = {
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseLinkedAppDataUpdateInfoCodec(): Codec<BaseLinkedAppDataUpdateInfoArgs, BaseLinkedAppDataUpdateInfo>;
declare function getBaseLinkedAppDataUpdateInfoDecoder(): Decoder<BaseLinkedAppDataUpdateInfo>;
declare function getBaseLinkedAppDataUpdateInfoEncoder(): Encoder<BaseLinkedAppDataUpdateInfoArgs>;
//#endregion
//#region src/generated/types/baseLinkedDataKey.d.ts
type BaseLinkedDataKey = {
  __kind: 'LinkedAppData';
  fields: readonly [BasePluginAuthority];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [Address];
};
type BaseLinkedDataKeyArgs = {
  __kind: 'LinkedAppData';
  fields: readonly [BasePluginAuthorityArgs];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [Address];
};
declare function baseLinkedDataKey(kind: 'LinkedLifecycleHook', data: GetDiscriminatedUnionVariantContent<BaseLinkedDataKeyArgs, '__kind', 'LinkedLifecycleHook'>['fields']): GetDiscriminatedUnionVariant<BaseLinkedDataKeyArgs, '__kind', 'LinkedLifecycleHook'>;
declare function baseLinkedDataKey(kind: 'LinkedAppData', data: GetDiscriminatedUnionVariantContent<BaseLinkedDataKeyArgs, '__kind', 'LinkedAppData'>['fields']): GetDiscriminatedUnionVariant<BaseLinkedDataKeyArgs, '__kind', 'LinkedAppData'>;
declare function getBaseLinkedDataKeyCodec(): Codec<BaseLinkedDataKeyArgs, BaseLinkedDataKey>;
declare function getBaseLinkedDataKeyDecoder(): Decoder<BaseLinkedDataKey>;
declare function getBaseLinkedDataKeyEncoder(): Encoder<BaseLinkedDataKeyArgs>;
declare function isBaseLinkedDataKey<K extends BaseLinkedDataKey['__kind']>(kind: K, value: BaseLinkedDataKey): value is {
  __kind: K;
} & BaseLinkedDataKey;
//#endregion
//#region src/generated/types/baseLinkedLifecycleHook.d.ts
type BaseLinkedLifecycleHook = {
  dataAuthority: Option<BasePluginAuthority>;
  extraAccounts: Option<Array<BaseExtraAccount>>;
  hookedProgram: Address;
  schema: ExternalPluginAdapterSchema;
};
type BaseLinkedLifecycleHookArgs = {
  dataAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  extraAccounts: OptionOrNullable<Array<BaseExtraAccountArgs>>;
  hookedProgram: Address;
  schema: ExternalPluginAdapterSchemaArgs;
};
declare function getBaseLinkedLifecycleHookCodec(): Codec<BaseLinkedLifecycleHookArgs, BaseLinkedLifecycleHook>;
declare function getBaseLinkedLifecycleHookDecoder(): Decoder<BaseLinkedLifecycleHook>;
declare function getBaseLinkedLifecycleHookEncoder(): Encoder<BaseLinkedLifecycleHookArgs>;
//#endregion
//#region src/generated/types/baseLinkedLifecycleHookInitInfo.d.ts
type BaseLinkedLifecycleHookInitInfo = {
  dataAuthority: Option<BasePluginAuthority>;
  extraAccounts: Option<Array<BaseExtraAccount>>;
  hookedProgram: Address;
  initPluginAuthority: Option<BasePluginAuthority>;
  lifecycleChecks: Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>;
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseLinkedLifecycleHookInitInfoArgs = {
  dataAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  extraAccounts: OptionOrNullable<Array<BaseExtraAccountArgs>>;
  hookedProgram: Address;
  initPluginAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  lifecycleChecks: Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>;
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseLinkedLifecycleHookInitInfoCodec(): Codec<BaseLinkedLifecycleHookInitInfoArgs, BaseLinkedLifecycleHookInitInfo>;
declare function getBaseLinkedLifecycleHookInitInfoDecoder(): Decoder<BaseLinkedLifecycleHookInitInfo>;
declare function getBaseLinkedLifecycleHookInitInfoEncoder(): Encoder<BaseLinkedLifecycleHookInitInfoArgs>;
//#endregion
//#region src/generated/types/baseLinkedLifecycleHookUpdateInfo.d.ts
type BaseLinkedLifecycleHookUpdateInfo = {
  extraAccounts: Option<Array<BaseExtraAccount>>;
  lifecycleChecks: Option<Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>>;
  schema: Option<ExternalPluginAdapterSchema>;
};
type BaseLinkedLifecycleHookUpdateInfoArgs = {
  extraAccounts: OptionOrNullable<Array<BaseExtraAccountArgs>>;
  lifecycleChecks: OptionOrNullable<Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>>;
  schema: OptionOrNullable<ExternalPluginAdapterSchemaArgs>;
};
declare function getBaseLinkedLifecycleHookUpdateInfoCodec(): Codec<BaseLinkedLifecycleHookUpdateInfoArgs, BaseLinkedLifecycleHookUpdateInfo>;
declare function getBaseLinkedLifecycleHookUpdateInfoDecoder(): Decoder<BaseLinkedLifecycleHookUpdateInfo>;
declare function getBaseLinkedLifecycleHookUpdateInfoEncoder(): Encoder<BaseLinkedLifecycleHookUpdateInfoArgs>;
//#endregion
//#region src/generated/types/baseMasterEdition.d.ts
type BaseMasterEdition = {
  maxSupply: Option<number>;
  name: Option<string>;
  uri: Option<string>;
};
type BaseMasterEditionArgs = {
  maxSupply: OptionOrNullable<number>;
  name: OptionOrNullable<string>;
  uri: OptionOrNullable<string>;
};
declare function getBaseMasterEditionCodec(): Codec<BaseMasterEditionArgs, BaseMasterEdition>;
declare function getBaseMasterEditionDecoder(): Decoder<BaseMasterEdition>;
declare function getBaseMasterEditionEncoder(): Encoder<BaseMasterEditionArgs>;
//#endregion
//#region src/generated/types/baseOracle.d.ts
type BaseOracle = {
  baseAddress: Address;
  baseAddressConfig: Option<BaseExtraAccount>;
  resultsOffset: BaseValidationResultsOffset;
};
type BaseOracleArgs = {
  baseAddress: Address;
  baseAddressConfig: OptionOrNullable<BaseExtraAccountArgs>;
  resultsOffset: BaseValidationResultsOffsetArgs;
};
declare function getBaseOracleCodec(): Codec<BaseOracleArgs, BaseOracle>;
declare function getBaseOracleDecoder(): Decoder<BaseOracle>;
declare function getBaseOracleEncoder(): Encoder<BaseOracleArgs>;
//#endregion
//#region src/generated/types/baseOracleInitInfo.d.ts
type BaseOracleInitInfo = {
  baseAddress: Address;
  baseAddressConfig: Option<BaseExtraAccount>;
  initPluginAuthority: Option<BasePluginAuthority>;
  lifecycleChecks: Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>;
  resultsOffset: Option<BaseValidationResultsOffset>;
};
type BaseOracleInitInfoArgs = {
  baseAddress: Address;
  baseAddressConfig: OptionOrNullable<BaseExtraAccountArgs>;
  initPluginAuthority: OptionOrNullable<BasePluginAuthorityArgs>;
  lifecycleChecks: Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>;
  resultsOffset: OptionOrNullable<BaseValidationResultsOffsetArgs>;
};
declare function getBaseOracleInitInfoCodec(): Codec<BaseOracleInitInfoArgs, BaseOracleInitInfo>;
declare function getBaseOracleInitInfoDecoder(): Decoder<BaseOracleInitInfo>;
declare function getBaseOracleInitInfoEncoder(): Encoder<BaseOracleInitInfoArgs>;
//#endregion
//#region src/generated/types/baseOracleUpdateInfo.d.ts
type BaseOracleUpdateInfo = {
  baseAddressConfig: Option<BaseExtraAccount>;
  lifecycleChecks: Option<Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>>;
  resultsOffset: Option<BaseValidationResultsOffset>;
};
type BaseOracleUpdateInfoArgs = {
  baseAddressConfig: OptionOrNullable<BaseExtraAccountArgs>;
  lifecycleChecks: OptionOrNullable<Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>>;
  resultsOffset: OptionOrNullable<BaseValidationResultsOffsetArgs>;
};
declare function getBaseOracleUpdateInfoCodec(): Codec<BaseOracleUpdateInfoArgs, BaseOracleUpdateInfo>;
declare function getBaseOracleUpdateInfoDecoder(): Decoder<BaseOracleUpdateInfo>;
declare function getBaseOracleUpdateInfoEncoder(): Encoder<BaseOracleUpdateInfoArgs>;
//#endregion
//#region src/generated/types/basePluginAuthority.d.ts
type BasePluginAuthority = {
  __kind: 'Address';
  address: Address;
} | {
  __kind: 'None';
} | {
  __kind: 'Owner';
} | {
  __kind: 'UpdateAuthority';
};
type BasePluginAuthorityArgs = BasePluginAuthority;
declare function basePluginAuthority(kind: 'None'): GetDiscriminatedUnionVariant<BasePluginAuthorityArgs, '__kind', 'None'>;
declare function basePluginAuthority(kind: 'Owner'): GetDiscriminatedUnionVariant<BasePluginAuthorityArgs, '__kind', 'Owner'>;
declare function basePluginAuthority(kind: 'UpdateAuthority'): GetDiscriminatedUnionVariant<BasePluginAuthorityArgs, '__kind', 'UpdateAuthority'>;
declare function basePluginAuthority(kind: 'Address', data: GetDiscriminatedUnionVariantContent<BasePluginAuthorityArgs, '__kind', 'Address'>): GetDiscriminatedUnionVariant<BasePluginAuthorityArgs, '__kind', 'Address'>;
declare function getBasePluginAuthorityCodec(): Codec<BasePluginAuthorityArgs, BasePluginAuthority>;
declare function getBasePluginAuthorityDecoder(): Decoder<BasePluginAuthority>;
declare function getBasePluginAuthorityEncoder(): Encoder<BasePluginAuthorityArgs>;
declare function isBasePluginAuthority<K extends BasePluginAuthority['__kind']>(kind: K, value: BasePluginAuthority): value is {
  __kind: K;
} & BasePluginAuthority;
//#endregion
//#region src/generated/types/baseRoyalties.d.ts
type BaseRoyalties = {
  basisPoints: number;
  creators: Array<Creator>;
  ruleSet: BaseRuleSet;
};
type BaseRoyaltiesArgs = {
  basisPoints: number;
  creators: Array<CreatorArgs>;
  ruleSet: BaseRuleSetArgs;
};
declare function getBaseRoyaltiesCodec(): Codec<BaseRoyaltiesArgs, BaseRoyalties>;
declare function getBaseRoyaltiesDecoder(): Decoder<BaseRoyalties>;
declare function getBaseRoyaltiesEncoder(): Encoder<BaseRoyaltiesArgs>;
//#endregion
//#region src/generated/types/baseRuleSet.d.ts
type BaseRuleSet = {
  __kind: 'None';
} | {
  __kind: 'ProgramAllowList';
  fields: readonly [Array<Address>];
} | {
  __kind: 'ProgramDenyList';
  fields: readonly [Array<Address>];
};
type BaseRuleSetArgs = BaseRuleSet;
declare function baseRuleSet(kind: 'None'): GetDiscriminatedUnionVariant<BaseRuleSetArgs, '__kind', 'None'>;
declare function baseRuleSet(kind: 'ProgramAllowList', data: GetDiscriminatedUnionVariantContent<BaseRuleSetArgs, '__kind', 'ProgramAllowList'>['fields']): GetDiscriminatedUnionVariant<BaseRuleSetArgs, '__kind', 'ProgramAllowList'>;
declare function baseRuleSet(kind: 'ProgramDenyList', data: GetDiscriminatedUnionVariantContent<BaseRuleSetArgs, '__kind', 'ProgramDenyList'>['fields']): GetDiscriminatedUnionVariant<BaseRuleSetArgs, '__kind', 'ProgramDenyList'>;
declare function getBaseRuleSetCodec(): Codec<BaseRuleSetArgs, BaseRuleSet>;
declare function getBaseRuleSetDecoder(): Decoder<BaseRuleSet>;
declare function getBaseRuleSetEncoder(): Encoder<BaseRuleSetArgs>;
declare function isBaseRuleSet<K extends BaseRuleSet['__kind']>(kind: K, value: BaseRuleSet): value is {
  __kind: K;
} & BaseRuleSet;
//#endregion
//#region src/generated/types/baseSeed.d.ts
type BaseSeed = {
  __kind: 'Address';
  fields: readonly [Address];
} | {
  __kind: 'Asset';
} | {
  __kind: 'Bytes';
  fields: readonly [ReadonlyUint8Array];
} | {
  __kind: 'Collection';
} | {
  __kind: 'Owner';
} | {
  __kind: 'Recipient';
};
type BaseSeedArgs = BaseSeed;
declare function baseSeed(kind: 'Collection'): GetDiscriminatedUnionVariant<BaseSeedArgs, '__kind', 'Collection'>;
declare function baseSeed(kind: 'Owner'): GetDiscriminatedUnionVariant<BaseSeedArgs, '__kind', 'Owner'>;
declare function baseSeed(kind: 'Recipient'): GetDiscriminatedUnionVariant<BaseSeedArgs, '__kind', 'Recipient'>;
declare function baseSeed(kind: 'Asset'): GetDiscriminatedUnionVariant<BaseSeedArgs, '__kind', 'Asset'>;
declare function baseSeed(kind: 'Address', data: GetDiscriminatedUnionVariantContent<BaseSeedArgs, '__kind', 'Address'>['fields']): GetDiscriminatedUnionVariant<BaseSeedArgs, '__kind', 'Address'>;
declare function baseSeed(kind: 'Bytes', data: GetDiscriminatedUnionVariantContent<BaseSeedArgs, '__kind', 'Bytes'>['fields']): GetDiscriminatedUnionVariant<BaseSeedArgs, '__kind', 'Bytes'>;
declare function getBaseSeedCodec(): Codec<BaseSeedArgs, BaseSeed>;
declare function getBaseSeedDecoder(): Decoder<BaseSeed>;
declare function getBaseSeedEncoder(): Encoder<BaseSeedArgs>;
declare function isBaseSeed<K extends BaseSeed['__kind']>(kind: K, value: BaseSeed): value is {
  __kind: K;
} & BaseSeed;
//#endregion
//#region src/generated/types/baseUpdateAuthority.d.ts
type BaseUpdateAuthority = {
  __kind: 'Address';
  fields: readonly [Address];
} | {
  __kind: 'Collection';
  fields: readonly [Address];
} | {
  __kind: 'None';
};
type BaseUpdateAuthorityArgs = BaseUpdateAuthority;
declare function baseUpdateAuthority(kind: 'None'): GetDiscriminatedUnionVariant<BaseUpdateAuthorityArgs, '__kind', 'None'>;
declare function baseUpdateAuthority(kind: 'Address', data: GetDiscriminatedUnionVariantContent<BaseUpdateAuthorityArgs, '__kind', 'Address'>['fields']): GetDiscriminatedUnionVariant<BaseUpdateAuthorityArgs, '__kind', 'Address'>;
declare function baseUpdateAuthority(kind: 'Collection', data: GetDiscriminatedUnionVariantContent<BaseUpdateAuthorityArgs, '__kind', 'Collection'>['fields']): GetDiscriminatedUnionVariant<BaseUpdateAuthorityArgs, '__kind', 'Collection'>;
declare function getBaseUpdateAuthorityCodec(): Codec<BaseUpdateAuthorityArgs, BaseUpdateAuthority>;
declare function getBaseUpdateAuthorityDecoder(): Decoder<BaseUpdateAuthority>;
declare function getBaseUpdateAuthorityEncoder(): Encoder<BaseUpdateAuthorityArgs>;
declare function isBaseUpdateAuthority<K extends BaseUpdateAuthority['__kind']>(kind: K, value: BaseUpdateAuthority): value is {
  __kind: K;
} & BaseUpdateAuthority;
//#endregion
//#region src/generated/types/baseValidationResultsOffset.d.ts
type BaseValidationResultsOffset = {
  __kind: 'Anchor';
} | {
  __kind: 'Custom';
  fields: readonly [bigint];
} | {
  __kind: 'NoOffset';
};
type BaseValidationResultsOffsetArgs = {
  __kind: 'Anchor';
} | {
  __kind: 'Custom';
  fields: readonly [bigint | number];
} | {
  __kind: 'NoOffset';
};
declare function baseValidationResultsOffset(kind: 'NoOffset'): GetDiscriminatedUnionVariant<BaseValidationResultsOffsetArgs, '__kind', 'NoOffset'>;
declare function baseValidationResultsOffset(kind: 'Anchor'): GetDiscriminatedUnionVariant<BaseValidationResultsOffsetArgs, '__kind', 'Anchor'>;
declare function baseValidationResultsOffset(kind: 'Custom', data: GetDiscriminatedUnionVariantContent<BaseValidationResultsOffsetArgs, '__kind', 'Custom'>['fields']): GetDiscriminatedUnionVariant<BaseValidationResultsOffsetArgs, '__kind', 'Custom'>;
declare function getBaseValidationResultsOffsetCodec(): Codec<BaseValidationResultsOffsetArgs, BaseValidationResultsOffset>;
declare function getBaseValidationResultsOffsetDecoder(): Decoder<BaseValidationResultsOffset>;
declare function getBaseValidationResultsOffsetEncoder(): Encoder<BaseValidationResultsOffsetArgs>;
declare function isBaseValidationResultsOffset<K extends BaseValidationResultsOffset['__kind']>(kind: K, value: BaseValidationResultsOffset): value is {
  __kind: K;
} & BaseValidationResultsOffset;
//#endregion
//#region src/generated/types/bubblegumV2.d.ts
type BubblegumV2 = {};
type BubblegumV2Args = BubblegumV2;
declare function getBubblegumV2Codec(): FixedSizeCodec<BubblegumV2Args, BubblegumV2>;
declare function getBubblegumV2Decoder(): FixedSizeDecoder<BubblegumV2>;
declare function getBubblegumV2Encoder(): FixedSizeEncoder<BubblegumV2Args>;
//#endregion
//#region src/generated/types/burnDelegate.d.ts
type BurnDelegate = {};
type BurnDelegateArgs = BurnDelegate;
declare function getBurnDelegateCodec(): FixedSizeCodec<BurnDelegateArgs, BurnDelegate>;
declare function getBurnDelegateDecoder(): FixedSizeDecoder<BurnDelegate>;
declare function getBurnDelegateEncoder(): FixedSizeEncoder<BurnDelegateArgs>;
//#endregion
//#region src/generated/types/compressionProof.d.ts
type CompressionProof = {
  name: string;
  owner: Address;
  plugins: Array<HashablePluginSchema>;
  seq: bigint;
  updateAuthority: BaseUpdateAuthority;
  uri: string;
};
type CompressionProofArgs = {
  name: string;
  owner: Address;
  plugins: Array<HashablePluginSchemaArgs>;
  seq: bigint | number;
  updateAuthority: BaseUpdateAuthorityArgs;
  uri: string;
};
declare function getCompressionProofCodec(): Codec<CompressionProofArgs, CompressionProof>;
declare function getCompressionProofDecoder(): Decoder<CompressionProof>;
declare function getCompressionProofEncoder(): Encoder<CompressionProofArgs>;
//#endregion
//#region src/generated/types/creator.d.ts
type Creator = {
  address: Address;
  percentage: number;
};
type CreatorArgs = Creator;
declare function getCreatorCodec(): FixedSizeCodec<CreatorArgs, Creator>;
declare function getCreatorDecoder(): FixedSizeDecoder<Creator>;
declare function getCreatorEncoder(): FixedSizeEncoder<CreatorArgs>;
//#endregion
//#region src/generated/types/dataState.d.ts
declare enum DataState {
  AccountState = 0,
  LedgerState = 1
}
type DataStateArgs = DataState;
declare function getDataStateCodec(): FixedSizeCodec<DataStateArgs, DataState>;
declare function getDataStateDecoder(): FixedSizeDecoder<DataState>;
declare function getDataStateEncoder(): FixedSizeEncoder<DataStateArgs>;
//#endregion
//#region src/generated/types/edition.d.ts
type Edition = {
  number: number;
};
type EditionArgs = Edition;
declare function getEditionCodec(): FixedSizeCodec<EditionArgs, Edition>;
declare function getEditionDecoder(): FixedSizeDecoder<Edition>;
declare function getEditionEncoder(): FixedSizeEncoder<EditionArgs>;
//#endregion
//#region src/generated/types/externalCheckResult.d.ts
type ExternalCheckResult = {
  flags: number;
};
type ExternalCheckResultArgs = ExternalCheckResult;
declare function getExternalCheckResultCodec(): FixedSizeCodec<ExternalCheckResultArgs, ExternalCheckResult>;
declare function getExternalCheckResultDecoder(): FixedSizeDecoder<ExternalCheckResult>;
declare function getExternalCheckResultEncoder(): FixedSizeEncoder<ExternalCheckResultArgs>;
//#endregion
//#region src/generated/types/externalPluginAdapter.d.ts
type ExternalPluginAdapter = {
  __kind: 'AppData';
  fields: readonly [BaseAppData];
} | {
  __kind: 'DataSection';
  fields: readonly [BaseDataSection];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [BaseLifecycleHook];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BaseLinkedAppData];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [BaseLinkedLifecycleHook];
} | {
  __kind: 'Oracle';
  fields: readonly [BaseOracle];
};
type ExternalPluginAdapterArgs = {
  __kind: 'AppData';
  fields: readonly [BaseAppDataArgs];
} | {
  __kind: 'DataSection';
  fields: readonly [BaseDataSectionArgs];
} | {
  __kind: 'LifecycleHook';
  fields: readonly [BaseLifecycleHookArgs];
} | {
  __kind: 'LinkedAppData';
  fields: readonly [BaseLinkedAppDataArgs];
} | {
  __kind: 'LinkedLifecycleHook';
  fields: readonly [BaseLinkedLifecycleHookArgs];
} | {
  __kind: 'Oracle';
  fields: readonly [BaseOracleArgs];
};
declare function externalPluginAdapter(kind: 'LifecycleHook', data: GetDiscriminatedUnionVariantContent<ExternalPluginAdapterArgs, '__kind', 'LifecycleHook'>['fields']): GetDiscriminatedUnionVariant<ExternalPluginAdapterArgs, '__kind', 'LifecycleHook'>;
declare function externalPluginAdapter(kind: 'Oracle', data: GetDiscriminatedUnionVariantContent<ExternalPluginAdapterArgs, '__kind', 'Oracle'>['fields']): GetDiscriminatedUnionVariant<ExternalPluginAdapterArgs, '__kind', 'Oracle'>;
declare function externalPluginAdapter(kind: 'AppData', data: GetDiscriminatedUnionVariantContent<ExternalPluginAdapterArgs, '__kind', 'AppData'>['fields']): GetDiscriminatedUnionVariant<ExternalPluginAdapterArgs, '__kind', 'AppData'>;
declare function externalPluginAdapter(kind: 'LinkedLifecycleHook', data: GetDiscriminatedUnionVariantContent<ExternalPluginAdapterArgs, '__kind', 'LinkedLifecycleHook'>['fields']): GetDiscriminatedUnionVariant<ExternalPluginAdapterArgs, '__kind', 'LinkedLifecycleHook'>;
declare function externalPluginAdapter(kind: 'LinkedAppData', data: GetDiscriminatedUnionVariantContent<ExternalPluginAdapterArgs, '__kind', 'LinkedAppData'>['fields']): GetDiscriminatedUnionVariant<ExternalPluginAdapterArgs, '__kind', 'LinkedAppData'>;
declare function externalPluginAdapter(kind: 'DataSection', data: GetDiscriminatedUnionVariantContent<ExternalPluginAdapterArgs, '__kind', 'DataSection'>['fields']): GetDiscriminatedUnionVariant<ExternalPluginAdapterArgs, '__kind', 'DataSection'>;
declare function getExternalPluginAdapterCodec(): Codec<ExternalPluginAdapterArgs, ExternalPluginAdapter>;
declare function getExternalPluginAdapterDecoder(): Decoder<ExternalPluginAdapter>;
declare function getExternalPluginAdapterEncoder(): Encoder<ExternalPluginAdapterArgs>;
declare function isExternalPluginAdapter<K extends ExternalPluginAdapter['__kind']>(kind: K, value: ExternalPluginAdapter): value is {
  __kind: K;
} & ExternalPluginAdapter;
//#endregion
//#region src/generated/types/externalPluginAdapterSchema.d.ts
declare enum ExternalPluginAdapterSchema {
  Binary = 0,
  Json = 1,
  MsgPack = 2
}
type ExternalPluginAdapterSchemaArgs = ExternalPluginAdapterSchema;
declare function getExternalPluginAdapterSchemaCodec(): FixedSizeCodec<ExternalPluginAdapterSchemaArgs, ExternalPluginAdapterSchema>;
declare function getExternalPluginAdapterSchemaDecoder(): FixedSizeDecoder<ExternalPluginAdapterSchema>;
declare function getExternalPluginAdapterSchemaEncoder(): FixedSizeEncoder<ExternalPluginAdapterSchemaArgs>;
//#endregion
//#region src/generated/types/externalPluginAdapterType.d.ts
declare enum ExternalPluginAdapterType {
  LifecycleHook = 0,
  Oracle = 1,
  AppData = 2,
  LinkedLifecycleHook = 3,
  LinkedAppData = 4,
  DataSection = 5
}
type ExternalPluginAdapterTypeArgs = ExternalPluginAdapterType;
declare function getExternalPluginAdapterTypeCodec(): FixedSizeCodec<ExternalPluginAdapterTypeArgs, ExternalPluginAdapterType>;
declare function getExternalPluginAdapterTypeDecoder(): FixedSizeDecoder<ExternalPluginAdapterType>;
declare function getExternalPluginAdapterTypeEncoder(): FixedSizeEncoder<ExternalPluginAdapterTypeArgs>;
//#endregion
//#region src/generated/types/externalRegistryRecord.d.ts
type ExternalRegistryRecord = {
  authority: BasePluginAuthority;
  dataLen: Option<bigint>;
  dataOffset: Option<bigint>;
  lifecycleChecks: Option<Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>>;
  offset: bigint;
  pluginType: ExternalPluginAdapterType;
};
type ExternalRegistryRecordArgs = {
  authority: BasePluginAuthorityArgs;
  dataLen: OptionOrNullable<bigint | number>;
  dataOffset: OptionOrNullable<bigint | number>;
  lifecycleChecks: OptionOrNullable<Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>>;
  offset: bigint | number;
  pluginType: ExternalPluginAdapterTypeArgs;
};
declare function getExternalRegistryRecordCodec(): Codec<ExternalRegistryRecordArgs, ExternalRegistryRecord>;
declare function getExternalRegistryRecordDecoder(): Decoder<ExternalRegistryRecord>;
declare function getExternalRegistryRecordEncoder(): Encoder<ExternalRegistryRecordArgs>;
//#endregion
//#region src/generated/types/externalValidationResult.d.ts
declare enum ExternalValidationResult {
  Approved = 0,
  Rejected = 1,
  Pass = 2
}
type ExternalValidationResultArgs = ExternalValidationResult;
declare function getExternalValidationResultCodec(): FixedSizeCodec<ExternalValidationResultArgs, ExternalValidationResult>;
declare function getExternalValidationResultDecoder(): FixedSizeDecoder<ExternalValidationResult>;
declare function getExternalValidationResultEncoder(): FixedSizeEncoder<ExternalValidationResultArgs>;
//#endregion
//#region src/generated/types/freezeDelegate.d.ts
type FreezeDelegate = {
  frozen: boolean;
};
type FreezeDelegateArgs = FreezeDelegate;
declare function getFreezeDelegateCodec(): FixedSizeCodec<FreezeDelegateArgs, FreezeDelegate>;
declare function getFreezeDelegateDecoder(): FixedSizeDecoder<FreezeDelegate>;
declare function getFreezeDelegateEncoder(): FixedSizeEncoder<FreezeDelegateArgs>;
//#endregion
//#region src/generated/types/freezeExecute.d.ts
type FreezeExecute = {
  frozen: boolean;
};
type FreezeExecuteArgs = FreezeExecute;
declare function getFreezeExecuteCodec(): FixedSizeCodec<FreezeExecuteArgs, FreezeExecute>;
declare function getFreezeExecuteDecoder(): FixedSizeDecoder<FreezeExecute>;
declare function getFreezeExecuteEncoder(): FixedSizeEncoder<FreezeExecuteArgs>;
//#endregion
//#region src/generated/types/hashablePluginSchema.d.ts
type HashablePluginSchema = {
  authority: BasePluginAuthority;
  index: bigint;
  plugin: Plugin;
};
type HashablePluginSchemaArgs = {
  authority: BasePluginAuthorityArgs;
  index: bigint | number;
  plugin: PluginArgs;
};
declare function getHashablePluginSchemaCodec(): Codec<HashablePluginSchemaArgs, HashablePluginSchema>;
declare function getHashablePluginSchemaDecoder(): Decoder<HashablePluginSchema>;
declare function getHashablePluginSchemaEncoder(): Encoder<HashablePluginSchemaArgs>;
//#endregion
//#region src/generated/types/hashedAssetSchema.d.ts
type HashedAssetSchema = {
  assetHash: ReadonlyUint8Array;
  pluginHashes: Array<ReadonlyUint8Array>;
};
type HashedAssetSchemaArgs = HashedAssetSchema;
declare function getHashedAssetSchemaCodec(): Codec<HashedAssetSchemaArgs, HashedAssetSchema>;
declare function getHashedAssetSchemaDecoder(): Decoder<HashedAssetSchema>;
declare function getHashedAssetSchemaEncoder(): Encoder<HashedAssetSchemaArgs>;
//#endregion
//#region src/generated/types/hookableLifecycleEvent.d.ts
declare enum HookableLifecycleEvent {
  Create = 0,
  Transfer = 1,
  Burn = 2,
  Update = 3
}
type HookableLifecycleEventArgs = HookableLifecycleEvent;
declare function getHookableLifecycleEventCodec(): FixedSizeCodec<HookableLifecycleEventArgs, HookableLifecycleEvent>;
declare function getHookableLifecycleEventDecoder(): FixedSizeDecoder<HookableLifecycleEvent>;
declare function getHookableLifecycleEventEncoder(): FixedSizeEncoder<HookableLifecycleEventArgs>;
//#endregion
//#region src/generated/types/immutableMetadata.d.ts
type ImmutableMetadata = {};
type ImmutableMetadataArgs = ImmutableMetadata;
declare function getImmutableMetadataCodec(): FixedSizeCodec<ImmutableMetadataArgs, ImmutableMetadata>;
declare function getImmutableMetadataDecoder(): FixedSizeDecoder<ImmutableMetadata>;
declare function getImmutableMetadataEncoder(): FixedSizeEncoder<ImmutableMetadataArgs>;
//#endregion
//#region src/generated/types/key.d.ts
declare enum Key {
  Uninitialized = 0,
  AssetV1 = 1,
  HashedAssetV1 = 2,
  PluginHeaderV1 = 3,
  PluginRegistryV1 = 4,
  CollectionV1 = 5
}
type KeyArgs = Key;
declare function getKeyCodec(): FixedSizeCodec<KeyArgs, Key>;
declare function getKeyDecoder(): FixedSizeDecoder<Key>;
declare function getKeyEncoder(): FixedSizeEncoder<KeyArgs>;
//#endregion
//#region src/generated/types/oracleValidation.d.ts
type OracleValidation = {
  __kind: 'Uninitialized';
} | {
  __kind: 'V1';
  burn: ExternalValidationResult;
  create: ExternalValidationResult;
  transfer: ExternalValidationResult;
  update: ExternalValidationResult;
};
type OracleValidationArgs = {
  __kind: 'Uninitialized';
} | {
  __kind: 'V1';
  burn: ExternalValidationResultArgs;
  create: ExternalValidationResultArgs;
  transfer: ExternalValidationResultArgs;
  update: ExternalValidationResultArgs;
};
declare function getOracleValidationCodec(): Codec<OracleValidationArgs, OracleValidation>;
declare function getOracleValidationDecoder(): Decoder<OracleValidation>;
declare function getOracleValidationEncoder(): Encoder<OracleValidationArgs>;
declare function isOracleValidation<K extends OracleValidation['__kind']>(kind: K, value: OracleValidation): value is {
  __kind: K;
} & OracleValidation;
declare function oracleValidation(kind: 'Uninitialized'): GetDiscriminatedUnionVariant<OracleValidationArgs, '__kind', 'Uninitialized'>;
declare function oracleValidation(kind: 'V1', data: GetDiscriminatedUnionVariantContent<OracleValidationArgs, '__kind', 'V1'>): GetDiscriminatedUnionVariant<OracleValidationArgs, '__kind', 'V1'>;
//#endregion
//#region src/generated/types/permanentBurnDelegate.d.ts
type PermanentBurnDelegate = {};
type PermanentBurnDelegateArgs = PermanentBurnDelegate;
declare function getPermanentBurnDelegateCodec(): FixedSizeCodec<PermanentBurnDelegateArgs, PermanentBurnDelegate>;
declare function getPermanentBurnDelegateDecoder(): FixedSizeDecoder<PermanentBurnDelegate>;
declare function getPermanentBurnDelegateEncoder(): FixedSizeEncoder<PermanentBurnDelegateArgs>;
//#endregion
//#region src/generated/types/permanentFreezeDelegate.d.ts
type PermanentFreezeDelegate = {
  frozen: boolean;
};
type PermanentFreezeDelegateArgs = PermanentFreezeDelegate;
declare function getPermanentFreezeDelegateCodec(): FixedSizeCodec<PermanentFreezeDelegateArgs, PermanentFreezeDelegate>;
declare function getPermanentFreezeDelegateDecoder(): FixedSizeDecoder<PermanentFreezeDelegate>;
declare function getPermanentFreezeDelegateEncoder(): FixedSizeEncoder<PermanentFreezeDelegateArgs>;
//#endregion
//#region src/generated/types/permanentFreezeExecute.d.ts
type PermanentFreezeExecute = {
  frozen: boolean;
};
type PermanentFreezeExecuteArgs = PermanentFreezeExecute;
declare function getPermanentFreezeExecuteCodec(): FixedSizeCodec<PermanentFreezeExecuteArgs, PermanentFreezeExecute>;
declare function getPermanentFreezeExecuteDecoder(): FixedSizeDecoder<PermanentFreezeExecute>;
declare function getPermanentFreezeExecuteEncoder(): FixedSizeEncoder<PermanentFreezeExecuteArgs>;
//#endregion
//#region src/generated/types/permanentTransferDelegate.d.ts
type PermanentTransferDelegate = {};
type PermanentTransferDelegateArgs = PermanentTransferDelegate;
declare function getPermanentTransferDelegateCodec(): FixedSizeCodec<PermanentTransferDelegateArgs, PermanentTransferDelegate>;
declare function getPermanentTransferDelegateDecoder(): FixedSizeDecoder<PermanentTransferDelegate>;
declare function getPermanentTransferDelegateEncoder(): FixedSizeEncoder<PermanentTransferDelegateArgs>;
//#endregion
//#region src/generated/types/plugin.d.ts
type Plugin = {
  __kind: 'AddBlocker';
  fields: readonly [AddBlocker];
} | {
  __kind: 'Attributes';
  fields: readonly [Attributes];
} | {
  __kind: 'Autograph';
  fields: readonly [Autograph];
} | {
  __kind: 'BubblegumV2';
  fields: readonly [BubblegumV2];
} | {
  __kind: 'BurnDelegate';
  fields: readonly [BurnDelegate];
} | {
  __kind: 'Edition';
  fields: readonly [Edition];
} | {
  __kind: 'FreezeDelegate';
  fields: readonly [FreezeDelegate];
} | {
  __kind: 'FreezeExecute';
  fields: readonly [FreezeExecute];
} | {
  __kind: 'ImmutableMetadata';
  fields: readonly [ImmutableMetadata];
} | {
  __kind: 'MasterEdition';
  fields: readonly [BaseMasterEdition];
} | {
  __kind: 'PermanentBurnDelegate';
  fields: readonly [PermanentBurnDelegate];
} | {
  __kind: 'PermanentFreezeDelegate';
  fields: readonly [PermanentFreezeDelegate];
} | {
  __kind: 'PermanentFreezeExecute';
  fields: readonly [PermanentFreezeExecute];
} | {
  __kind: 'PermanentTransferDelegate';
  fields: readonly [PermanentTransferDelegate];
} | {
  __kind: 'Royalties';
  fields: readonly [BaseRoyalties];
} | {
  __kind: 'TransferDelegate';
  fields: readonly [TransferDelegate];
} | {
  __kind: 'UpdateDelegate';
  fields: readonly [UpdateDelegate];
} | {
  __kind: 'VerifiedCreators';
  fields: readonly [VerifiedCreators];
};
type PluginArgs = {
  __kind: 'AddBlocker';
  fields: readonly [AddBlockerArgs];
} | {
  __kind: 'Attributes';
  fields: readonly [AttributesArgs];
} | {
  __kind: 'Autograph';
  fields: readonly [AutographArgs];
} | {
  __kind: 'BubblegumV2';
  fields: readonly [BubblegumV2Args];
} | {
  __kind: 'BurnDelegate';
  fields: readonly [BurnDelegateArgs];
} | {
  __kind: 'Edition';
  fields: readonly [EditionArgs];
} | {
  __kind: 'FreezeDelegate';
  fields: readonly [FreezeDelegateArgs];
} | {
  __kind: 'FreezeExecute';
  fields: readonly [FreezeExecuteArgs];
} | {
  __kind: 'ImmutableMetadata';
  fields: readonly [ImmutableMetadataArgs];
} | {
  __kind: 'MasterEdition';
  fields: readonly [BaseMasterEditionArgs];
} | {
  __kind: 'PermanentBurnDelegate';
  fields: readonly [PermanentBurnDelegateArgs];
} | {
  __kind: 'PermanentFreezeDelegate';
  fields: readonly [PermanentFreezeDelegateArgs];
} | {
  __kind: 'PermanentFreezeExecute';
  fields: readonly [PermanentFreezeExecuteArgs];
} | {
  __kind: 'PermanentTransferDelegate';
  fields: readonly [PermanentTransferDelegateArgs];
} | {
  __kind: 'Royalties';
  fields: readonly [BaseRoyaltiesArgs];
} | {
  __kind: 'TransferDelegate';
  fields: readonly [TransferDelegateArgs];
} | {
  __kind: 'UpdateDelegate';
  fields: readonly [UpdateDelegateArgs];
} | {
  __kind: 'VerifiedCreators';
  fields: readonly [VerifiedCreatorsArgs];
};
declare function getPluginCodec(): Codec<PluginArgs, Plugin>;
declare function getPluginDecoder(): Decoder<Plugin>;
declare function getPluginEncoder(): Encoder<PluginArgs>;
declare function isPlugin<K extends Plugin['__kind']>(kind: K, value: Plugin): value is {
  __kind: K;
} & Plugin;
declare function plugin(kind: 'Royalties', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'Royalties'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'Royalties'>;
declare function plugin(kind: 'FreezeDelegate', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'FreezeDelegate'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'FreezeDelegate'>;
declare function plugin(kind: 'BurnDelegate', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'BurnDelegate'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'BurnDelegate'>;
declare function plugin(kind: 'TransferDelegate', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'TransferDelegate'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'TransferDelegate'>;
declare function plugin(kind: 'UpdateDelegate', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'UpdateDelegate'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'UpdateDelegate'>;
declare function plugin(kind: 'PermanentFreezeDelegate', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'PermanentFreezeDelegate'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'PermanentFreezeDelegate'>;
declare function plugin(kind: 'Attributes', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'Attributes'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'Attributes'>;
declare function plugin(kind: 'PermanentTransferDelegate', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'PermanentTransferDelegate'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'PermanentTransferDelegate'>;
declare function plugin(kind: 'PermanentBurnDelegate', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'PermanentBurnDelegate'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'PermanentBurnDelegate'>;
declare function plugin(kind: 'Edition', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'Edition'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'Edition'>;
declare function plugin(kind: 'MasterEdition', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'MasterEdition'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'MasterEdition'>;
declare function plugin(kind: 'AddBlocker', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'AddBlocker'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'AddBlocker'>;
declare function plugin(kind: 'ImmutableMetadata', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'ImmutableMetadata'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'ImmutableMetadata'>;
declare function plugin(kind: 'VerifiedCreators', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'VerifiedCreators'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'VerifiedCreators'>;
declare function plugin(kind: 'Autograph', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'Autograph'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'Autograph'>;
declare function plugin(kind: 'BubblegumV2', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'BubblegumV2'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'BubblegumV2'>;
declare function plugin(kind: 'FreezeExecute', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'FreezeExecute'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'FreezeExecute'>;
declare function plugin(kind: 'PermanentFreezeExecute', data: GetDiscriminatedUnionVariantContent<PluginArgs, '__kind', 'PermanentFreezeExecute'>['fields']): GetDiscriminatedUnionVariant<PluginArgs, '__kind', 'PermanentFreezeExecute'>;
//#endregion
//#region src/generated/types/pluginAuthorityPair.d.ts
type PluginAuthorityPair = {
  authority: Option<BasePluginAuthority>;
  plugin: Plugin;
};
type PluginAuthorityPairArgs = {
  authority: OptionOrNullable<BasePluginAuthorityArgs>;
  plugin: PluginArgs;
};
declare function getPluginAuthorityPairCodec(): Codec<PluginAuthorityPairArgs, PluginAuthorityPair>;
declare function getPluginAuthorityPairDecoder(): Decoder<PluginAuthorityPair>;
declare function getPluginAuthorityPairEncoder(): Encoder<PluginAuthorityPairArgs>;
//#endregion
//#region src/generated/types/pluginType.d.ts
declare enum PluginType {
  Royalties = 0,
  FreezeDelegate = 1,
  BurnDelegate = 2,
  TransferDelegate = 3,
  UpdateDelegate = 4,
  PermanentFreezeDelegate = 5,
  Attributes = 6,
  PermanentTransferDelegate = 7,
  PermanentBurnDelegate = 8,
  Edition = 9,
  MasterEdition = 10,
  AddBlocker = 11,
  ImmutableMetadata = 12,
  VerifiedCreators = 13,
  Autograph = 14,
  BubblegumV2 = 15,
  FreezeExecute = 16,
  PermanentFreezeExecute = 17
}
type PluginTypeArgs = PluginType;
declare function getPluginTypeCodec(): FixedSizeCodec<PluginTypeArgs, PluginType>;
declare function getPluginTypeDecoder(): FixedSizeDecoder<PluginType>;
declare function getPluginTypeEncoder(): FixedSizeEncoder<PluginTypeArgs>;
//#endregion
//#region src/generated/types/registryRecord.d.ts
type RegistryRecord = {
  authority: BasePluginAuthority;
  offset: bigint;
  pluginType: PluginType;
};
type RegistryRecordArgs = {
  authority: BasePluginAuthorityArgs;
  offset: bigint | number;
  pluginType: PluginTypeArgs;
};
declare function getRegistryRecordCodec(): Codec<RegistryRecordArgs, RegistryRecord>;
declare function getRegistryRecordDecoder(): Decoder<RegistryRecord>;
declare function getRegistryRecordEncoder(): Encoder<RegistryRecordArgs>;
//#endregion
//#region src/generated/types/transferDelegate.d.ts
type TransferDelegate = {};
type TransferDelegateArgs = TransferDelegate;
declare function getTransferDelegateCodec(): FixedSizeCodec<TransferDelegateArgs, TransferDelegate>;
declare function getTransferDelegateDecoder(): FixedSizeDecoder<TransferDelegate>;
declare function getTransferDelegateEncoder(): FixedSizeEncoder<TransferDelegateArgs>;
//#endregion
//#region src/generated/types/updateDelegate.d.ts
type UpdateDelegate = {
  additionalDelegates: Array<Address>;
};
type UpdateDelegateArgs = UpdateDelegate;
declare function getUpdateDelegateCodec(): Codec<UpdateDelegateArgs, UpdateDelegate>;
declare function getUpdateDelegateDecoder(): Decoder<UpdateDelegate>;
declare function getUpdateDelegateEncoder(): Encoder<UpdateDelegateArgs>;
//#endregion
//#region src/generated/types/updateType.d.ts
declare enum UpdateType {
  Mint = 0,
  Add = 1,
  Remove = 2
}
type UpdateTypeArgs = UpdateType;
declare function getUpdateTypeCodec(): FixedSizeCodec<UpdateTypeArgs, UpdateType>;
declare function getUpdateTypeDecoder(): FixedSizeDecoder<UpdateType>;
declare function getUpdateTypeEncoder(): FixedSizeEncoder<UpdateTypeArgs>;
//#endregion
//#region src/generated/types/validationResult.d.ts
declare enum ValidationResult {
  Approved = 0,
  Rejected = 1,
  Pass = 2,
  ForceApproved = 3
}
type ValidationResultArgs = ValidationResult;
declare function getValidationResultCodec(): FixedSizeCodec<ValidationResultArgs, ValidationResult>;
declare function getValidationResultDecoder(): FixedSizeDecoder<ValidationResult>;
declare function getValidationResultEncoder(): FixedSizeEncoder<ValidationResultArgs>;
//#endregion
//#region src/generated/types/verifiedCreators.d.ts
type VerifiedCreators = {
  signatures: Array<VerifiedCreatorsSignature>;
};
type VerifiedCreatorsArgs = {
  signatures: Array<VerifiedCreatorsSignatureArgs>;
};
declare function getVerifiedCreatorsCodec(): Codec<VerifiedCreatorsArgs, VerifiedCreators>;
declare function getVerifiedCreatorsDecoder(): Decoder<VerifiedCreators>;
declare function getVerifiedCreatorsEncoder(): Encoder<VerifiedCreatorsArgs>;
//#endregion
//#region src/generated/types/verifiedCreatorsSignature.d.ts
type VerifiedCreatorsSignature = {
  address: Address;
  verified: boolean;
};
type VerifiedCreatorsSignatureArgs = VerifiedCreatorsSignature;
declare function getVerifiedCreatorsSignatureCodec(): FixedSizeCodec<VerifiedCreatorsSignatureArgs, VerifiedCreatorsSignature>;
declare function getVerifiedCreatorsSignatureDecoder(): FixedSizeDecoder<VerifiedCreatorsSignature>;
declare function getVerifiedCreatorsSignatureEncoder(): FixedSizeEncoder<VerifiedCreatorsSignatureArgs>;
//#endregion
//#region src/generated/accounts/assetV1.d.ts
type AssetV1 = {
  key: Key;
  name: string;
  owner: Address;
  seq: Option<bigint>;
  updateAuthority: BaseUpdateAuthority;
  uri: string;
};
type AssetV1Args = {
  key: KeyArgs;
  name: string;
  owner: Address;
  seq: OptionOrNullable<bigint | number>;
  updateAuthority: BaseUpdateAuthorityArgs;
  uri: string;
};
declare function decodeAssetV1<TAddress extends string = string>(encodedAccount: EncodedAccount<TAddress>): Account<AssetV1, TAddress>;
declare function decodeAssetV1<TAddress extends string = string>(encodedAccount: MaybeEncodedAccount<TAddress>): MaybeAccount<AssetV1, TAddress>;
declare function fetchAllAssetV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<Account<AssetV1>[]>;
declare function fetchAllMaybeAssetV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<MaybeAccount<AssetV1>[]>;
declare function fetchAssetV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<Account<AssetV1, TAddress>>;
declare function fetchMaybeAssetV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<MaybeAccount<AssetV1, TAddress>>;
declare function getAssetV1Codec(): Codec<AssetV1Args, AssetV1>;
declare function getAssetV1Decoder(): Decoder<AssetV1>;
declare function getAssetV1Encoder(): Encoder<AssetV1Args>;
//#endregion
//#region src/generated/accounts/collectionV1.d.ts
type CollectionV1 = {
  currentSize: number;
  key: Key;
  name: string;
  numMinted: number;
  updateAuthority: Address;
  uri: string;
};
type CollectionV1Args = {
  currentSize: number;
  key: KeyArgs;
  name: string;
  numMinted: number;
  updateAuthority: Address;
  uri: string;
};
declare function decodeCollectionV1<TAddress extends string = string>(encodedAccount: EncodedAccount<TAddress>): Account<CollectionV1, TAddress>;
declare function decodeCollectionV1<TAddress extends string = string>(encodedAccount: MaybeEncodedAccount<TAddress>): MaybeAccount<CollectionV1, TAddress>;
declare function fetchAllCollectionV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<Account<CollectionV1>[]>;
declare function fetchAllMaybeCollectionV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<MaybeAccount<CollectionV1>[]>;
declare function fetchCollectionV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<Account<CollectionV1, TAddress>>;
declare function fetchMaybeCollectionV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<MaybeAccount<CollectionV1, TAddress>>;
declare function getCollectionV1Codec(): Codec<CollectionV1Args, CollectionV1>;
declare function getCollectionV1Decoder(): Decoder<CollectionV1>;
declare function getCollectionV1Encoder(): Encoder<CollectionV1Args>;
//#endregion
//#region src/generated/accounts/hashedAssetV1.d.ts
type HashedAssetV1 = {
  hash: ReadonlyUint8Array;
  key: Key;
};
type HashedAssetV1Args = {
  hash: ReadonlyUint8Array;
  key: KeyArgs;
};
declare function decodeHashedAssetV1<TAddress extends string = string>(encodedAccount: EncodedAccount<TAddress>): Account<HashedAssetV1, TAddress>;
declare function decodeHashedAssetV1<TAddress extends string = string>(encodedAccount: MaybeEncodedAccount<TAddress>): MaybeAccount<HashedAssetV1, TAddress>;
declare function fetchAllHashedAssetV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<Account<HashedAssetV1>[]>;
declare function fetchAllMaybeHashedAssetV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<MaybeAccount<HashedAssetV1>[]>;
declare function fetchHashedAssetV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<Account<HashedAssetV1, TAddress>>;
declare function fetchMaybeHashedAssetV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<MaybeAccount<HashedAssetV1, TAddress>>;
declare function getHashedAssetV1Codec(): FixedSizeCodec<HashedAssetV1Args, HashedAssetV1>;
declare function getHashedAssetV1Decoder(): FixedSizeDecoder<HashedAssetV1>;
declare function getHashedAssetV1Encoder(): FixedSizeEncoder<HashedAssetV1Args>;
declare function getHashedAssetV1Size(): number;
//#endregion
//#region src/generated/accounts/pluginHeaderV1.d.ts
type PluginHeaderV1 = {
  key: Key;
  pluginRegistryOffset: bigint;
};
type PluginHeaderV1Args = {
  key: KeyArgs;
  pluginRegistryOffset: bigint | number;
};
declare function decodePluginHeaderV1<TAddress extends string = string>(encodedAccount: EncodedAccount<TAddress>): Account<PluginHeaderV1, TAddress>;
declare function decodePluginHeaderV1<TAddress extends string = string>(encodedAccount: MaybeEncodedAccount<TAddress>): MaybeAccount<PluginHeaderV1, TAddress>;
declare function fetchAllMaybePluginHeaderV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<MaybeAccount<PluginHeaderV1>[]>;
declare function fetchAllPluginHeaderV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<Account<PluginHeaderV1>[]>;
declare function fetchMaybePluginHeaderV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<MaybeAccount<PluginHeaderV1, TAddress>>;
declare function fetchPluginHeaderV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<Account<PluginHeaderV1, TAddress>>;
declare function getPluginHeaderV1Codec(): FixedSizeCodec<PluginHeaderV1Args, PluginHeaderV1>;
declare function getPluginHeaderV1Decoder(): FixedSizeDecoder<PluginHeaderV1>;
declare function getPluginHeaderV1Encoder(): FixedSizeEncoder<PluginHeaderV1Args>;
declare function getPluginHeaderV1Size(): number;
//#endregion
//#region src/generated/accounts/pluginRegistryV1.d.ts
type PluginRegistryV1 = {
  externalRegistry: Array<ExternalRegistryRecord>;
  key: Key;
  registry: Array<RegistryRecord>;
};
type PluginRegistryV1Args = {
  externalRegistry: Array<ExternalRegistryRecordArgs>;
  key: KeyArgs;
  registry: Array<RegistryRecordArgs>;
};
declare function decodePluginRegistryV1<TAddress extends string = string>(encodedAccount: EncodedAccount<TAddress>): Account<PluginRegistryV1, TAddress>;
declare function decodePluginRegistryV1<TAddress extends string = string>(encodedAccount: MaybeEncodedAccount<TAddress>): MaybeAccount<PluginRegistryV1, TAddress>;
declare function fetchAllMaybePluginRegistryV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<MaybeAccount<PluginRegistryV1>[]>;
declare function fetchAllPluginRegistryV1(rpc: Parameters<typeof fetchEncodedAccounts>[0], addresses: Array<Address>, config?: FetchAccountsConfig): Promise<Account<PluginRegistryV1>[]>;
declare function fetchMaybePluginRegistryV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<MaybeAccount<PluginRegistryV1, TAddress>>;
declare function fetchPluginRegistryV1<TAddress extends string = string>(rpc: Parameters<typeof fetchEncodedAccount>[0], address: Address<TAddress>, config?: FetchAccountConfig): Promise<Account<PluginRegistryV1, TAddress>>;
declare function getPluginRegistryV1Codec(): Codec<PluginRegistryV1Args, PluginRegistryV1>;
declare function getPluginRegistryV1Decoder(): Decoder<PluginRegistryV1>;
declare function getPluginRegistryV1Encoder(): Encoder<PluginRegistryV1Args>;
//#endregion
//#region src/generated/errors/mplCore.d.ts
/** InvalidSystemProgram: Invalid System Program */
declare const MPL_CORE_ERROR__INVALID_SYSTEM_PROGRAM = 0;
/** DeserializationError: Error deserializing account */
declare const MPL_CORE_ERROR__DESERIALIZATION_ERROR = 1;
/** SerializationError: Error serializing account */
declare const MPL_CORE_ERROR__SERIALIZATION_ERROR = 2;
/** PluginsNotInitialized: Plugins not initialized */
declare const MPL_CORE_ERROR__PLUGINS_NOT_INITIALIZED = 3;
/** PluginNotFound: Plugin not found */
declare const MPL_CORE_ERROR__PLUGIN_NOT_FOUND = 4;
/** NumericalOverflow: Numerical Overflow */
declare const MPL_CORE_ERROR__NUMERICAL_OVERFLOW = 5;
/** IncorrectAccount: Incorrect account */
declare const MPL_CORE_ERROR__INCORRECT_ACCOUNT = 6;
/** IncorrectAssetHash: Incorrect asset hash */
declare const MPL_CORE_ERROR__INCORRECT_ASSET_HASH = 7;
/** InvalidPlugin: Invalid Plugin */
declare const MPL_CORE_ERROR__INVALID_PLUGIN = 8;
/** InvalidAuthority: Invalid Authority */
declare const MPL_CORE_ERROR__INVALID_AUTHORITY = 9;
/** AssetIsFrozen: Cannot transfer a frozen asset */
declare const MPL_CORE_ERROR__ASSET_IS_FROZEN = 10;
/** MissingCompressionProof: Missing compression proof */
declare const MPL_CORE_ERROR__MISSING_COMPRESSION_PROOF = 11;
/** CannotMigrateMasterWithSupply: Cannot migrate a master edition used for prints */
declare const MPL_CORE_ERROR__CANNOT_MIGRATE_MASTER_WITH_SUPPLY = 12;
/** CannotMigratePrints: Cannot migrate a print edition */
declare const MPL_CORE_ERROR__CANNOT_MIGRATE_PRINTS = 13;
/** CannotBurnCollection: Cannot burn a collection NFT */
declare const MPL_CORE_ERROR__CANNOT_BURN_COLLECTION = 14;
/** PluginAlreadyExists: Plugin already exists */
declare const MPL_CORE_ERROR__PLUGIN_ALREADY_EXISTS = 15;
/** NumericalOverflowError: Numerical overflow */
declare const MPL_CORE_ERROR__NUMERICAL_OVERFLOW_ERROR = 16;
/** AlreadyCompressed: Already compressed account */
declare const MPL_CORE_ERROR__ALREADY_COMPRESSED = 17;
/** AlreadyDecompressed: Already decompressed account */
declare const MPL_CORE_ERROR__ALREADY_DECOMPRESSED = 18;
/** InvalidCollection: Invalid Collection passed in */
declare const MPL_CORE_ERROR__INVALID_COLLECTION = 19;
/** MissingUpdateAuthority: Missing update authority */
declare const MPL_CORE_ERROR__MISSING_UPDATE_AUTHORITY = 20;
/** MissingNewOwner: Missing new owner */
declare const MPL_CORE_ERROR__MISSING_NEW_OWNER = 21;
/** MissingSystemProgram: Missing system program */
declare const MPL_CORE_ERROR__MISSING_SYSTEM_PROGRAM = 22;
/** NotAvailable: Feature not available */
declare const MPL_CORE_ERROR__NOT_AVAILABLE = 23;
/** InvalidAsset: Invalid Asset passed in */
declare const MPL_CORE_ERROR__INVALID_ASSET = 24;
/** MissingCollection: Missing collection */
declare const MPL_CORE_ERROR__MISSING_COLLECTION = 25;
/** NoApprovals: Neither the asset or any plugins have approved this operation */
declare const MPL_CORE_ERROR__NO_APPROVALS = 26;
/** CannotRedelegate: Plugin Manager cannot redelegate a delegated plugin without revoking first */
declare const MPL_CORE_ERROR__CANNOT_REDELEGATE = 27;
/** InvalidPluginSetting: Invalid setting for plugin */
declare const MPL_CORE_ERROR__INVALID_PLUGIN_SETTING = 28;
/** ConflictingAuthority: Cannot specify both an update authority and collection on an asset */
declare const MPL_CORE_ERROR__CONFLICTING_AUTHORITY = 29;
/** InvalidLogWrapperProgram: Invalid Log Wrapper Program */
declare const MPL_CORE_ERROR__INVALID_LOG_WRAPPER_PROGRAM = 30;
/** ExternalPluginAdapterNotFound: External Plugin Adapter not found */
declare const MPL_CORE_ERROR__EXTERNAL_PLUGIN_ADAPTER_NOT_FOUND = 31;
/** ExternalPluginAdapterAlreadyExists: External Plugin Adapter already exists */
declare const MPL_CORE_ERROR__EXTERNAL_PLUGIN_ADAPTER_ALREADY_EXISTS = 32;
/** MissingAsset: Missing asset needed for extra account PDA derivation */
declare const MPL_CORE_ERROR__MISSING_ASSET = 33;
/** MissingExternalPluginAdapterAccount: Missing account needed for external plugin adapter */
declare const MPL_CORE_ERROR__MISSING_EXTERNAL_PLUGIN_ADAPTER_ACCOUNT = 34;
/** OracleCanRejectOnly: Oracle external plugin adapter can only be configured to reject */
declare const MPL_CORE_ERROR__ORACLE_CAN_REJECT_ONLY = 35;
/** RequiresLifecycleCheck: External plugin adapter must have at least one lifecycle check */
declare const MPL_CORE_ERROR__REQUIRES_LIFECYCLE_CHECK = 36;
/** DuplicateLifecycleChecks: Duplicate lifecycle checks were provided for external plugin adapter  */
declare const MPL_CORE_ERROR__DUPLICATE_LIFECYCLE_CHECKS = 37;
/** InvalidOracleAccountData: Could not read from oracle account */
declare const MPL_CORE_ERROR__INVALID_ORACLE_ACCOUNT_DATA = 38;
/** UninitializedOracleAccount: Oracle account is uninitialized */
declare const MPL_CORE_ERROR__UNINITIALIZED_ORACLE_ACCOUNT = 39;
/** MissingSigner: Missing required signer for operation */
declare const MPL_CORE_ERROR__MISSING_SIGNER = 40;
/** InvalidPluginOperation: Invalid plugin operation */
declare const MPL_CORE_ERROR__INVALID_PLUGIN_OPERATION = 41;
/** CollectionMustBeEmpty: Collection must be empty to be burned */
declare const MPL_CORE_ERROR__COLLECTION_MUST_BE_EMPTY = 42;
/** TwoDataSources: Two data sources provided, only one is allowed */
declare const MPL_CORE_ERROR__TWO_DATA_SOURCES = 43;
/** UnsupportedOperation: External Plugin does not support this operation */
declare const MPL_CORE_ERROR__UNSUPPORTED_OPERATION = 44;
/** NoDataSources: No data sources provided, one is required */
declare const MPL_CORE_ERROR__NO_DATA_SOURCES = 45;
/** InvalidPluginAdapterTarget: This plugin adapter cannot be added to an Asset */
declare const MPL_CORE_ERROR__INVALID_PLUGIN_ADAPTER_TARGET = 46;
/** CannotAddDataSection: Cannot add a Data Section without a linked external plugin */
declare const MPL_CORE_ERROR__CANNOT_ADD_DATA_SECTION = 47;
/** PermanentDelegatesPreventMove: Cannot move asset to collection with permanent delegates */
declare const MPL_CORE_ERROR__PERMANENT_DELEGATES_PREVENT_MOVE = 48;
/** InvalidExecutePda: Invalid Signing PDA for Asset or Collection Execute */
declare const MPL_CORE_ERROR__INVALID_EXECUTE_PDA = 49;
/** BlockedByBubblegumV2: Bubblegum V2 Plugin limits other plugins */
declare const MPL_CORE_ERROR__BLOCKED_BY_BUBBLEGUM_V2 = 50;
type MplCoreError = typeof MPL_CORE_ERROR__ALREADY_COMPRESSED | typeof MPL_CORE_ERROR__ALREADY_DECOMPRESSED | typeof MPL_CORE_ERROR__ASSET_IS_FROZEN | typeof MPL_CORE_ERROR__BLOCKED_BY_BUBBLEGUM_V2 | typeof MPL_CORE_ERROR__CANNOT_ADD_DATA_SECTION | typeof MPL_CORE_ERROR__CANNOT_BURN_COLLECTION | typeof MPL_CORE_ERROR__CANNOT_MIGRATE_MASTER_WITH_SUPPLY | typeof MPL_CORE_ERROR__CANNOT_MIGRATE_PRINTS | typeof MPL_CORE_ERROR__CANNOT_REDELEGATE | typeof MPL_CORE_ERROR__COLLECTION_MUST_BE_EMPTY | typeof MPL_CORE_ERROR__CONFLICTING_AUTHORITY | typeof MPL_CORE_ERROR__DESERIALIZATION_ERROR | typeof MPL_CORE_ERROR__DUPLICATE_LIFECYCLE_CHECKS | typeof MPL_CORE_ERROR__EXTERNAL_PLUGIN_ADAPTER_ALREADY_EXISTS | typeof MPL_CORE_ERROR__EXTERNAL_PLUGIN_ADAPTER_NOT_FOUND | typeof MPL_CORE_ERROR__INCORRECT_ACCOUNT | typeof MPL_CORE_ERROR__INCORRECT_ASSET_HASH | typeof MPL_CORE_ERROR__INVALID_ASSET | typeof MPL_CORE_ERROR__INVALID_AUTHORITY | typeof MPL_CORE_ERROR__INVALID_COLLECTION | typeof MPL_CORE_ERROR__INVALID_EXECUTE_PDA | typeof MPL_CORE_ERROR__INVALID_LOG_WRAPPER_PROGRAM | typeof MPL_CORE_ERROR__INVALID_ORACLE_ACCOUNT_DATA | typeof MPL_CORE_ERROR__INVALID_PLUGIN | typeof MPL_CORE_ERROR__INVALID_PLUGIN_ADAPTER_TARGET | typeof MPL_CORE_ERROR__INVALID_PLUGIN_OPERATION | typeof MPL_CORE_ERROR__INVALID_PLUGIN_SETTING | typeof MPL_CORE_ERROR__INVALID_SYSTEM_PROGRAM | typeof MPL_CORE_ERROR__MISSING_ASSET | typeof MPL_CORE_ERROR__MISSING_COLLECTION | typeof MPL_CORE_ERROR__MISSING_COMPRESSION_PROOF | typeof MPL_CORE_ERROR__MISSING_EXTERNAL_PLUGIN_ADAPTER_ACCOUNT | typeof MPL_CORE_ERROR__MISSING_NEW_OWNER | typeof MPL_CORE_ERROR__MISSING_SIGNER | typeof MPL_CORE_ERROR__MISSING_SYSTEM_PROGRAM | typeof MPL_CORE_ERROR__MISSING_UPDATE_AUTHORITY | typeof MPL_CORE_ERROR__NO_APPROVALS | typeof MPL_CORE_ERROR__NO_DATA_SOURCES | typeof MPL_CORE_ERROR__NOT_AVAILABLE | typeof MPL_CORE_ERROR__NUMERICAL_OVERFLOW | typeof MPL_CORE_ERROR__NUMERICAL_OVERFLOW_ERROR | typeof MPL_CORE_ERROR__ORACLE_CAN_REJECT_ONLY | typeof MPL_CORE_ERROR__PERMANENT_DELEGATES_PREVENT_MOVE | typeof MPL_CORE_ERROR__PLUGIN_ALREADY_EXISTS | typeof MPL_CORE_ERROR__PLUGIN_NOT_FOUND | typeof MPL_CORE_ERROR__PLUGINS_NOT_INITIALIZED | typeof MPL_CORE_ERROR__REQUIRES_LIFECYCLE_CHECK | typeof MPL_CORE_ERROR__SERIALIZATION_ERROR | typeof MPL_CORE_ERROR__TWO_DATA_SOURCES | typeof MPL_CORE_ERROR__UNINITIALIZED_ORACLE_ACCOUNT | typeof MPL_CORE_ERROR__UNSUPPORTED_OPERATION;
declare function getMplCoreErrorMessage(code: MplCoreError): string;
declare function isMplCoreError<TProgramErrorCode extends MplCoreError>(error: unknown, transactionMessage: {
  instructions: Record<number, {
    programAddress: Address;
  }>;
}, code?: TProgramErrorCode): error is Readonly<{
  context: Readonly<{
    code: TProgramErrorCode;
  }>;
}> & SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM>;
//#endregion
//#region src/generated/programs/mplCore.d.ts
declare const MPL_CORE_PROGRAM_ADDRESS: Address<"CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d">;
declare enum MplCoreAccount {
  PluginHeaderV1 = 0,
  PluginRegistryV1 = 1,
  AssetV1 = 2,
  CollectionV1 = 3,
  HashedAssetV1 = 4,
  AssetSigner = 5
}
declare enum MplCoreInstruction {
  CreateV1 = 0,
  CreateCollectionV1 = 1,
  AddPluginV1 = 2,
  AddCollectionPluginV1 = 3,
  RemovePluginV1 = 4,
  RemoveCollectionPluginV1 = 5,
  UpdatePluginV1 = 6,
  UpdateCollectionPluginV1 = 7,
  ApprovePluginAuthorityV1 = 8,
  ApproveCollectionPluginAuthorityV1 = 9,
  RevokePluginAuthorityV1 = 10,
  RevokeCollectionPluginAuthorityV1 = 11,
  BurnV1 = 12,
  BurnCollectionV1 = 13,
  TransferV1 = 14,
  UpdateV1 = 15,
  UpdateCollectionV1 = 16,
  CompressV1 = 17,
  DecompressV1 = 18,
  Collect = 19,
  CreateV2 = 20,
  CreateCollectionV2 = 21,
  AddExternalPluginAdapterV1 = 22,
  AddCollectionExternalPluginAdapterV1 = 23,
  RemoveExternalPluginAdapterV1 = 24,
  RemoveCollectionExternalPluginAdapterV1 = 25,
  UpdateExternalPluginAdapterV1 = 26,
  UpdateCollectionExternalPluginAdapterV1 = 27,
  WriteExternalPluginAdapterDataV1 = 28,
  WriteCollectionExternalPluginAdapterDataV1 = 29,
  UpdateV2 = 30,
  ExecuteV1 = 31,
  UpdateCollectionInfoV1 = 32
}
type ParsedMplCoreInstruction<TProgram extends string = 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'> = ({
  instructionType: MplCoreInstruction.AddCollectionExternalPluginAdapterV1;
} & ParsedAddCollectionExternalPluginAdapterV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.AddCollectionPluginV1;
} & ParsedAddCollectionPluginV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.AddExternalPluginAdapterV1;
} & ParsedAddExternalPluginAdapterV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.AddPluginV1;
} & ParsedAddPluginV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.ApproveCollectionPluginAuthorityV1;
} & ParsedApproveCollectionPluginAuthorityV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.ApprovePluginAuthorityV1;
} & ParsedApprovePluginAuthorityV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.BurnCollectionV1;
} & ParsedBurnCollectionV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.BurnV1;
} & ParsedBurnV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.Collect;
} & ParsedCollectInstruction<TProgram>) | ({
  instructionType: MplCoreInstruction.CompressV1;
} & ParsedCompressV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.CreateCollectionV1;
} & ParsedCreateCollectionV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.CreateCollectionV2;
} & ParsedCreateCollectionV2Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.CreateV1;
} & ParsedCreateV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.CreateV2;
} & ParsedCreateV2Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.DecompressV1;
} & ParsedDecompressV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.ExecuteV1;
} & ParsedExecuteV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.RemoveCollectionExternalPluginAdapterV1;
} & ParsedRemoveCollectionExternalPluginAdapterV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.RemoveCollectionPluginV1;
} & ParsedRemoveCollectionPluginV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.RemoveExternalPluginAdapterV1;
} & ParsedRemoveExternalPluginAdapterV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.RemovePluginV1;
} & ParsedRemovePluginV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.RevokeCollectionPluginAuthorityV1;
} & ParsedRevokeCollectionPluginAuthorityV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.RevokePluginAuthorityV1;
} & ParsedRevokePluginAuthorityV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.TransferV1;
} & ParsedTransferV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdateCollectionExternalPluginAdapterV1;
} & ParsedUpdateCollectionExternalPluginAdapterV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdateCollectionInfoV1;
} & ParsedUpdateCollectionInfoV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdateCollectionPluginV1;
} & ParsedUpdateCollectionPluginV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdateCollectionV1;
} & ParsedUpdateCollectionV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdateExternalPluginAdapterV1;
} & ParsedUpdateExternalPluginAdapterV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdatePluginV1;
} & ParsedUpdatePluginV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdateV1;
} & ParsedUpdateV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.UpdateV2;
} & ParsedUpdateV2Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.WriteCollectionExternalPluginAdapterDataV1;
} & ParsedWriteCollectionExternalPluginAdapterDataV1Instruction<TProgram>) | ({
  instructionType: MplCoreInstruction.WriteExternalPluginAdapterDataV1;
} & ParsedWriteExternalPluginAdapterDataV1Instruction<TProgram>);
declare function identifyMplCoreInstruction(instruction: {
  data: ReadonlyUint8Array;
} | ReadonlyUint8Array): MplCoreInstruction;
//#endregion
//#region src/generated/instructions/addCollectionExternalPluginAdapterV1.d.ts
declare const ADD_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR = 23;
type AddCollectionExternalPluginAdapterV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>;
  initInfo: AddCollectionExternalPluginAdapterV1InstructionDataArgs['initInfo']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type AddCollectionExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type AddCollectionExternalPluginAdapterV1InstructionData = {
  discriminator: number;
  initInfo: BaseExternalPluginAdapterInitInfo;
};
type AddCollectionExternalPluginAdapterV1InstructionDataArgs = {
  initInfo: BaseExternalPluginAdapterInitInfoArgs;
};
type ParsedAddCollectionExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: AddCollectionExternalPluginAdapterV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getAddCollectionExternalPluginAdapterV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getAddCollectionExternalPluginAdapterV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: AddCollectionExternalPluginAdapterV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): AddCollectionExternalPluginAdapterV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getAddCollectionExternalPluginAdapterV1InstructionDataCodec(): Codec<AddCollectionExternalPluginAdapterV1InstructionDataArgs, AddCollectionExternalPluginAdapterV1InstructionData>;
declare function getAddCollectionExternalPluginAdapterV1InstructionDataDecoder(): Decoder<AddCollectionExternalPluginAdapterV1InstructionData>;
declare function getAddCollectionExternalPluginAdapterV1InstructionDataEncoder(): Encoder<AddCollectionExternalPluginAdapterV1InstructionDataArgs>;
declare function parseAddCollectionExternalPluginAdapterV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedAddCollectionExternalPluginAdapterV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/addCollectionPluginV1.d.ts
declare const ADD_COLLECTION_PLUGIN_V1_DISCRIMINATOR = 3;
type AddCollectionPluginV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>;
  initAuthority?: AddCollectionPluginV1InstructionDataArgs['initAuthority']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugin: AddCollectionPluginV1InstructionDataArgs['plugin']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type AddCollectionPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type AddCollectionPluginV1InstructionData = {
  discriminator: number;
  initAuthority: Option<BasePluginAuthority>;
  plugin: Plugin;
};
type AddCollectionPluginV1InstructionDataArgs = {
  initAuthority?: OptionOrNullable<BasePluginAuthorityArgs>;
  plugin: PluginArgs;
};
type ParsedAddCollectionPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: AddCollectionPluginV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getAddCollectionPluginV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getAddCollectionPluginV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: AddCollectionPluginV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): AddCollectionPluginV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getAddCollectionPluginV1InstructionDataCodec(): Codec<AddCollectionPluginV1InstructionDataArgs, AddCollectionPluginV1InstructionData>;
declare function getAddCollectionPluginV1InstructionDataDecoder(): Decoder<AddCollectionPluginV1InstructionData>;
declare function getAddCollectionPluginV1InstructionDataEncoder(): Encoder<AddCollectionPluginV1InstructionDataArgs>;
declare function parseAddCollectionPluginV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedAddCollectionPluginV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/addExternalPluginAdapterV1.d.ts
declare const ADD_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR = 22;
type AddExternalPluginAdapterV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  initInfo: AddExternalPluginAdapterV1InstructionDataArgs['initInfo']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type AddExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type AddExternalPluginAdapterV1InstructionData = {
  discriminator: number;
  initInfo: BaseExternalPluginAdapterInitInfo;
};
type AddExternalPluginAdapterV1InstructionDataArgs = {
  initInfo: BaseExternalPluginAdapterInitInfoArgs;
};
type ParsedAddExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: AddExternalPluginAdapterV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getAddExternalPluginAdapterV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getAddExternalPluginAdapterV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: AddExternalPluginAdapterV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): AddExternalPluginAdapterV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getAddExternalPluginAdapterV1InstructionDataCodec(): Codec<AddExternalPluginAdapterV1InstructionDataArgs, AddExternalPluginAdapterV1InstructionData>;
declare function getAddExternalPluginAdapterV1InstructionDataDecoder(): Decoder<AddExternalPluginAdapterV1InstructionData>;
declare function getAddExternalPluginAdapterV1InstructionDataEncoder(): Encoder<AddExternalPluginAdapterV1InstructionDataArgs>;
declare function parseAddExternalPluginAdapterV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedAddExternalPluginAdapterV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/addPluginV1.d.ts
declare const ADD_PLUGIN_V1_DISCRIMINATOR = 2;
type AddPluginV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  initAuthority?: AddPluginV1InstructionDataArgs['initAuthority']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugin: AddPluginV1InstructionDataArgs['plugin']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type AddPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type AddPluginV1InstructionData = {
  discriminator: number;
  initAuthority: Option<BasePluginAuthority>;
  plugin: Plugin;
};
type AddPluginV1InstructionDataArgs = {
  initAuthority?: OptionOrNullable<BasePluginAuthorityArgs>;
  plugin: PluginArgs;
};
type ParsedAddPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: AddPluginV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getAddPluginV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getAddPluginV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: AddPluginV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): AddPluginV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getAddPluginV1InstructionDataCodec(): Codec<AddPluginV1InstructionDataArgs, AddPluginV1InstructionData>;
declare function getAddPluginV1InstructionDataDecoder(): Decoder<AddPluginV1InstructionData>;
declare function getAddPluginV1InstructionDataEncoder(): Encoder<AddPluginV1InstructionDataArgs>;
declare function parseAddPluginV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedAddPluginV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/approveCollectionPluginAuthorityV1.d.ts
declare const APPROVE_COLLECTION_PLUGIN_AUTHORITY_V1_DISCRIMINATOR = 9;
type ApproveCollectionPluginAuthorityV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>;
  newAuthority: ApproveCollectionPluginAuthorityV1InstructionDataArgs['newAuthority']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  pluginType: ApproveCollectionPluginAuthorityV1InstructionDataArgs['pluginType']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type ApproveCollectionPluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type ApproveCollectionPluginAuthorityV1InstructionData = {
  discriminator: number;
  newAuthority: BasePluginAuthority;
  pluginType: PluginType;
};
type ApproveCollectionPluginAuthorityV1InstructionDataArgs = {
  newAuthority: BasePluginAuthorityArgs;
  pluginType: PluginTypeArgs;
};
type ParsedApproveCollectionPluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: ApproveCollectionPluginAuthorityV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getApproveCollectionPluginAuthorityV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getApproveCollectionPluginAuthorityV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: ApproveCollectionPluginAuthorityV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): ApproveCollectionPluginAuthorityV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getApproveCollectionPluginAuthorityV1InstructionDataCodec(): Codec<ApproveCollectionPluginAuthorityV1InstructionDataArgs, ApproveCollectionPluginAuthorityV1InstructionData>;
declare function getApproveCollectionPluginAuthorityV1InstructionDataDecoder(): Decoder<ApproveCollectionPluginAuthorityV1InstructionData>;
declare function getApproveCollectionPluginAuthorityV1InstructionDataEncoder(): Encoder<ApproveCollectionPluginAuthorityV1InstructionDataArgs>;
declare function parseApproveCollectionPluginAuthorityV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedApproveCollectionPluginAuthorityV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/approvePluginAuthorityV1.d.ts
declare const APPROVE_PLUGIN_AUTHORITY_V1_DISCRIMINATOR = 8;
type ApprovePluginAuthorityV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>;
  newAuthority: ApprovePluginAuthorityV1InstructionDataArgs['newAuthority']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  pluginType: ApprovePluginAuthorityV1InstructionDataArgs['pluginType']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type ApprovePluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type ApprovePluginAuthorityV1InstructionData = {
  discriminator: number;
  newAuthority: BasePluginAuthority;
  pluginType: PluginType;
};
type ApprovePluginAuthorityV1InstructionDataArgs = {
  newAuthority: BasePluginAuthorityArgs;
  pluginType: PluginTypeArgs;
};
type ParsedApprovePluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: ApprovePluginAuthorityV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getApprovePluginAuthorityV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getApprovePluginAuthorityV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: ApprovePluginAuthorityV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): ApprovePluginAuthorityV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getApprovePluginAuthorityV1InstructionDataCodec(): Codec<ApprovePluginAuthorityV1InstructionDataArgs, ApprovePluginAuthorityV1InstructionData>;
declare function getApprovePluginAuthorityV1InstructionDataDecoder(): Decoder<ApprovePluginAuthorityV1InstructionData>;
declare function getApprovePluginAuthorityV1InstructionDataEncoder(): Encoder<ApprovePluginAuthorityV1InstructionDataArgs>;
declare function parseApprovePluginAuthorityV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedApprovePluginAuthorityV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/burnCollectionV1.d.ts
declare const BURN_COLLECTION_V1_DISCRIMINATOR = 13;
type BurnCollectionV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>;
  compressionProof: BurnCollectionV1InstructionDataArgs['compressionProof']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
};
type BurnCollectionV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & WritableSignerAccount<TAccountAuthority> : TAccountAuthority, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type BurnCollectionV1InstructionData = {
  compressionProof: Option<CompressionProof>;
  discriminator: number;
};
type BurnCollectionV1InstructionDataArgs = {
  compressionProof: OptionOrNullable<CompressionProofArgs>;
};
type ParsedBurnCollectionV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[3] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1];
  };
  data: BurnCollectionV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getBurnCollectionV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getBurnCollectionV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: BurnCollectionV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): BurnCollectionV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountLogWrapper>;
declare function getBurnCollectionV1InstructionDataCodec(): Codec<BurnCollectionV1InstructionDataArgs, BurnCollectionV1InstructionData>;
declare function getBurnCollectionV1InstructionDataDecoder(): Decoder<BurnCollectionV1InstructionData>;
declare function getBurnCollectionV1InstructionDataEncoder(): Encoder<BurnCollectionV1InstructionDataArgs>;
declare function parseBurnCollectionV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedBurnCollectionV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/burnV1.d.ts
declare const BURN_V1_DISCRIMINATOR = 12;
type BurnV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  compressionProof?: BurnV1InstructionDataArgs['compressionProof']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type BurnV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = string, TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type BurnV1InstructionData = {
  compressionProof: Option<CompressionProof>;
  discriminator: number;
};
type BurnV1InstructionDataArgs = {
  compressionProof?: OptionOrNullable<CompressionProofArgs>;
};
type ParsedBurnV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram?: TAccountMetas[4] | undefined;
  };
  data: BurnV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getBurnV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getBurnV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: BurnV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): BurnV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getBurnV1InstructionDataCodec(): Codec<BurnV1InstructionDataArgs, BurnV1InstructionData>;
declare function getBurnV1InstructionDataDecoder(): Decoder<BurnV1InstructionData>;
declare function getBurnV1InstructionDataEncoder(): Encoder<BurnV1InstructionDataArgs>;
declare function parseBurnV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedBurnV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/collect.d.ts
declare const COLLECT_DISCRIMINATOR = 19;
type CollectInput<TAccountRecipient1 extends string = string, TAccountRecipient2 extends string = string> = {
  /** The address of the recipient 1 */recipient1?: Address<TAccountRecipient1>; /** The address of the recipient 2 */
  recipient2?: Address<TAccountRecipient2>;
};
type CollectInstruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountRecipient1 extends AccountMeta<string> | string = '8AT6o8Qk5T9QnZvPThMrF9bcCQLTGkyGvVZZzHgCw11v', TAccountRecipient2 extends AccountMeta<string> | string = 'MmHsqX4LxTfifxoH8BVRLUKrwDn1LPCac6YcCZTHhwt', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountRecipient1 extends string ? WritableAccount<TAccountRecipient1> : TAccountRecipient1, TAccountRecipient2 extends string ? WritableAccount<TAccountRecipient2> : TAccountRecipient2, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type CollectInstructionData = {
  discriminator: number;
};
type CollectInstructionDataArgs = {};
type ParsedCollectInstruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the recipient 1 */recipient1: TAccountMetas[0]; /** The address of the recipient 2 */
    recipient2: TAccountMetas[1];
  };
  data: CollectInstructionData;
  programAddress: Address<TProgram>;
};
declare function getCollectDiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getCollectInstruction<TAccountRecipient1 extends string, TAccountRecipient2 extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: CollectInput<TAccountRecipient1, TAccountRecipient2>, config?: {
  programAddress?: TProgramAddress;
}): CollectInstruction<TProgramAddress, TAccountRecipient1, TAccountRecipient2>;
declare function getCollectInstructionDataCodec(): FixedSizeCodec<CollectInstructionDataArgs, CollectInstructionData>;
declare function getCollectInstructionDataDecoder(): FixedSizeDecoder<CollectInstructionData>;
declare function getCollectInstructionDataEncoder(): FixedSizeEncoder<CollectInstructionDataArgs>;
declare function parseCollectInstruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedCollectInstruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/compressV1.d.ts
declare const COMPRESS_V1_DISCRIMINATOR = 17;
type CompressV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account receiving the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type CompressV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? ReadonlyAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type CompressV1InstructionData = {
  discriminator: number;
};
type CompressV1InstructionDataArgs = {};
type ParsedCompressV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account receiving the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: CompressV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getCompressV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getCompressV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: CompressV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): CompressV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getCompressV1InstructionDataCodec(): FixedSizeCodec<CompressV1InstructionDataArgs, CompressV1InstructionData>;
declare function getCompressV1InstructionDataDecoder(): FixedSizeDecoder<CompressV1InstructionData>;
declare function getCompressV1InstructionDataEncoder(): FixedSizeEncoder<CompressV1InstructionDataArgs>;
declare function parseCompressV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedCompressV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/createCollectionV1.d.ts
declare const CREATE_COLLECTION_V1_DISCRIMINATOR = 1;
type CreateCollectionV1Input<TAccountCollection extends string = string, TAccountUpdateAuthority extends string = string, TAccountPayer extends string = string, TAccountSystemProgram extends string = string> = {
  /** The address of the new asset */collection: TransactionSigner<TAccountCollection>;
  name: CreateCollectionV1InstructionDataArgs['name']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugins?: CreateCollectionV1InstructionDataArgs['plugins']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>; /** The authority of the new asset */
  updateAuthority?: Address<TAccountUpdateAuthority>;
  uri: CreateCollectionV1InstructionDataArgs['uri'];
};
type CreateCollectionV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountUpdateAuthority extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? AccountSignerMeta<TAccountCollection> & WritableSignerAccount<TAccountCollection> : TAccountCollection, TAccountUpdateAuthority extends string ? ReadonlyAccount<TAccountUpdateAuthority> : TAccountUpdateAuthority, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type CreateCollectionV1InstructionData = {
  discriminator: number;
  name: string;
  plugins: Option<Array<PluginAuthorityPair>>;
  uri: string;
};
type CreateCollectionV1InstructionDataArgs = {
  name: string;
  plugins?: OptionOrNullable<Array<PluginAuthorityPairArgs>>;
  uri: string;
};
type ParsedCreateCollectionV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the new asset */collection: TAccountMetas[0]; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[3]; /** The authority of the new asset */
    updateAuthority?: TAccountMetas[1] | undefined;
  };
  data: CreateCollectionV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getCreateCollectionV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getCreateCollectionV1Instruction<TAccountCollection extends string, TAccountUpdateAuthority extends string, TAccountPayer extends string, TAccountSystemProgram extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: CreateCollectionV1Input<TAccountCollection, TAccountUpdateAuthority, TAccountPayer, TAccountSystemProgram>, config?: {
  programAddress?: TProgramAddress;
}): CreateCollectionV1Instruction<TProgramAddress, TAccountCollection, TAccountUpdateAuthority, TAccountPayer, TAccountSystemProgram>;
declare function getCreateCollectionV1InstructionDataCodec(): Codec<CreateCollectionV1InstructionDataArgs, CreateCollectionV1InstructionData>;
declare function getCreateCollectionV1InstructionDataDecoder(): Decoder<CreateCollectionV1InstructionData>;
declare function getCreateCollectionV1InstructionDataEncoder(): Encoder<CreateCollectionV1InstructionDataArgs>;
declare function parseCreateCollectionV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedCreateCollectionV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/createCollectionV2.d.ts
declare const CREATE_COLLECTION_V2_DISCRIMINATOR = 21;
type CreateCollectionV2Input<TAccountCollection extends string = string, TAccountUpdateAuthority extends string = string, TAccountPayer extends string = string, TAccountSystemProgram extends string = string> = {
  /** The address of the new asset */collection: TransactionSigner<TAccountCollection>;
  externalPluginAdapters?: CreateCollectionV2InstructionDataArgs['externalPluginAdapters'];
  name: CreateCollectionV2InstructionDataArgs['name']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugins?: CreateCollectionV2InstructionDataArgs['plugins']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>; /** The authority of the new asset */
  updateAuthority?: Address<TAccountUpdateAuthority>;
  uri: CreateCollectionV2InstructionDataArgs['uri'];
};
type CreateCollectionV2Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountUpdateAuthority extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? AccountSignerMeta<TAccountCollection> & WritableSignerAccount<TAccountCollection> : TAccountCollection, TAccountUpdateAuthority extends string ? ReadonlyAccount<TAccountUpdateAuthority> : TAccountUpdateAuthority, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type CreateCollectionV2InstructionData = {
  discriminator: number;
  externalPluginAdapters: Option<Array<BaseExternalPluginAdapterInitInfo>>;
  name: string;
  plugins: Option<Array<PluginAuthorityPair>>;
  uri: string;
};
type CreateCollectionV2InstructionDataArgs = {
  externalPluginAdapters?: OptionOrNullable<Array<BaseExternalPluginAdapterInitInfoArgs>>;
  name: string;
  plugins?: OptionOrNullable<Array<PluginAuthorityPairArgs>>;
  uri: string;
};
type ParsedCreateCollectionV2Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the new asset */collection: TAccountMetas[0]; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[3]; /** The authority of the new asset */
    updateAuthority?: TAccountMetas[1] | undefined;
  };
  data: CreateCollectionV2InstructionData;
  programAddress: Address<TProgram>;
};
declare function getCreateCollectionV2DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getCreateCollectionV2Instruction<TAccountCollection extends string, TAccountUpdateAuthority extends string, TAccountPayer extends string, TAccountSystemProgram extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: CreateCollectionV2Input<TAccountCollection, TAccountUpdateAuthority, TAccountPayer, TAccountSystemProgram>, config?: {
  programAddress?: TProgramAddress;
}): CreateCollectionV2Instruction<TProgramAddress, TAccountCollection, TAccountUpdateAuthority, TAccountPayer, TAccountSystemProgram>;
declare function getCreateCollectionV2InstructionDataCodec(): Codec<CreateCollectionV2InstructionDataArgs, CreateCollectionV2InstructionData>;
declare function getCreateCollectionV2InstructionDataDecoder(): Decoder<CreateCollectionV2InstructionData>;
declare function getCreateCollectionV2InstructionDataEncoder(): Encoder<CreateCollectionV2InstructionDataArgs>;
declare function parseCreateCollectionV2Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedCreateCollectionV2Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/createV1.d.ts
declare const CREATE_V1_DISCRIMINATOR = 0;
type CreateV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountAuthority extends string = string, TAccountPayer extends string = string, TAccountOwner extends string = string, TAccountUpdateAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the new asset */asset: TransactionSigner<TAccountAsset>; /** The authority signing for creation */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  dataState?: CreateV1InstructionDataArgs['dataState']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>;
  name: CreateV1InstructionDataArgs['name']; /** The owner of the new asset. Defaults to the authority if not present. */
  owner?: Address<TAccountOwner>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugins?: CreateV1InstructionDataArgs['plugins']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>; /** The authority on the new asset */
  updateAuthority?: Address<TAccountUpdateAuthority>;
  uri: CreateV1InstructionDataArgs['uri'];
};
type CreateV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountOwner extends AccountMeta<string> | string = string, TAccountUpdateAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? AccountSignerMeta<TAccountAsset> & WritableSignerAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountOwner extends string ? ReadonlyAccount<TAccountOwner> : TAccountOwner, TAccountUpdateAuthority extends string ? ReadonlyAccount<TAccountUpdateAuthority> : TAccountUpdateAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type CreateV1InstructionData = {
  dataState: DataState;
  discriminator: number;
  name: string;
  plugins: Option<Array<PluginAuthorityPair>>;
  uri: string;
};
type CreateV1InstructionDataArgs = {
  dataState?: DataStateArgs;
  name: string;
  plugins?: OptionOrNullable<Array<PluginAuthorityPairArgs>>;
  uri: string;
};
type ParsedCreateV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the new asset */asset: TAccountMetas[0]; /** The authority signing for creation */
    authority?: TAccountMetas[2] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[7] | undefined; /** The owner of the new asset. Defaults to the authority if not present. */
    owner?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[3]; /** The system program */
    systemProgram: TAccountMetas[6]; /** The authority on the new asset */
    updateAuthority?: TAccountMetas[5] | undefined;
  };
  data: CreateV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getCreateV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getCreateV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountAuthority extends string, TAccountPayer extends string, TAccountOwner extends string, TAccountUpdateAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: CreateV1Input<TAccountAsset, TAccountCollection, TAccountAuthority, TAccountPayer, TAccountOwner, TAccountUpdateAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): CreateV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountAuthority, TAccountPayer, TAccountOwner, TAccountUpdateAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getCreateV1InstructionDataCodec(): Codec<CreateV1InstructionDataArgs, CreateV1InstructionData>;
declare function getCreateV1InstructionDataDecoder(): Decoder<CreateV1InstructionData>;
declare function getCreateV1InstructionDataEncoder(): Encoder<CreateV1InstructionDataArgs>;
declare function parseCreateV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedCreateV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/createV2.d.ts
declare const CREATE_V2_DISCRIMINATOR = 20;
type CreateV2Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountAuthority extends string = string, TAccountPayer extends string = string, TAccountOwner extends string = string, TAccountUpdateAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the new asset */asset: TransactionSigner<TAccountAsset>; /** The authority signing for creation */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  dataState?: CreateV2InstructionDataArgs['dataState'];
  externalPluginAdapters?: CreateV2InstructionDataArgs['externalPluginAdapters']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>;
  name: CreateV2InstructionDataArgs['name']; /** The owner of the new asset. Defaults to the authority if not present. */
  owner?: Address<TAccountOwner>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugins?: CreateV2InstructionDataArgs['plugins']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>; /** The authority on the new asset */
  updateAuthority?: Address<TAccountUpdateAuthority>;
  uri: CreateV2InstructionDataArgs['uri'];
};
type CreateV2Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountOwner extends AccountMeta<string> | string = string, TAccountUpdateAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? AccountSignerMeta<TAccountAsset> & WritableSignerAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountOwner extends string ? ReadonlyAccount<TAccountOwner> : TAccountOwner, TAccountUpdateAuthority extends string ? ReadonlyAccount<TAccountUpdateAuthority> : TAccountUpdateAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type CreateV2InstructionData = {
  dataState: DataState;
  discriminator: number;
  externalPluginAdapters: Option<Array<BaseExternalPluginAdapterInitInfo>>;
  name: string;
  plugins: Option<Array<PluginAuthorityPair>>;
  uri: string;
};
type CreateV2InstructionDataArgs = {
  dataState?: DataStateArgs;
  externalPluginAdapters?: OptionOrNullable<Array<BaseExternalPluginAdapterInitInfoArgs>>;
  name: string;
  plugins?: OptionOrNullable<Array<PluginAuthorityPairArgs>>;
  uri: string;
};
type ParsedCreateV2Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the new asset */asset: TAccountMetas[0]; /** The authority signing for creation */
    authority?: TAccountMetas[2] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[7] | undefined; /** The owner of the new asset. Defaults to the authority if not present. */
    owner?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[3]; /** The system program */
    systemProgram: TAccountMetas[6]; /** The authority on the new asset */
    updateAuthority?: TAccountMetas[5] | undefined;
  };
  data: CreateV2InstructionData;
  programAddress: Address<TProgram>;
};
declare function getCreateV2DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getCreateV2Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountAuthority extends string, TAccountPayer extends string, TAccountOwner extends string, TAccountUpdateAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: CreateV2Input<TAccountAsset, TAccountCollection, TAccountAuthority, TAccountPayer, TAccountOwner, TAccountUpdateAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): CreateV2Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountAuthority, TAccountPayer, TAccountOwner, TAccountUpdateAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getCreateV2InstructionDataCodec(): Codec<CreateV2InstructionDataArgs, CreateV2InstructionData>;
declare function getCreateV2InstructionDataDecoder(): Decoder<CreateV2InstructionData>;
declare function getCreateV2InstructionDataEncoder(): Encoder<CreateV2InstructionDataArgs>;
declare function parseCreateV2Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedCreateV2Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/decompressV1.d.ts
declare const DECOMPRESS_V1_DISCRIMINATOR = 18;
type DecompressV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  compressionProof: DecompressV1InstructionDataArgs['compressionProof']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type DecompressV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? ReadonlyAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type DecompressV1InstructionData = {
  compressionProof: CompressionProof;
  discriminator: number;
};
type DecompressV1InstructionDataArgs = {
  compressionProof: CompressionProofArgs;
};
type ParsedDecompressV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: DecompressV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getDecompressV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getDecompressV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: DecompressV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): DecompressV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getDecompressV1InstructionDataCodec(): Codec<DecompressV1InstructionDataArgs, DecompressV1InstructionData>;
declare function getDecompressV1InstructionDataDecoder(): Decoder<DecompressV1InstructionData>;
declare function getDecompressV1InstructionDataEncoder(): Encoder<DecompressV1InstructionDataArgs>;
declare function parseDecompressV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedDecompressV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/executeV1.d.ts
declare const EXECUTE_V1_DISCRIMINATOR = 31;
type ExecuteV1AsyncInput<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountAssetSigner extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountProgramId extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The signing PDA for the asset */
  assetSigner?: Address<TAccountAssetSigner>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  instructionData: ExecuteV1InstructionDataArgs['instructionData']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The program id of the instruction */
  programId?: Address<TAccountProgramId>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type ExecuteV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountAssetSigner extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountProgramId extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The signing PDA for the asset */
  assetSigner: Address<TAccountAssetSigner>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  instructionData: ExecuteV1InstructionDataArgs['instructionData']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The program id of the instruction */
  programId?: Address<TAccountProgramId>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type ExecuteV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountAssetSigner extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountProgramId extends AccountMeta<string> | string = 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountAssetSigner extends string ? ReadonlyAccount<TAccountAssetSigner> : TAccountAssetSigner, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountProgramId extends string ? ReadonlyAccount<TAccountProgramId> : TAccountProgramId, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type ExecuteV1InstructionData = {
  discriminator: number;
  instructionData: ReadonlyUint8Array;
};
type ExecuteV1InstructionDataArgs = {
  instructionData: ReadonlyUint8Array;
};
type ParsedExecuteV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The signing PDA for the asset */
    assetSigner: TAccountMetas[2]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[4] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[3]; /** The program id of the instruction */
    programId: TAccountMetas[6]; /** The system program */
    systemProgram: TAccountMetas[5];
  };
  data: ExecuteV1InstructionData;
  programAddress: Address<TProgram>;
};
declare function getExecuteV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getExecuteV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountAssetSigner extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountProgramId extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: ExecuteV1Input<TAccountAsset, TAccountCollection, TAccountAssetSigner, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountProgramId>, config?: {
  programAddress?: TProgramAddress;
}): ExecuteV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountAssetSigner, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountProgramId>;
declare function getExecuteV1InstructionAsync<TAccountAsset extends string, TAccountCollection extends string, TAccountAssetSigner extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountProgramId extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: ExecuteV1AsyncInput<TAccountAsset, TAccountCollection, TAccountAssetSigner, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountProgramId>, config?: {
  programAddress?: TProgramAddress;
}): Promise<ExecuteV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountAssetSigner, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountProgramId>>;
declare function getExecuteV1InstructionDataCodec(): Codec<ExecuteV1InstructionDataArgs, ExecuteV1InstructionData>;
declare function getExecuteV1InstructionDataDecoder(): Decoder<ExecuteV1InstructionData>;
declare function getExecuteV1InstructionDataEncoder(): Encoder<ExecuteV1InstructionDataArgs>;
declare function parseExecuteV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedExecuteV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/removeCollectionExternalPluginAdapterV1.d.ts
declare const REMOVE_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR = 25;
type ParsedRemoveCollectionExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: RemoveCollectionExternalPluginAdapterV1InstructionData;
  programAddress: Address<TProgram>;
};
type RemoveCollectionExternalPluginAdapterV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>;
  key: RemoveCollectionExternalPluginAdapterV1InstructionDataArgs['key']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type RemoveCollectionExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type RemoveCollectionExternalPluginAdapterV1InstructionData = {
  discriminator: number;
  key: BaseExternalPluginAdapterKey;
};
type RemoveCollectionExternalPluginAdapterV1InstructionDataArgs = {
  key: BaseExternalPluginAdapterKeyArgs;
};
declare function getRemoveCollectionExternalPluginAdapterV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getRemoveCollectionExternalPluginAdapterV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: RemoveCollectionExternalPluginAdapterV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): RemoveCollectionExternalPluginAdapterV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getRemoveCollectionExternalPluginAdapterV1InstructionDataCodec(): Codec<RemoveCollectionExternalPluginAdapterV1InstructionDataArgs, RemoveCollectionExternalPluginAdapterV1InstructionData>;
declare function getRemoveCollectionExternalPluginAdapterV1InstructionDataDecoder(): Decoder<RemoveCollectionExternalPluginAdapterV1InstructionData>;
declare function getRemoveCollectionExternalPluginAdapterV1InstructionDataEncoder(): Encoder<RemoveCollectionExternalPluginAdapterV1InstructionDataArgs>;
declare function parseRemoveCollectionExternalPluginAdapterV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedRemoveCollectionExternalPluginAdapterV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/removeCollectionPluginV1.d.ts
declare const REMOVE_COLLECTION_PLUGIN_V1_DISCRIMINATOR = 5;
type ParsedRemoveCollectionPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: RemoveCollectionPluginV1InstructionData;
  programAddress: Address<TProgram>;
};
type RemoveCollectionPluginV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  pluginType: RemoveCollectionPluginV1InstructionDataArgs['pluginType']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type RemoveCollectionPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type RemoveCollectionPluginV1InstructionData = {
  discriminator: number;
  pluginType: PluginType;
};
type RemoveCollectionPluginV1InstructionDataArgs = {
  pluginType: PluginTypeArgs;
};
declare function getRemoveCollectionPluginV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getRemoveCollectionPluginV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: RemoveCollectionPluginV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): RemoveCollectionPluginV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getRemoveCollectionPluginV1InstructionDataCodec(): FixedSizeCodec<RemoveCollectionPluginV1InstructionDataArgs, RemoveCollectionPluginV1InstructionData>;
declare function getRemoveCollectionPluginV1InstructionDataDecoder(): FixedSizeDecoder<RemoveCollectionPluginV1InstructionData>;
declare function getRemoveCollectionPluginV1InstructionDataEncoder(): FixedSizeEncoder<RemoveCollectionPluginV1InstructionDataArgs>;
declare function parseRemoveCollectionPluginV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedRemoveCollectionPluginV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/removeExternalPluginAdapterV1.d.ts
declare const REMOVE_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR = 24;
type ParsedRemoveExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: RemoveExternalPluginAdapterV1InstructionData;
  programAddress: Address<TProgram>;
};
type RemoveExternalPluginAdapterV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  key: RemoveExternalPluginAdapterV1InstructionDataArgs['key']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type RemoveExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type RemoveExternalPluginAdapterV1InstructionData = {
  discriminator: number;
  key: BaseExternalPluginAdapterKey;
};
type RemoveExternalPluginAdapterV1InstructionDataArgs = {
  key: BaseExternalPluginAdapterKeyArgs;
};
declare function getRemoveExternalPluginAdapterV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getRemoveExternalPluginAdapterV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: RemoveExternalPluginAdapterV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): RemoveExternalPluginAdapterV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getRemoveExternalPluginAdapterV1InstructionDataCodec(): Codec<RemoveExternalPluginAdapterV1InstructionDataArgs, RemoveExternalPluginAdapterV1InstructionData>;
declare function getRemoveExternalPluginAdapterV1InstructionDataDecoder(): Decoder<RemoveExternalPluginAdapterV1InstructionData>;
declare function getRemoveExternalPluginAdapterV1InstructionDataEncoder(): Encoder<RemoveExternalPluginAdapterV1InstructionDataArgs>;
declare function parseRemoveExternalPluginAdapterV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedRemoveExternalPluginAdapterV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/removePluginV1.d.ts
declare const REMOVE_PLUGIN_V1_DISCRIMINATOR = 4;
type ParsedRemovePluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: RemovePluginV1InstructionData;
  programAddress: Address<TProgram>;
};
type RemovePluginV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  pluginType: RemovePluginV1InstructionDataArgs['pluginType']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type RemovePluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type RemovePluginV1InstructionData = {
  discriminator: number;
  pluginType: PluginType;
};
type RemovePluginV1InstructionDataArgs = {
  pluginType: PluginTypeArgs;
};
declare function getRemovePluginV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getRemovePluginV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: RemovePluginV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): RemovePluginV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getRemovePluginV1InstructionDataCodec(): FixedSizeCodec<RemovePluginV1InstructionDataArgs, RemovePluginV1InstructionData>;
declare function getRemovePluginV1InstructionDataDecoder(): FixedSizeDecoder<RemovePluginV1InstructionData>;
declare function getRemovePluginV1InstructionDataEncoder(): FixedSizeEncoder<RemovePluginV1InstructionDataArgs>;
declare function parseRemovePluginV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedRemovePluginV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/revokeCollectionPluginAuthorityV1.d.ts
declare const REVOKE_COLLECTION_PLUGIN_AUTHORITY_V1_DISCRIMINATOR = 11;
type ParsedRevokeCollectionPluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: RevokeCollectionPluginAuthorityV1InstructionData;
  programAddress: Address<TProgram>;
};
type RevokeCollectionPluginAuthorityV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  pluginType: RevokeCollectionPluginAuthorityV1InstructionDataArgs['pluginType']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type RevokeCollectionPluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type RevokeCollectionPluginAuthorityV1InstructionData = {
  discriminator: number;
  pluginType: PluginType;
};
type RevokeCollectionPluginAuthorityV1InstructionDataArgs = {
  pluginType: PluginTypeArgs;
};
declare function getRevokeCollectionPluginAuthorityV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getRevokeCollectionPluginAuthorityV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: RevokeCollectionPluginAuthorityV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): RevokeCollectionPluginAuthorityV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getRevokeCollectionPluginAuthorityV1InstructionDataCodec(): FixedSizeCodec<RevokeCollectionPluginAuthorityV1InstructionDataArgs, RevokeCollectionPluginAuthorityV1InstructionData>;
declare function getRevokeCollectionPluginAuthorityV1InstructionDataDecoder(): FixedSizeDecoder<RevokeCollectionPluginAuthorityV1InstructionData>;
declare function getRevokeCollectionPluginAuthorityV1InstructionDataEncoder(): FixedSizeEncoder<RevokeCollectionPluginAuthorityV1InstructionDataArgs>;
declare function parseRevokeCollectionPluginAuthorityV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedRevokeCollectionPluginAuthorityV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/revokePluginAuthorityV1.d.ts
declare const REVOKE_PLUGIN_AUTHORITY_V1_DISCRIMINATOR = 10;
type ParsedRevokePluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: RevokePluginAuthorityV1InstructionData;
  programAddress: Address<TProgram>;
};
type RevokePluginAuthorityV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  pluginType: RevokePluginAuthorityV1InstructionDataArgs['pluginType']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type RevokePluginAuthorityV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type RevokePluginAuthorityV1InstructionData = {
  discriminator: number;
  pluginType: PluginType;
};
type RevokePluginAuthorityV1InstructionDataArgs = {
  pluginType: PluginTypeArgs;
};
declare function getRevokePluginAuthorityV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getRevokePluginAuthorityV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: RevokePluginAuthorityV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): RevokePluginAuthorityV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getRevokePluginAuthorityV1InstructionDataCodec(): FixedSizeCodec<RevokePluginAuthorityV1InstructionDataArgs, RevokePluginAuthorityV1InstructionData>;
declare function getRevokePluginAuthorityV1InstructionDataDecoder(): FixedSizeDecoder<RevokePluginAuthorityV1InstructionData>;
declare function getRevokePluginAuthorityV1InstructionDataEncoder(): FixedSizeEncoder<RevokePluginAuthorityV1InstructionDataArgs>;
declare function parseRevokePluginAuthorityV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedRevokePluginAuthorityV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/transferV1.d.ts
declare const TRANSFER_V1_DISCRIMINATOR = 14;
type ParsedTransferV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[6] | undefined; /** The new owner to which to transfer the asset */
    newOwner: TAccountMetas[4]; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram?: TAccountMetas[5] | undefined;
  };
  data: TransferV1InstructionData;
  programAddress: Address<TProgram>;
};
type TransferV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountNewOwner extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  compressionProof?: TransferV1InstructionDataArgs['compressionProof']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The new owner to which to transfer the asset */
  newOwner: Address<TAccountNewOwner>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type TransferV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountNewOwner extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = string, TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? ReadonlyAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountNewOwner extends string ? ReadonlyAccount<TAccountNewOwner> : TAccountNewOwner, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type TransferV1InstructionData = {
  compressionProof: Option<CompressionProof>;
  discriminator: number;
};
type TransferV1InstructionDataArgs = {
  compressionProof?: OptionOrNullable<CompressionProofArgs>;
};
declare function getTransferV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getTransferV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountNewOwner extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: TransferV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountNewOwner, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): TransferV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountNewOwner, TAccountSystemProgram, TAccountLogWrapper>;
declare function getTransferV1InstructionDataCodec(): Codec<TransferV1InstructionDataArgs, TransferV1InstructionData>;
declare function getTransferV1InstructionDataDecoder(): Decoder<TransferV1InstructionData>;
declare function getTransferV1InstructionDataEncoder(): Encoder<TransferV1InstructionDataArgs>;
declare function parseTransferV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedTransferV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updateCollectionExternalPluginAdapterV1.d.ts
declare const UPDATE_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR = 27;
type ParsedUpdateCollectionExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: UpdateCollectionExternalPluginAdapterV1InstructionData;
  programAddress: Address<TProgram>;
};
type UpdateCollectionExternalPluginAdapterV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>;
  key: UpdateCollectionExternalPluginAdapterV1InstructionDataArgs['key']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
  updateInfo: UpdateCollectionExternalPluginAdapterV1InstructionDataArgs['updateInfo'];
};
type UpdateCollectionExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdateCollectionExternalPluginAdapterV1InstructionData = {
  discriminator: number;
  key: BaseExternalPluginAdapterKey;
  updateInfo: BaseExternalPluginAdapterUpdateInfo;
};
type UpdateCollectionExternalPluginAdapterV1InstructionDataArgs = {
  key: BaseExternalPluginAdapterKeyArgs;
  updateInfo: BaseExternalPluginAdapterUpdateInfoArgs;
};
declare function getUpdateCollectionExternalPluginAdapterV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdateCollectionExternalPluginAdapterV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdateCollectionExternalPluginAdapterV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): UpdateCollectionExternalPluginAdapterV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getUpdateCollectionExternalPluginAdapterV1InstructionDataCodec(): Codec<UpdateCollectionExternalPluginAdapterV1InstructionDataArgs, UpdateCollectionExternalPluginAdapterV1InstructionData>;
declare function getUpdateCollectionExternalPluginAdapterV1InstructionDataDecoder(): Decoder<UpdateCollectionExternalPluginAdapterV1InstructionData>;
declare function getUpdateCollectionExternalPluginAdapterV1InstructionDataEncoder(): Encoder<UpdateCollectionExternalPluginAdapterV1InstructionDataArgs>;
declare function parseUpdateCollectionExternalPluginAdapterV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdateCollectionExternalPluginAdapterV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updateCollectionInfoV1.d.ts
declare const UPDATE_COLLECTION_INFO_V1_DISCRIMINATOR = 32;
type ParsedUpdateCollectionInfoV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** Bubblegum PDA signer */bubblegumSigner: TAccountMetas[1]; /** The address of the asset */
    collection: TAccountMetas[0];
  };
  data: UpdateCollectionInfoV1InstructionData;
  programAddress: Address<TProgram>;
};
type UpdateCollectionInfoV1Input<TAccountCollection extends string = string, TAccountBubblegumSigner extends string = string> = {
  amount: UpdateCollectionInfoV1InstructionDataArgs['amount']; /** Bubblegum PDA signer */
  bubblegumSigner: TransactionSigner<TAccountBubblegumSigner>; /** The address of the asset */
  collection: Address<TAccountCollection>;
  updateType: UpdateCollectionInfoV1InstructionDataArgs['updateType'];
};
type UpdateCollectionInfoV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountBubblegumSigner extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountBubblegumSigner extends string ? AccountSignerMeta<TAccountBubblegumSigner> & ReadonlySignerAccount<TAccountBubblegumSigner> : TAccountBubblegumSigner, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdateCollectionInfoV1InstructionData = {
  amount: number;
  discriminator: number;
  updateType: UpdateType;
};
type UpdateCollectionInfoV1InstructionDataArgs = {
  amount: number;
  updateType: UpdateTypeArgs;
};
declare function getUpdateCollectionInfoV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdateCollectionInfoV1Instruction<TAccountCollection extends string, TAccountBubblegumSigner extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdateCollectionInfoV1Input<TAccountCollection, TAccountBubblegumSigner>, config?: {
  programAddress?: TProgramAddress;
}): UpdateCollectionInfoV1Instruction<TProgramAddress, TAccountCollection, TAccountBubblegumSigner>;
declare function getUpdateCollectionInfoV1InstructionDataCodec(): FixedSizeCodec<UpdateCollectionInfoV1InstructionDataArgs, UpdateCollectionInfoV1InstructionData>;
declare function getUpdateCollectionInfoV1InstructionDataDecoder(): FixedSizeDecoder<UpdateCollectionInfoV1InstructionData>;
declare function getUpdateCollectionInfoV1InstructionDataEncoder(): FixedSizeEncoder<UpdateCollectionInfoV1InstructionDataArgs>;
declare function parseUpdateCollectionInfoV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdateCollectionInfoV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updateCollectionPluginV1.d.ts
declare const UPDATE_COLLECTION_PLUGIN_V1_DISCRIMINATOR = 7;
type ParsedUpdateCollectionPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The owner or delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[3];
  };
  data: UpdateCollectionPluginV1InstructionData;
  programAddress: Address<TProgram>;
};
type UpdateCollectionPluginV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The owner or delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugin: UpdateCollectionPluginV1InstructionDataArgs['plugin']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type UpdateCollectionPluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdateCollectionPluginV1InstructionData = {
  discriminator: number;
  plugin: Plugin;
};
type UpdateCollectionPluginV1InstructionDataArgs = {
  plugin: PluginArgs;
};
declare function getUpdateCollectionPluginV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdateCollectionPluginV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdateCollectionPluginV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): UpdateCollectionPluginV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getUpdateCollectionPluginV1InstructionDataCodec(): Codec<UpdateCollectionPluginV1InstructionDataArgs, UpdateCollectionPluginV1InstructionData>;
declare function getUpdateCollectionPluginV1InstructionDataDecoder(): Decoder<UpdateCollectionPluginV1InstructionData>;
declare function getUpdateCollectionPluginV1InstructionDataEncoder(): Encoder<UpdateCollectionPluginV1InstructionDataArgs>;
declare function parseUpdateCollectionPluginV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdateCollectionPluginV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updateCollectionV1.d.ts
declare const UPDATE_COLLECTION_V1_DISCRIMINATOR = 16;
type ParsedUpdateCollectionV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The update authority or update authority delegate of the asset */authority?: TAccountMetas[2] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The new update authority of the asset */
    newUpdateAuthority?: TAccountMetas[3] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: UpdateCollectionV1InstructionData;
  programAddress: Address<TProgram>;
};
type UpdateCollectionV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountNewUpdateAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The update authority or update authority delegate of the asset */authority?: TransactionSigner<TAccountAuthority>; /** The address of the asset */
  collection: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>;
  newName?: UpdateCollectionV1InstructionDataArgs['newName']; /** The new update authority of the asset */
  newUpdateAuthority?: Address<TAccountNewUpdateAuthority>;
  newUri?: UpdateCollectionV1InstructionDataArgs['newUri']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type UpdateCollectionV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountNewUpdateAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountNewUpdateAuthority extends string ? ReadonlyAccount<TAccountNewUpdateAuthority> : TAccountNewUpdateAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdateCollectionV1InstructionData = {
  discriminator: number;
  newName: Option<string>;
  newUri: Option<string>;
};
type UpdateCollectionV1InstructionDataArgs = {
  newName?: OptionOrNullable<string>;
  newUri?: OptionOrNullable<string>;
};
declare function getUpdateCollectionV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdateCollectionV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountNewUpdateAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdateCollectionV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountNewUpdateAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): UpdateCollectionV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountNewUpdateAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getUpdateCollectionV1InstructionDataCodec(): Codec<UpdateCollectionV1InstructionDataArgs, UpdateCollectionV1InstructionData>;
declare function getUpdateCollectionV1InstructionDataDecoder(): Decoder<UpdateCollectionV1InstructionData>;
declare function getUpdateCollectionV1InstructionDataEncoder(): Encoder<UpdateCollectionV1InstructionDataArgs>;
declare function parseUpdateCollectionV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdateCollectionV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updateExternalPluginAdapterV1.d.ts
declare const UPDATE_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR = 26;
type ParsedUpdateExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: UpdateExternalPluginAdapterV1InstructionData;
  programAddress: Address<TProgram>;
};
type UpdateExternalPluginAdapterV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  key: UpdateExternalPluginAdapterV1InstructionDataArgs['key']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
  updateInfo: UpdateExternalPluginAdapterV1InstructionDataArgs['updateInfo'];
};
type UpdateExternalPluginAdapterV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdateExternalPluginAdapterV1InstructionData = {
  discriminator: number;
  key: BaseExternalPluginAdapterKey;
  updateInfo: BaseExternalPluginAdapterUpdateInfo;
};
type UpdateExternalPluginAdapterV1InstructionDataArgs = {
  key: BaseExternalPluginAdapterKeyArgs;
  updateInfo: BaseExternalPluginAdapterUpdateInfoArgs;
};
declare function getUpdateExternalPluginAdapterV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdateExternalPluginAdapterV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdateExternalPluginAdapterV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): UpdateExternalPluginAdapterV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getUpdateExternalPluginAdapterV1InstructionDataCodec(): Codec<UpdateExternalPluginAdapterV1InstructionDataArgs, UpdateExternalPluginAdapterV1InstructionData>;
declare function getUpdateExternalPluginAdapterV1InstructionDataDecoder(): Decoder<UpdateExternalPluginAdapterV1InstructionData>;
declare function getUpdateExternalPluginAdapterV1InstructionDataEncoder(): Encoder<UpdateExternalPluginAdapterV1InstructionDataArgs>;
declare function parseUpdateExternalPluginAdapterV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdateExternalPluginAdapterV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updatePluginV1.d.ts
declare const UPDATE_PLUGIN_V1_DISCRIMINATOR = 6;
type ParsedUpdatePluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The owner or delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: UpdatePluginV1InstructionData;
  programAddress: Address<TProgram>;
};
type UpdatePluginV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The owner or delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  plugin: UpdatePluginV1InstructionDataArgs['plugin']; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type UpdatePluginV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdatePluginV1InstructionData = {
  discriminator: number;
  plugin: Plugin;
};
type UpdatePluginV1InstructionDataArgs = {
  plugin: PluginArgs;
};
declare function getUpdatePluginV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdatePluginV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdatePluginV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): UpdatePluginV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getUpdatePluginV1InstructionDataCodec(): Codec<UpdatePluginV1InstructionDataArgs, UpdatePluginV1InstructionData>;
declare function getUpdatePluginV1InstructionDataDecoder(): Decoder<UpdatePluginV1InstructionData>;
declare function getUpdatePluginV1InstructionDataEncoder(): Encoder<UpdatePluginV1InstructionDataArgs>;
declare function parseUpdatePluginV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdatePluginV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updateV1.d.ts
declare const UPDATE_V1_DISCRIMINATOR = 15;
type ParsedUpdateV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The update authority or update authority delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: UpdateV1InstructionData;
  programAddress: Address<TProgram>;
};
type UpdateV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The update authority or update authority delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>;
  newName?: UpdateV1InstructionDataArgs['newName'];
  newUpdateAuthority?: UpdateV1InstructionDataArgs['newUpdateAuthority'];
  newUri?: UpdateV1InstructionDataArgs['newUri']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type UpdateV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? ReadonlyAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdateV1InstructionData = {
  discriminator: number;
  newName: Option<string>;
  newUpdateAuthority: Option<BaseUpdateAuthority>;
  newUri: Option<string>;
};
type UpdateV1InstructionDataArgs = {
  newName?: OptionOrNullable<string>;
  newUpdateAuthority?: OptionOrNullable<BaseUpdateAuthorityArgs>;
  newUri?: OptionOrNullable<string>;
};
declare function getUpdateV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdateV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdateV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): UpdateV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountSystemProgram, TAccountLogWrapper>;
declare function getUpdateV1InstructionDataCodec(): Codec<UpdateV1InstructionDataArgs, UpdateV1InstructionData>;
declare function getUpdateV1InstructionDataDecoder(): Decoder<UpdateV1InstructionData>;
declare function getUpdateV1InstructionDataEncoder(): Encoder<UpdateV1InstructionDataArgs>;
declare function parseUpdateV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdateV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/updateV2.d.ts
declare const UPDATE_V2_DISCRIMINATOR = 30;
type ParsedUpdateV2Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The update authority or update authority delegate of the asset */
    authority?: TAccountMetas[3] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[6] | undefined; /** A new collection to which to move the asset */
    newCollection?: TAccountMetas[4] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[5];
  };
  data: UpdateV2InstructionData;
  programAddress: Address<TProgram>;
};
type UpdateV2Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountNewCollection extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The update authority or update authority delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** A new collection to which to move the asset */
  newCollection?: Address<TAccountNewCollection>;
  newName?: UpdateV2InstructionDataArgs['newName'];
  newUpdateAuthority?: UpdateV2InstructionDataArgs['newUpdateAuthority'];
  newUri?: UpdateV2InstructionDataArgs['newUri']; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type UpdateV2Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountNewCollection extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountNewCollection extends string ? WritableAccount<TAccountNewCollection> : TAccountNewCollection, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type UpdateV2InstructionData = {
  discriminator: number;
  newName: Option<string>;
  newUpdateAuthority: Option<BaseUpdateAuthority>;
  newUri: Option<string>;
};
type UpdateV2InstructionDataArgs = {
  newName?: OptionOrNullable<string>;
  newUpdateAuthority?: OptionOrNullable<BaseUpdateAuthorityArgs>;
  newUri?: OptionOrNullable<string>;
};
declare function getUpdateV2DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getUpdateV2Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountNewCollection extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: UpdateV2Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountNewCollection, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): UpdateV2Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountNewCollection, TAccountSystemProgram, TAccountLogWrapper>;
declare function getUpdateV2InstructionDataCodec(): Codec<UpdateV2InstructionDataArgs, UpdateV2InstructionData>;
declare function getUpdateV2InstructionDataDecoder(): Decoder<UpdateV2InstructionData>;
declare function getUpdateV2InstructionDataEncoder(): Encoder<UpdateV2InstructionDataArgs>;
declare function parseUpdateV2Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedUpdateV2Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/writeCollectionExternalPluginAdapterDataV1.d.ts
declare const WRITE_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_DATA_V1_DISCRIMINATOR = 29;
type ParsedWriteCollectionExternalPluginAdapterDataV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The Data Authority of the External Plugin Adapter */authority?: TAccountMetas[2] | undefined; /** The buffer to write to the external plugin */
    buffer?: TAccountMetas[3] | undefined; /** The address of the asset */
    collection: TAccountMetas[0]; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[1]; /** The system program */
    systemProgram: TAccountMetas[4];
  };
  data: WriteCollectionExternalPluginAdapterDataV1InstructionData;
  programAddress: Address<TProgram>;
};
type WriteCollectionExternalPluginAdapterDataV1Input<TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountBuffer extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The Data Authority of the External Plugin Adapter */authority?: TransactionSigner<TAccountAuthority>; /** The buffer to write to the external plugin */
  buffer?: Address<TAccountBuffer>; /** The address of the asset */
  collection: Address<TAccountCollection>;
  data: WriteCollectionExternalPluginAdapterDataV1InstructionDataArgs['data'];
  key: WriteCollectionExternalPluginAdapterDataV1InstructionDataArgs['key']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type WriteCollectionExternalPluginAdapterDataV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountBuffer extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountBuffer extends string ? ReadonlyAccount<TAccountBuffer> : TAccountBuffer, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type WriteCollectionExternalPluginAdapterDataV1InstructionData = {
  data: Option<ReadonlyUint8Array>;
  discriminator: number;
  key: BaseExternalPluginAdapterKey;
};
type WriteCollectionExternalPluginAdapterDataV1InstructionDataArgs = {
  data: OptionOrNullable<ReadonlyUint8Array>;
  key: BaseExternalPluginAdapterKeyArgs;
};
declare function getWriteCollectionExternalPluginAdapterDataV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getWriteCollectionExternalPluginAdapterDataV1Instruction<TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountBuffer extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: WriteCollectionExternalPluginAdapterDataV1Input<TAccountCollection, TAccountPayer, TAccountAuthority, TAccountBuffer, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): WriteCollectionExternalPluginAdapterDataV1Instruction<TProgramAddress, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountBuffer, TAccountSystemProgram, TAccountLogWrapper>;
declare function getWriteCollectionExternalPluginAdapterDataV1InstructionDataCodec(): Codec<WriteCollectionExternalPluginAdapterDataV1InstructionDataArgs, WriteCollectionExternalPluginAdapterDataV1InstructionData>;
declare function getWriteCollectionExternalPluginAdapterDataV1InstructionDataDecoder(): Decoder<WriteCollectionExternalPluginAdapterDataV1InstructionData>;
declare function getWriteCollectionExternalPluginAdapterDataV1InstructionDataEncoder(): Encoder<WriteCollectionExternalPluginAdapterDataV1InstructionDataArgs>;
declare function parseWriteCollectionExternalPluginAdapterDataV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedWriteCollectionExternalPluginAdapterDataV1Instruction<TProgram, TAccountMetas>;
//#endregion
//#region src/generated/instructions/writeExternalPluginAdapterDataV1.d.ts
declare const WRITE_EXTERNAL_PLUGIN_ADAPTER_DATA_V1_DISCRIMINATOR = 28;
type ParsedWriteExternalPluginAdapterDataV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = {
  accounts: {
    /** The address of the asset */asset: TAccountMetas[0]; /** The Data Authority of the External Plugin Adapter */
    authority?: TAccountMetas[3] | undefined; /** The buffer to write to the external plugin */
    buffer?: TAccountMetas[4] | undefined; /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined; /** The SPL Noop Program */
    logWrapper?: TAccountMetas[6] | undefined; /** The account paying for the storage fees */
    payer: TAccountMetas[2]; /** The system program */
    systemProgram: TAccountMetas[5];
  };
  data: WriteExternalPluginAdapterDataV1InstructionData;
  programAddress: Address<TProgram>;
};
type WriteExternalPluginAdapterDataV1Input<TAccountAsset extends string = string, TAccountCollection extends string = string, TAccountPayer extends string = string, TAccountAuthority extends string = string, TAccountBuffer extends string = string, TAccountSystemProgram extends string = string, TAccountLogWrapper extends string = string> = {
  /** The address of the asset */asset: Address<TAccountAsset>; /** The Data Authority of the External Plugin Adapter */
  authority?: TransactionSigner<TAccountAuthority>; /** The buffer to write to the external plugin */
  buffer?: Address<TAccountBuffer>; /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  data: WriteExternalPluginAdapterDataV1InstructionDataArgs['data'];
  key: WriteExternalPluginAdapterDataV1InstructionDataArgs['key']; /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>; /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>; /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
};
type WriteExternalPluginAdapterDataV1Instruction<TProgram extends string = typeof MPL_CORE_PROGRAM_ADDRESS, TAccountAsset extends AccountMeta<string> | string = string, TAccountCollection extends AccountMeta<string> | string = string, TAccountPayer extends AccountMeta<string> | string = string, TAccountAuthority extends AccountMeta<string> | string = string, TAccountBuffer extends AccountMeta<string> | string = string, TAccountSystemProgram extends AccountMeta<string> | string = '11111111111111111111111111111111', TAccountLogWrapper extends AccountMeta<string> | string = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Instruction<TProgram> & InstructionWithAccounts<[TAccountAsset extends string ? WritableAccount<TAccountAsset> : TAccountAsset, TAccountCollection extends string ? WritableAccount<TAccountCollection> : TAccountCollection, TAccountPayer extends string ? AccountSignerMeta<TAccountPayer> & WritableSignerAccount<TAccountPayer> : TAccountPayer, TAccountAuthority extends string ? AccountSignerMeta<TAccountAuthority> & ReadonlySignerAccount<TAccountAuthority> : TAccountAuthority, TAccountBuffer extends string ? ReadonlyAccount<TAccountBuffer> : TAccountBuffer, TAccountSystemProgram extends string ? ReadonlyAccount<TAccountSystemProgram> : TAccountSystemProgram, TAccountLogWrapper extends string ? ReadonlyAccount<TAccountLogWrapper> : TAccountLogWrapper, ...TRemainingAccounts]> & InstructionWithData<ReadonlyUint8Array>;
type WriteExternalPluginAdapterDataV1InstructionData = {
  data: Option<ReadonlyUint8Array>;
  discriminator: number;
  key: BaseExternalPluginAdapterKey;
};
type WriteExternalPluginAdapterDataV1InstructionDataArgs = {
  data: OptionOrNullable<ReadonlyUint8Array>;
  key: BaseExternalPluginAdapterKeyArgs;
};
declare function getWriteExternalPluginAdapterDataV1DiscriminatorBytes(): ReadonlyUint8Array<ArrayBuffer>;
declare function getWriteExternalPluginAdapterDataV1Instruction<TAccountAsset extends string, TAccountCollection extends string, TAccountPayer extends string, TAccountAuthority extends string, TAccountBuffer extends string, TAccountSystemProgram extends string, TAccountLogWrapper extends string, TProgramAddress extends Address = typeof MPL_CORE_PROGRAM_ADDRESS>(input: WriteExternalPluginAdapterDataV1Input<TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountBuffer, TAccountSystemProgram, TAccountLogWrapper>, config?: {
  programAddress?: TProgramAddress;
}): WriteExternalPluginAdapterDataV1Instruction<TProgramAddress, TAccountAsset, TAccountCollection, TAccountPayer, TAccountAuthority, TAccountBuffer, TAccountSystemProgram, TAccountLogWrapper>;
declare function getWriteExternalPluginAdapterDataV1InstructionDataCodec(): Codec<WriteExternalPluginAdapterDataV1InstructionDataArgs, WriteExternalPluginAdapterDataV1InstructionData>;
declare function getWriteExternalPluginAdapterDataV1InstructionDataDecoder(): Decoder<WriteExternalPluginAdapterDataV1InstructionData>;
declare function getWriteExternalPluginAdapterDataV1InstructionDataEncoder(): Encoder<WriteExternalPluginAdapterDataV1InstructionDataArgs>;
declare function parseWriteExternalPluginAdapterDataV1Instruction<TProgram extends string, TAccountMetas extends readonly AccountMeta[]>(instruction: Instruction<TProgram> & InstructionWithAccounts<TAccountMetas> & InstructionWithData<ReadonlyUint8Array>): ParsedWriteExternalPluginAdapterDataV1Instruction<TProgram, TAccountMetas>;
//#endregion
export { UpdatePluginV1InstructionData as $, getBurnCollectionV1InstructionDataCodec as $a, fetchMaybeHashedAssetV1 as $c, getExternalPluginAdapterCodec as $d, BaseSeedArgs as $f, getAutographCodec as $h, CreateCollectionV1Instruction as $i, getTransferDelegateEncoder as $l, getBaseExternalPluginAdapterUpdateInfoDecoder as $m, RemovePluginV1InstructionData as $n, AddCollectionPluginV1Instruction as $o, getBaseLinkedLifecycleHookInitInfoEncoder as $p, getExecuteV1InstructionDataCodec as $r, MPL_CORE_ERROR__INVALID_SYSTEM_PROGRAM as $s, getUpdateCollectionInfoV1InstructionDataEncoder as $t, getKeyEncoder as $u, UpdateV2InstructionDataArgs as A, getCollectInstructionDataDecoder as Aa, fetchAllPluginRegistryV1 as Ac, ExternalValidationResult as Ad, getBurnDelegateCodec as Af, AssetSignerSeeds as Ag, getBaseDataSectionEncoder as Ah, CreateV1InstructionData as Ai, VerifiedCreatorsArgs as Al, getBaseLifecycleHookUpdateInfoDecoder as Am, RevokePluginAuthorityV1InstructionDataArgs as An, AddPluginV1InstructionData as Ao, BaseOracleInitInfoArgs as Ap, parseRemoveCollectionPluginV1Instruction as Ar, MPL_CORE_ERROR__CANNOT_ADD_DATA_SECTION as As, parseUpdateCollectionV1Instruction as At, getPermanentFreezeExecuteDecoder as Au, UpdateV1Instruction as B, getBurnV1Instruction as Ba, fetchAllPluginHeaderV1 as Bc, ExternalPluginAdapterType as Bd, baseValidationResultsOffset as Bf, getBaseAppDataInitInfoEncoder as Bh, CreateCollectionV2Input as Bi, UpdateTypeArgs as Bl, getBaseLifecycleHookDecoder as Bm, RevokeCollectionPluginAuthorityV1Instruction as Bn, AddExternalPluginAdapterV1Input as Bo, BaseMasterEditionArgs as Bp, getRemoveCollectionExternalPluginAdapterV1InstructionDataDecoder as Br, MPL_CORE_ERROR__EXTERNAL_PLUGIN_ADAPTER_NOT_FOUND as Bs, getUpdateCollectionPluginV1InstructionDataDecoder as Bt, getPermanentBurnDelegateDecoder as Bu, getWriteCollectionExternalPluginAdapterDataV1InstructionDataEncoder as C, CollectInstruction as Ca, MplCoreError as Cc, getFreezeExecuteDecoder as Cd, CompressionProof as Cf, fetchAssetSignerFromSeeds as Cg, getBaseDataSectionInitInfoCodec as Ch, getCreateV2InstructionDataCodec as Ci, getAssetV1Encoder as Cl, BaseLinkedAppDataArgs as Cm, getTransferV1InstructionDataEncoder as Cn, getApproveCollectionPluginAuthorityV1InstructionDataCodec as Co, isBasePluginAuthority as Cp, RemoveCollectionPluginV1InstructionData as Cr, MplCoreInstruction as Cs, UpdateCollectionV1InstructionData as Ct, PermanentTransferDelegateArgs as Cu, UpdateV2Input as D, getCollectDiscriminatorBytes as Da, PluginRegistryV1Args as Dc, getFreezeDelegateCodec as Dd, getCompressionProofEncoder as Df, getAssetSignerDecoder as Dg, BaseDataSectionArgs as Dh, CREATE_V1_DISCRIMINATOR as Di, getVerifiedCreatorsSignatureDecoder as Dl, BaseLifecycleHookUpdateInfo as Dm, RevokePluginAuthorityV1Input as Dn, ADD_PLUGIN_V1_DISCRIMINATOR as Do, getBaseOracleUpdateInfoDecoder as Dp, getRemoveCollectionPluginV1InstructionDataCodec as Dr, MPL_CORE_ERROR__ALREADY_DECOMPRESSED as Ds, getUpdateCollectionV1InstructionDataCodec as Dt, PermanentFreezeExecute as Du, UPDATE_V2_DISCRIMINATOR as E, ParsedCollectInstruction as Ea, PluginRegistryV1 as Ec, FreezeDelegateArgs as Ed, getCompressionProofDecoder as Ef, getAssetSignerCodec as Eg, BaseDataSection as Eh, parseCreateV2Instruction as Ei, getVerifiedCreatorsSignatureCodec as El, getBaseLinkedAppDataEncoder as Em, REVOKE_PLUGIN_AUTHORITY_V1_DISCRIMINATOR as En, parseApproveCollectionPluginAuthorityV1Instruction as Eo, getBaseOracleUpdateInfoCodec as Ep, getRemoveCollectionPluginV1Instruction as Er, MPL_CORE_ERROR__ALREADY_COMPRESSED as Es, getUpdateCollectionV1Instruction as Et, getPermanentTransferDelegateEncoder as Eu, getUpdateV2InstructionDataEncoder as F, BurnV1Instruction as Fa, getPluginRegistryV1Encoder as Fc, ExternalRegistryRecord as Fd, getBubblegumV2Codec as Ff, getBaseAppDataUpdateInfoEncoder as Fh, getCreateV1InstructionDataCodec as Fi, ValidationResultArgs as Fl, getBaseLifecycleHookInitInfoDecoder as Fm, getRevokePluginAuthorityV1InstructionDataEncoder as Fn, getAddPluginV1InstructionDataCodec as Fo, BaseOracleArgs as Fp, RemoveCollectionExternalPluginAdapterV1InstructionData as Fr, MPL_CORE_ERROR__COLLECTION_MUST_BE_EMPTY as Fs, UpdateCollectionPluginV1InstructionData as Ft, getPermanentFreezeDelegateDecoder as Fu, getUpdateV1InstructionDataCodec as G, BURN_COLLECTION_V1_DISCRIMINATOR as Ga, getPluginHeaderV1Encoder as Gc, ExternalPluginAdapterSchema as Gd, BaseUpdateAuthority as Gf, getBaseAppDataEncoder as Gh, getCreateCollectionV2DiscriminatorBytes as Gi, UpdateDelegateArgs as Gl, getBaseExtraAccountCodec as Gm, getRevokeCollectionPluginAuthorityV1InstructionDataCodec as Gn, getAddExternalPluginAdapterV1DiscriminatorBytes as Go, BaseLinkedLifecycleHookUpdateInfoArgs as Gp, ExecuteV1Input as Gr, MPL_CORE_ERROR__INVALID_COLLECTION as Gs, UpdateCollectionInfoV1Input as Gt, getOracleValidationDecoder as Gu, UpdateV1InstructionDataArgs as H, getBurnV1InstructionDataDecoder as Ha, fetchPluginHeaderV1 as Hc, getExternalPluginAdapterTypeCodec as Hd, getBaseValidationResultsOffsetDecoder as Hf, BaseAppDataArgs as Hh, CreateCollectionV2InstructionData as Hi, getUpdateTypeDecoder as Hl, BaseExtraAccount as Hm, RevokeCollectionPluginAuthorityV1InstructionDataArgs as Hn, AddExternalPluginAdapterV1InstructionData as Ho, getBaseMasterEditionDecoder as Hp, parseRemoveCollectionExternalPluginAdapterV1Instruction as Hr, MPL_CORE_ERROR__INCORRECT_ASSET_HASH as Hs, parseUpdateCollectionPluginV1Instruction as Ht, OracleValidation as Hu, parseUpdateV2Instruction as I, BurnV1InstructionData as Ia, PluginHeaderV1 as Ic, ExternalRegistryRecordArgs as Id, getBubblegumV2Decoder as If, BaseAppDataInitInfo as Ih, getCreateV1InstructionDataDecoder as Ii, getValidationResultCodec as Il, getBaseLifecycleHookInitInfoEncoder as Im, parseRevokePluginAuthorityV1Instruction as In, getAddPluginV1InstructionDataDecoder as Io, getBaseOracleCodec as Ip, RemoveCollectionExternalPluginAdapterV1InstructionDataArgs as Ir, MPL_CORE_ERROR__CONFLICTING_AUTHORITY as Is, UpdateCollectionPluginV1InstructionDataArgs as It, getPermanentFreezeDelegateEncoder as Iu, parseUpdateV1Instruction as J, BurnCollectionV1InstructionData as Ja, HashedAssetV1Args as Jc, getExternalPluginAdapterSchemaDecoder as Jd, getBaseUpdateAuthorityCodec as Jf, getAutographSignatureCodec as Jh, getCreateCollectionV2InstructionDataDecoder as Ji, getUpdateDelegateEncoder as Jl, isBaseExtraAccount as Jm, parseRevokeCollectionPluginAuthorityV1Instruction as Jn, getAddExternalPluginAdapterV1InstructionDataDecoder as Jo, getBaseLinkedLifecycleHookUpdateInfoEncoder as Jp, ExecuteV1InstructionDataArgs as Jr, MPL_CORE_ERROR__INVALID_ORACLE_ACCOUNT_DATA as Js, UpdateCollectionInfoV1InstructionDataArgs as Jt, oracleValidation as Ju, getUpdateV1InstructionDataDecoder as K, BurnCollectionV1Input as Ka, getPluginHeaderV1Size as Kc, ExternalPluginAdapterSchemaArgs as Kd, BaseUpdateAuthorityArgs as Kf, AutographSignature as Kh, getCreateCollectionV2Instruction as Ki, getUpdateDelegateCodec as Kl, getBaseExtraAccountDecoder as Km, getRevokeCollectionPluginAuthorityV1InstructionDataDecoder as Kn, getAddExternalPluginAdapterV1Instruction as Ko, getBaseLinkedLifecycleHookUpdateInfoCodec as Kp, ExecuteV1Instruction as Kr, MPL_CORE_ERROR__INVALID_EXECUTE_PDA as Ks, UpdateCollectionInfoV1Instruction as Kt, getOracleValidationEncoder as Ku, ParsedUpdateV1Instruction as L, BurnV1InstructionDataArgs as La, PluginHeaderV1Args as Lc, getExternalRegistryRecordCodec as Ld, getBubblegumV2Encoder as Lf, BaseAppDataInitInfoArgs as Lh, getCreateV1InstructionDataEncoder as Li, getValidationResultDecoder as Ll, BaseLifecycleHook as Lm, ParsedRevokeCollectionPluginAuthorityV1Instruction as Ln, getAddPluginV1InstructionDataEncoder as Lo, getBaseOracleDecoder as Lp, getRemoveCollectionExternalPluginAdapterV1DiscriminatorBytes as Lr, MPL_CORE_ERROR__DESERIALIZATION_ERROR as Ls, getUpdateCollectionPluginV1DiscriminatorBytes as Lt, PermanentBurnDelegate as Lu, getUpdateV2Instruction as M, parseCollectInstruction as Ma, fetchPluginRegistryV1 as Mc, getExternalValidationResultCodec as Md, getBurnDelegateEncoder as Mf, BaseAppDataUpdateInfoArgs as Mh, ParsedCreateV1Instruction as Mi, getVerifiedCreatorsDecoder as Ml, BaseLifecycleHookInitInfo as Mm, getRevokePluginAuthorityV1Instruction as Mn, ParsedAddPluginV1Instruction as Mo, getBaseOracleInitInfoDecoder as Mp, REMOVE_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR as Mr, MPL_CORE_ERROR__CANNOT_MIGRATE_MASTER_WITH_SUPPLY as Ms, UPDATE_COLLECTION_PLUGIN_V1_DISCRIMINATOR as Mt, PermanentFreezeDelegate as Mu, getUpdateV2InstructionDataCodec as N, BURN_V1_DISCRIMINATOR as Na, getPluginRegistryV1Codec as Nc, getExternalValidationResultDecoder as Nd, BubblegumV2 as Nf, getBaseAppDataUpdateInfoCodec as Nh, getCreateV1DiscriminatorBytes as Ni, getVerifiedCreatorsEncoder as Nl, BaseLifecycleHookInitInfoArgs as Nm, getRevokePluginAuthorityV1InstructionDataCodec as Nn, getAddPluginV1DiscriminatorBytes as No, getBaseOracleInitInfoEncoder as Np, RemoveCollectionExternalPluginAdapterV1Input as Nr, MPL_CORE_ERROR__CANNOT_MIGRATE_PRINTS as Ns, UpdateCollectionPluginV1Input as Nt, PermanentFreezeDelegateArgs as Nu, UpdateV2Instruction as O, getCollectInstruction as Oa, decodePluginRegistryV1 as Oc, getFreezeDelegateDecoder as Od, BurnDelegate as Of, getAssetSignerEncoder as Og, getBaseDataSectionCodec as Oh, CreateV1Input as Oi, getVerifiedCreatorsSignatureEncoder as Ol, BaseLifecycleHookUpdateInfoArgs as Om, RevokePluginAuthorityV1Instruction as On, AddPluginV1Input as Oo, getBaseOracleUpdateInfoEncoder as Op, getRemoveCollectionPluginV1InstructionDataDecoder as Or, MPL_CORE_ERROR__ASSET_IS_FROZEN as Os, getUpdateCollectionV1InstructionDataDecoder as Ot, PermanentFreezeExecuteArgs as Ou, getUpdateV2InstructionDataDecoder as P, BurnV1Input as Pa, getPluginRegistryV1Decoder as Pc, getExternalValidationResultEncoder as Pd, BubblegumV2Args as Pf, getBaseAppDataUpdateInfoDecoder as Ph, getCreateV1Instruction as Pi, ValidationResult as Pl, getBaseLifecycleHookInitInfoCodec as Pm, getRevokePluginAuthorityV1InstructionDataDecoder as Pn, getAddPluginV1Instruction as Po, BaseOracle as Pp, RemoveCollectionExternalPluginAdapterV1Instruction as Pr, MPL_CORE_ERROR__CANNOT_REDELEGATE as Ps, UpdateCollectionPluginV1Instruction as Pt, getPermanentFreezeDelegateCodec as Pu, UpdatePluginV1Instruction as Q, getBurnCollectionV1Instruction as Qa, fetchHashedAssetV1 as Qc, externalPluginAdapter as Qd, BaseSeed as Qf, AutographArgs as Qh, CreateCollectionV1Input as Qi, getTransferDelegateDecoder as Ql, getBaseExternalPluginAdapterUpdateInfoCodec as Qm, RemovePluginV1Instruction as Qn, AddCollectionPluginV1Input as Qo, getBaseLinkedLifecycleHookInitInfoDecoder as Qp, getExecuteV1InstructionAsync as Qr, MPL_CORE_ERROR__INVALID_PLUGIN_SETTING as Qs, getUpdateCollectionInfoV1InstructionDataDecoder as Qt, getKeyDecoder as Qu, UPDATE_V1_DISCRIMINATOR as R, ParsedBurnV1Instruction as Ra, decodePluginHeaderV1 as Rc, getExternalRegistryRecordDecoder as Rd, BaseValidationResultsOffset as Rf, getBaseAppDataInitInfoCodec as Rh, parseCreateV1Instruction as Ri, getValidationResultEncoder as Rl, BaseLifecycleHookArgs as Rm, REVOKE_COLLECTION_PLUGIN_AUTHORITY_V1_DISCRIMINATOR as Rn, parseAddPluginV1Instruction as Ro, getBaseOracleEncoder as Rp, getRemoveCollectionExternalPluginAdapterV1Instruction as Rr, MPL_CORE_ERROR__DUPLICATE_LIFECYCLE_CHECKS as Rs, getUpdateCollectionPluginV1Instruction as Rt, PermanentBurnDelegateArgs as Ru, getWriteCollectionExternalPluginAdapterDataV1InstructionDataDecoder as S, CollectInput as Sa, MPL_CORE_ERROR__UNSUPPORTED_OPERATION as Sc, getFreezeExecuteCodec as Sd, getCreatorEncoder as Sf, fetchAssetSigner as Sg, BaseDataSectionInitInfoArgs as Sh, getCreateV2Instruction as Si, getAssetV1Decoder as Sl, BaseLinkedAppData as Sm, getTransferV1InstructionDataDecoder as Sn, getApproveCollectionPluginAuthorityV1Instruction as So, getBasePluginAuthorityEncoder as Sp, RemoveCollectionPluginV1Instruction as Sr, MplCoreAccount as Ss, UpdateCollectionV1Instruction as St, PermanentTransferDelegate as Su, ParsedUpdateV2Instruction as T, CollectInstructionDataArgs as Ta, isMplCoreError as Tc, FreezeDelegate as Td, getCompressionProofCodec as Tf, fetchMaybeAssetSignerFromSeeds as Tg, getBaseDataSectionInitInfoEncoder as Th, getCreateV2InstructionDataEncoder as Ti, VerifiedCreatorsSignatureArgs as Tl, getBaseLinkedAppDataDecoder as Tm, ParsedRevokePluginAuthorityV1Instruction as Tn, getApproveCollectionPluginAuthorityV1InstructionDataEncoder as To, BaseOracleUpdateInfoArgs as Tp, getRemoveCollectionPluginV1DiscriminatorBytes as Tr, identifyMplCoreInstruction as Ts, getUpdateCollectionV1DiscriminatorBytes as Tt, getPermanentTransferDelegateDecoder as Tu, getUpdateV1DiscriminatorBytes as U, getBurnV1InstructionDataEncoder as Ua, getPluginHeaderV1Codec as Uc, getExternalPluginAdapterTypeDecoder as Ud, getBaseValidationResultsOffsetEncoder as Uf, getBaseAppDataCodec as Uh, CreateCollectionV2InstructionDataArgs as Ui, getUpdateTypeEncoder as Ul, BaseExtraAccountArgs as Um, getRevokeCollectionPluginAuthorityV1DiscriminatorBytes as Un, AddExternalPluginAdapterV1InstructionDataArgs as Uo, getBaseMasterEditionEncoder as Up, EXECUTE_V1_DISCRIMINATOR as Ur, MPL_CORE_ERROR__INVALID_ASSET as Us, ParsedUpdateCollectionInfoV1Instruction as Ut, OracleValidationArgs as Uu, UpdateV1InstructionData as V, getBurnV1InstructionDataCodec as Va, fetchMaybePluginHeaderV1 as Vc, ExternalPluginAdapterTypeArgs as Vd, getBaseValidationResultsOffsetCodec as Vf, BaseAppData as Vh, CreateCollectionV2Instruction as Vi, getUpdateTypeCodec as Vl, getBaseLifecycleHookEncoder as Vm, RevokeCollectionPluginAuthorityV1InstructionData as Vn, AddExternalPluginAdapterV1Instruction as Vo, getBaseMasterEditionCodec as Vp, getRemoveCollectionExternalPluginAdapterV1InstructionDataEncoder as Vr, MPL_CORE_ERROR__INCORRECT_ACCOUNT as Vs, getUpdateCollectionPluginV1InstructionDataEncoder as Vt, getPermanentBurnDelegateEncoder as Vu, getUpdateV1Instruction as W, parseBurnV1Instruction as Wa, getPluginHeaderV1Decoder as Wc, getExternalPluginAdapterTypeEncoder as Wd, isBaseValidationResultsOffset as Wf, getBaseAppDataDecoder as Wh, ParsedCreateCollectionV2Instruction as Wi, UpdateDelegate as Wl, baseExtraAccount as Wm, getRevokeCollectionPluginAuthorityV1Instruction as Wn, ParsedAddExternalPluginAdapterV1Instruction as Wo, BaseLinkedLifecycleHookUpdateInfo as Wp, ExecuteV1AsyncInput as Wr, MPL_CORE_ERROR__INVALID_AUTHORITY as Ws, UPDATE_COLLECTION_INFO_V1_DISCRIMINATOR as Wt, getOracleValidationCodec as Wu, UPDATE_PLUGIN_V1_DISCRIMINATOR as X, ParsedBurnCollectionV1Instruction as Xa, fetchAllHashedAssetV1 as Xc, ExternalPluginAdapter as Xd, getBaseUpdateAuthorityEncoder as Xf, getAutographSignatureEncoder as Xh, parseCreateCollectionV2Instruction as Xi, TransferDelegateArgs as Xl, BaseExternalPluginAdapterUpdateInfoArgs as Xm, REMOVE_PLUGIN_V1_DISCRIMINATOR as Xn, parseAddExternalPluginAdapterV1Instruction as Xo, BaseLinkedLifecycleHookInitInfoArgs as Xp, getExecuteV1DiscriminatorBytes as Xr, MPL_CORE_ERROR__INVALID_PLUGIN_ADAPTER_TARGET as Xs, getUpdateCollectionInfoV1Instruction as Xt, KeyArgs as Xu, ParsedUpdatePluginV1Instruction as Y, BurnCollectionV1InstructionDataArgs as Ya, decodeHashedAssetV1 as Yc, getExternalPluginAdapterSchemaEncoder as Yd, getBaseUpdateAuthorityDecoder as Yf, getAutographSignatureDecoder as Yh, getCreateCollectionV2InstructionDataEncoder as Yi, TransferDelegate as Yl, BaseExternalPluginAdapterUpdateInfo as Ym, ParsedRemovePluginV1Instruction as Yn, getAddExternalPluginAdapterV1InstructionDataEncoder as Yo, BaseLinkedLifecycleHookInitInfo as Yp, ParsedExecuteV1Instruction as Yr, MPL_CORE_ERROR__INVALID_PLUGIN as Ys, getUpdateCollectionInfoV1DiscriminatorBytes as Yt, Key as Yu, UpdatePluginV1Input as Z, getBurnCollectionV1DiscriminatorBytes as Za, fetchAllMaybeHashedAssetV1 as Zc, ExternalPluginAdapterArgs as Zd, isBaseUpdateAuthority as Zf, Autograph as Zh, CREATE_COLLECTION_V1_DISCRIMINATOR as Zi, getTransferDelegateCodec as Zl, baseExternalPluginAdapterUpdateInfo as Zm, RemovePluginV1Input as Zn, ADD_COLLECTION_PLUGIN_V1_DISCRIMINATOR as Zo, getBaseLinkedLifecycleHookInitInfoCodec as Zp, getExecuteV1Instruction as Zr, MPL_CORE_ERROR__INVALID_PLUGIN_OPERATION as Zs, getUpdateCollectionInfoV1InstructionDataCodec as Zt, getKeyCodec as Zu, WriteCollectionExternalPluginAdapterDataV1InstructionData as _, getCompressV1InstructionDataCodec as _a, MPL_CORE_ERROR__PLUGIN_NOT_FOUND as _c, getHashablePluginSchemaCodec as _d, getDataStateEncoder as _f, AssetSigner as _g, BaseDataSectionUpdateInfoArgs as _h, CreateV2Instruction as _i, fetchAllAssetV1 as _l, BaseLinkedAppDataInitInfo as _m, TransferV1InstructionData as _n, ApproveCollectionPluginAuthorityV1Instruction as _o, BasePluginAuthority as _p, getRemoveExternalPluginAdapterV1InstructionDataEncoder as _r, getAddCollectionExternalPluginAdapterV1InstructionDataCodec as _s, getUpdateExternalPluginAdapterV1InstructionDataEncoder as _t, getPluginCodec as _u, WriteExternalPluginAdapterDataV1InstructionData as a, getCreateCollectionV1InstructionDataCodec as aa, MPL_CORE_ERROR__MISSING_SIGNER as ac, HookableLifecycleEvent as ad, getExternalCheckResultCodec as af, getAttributesDecoder as ag, getBaseExternalPluginAdapterKeyCodec as ah, DecompressV1Instruction as ai, CollectionV1Args as al, BaseLinkedDataKey as am, UpdateCollectionExternalPluginAdapterV1InstructionData as an, ApprovePluginAuthorityV1Instruction as ao, BaseRuleSet as ap, getRemovePluginV1InstructionDataEncoder as ar, getAddCollectionPluginV1InstructionDataCodec as as, getUpdatePluginV1InstructionDataEncoder as at, PluginType as au, getWriteCollectionExternalPluginAdapterDataV1Instruction as b, parseCompressV1Instruction as ba, MPL_CORE_ERROR__TWO_DATA_SOURCES as bc, FreezeExecute as bd, getCreatorCodec as bf, fetchAllAssetSigner as bg, getBaseDataSectionUpdateInfoEncoder as bh, ParsedCreateV2Instruction as bi, fetchMaybeAssetV1 as bl, getBaseLinkedAppDataInitInfoDecoder as bm, getTransferV1Instruction as bn, ParsedApproveCollectionPluginAuthorityV1Instruction as bo, getBasePluginAuthorityCodec as bp, REMOVE_COLLECTION_PLUGIN_V1_DISCRIMINATOR as br, parseAddCollectionExternalPluginAdapterV1Instruction as bs, UPDATE_COLLECTION_V1_DISCRIMINATOR as bt, isPlugin as bu, getWriteExternalPluginAdapterDataV1Instruction as c, parseCreateCollectionV1Instruction as ca, MPL_CORE_ERROR__NOT_AVAILABLE as cc, getHookableLifecycleEventDecoder as cd, Edition as cf, AttributeArgs as cg, isBaseExternalPluginAdapterKey as ch, ParsedDecompressV1Instruction as ci, fetchAllMaybeCollectionV1 as cl, getBaseLinkedDataKeyCodec as cm, getUpdateCollectionExternalPluginAdapterV1Instruction as cn, ParsedApprovePluginAuthorityV1Instruction as co, getBaseRuleSetCodec as cp, REMOVE_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR as cr, parseAddCollectionPluginV1Instruction as cs, UPDATE_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR as ct, getPluginTypeDecoder as cu, getWriteExternalPluginAdapterDataV1InstructionDataEncoder as d, CompressV1Instruction as da, MPL_CORE_ERROR__NUMERICAL_OVERFLOW as dc, HashedAssetSchemaArgs as dd, getEditionDecoder as df, getAttributeEncoder as dg, baseExternalPluginAdapterInitInfo as dh, getDecompressV1InstructionDataCodec as di, getCollectionV1Codec as dl, isBaseLinkedDataKey as dm, getUpdateCollectionExternalPluginAdapterV1InstructionDataEncoder as dn, getApprovePluginAuthorityV1InstructionDataCodec as do, isBaseRuleSet as dp, RemoveExternalPluginAdapterV1InstructionData as dr, AddCollectionExternalPluginAdapterV1Instruction as ds, UpdateExternalPluginAdapterV1InstructionData as dt, PluginAuthorityPairArgs as du, CreateCollectionV1InstructionData as ea, MPL_CORE_ERROR__MISSING_ASSET as ec, ImmutableMetadata as ed, getExternalPluginAdapterDecoder as ef, getAutographDecoder as eg, getBaseExternalPluginAdapterUpdateInfoEncoder as eh, getExecuteV1InstructionDataDecoder as ei, getHashedAssetV1Codec as el, BaseLinkedLifecycleHook as em, parseUpdateCollectionInfoV1Instruction as en, getBurnCollectionV1InstructionDataDecoder as eo, baseSeed as ep, RemovePluginV1InstructionDataArgs as er, AddCollectionPluginV1InstructionData as es, UpdatePluginV1InstructionDataArgs as et, RegistryRecord as eu, parseWriteExternalPluginAdapterDataV1Instruction as f, CompressV1InstructionData as fa, MPL_CORE_ERROR__NUMERICAL_OVERFLOW_ERROR as fc, getHashedAssetSchemaCodec as fd, getEditionEncoder as ff, AddBlocker as fg, getBaseExternalPluginAdapterInitInfoCodec as fh, getDecompressV1InstructionDataDecoder as fi, getCollectionV1Decoder as fl, BaseLinkedAppDataUpdateInfo as fm, parseUpdateCollectionExternalPluginAdapterV1Instruction as fn, getApprovePluginAuthorityV1InstructionDataDecoder as fo, BaseRoyalties as fp, RemoveExternalPluginAdapterV1InstructionDataArgs as fr, AddCollectionExternalPluginAdapterV1InstructionData as fs, UpdateExternalPluginAdapterV1InstructionDataArgs as ft, getPluginAuthorityPairCodec as fu, WriteCollectionExternalPluginAdapterDataV1Instruction as g, getCompressV1Instruction as ga, MPL_CORE_ERROR__PLUGIN_ALREADY_EXISTS as gc, HashablePluginSchemaArgs as gd, getDataStateDecoder as gf, getAddBlockerEncoder as gg, BaseDataSectionUpdateInfo as gh, CreateV2Input as gi, decodeAssetV1 as gl, getBaseLinkedAppDataUpdateInfoEncoder as gm, TransferV1Instruction as gn, ApproveCollectionPluginAuthorityV1Input as go, getBaseRoyaltiesEncoder as gp, getRemoveExternalPluginAdapterV1InstructionDataDecoder as gr, getAddCollectionExternalPluginAdapterV1Instruction as gs, getUpdateExternalPluginAdapterV1InstructionDataDecoder as gt, PluginArgs as gu, WriteCollectionExternalPluginAdapterDataV1Input as h, getCompressV1DiscriminatorBytes as ha, MPL_CORE_ERROR__PLUGINS_NOT_INITIALIZED as hc, HashablePluginSchema as hd, getDataStateCodec as hf, getAddBlockerDecoder as hg, isBaseExternalPluginAdapterInitInfo as hh, CREATE_V2_DISCRIMINATOR as hi, AssetV1Args as hl, getBaseLinkedAppDataUpdateInfoDecoder as hm, TransferV1Input as hn, APPROVE_COLLECTION_PLUGIN_AUTHORITY_V1_DISCRIMINATOR as ho, getBaseRoyaltiesDecoder as hp, getRemoveExternalPluginAdapterV1InstructionDataCodec as hr, getAddCollectionExternalPluginAdapterV1DiscriminatorBytes as hs, getUpdateExternalPluginAdapterV1InstructionDataCodec as ht, Plugin as hu, WriteExternalPluginAdapterDataV1Instruction as i, getCreateCollectionV1Instruction as ia, MPL_CORE_ERROR__MISSING_NEW_OWNER as ic, getImmutableMetadataEncoder as id, ExternalCheckResultArgs as if, getAttributesCodec as ig, baseExternalPluginAdapterKey as ih, DecompressV1Input as ii, CollectionV1 as il, getBaseLinkedLifecycleHookEncoder as im, UpdateCollectionExternalPluginAdapterV1Instruction as in, ApprovePluginAuthorityV1Input as io, isBaseSeed as ip, getRemovePluginV1InstructionDataDecoder as ir, getAddCollectionPluginV1Instruction as is, getUpdatePluginV1InstructionDataDecoder as it, getRegistryRecordEncoder as iu, getUpdateV2DiscriminatorBytes as j, getCollectInstructionDataEncoder as ja, fetchMaybePluginRegistryV1 as jc, ExternalValidationResultArgs as jd, getBurnDelegateDecoder as jf, findAssetSignerPda as jg, BaseAppDataUpdateInfo as jh, CreateV1InstructionDataArgs as ji, getVerifiedCreatorsCodec as jl, getBaseLifecycleHookUpdateInfoEncoder as jm, getRevokePluginAuthorityV1DiscriminatorBytes as jn, AddPluginV1InstructionDataArgs as jo, getBaseOracleInitInfoCodec as jp, ParsedRemoveCollectionExternalPluginAdapterV1Instruction as jr, MPL_CORE_ERROR__CANNOT_BURN_COLLECTION as js, ParsedUpdateCollectionPluginV1Instruction as jt, getPermanentFreezeExecuteEncoder as ju, UpdateV2InstructionData as k, getCollectInstructionDataCodec as ka, fetchAllMaybePluginRegistryV1 as kc, getFreezeDelegateEncoder as kd, BurnDelegateArgs as kf, getAssetSignerSize as kg, getBaseDataSectionDecoder as kh, CreateV1Instruction as ki, VerifiedCreators as kl, getBaseLifecycleHookUpdateInfoCodec as km, RevokePluginAuthorityV1InstructionData as kn, AddPluginV1Instruction as ko, BaseOracleInitInfo as kp, getRemoveCollectionPluginV1InstructionDataEncoder as kr, MPL_CORE_ERROR__BLOCKED_BY_BUBBLEGUM_V2 as ks, getUpdateCollectionV1InstructionDataEncoder as kt, getPermanentFreezeExecuteCodec as ku, getWriteExternalPluginAdapterDataV1InstructionDataCodec as l, COMPRESS_V1_DISCRIMINATOR as la, MPL_CORE_ERROR__NO_APPROVALS as lc, getHookableLifecycleEventEncoder as ld, EditionArgs as lf, getAttributeCodec as lg, BaseExternalPluginAdapterInitInfo as lh, getDecompressV1DiscriminatorBytes as li, fetchCollectionV1 as ll, getBaseLinkedDataKeyDecoder as lm, getUpdateCollectionExternalPluginAdapterV1InstructionDataCodec as ln, getApprovePluginAuthorityV1DiscriminatorBytes as lo, getBaseRuleSetDecoder as lp, RemoveExternalPluginAdapterV1Input as lr, ADD_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR as ls, UpdateExternalPluginAdapterV1Input as lt, getPluginTypeEncoder as lu, WRITE_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_DATA_V1_DISCRIMINATOR as m, ParsedCompressV1Instruction as ma, MPL_CORE_ERROR__PERMANENT_DELEGATES_PREVENT_MOVE as mc, getHashedAssetSchemaEncoder as md, DataStateArgs as mf, getAddBlockerCodec as mg, getBaseExternalPluginAdapterInitInfoEncoder as mh, parseDecompressV1Instruction as mi, AssetV1 as ml, getBaseLinkedAppDataUpdateInfoCodec as mm, TRANSFER_V1_DISCRIMINATOR as mn, parseApprovePluginAuthorityV1Instruction as mo, getBaseRoyaltiesCodec as mp, getRemoveExternalPluginAdapterV1Instruction as mr, ParsedAddCollectionExternalPluginAdapterV1Instruction as ms, getUpdateExternalPluginAdapterV1Instruction as mt, getPluginAuthorityPairEncoder as mu, WRITE_EXTERNAL_PLUGIN_ADAPTER_DATA_V1_DISCRIMINATOR as n, ParsedCreateCollectionV1Instruction as na, MPL_CORE_ERROR__MISSING_COMPRESSION_PROOF as nc, getImmutableMetadataCodec as nd, isExternalPluginAdapter as nf, Attributes as ng, BaseExternalPluginAdapterKey as nh, parseExecuteV1Instruction as ni, getHashedAssetV1Encoder as nl, getBaseLinkedLifecycleHookCodec as nm, UPDATE_COLLECTION_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR as nn, parseBurnCollectionV1Instruction as no, getBaseSeedDecoder as np, getRemovePluginV1Instruction as nr, ParsedAddCollectionPluginV1Instruction as ns, getUpdatePluginV1Instruction as nt, getRegistryRecordCodec as nu, WriteExternalPluginAdapterDataV1InstructionDataArgs as o, getCreateCollectionV1InstructionDataDecoder as oa, MPL_CORE_ERROR__MISSING_SYSTEM_PROGRAM as oc, HookableLifecycleEventArgs as od, getExternalCheckResultDecoder as of, getAttributesEncoder as og, getBaseExternalPluginAdapterKeyDecoder as oh, DecompressV1InstructionData as oi, decodeCollectionV1 as ol, BaseLinkedDataKeyArgs as om, UpdateCollectionExternalPluginAdapterV1InstructionDataArgs as on, ApprovePluginAuthorityV1InstructionData as oo, BaseRuleSetArgs as op, parseRemovePluginV1Instruction as or, getAddCollectionPluginV1InstructionDataDecoder as os, parseUpdatePluginV1Instruction as ot, PluginTypeArgs as ou, ParsedWriteCollectionExternalPluginAdapterDataV1Instruction as p, CompressV1InstructionDataArgs as pa, MPL_CORE_ERROR__ORACLE_CAN_REJECT_ONLY as pc, getHashedAssetSchemaDecoder as pd, DataState as pf, AddBlockerArgs as pg, getBaseExternalPluginAdapterInitInfoDecoder as ph, getDecompressV1InstructionDataEncoder as pi, getCollectionV1Encoder as pl, BaseLinkedAppDataUpdateInfoArgs as pm, ParsedTransferV1Instruction as pn, getApprovePluginAuthorityV1InstructionDataEncoder as po, BaseRoyaltiesArgs as pp, getRemoveExternalPluginAdapterV1DiscriminatorBytes as pr, AddCollectionExternalPluginAdapterV1InstructionDataArgs as ps, getUpdateExternalPluginAdapterV1DiscriminatorBytes as pt, getPluginAuthorityPairDecoder as pu, getUpdateV1InstructionDataEncoder as q, BurnCollectionV1Instruction as qa, HashedAssetV1 as qc, getExternalPluginAdapterSchemaCodec as qd, baseUpdateAuthority as qf, AutographSignatureArgs as qh, getCreateCollectionV2InstructionDataCodec as qi, getUpdateDelegateDecoder as ql, getBaseExtraAccountEncoder as qm, getRevokeCollectionPluginAuthorityV1InstructionDataEncoder as qn, getAddExternalPluginAdapterV1InstructionDataCodec as qo, getBaseLinkedLifecycleHookUpdateInfoDecoder as qp, ExecuteV1InstructionData as qr, MPL_CORE_ERROR__INVALID_LOG_WRAPPER_PROGRAM as qs, UpdateCollectionInfoV1InstructionData as qt, isOracleValidation as qu, WriteExternalPluginAdapterDataV1Input as r, getCreateCollectionV1DiscriminatorBytes as ra, MPL_CORE_ERROR__MISSING_EXTERNAL_PLUGIN_ADAPTER_ACCOUNT as rc, getImmutableMetadataDecoder as rd, ExternalCheckResult as rf, AttributesArgs as rg, BaseExternalPluginAdapterKeyArgs as rh, DECOMPRESS_V1_DISCRIMINATOR as ri, getHashedAssetV1Size as rl, getBaseLinkedLifecycleHookDecoder as rm, UpdateCollectionExternalPluginAdapterV1Input as rn, APPROVE_PLUGIN_AUTHORITY_V1_DISCRIMINATOR as ro, getBaseSeedEncoder as rp, getRemovePluginV1InstructionDataCodec as rr, getAddCollectionPluginV1DiscriminatorBytes as rs, getUpdatePluginV1InstructionDataCodec as rt, getRegistryRecordDecoder as ru, getWriteExternalPluginAdapterDataV1DiscriminatorBytes as s, getCreateCollectionV1InstructionDataEncoder as sa, MPL_CORE_ERROR__MISSING_UPDATE_AUTHORITY as sc, getHookableLifecycleEventCodec as sd, getExternalCheckResultEncoder as sf, Attribute as sg, getBaseExternalPluginAdapterKeyEncoder as sh, DecompressV1InstructionDataArgs as si, fetchAllCollectionV1 as sl, baseLinkedDataKey as sm, getUpdateCollectionExternalPluginAdapterV1DiscriminatorBytes as sn, ApprovePluginAuthorityV1InstructionDataArgs as so, baseRuleSet as sp, ParsedRemoveExternalPluginAdapterV1Instruction as sr, getAddCollectionPluginV1InstructionDataEncoder as ss, ParsedUpdateExternalPluginAdapterV1Instruction as st, getPluginTypeCodec as su, ParsedWriteExternalPluginAdapterDataV1Instruction as t, CreateCollectionV1InstructionDataArgs as ta, MPL_CORE_ERROR__MISSING_COLLECTION as tc, ImmutableMetadataArgs as td, getExternalPluginAdapterEncoder as tf, getAutographEncoder as tg, isBaseExternalPluginAdapterUpdateInfo as th, getExecuteV1InstructionDataEncoder as ti, getHashedAssetV1Decoder as tl, BaseLinkedLifecycleHookArgs as tm, ParsedUpdateCollectionExternalPluginAdapterV1Instruction as tn, getBurnCollectionV1InstructionDataEncoder as to, getBaseSeedCodec as tp, getRemovePluginV1DiscriminatorBytes as tr, AddCollectionPluginV1InstructionDataArgs as ts, getUpdatePluginV1DiscriminatorBytes as tt, RegistryRecordArgs as tu, getWriteExternalPluginAdapterDataV1InstructionDataDecoder as u, CompressV1Input as ua, MPL_CORE_ERROR__NO_DATA_SOURCES as uc, HashedAssetSchema as ud, getEditionCodec as uf, getAttributeDecoder as ug, BaseExternalPluginAdapterInitInfoArgs as uh, getDecompressV1Instruction as ui, fetchMaybeCollectionV1 as ul, getBaseLinkedDataKeyEncoder as um, getUpdateCollectionExternalPluginAdapterV1InstructionDataDecoder as un, getApprovePluginAuthorityV1Instruction as uo, getBaseRuleSetEncoder as up, RemoveExternalPluginAdapterV1Instruction as ur, AddCollectionExternalPluginAdapterV1Input as us, UpdateExternalPluginAdapterV1Instruction as ut, PluginAuthorityPair as uu, WriteCollectionExternalPluginAdapterDataV1InstructionDataArgs as v, getCompressV1InstructionDataDecoder as va, MPL_CORE_ERROR__REQUIRES_LIFECYCLE_CHECK as vc, getHashablePluginSchemaDecoder as vd, Creator as vf, AssetSignerArgs as vg, getBaseDataSectionUpdateInfoCodec as vh, CreateV2InstructionData as vi, fetchAllMaybeAssetV1 as vl, BaseLinkedAppDataInitInfoArgs as vm, TransferV1InstructionDataArgs as vn, ApproveCollectionPluginAuthorityV1InstructionData as vo, BasePluginAuthorityArgs as vp, parseRemoveExternalPluginAdapterV1Instruction as vr, getAddCollectionExternalPluginAdapterV1InstructionDataDecoder as vs, parseUpdateExternalPluginAdapterV1Instruction as vt, getPluginDecoder as vu, parseWriteCollectionExternalPluginAdapterDataV1Instruction as w, CollectInstructionData as wa, getMplCoreErrorMessage as wc, getFreezeExecuteEncoder as wd, CompressionProofArgs as wf, fetchMaybeAssetSigner as wg, getBaseDataSectionInitInfoDecoder as wh, getCreateV2InstructionDataDecoder as wi, VerifiedCreatorsSignature as wl, getBaseLinkedAppDataCodec as wm, parseTransferV1Instruction as wn, getApproveCollectionPluginAuthorityV1InstructionDataDecoder as wo, BaseOracleUpdateInfo as wp, RemoveCollectionPluginV1InstructionDataArgs as wr, ParsedMplCoreInstruction as ws, UpdateCollectionV1InstructionDataArgs as wt, getPermanentTransferDelegateCodec as wu, getWriteCollectionExternalPluginAdapterDataV1InstructionDataCodec as x, COLLECT_DISCRIMINATOR as xa, MPL_CORE_ERROR__UNINITIALIZED_ORACLE_ACCOUNT as xc, FreezeExecuteArgs as xd, getCreatorDecoder as xf, fetchAllMaybeAssetSigner as xg, BaseDataSectionInitInfo as xh, getCreateV2DiscriminatorBytes as xi, getAssetV1Codec as xl, getBaseLinkedAppDataInitInfoEncoder as xm, getTransferV1InstructionDataCodec as xn, getApproveCollectionPluginAuthorityV1DiscriminatorBytes as xo, getBasePluginAuthorityDecoder as xp, RemoveCollectionPluginV1Input as xr, MPL_CORE_PROGRAM_ADDRESS as xs, UpdateCollectionV1Input as xt, plugin as xu, getWriteCollectionExternalPluginAdapterDataV1DiscriminatorBytes as y, getCompressV1InstructionDataEncoder as ya, MPL_CORE_ERROR__SERIALIZATION_ERROR as yc, getHashablePluginSchemaEncoder as yd, CreatorArgs as yf, decodeAssetSigner as yg, getBaseDataSectionUpdateInfoDecoder as yh, CreateV2InstructionDataArgs as yi, fetchAssetV1 as yl, getBaseLinkedAppDataInitInfoCodec as ym, getTransferV1DiscriminatorBytes as yn, ApproveCollectionPluginAuthorityV1InstructionDataArgs as yo, basePluginAuthority as yp, ParsedRemoveCollectionPluginV1Instruction as yr, getAddCollectionExternalPluginAdapterV1InstructionDataEncoder as ys, ParsedUpdateCollectionV1Instruction as yt, getPluginEncoder as yu, UpdateV1Input as z, getBurnV1DiscriminatorBytes as za, fetchAllMaybePluginHeaderV1 as zc, getExternalRegistryRecordEncoder as zd, BaseValidationResultsOffsetArgs as zf, getBaseAppDataInitInfoDecoder as zh, CREATE_COLLECTION_V2_DISCRIMINATOR as zi, UpdateType as zl, getBaseLifecycleHookCodec as zm, RevokeCollectionPluginAuthorityV1Input as zn, ADD_EXTERNAL_PLUGIN_ADAPTER_V1_DISCRIMINATOR as zo, BaseMasterEdition as zp, getRemoveCollectionExternalPluginAdapterV1InstructionDataCodec as zr, MPL_CORE_ERROR__EXTERNAL_PLUGIN_ADAPTER_ALREADY_EXISTS as zs, getUpdateCollectionPluginV1InstructionDataCodec as zt, getPermanentBurnDelegateCodec as zu };
//# sourceMappingURL=index-CVXSW-f-.d.mts.map