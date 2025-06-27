import { Request, Response } from 'express';
import * as tonapi from '../services/tonapi.service';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getWalletNFTs = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchWalletNFTs(address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch wallet NFTs' });
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCollectionNFTs = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchCollectionNFTs(address);
    res.json(data);
  } catch (err) {
    console.error('TONAPI Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch collection NFTs' });
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getNFTDetail = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchNFTDetail(address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch NFT detail' });
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCollectionMetadata = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchCollectionMeta(address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch collection metadata' });
  }
};
