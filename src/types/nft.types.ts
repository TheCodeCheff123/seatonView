export interface NFTItem {
  address: string;
  metadata: {
    name: string;
    description?: string;
    image: string;
  };
  collection?: {
    address: string;
  };
  owner: {
    address: string;
  };
}

export interface WalletNFTsResponse {
  nft_items: NFTItem[];
}

export interface CollectionMetadataResponse {
  address: string;
  name: string;
  description?: string;
  image?: string;
  owner_address: string;
}
