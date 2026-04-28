export const LAMPORTS_PER_SOL = 1_000_000_000;

export interface MplCoreMetadataAttribute {
  trait_type: string;
  value: string;
  rarityWeight?: number;
  supplyCap?: number | null;
}

export interface MplCoreMetadataInput {
  name: string;
  symbol: string;
  description: string;
  image: string;
  external_url: string;
  collection: {
    name: string;
    family: string;
    key: string;
  };
  attributes: MplCoreMetadataAttribute[];
}

export interface MplCoreMetadata {
  name: string;
  symbol: string;
  description: string;
  image: string;
  external_url: string;
  attributes: Array<
    Required<Pick<MplCoreMetadataAttribute, "trait_type" | "value">> & {
      rarityWeight: number;
      supplyCap: number | null;
    }
  >;
  properties: {
    category: "image";
    files: Array<{
      uri: string;
      type: "image/svg+xml";
    }>;
  };
  collection: {
    name: string;
    family: string;
    key: string;
  };
}

export interface MintQuote {
  collectionSlug: string;
  lamports: number;
  sol: number;
  breakdown: Array<{
    label: string;
    lamports: number;
  }>;
}

export function lamportsToSol(lamports: number | bigint): number {
  const value = typeof lamports === "bigint" ? Number(lamports) : lamports;
  return Number((value / LAMPORTS_PER_SOL).toFixed(4));
}

export function buildMplCoreMetadata(input: MplCoreMetadataInput): MplCoreMetadata {
  const attributes = input.attributes.map((attribute) => ({
    trait_type: attribute.trait_type,
    value: attribute.value,
    rarityWeight: attribute.rarityWeight ?? 1,
    supplyCap: attribute.supplyCap ?? null
  }));

  return {
    name: input.name,
    symbol: input.symbol,
    description: input.description,
    image: input.image,
    external_url: input.external_url,
    attributes,
    properties: {
      category: "image",
      files: [
        {
          uri: input.image,
          type: "image/svg+xml"
        }
      ]
    },
    collection: {
      name: input.collection.name,
      family: input.collection.family,
      key: input.collection.key
    }
  };
}

export function createMintQuote(args: {
  collectionSlug: string;
  rarityScore: number;
  traitCount: number;
}): MintQuote {
  const baseLamports = 19_000_000;
  const rarityPremium = Math.round(args.rarityScore * 1_400_000);
  const traitLoad = args.traitCount * 1_800_000;
  const lamports = baseLamports + rarityPremium + traitLoad;

  return {
    collectionSlug: args.collectionSlug,
    lamports,
    sol: lamportsToSol(lamports),
    breakdown: [
      { label: "MPL Core asset account", lamports: 11_000_000 },
      { label: "Metadata render", lamports: 5_000_000 },
      { label: "Rarity premium", lamports: rarityPremium },
      { label: "Trait layering", lamports: traitLoad }
    ]
  };
}
