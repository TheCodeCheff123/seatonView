import { Router } from 'express';
import {
  getWalletNFTs,
  getCollectionNFTs,
  getNFTDetail,
  getCollectionMetadata
} from '../controllers/nft.controller';

const router = Router();

router.get('/wallet/:address', getWalletNFTs);
router.get('/collection/:address', getCollectionNFTs);
router.get('/nft/:address', getNFTDetail);
router.get('/collection-meta/:address', getCollectionMetadata);

export default router;
