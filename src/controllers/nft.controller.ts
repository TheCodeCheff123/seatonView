import { Request, Response } from 'express';
import * as tonapi from '../services/tonapi.service';

export const getWalletNFTs = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchWalletNFTs(address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch wallet NFTs' });
  }
};

export const getCollectionNFTs = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchCollectionNFTs(address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch collection NFTs' });
  }
};

export const getNFTDetail = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchNFTDetail(address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch NFT detail' });
  }
};

export const getCollectionMetadata = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const data = await tonapi.fetchCollectionMetadata(address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch collection metadata' });
  }
};
