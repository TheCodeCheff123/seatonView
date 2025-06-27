// second test code
import { httpClient } from '../utils/httpClient.utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchWalletNFTs = async (walletAddress: string) => {
  const url = `/accounts/${walletAddress}/nfts`;
  const response = await httpClient.get(url);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchCollectionNFTs = async (collectionAddress: string) => {
  const url = `/nft/collections/${collectionAddress}/items`;
  const response = await httpClient.get(url);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchNftItem = async (nftAddress: string) => {
  const url = `/nft/items/${nftAddress}`;
  const response = await httpClient.get(url);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchCollectionMeta = async (collectionAddress: string) => {
  const url = `/nft/collections/${collectionAddress}`;
  const response = await httpClient.get(url);
  return response.data;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
/*
export function fetchNFTDetail(address: string) {
  void address;
  throw new Error('Function not implemented.');
}
*/
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function fetchNFTDetail(address: string) {
  console.log(`Fetching details for NFT at address: ${address}`);
  throw new Error('Function not implemented.');
}
