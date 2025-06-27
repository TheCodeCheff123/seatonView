import { httpClient } from '../utils/httpClient.utils';

const BASE_URL = 'https://tonapi.io/v2';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchWalletNFTs = async (wallet: string) => {
  const url = `${BASE_URL}/accounts/${wallet}/nfts`;
  const res = await httpClient.get(url);
  return res.data;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchCollectionNFTs = async (collection: string) => {
  const url = `${BASE_URL}/nft/collections/${collection}/items`;
  const res = await httpClient.get(url);
  return res.data;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchNFTDetail = async (nft: string) => {
  const url = `${BASE_URL}/nft/items/${nft}`;
  const res = await httpClient.get(url);
  return res.data;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchCollectionMetadata = async (collection: string) => {
  const url = `${BASE_URL}/nft/collections/${collection}`;
  const res = await httpClient.get(url);
  return res.data;
};
