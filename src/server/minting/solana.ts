import { fetchMaybeCollectionV1, getCreateV1Instruction } from "@obrera/mpl-core-kit-lib";
import {
  address,
  appendTransactionMessageInstructions,
  assertIsAddress,
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  createTransactionMessage,
  devnet,
  generateKeyPairSigner,
  getSignatureFromTransaction,
  pipe,
  sendAndConfirmTransactionFactory,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signTransactionMessageWithSigners
} from "@solana/kit";
import { getRewardMintingConfig } from "./config.js";

function createExplorerUrl(kind: "address" | "tx", value: string): string {
  return `https://explorer.solana.com/${kind}/${value}?cluster=devnet`;
}

export interface RewardMintResult {
  assetAddress: string;
  signature: string;
  collectionAddress: string;
  explorerUrls: {
    asset: string;
    collection: string;
    transaction: string;
  };
}

export async function mintRewardBadge(args: {
  name: string;
  metadataUrl: string;
  walletAddress: string;
}): Promise<RewardMintResult> {
  const config = await getRewardMintingConfig();

  try {
    assertIsAddress(args.walletAddress);
  } catch {
    throw new Error("Wallet address must be a valid Solana address.");
  }

  const rpc = createSolanaRpc(devnet(config.rpcUrl));
  const rpcSubscriptions = createSolanaRpcSubscriptions(devnet(config.wsUrl));
  const sendAndConfirmTransaction = sendAndConfirmTransactionFactory({
    rpc,
    rpcSubscriptions
  });
  const collectionAddress = address(config.collectionAddress);
  const collection = await fetchMaybeCollectionV1(rpc, collectionAddress);

  if (!collection.exists) {
    throw new Error(
      "Configured execute-plugin collection address does not exist on devnet."
    );
  }

  const assetSigner = await generateKeyPairSigner();
  const owner = address(args.walletAddress);
  const { value: latestBlockhash } = await rpc
    .getLatestBlockhash({ commitment: "confirmed" })
    .send();

  const message = pipe(
    createTransactionMessage({ version: 0 }),
    (current) => setTransactionMessageFeePayerSigner(config.signer, current),
    (current) =>
      setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, current),
    (current) =>
      appendTransactionMessageInstructions(
        [
          getCreateV1Instruction({
            asset: assetSigner,
            authority: config.signer,
            collection: collectionAddress,
            name: args.name,
            owner,
            payer: config.signer,
            updateAuthority: config.signer.address,
            uri: args.metadataUrl
          })
        ],
        current
      )
  );

  const transaction = await signTransactionMessageWithSigners(message);
  await sendAndConfirmTransaction(
    transaction as Parameters<typeof sendAndConfirmTransaction>[0],
    {
      commitment: "confirmed"
    }
  );
  const signature = getSignatureFromTransaction(
    transaction as Parameters<typeof getSignatureFromTransaction>[0]
  );

  return {
    assetAddress: assetSigner.address,
    signature,
    collectionAddress: config.collectionAddress,
    explorerUrls: {
      asset: createExplorerUrl("address", assetSigner.address),
      collection: createExplorerUrl("address", config.collectionAddress),
      transaction: createExplorerUrl("tx", signature)
    }
  };
}
