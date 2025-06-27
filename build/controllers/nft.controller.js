"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionMetadata = exports.getNFTDetail = exports.getCollectionNFTs = exports.getWalletNFTs = void 0;
const tonapi = __importStar(require("../services/tonapi.service"));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getWalletNFTs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        const data = yield tonapi.fetchWalletNFTs(address);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch wallet NFTs' });
    }
});
exports.getWalletNFTs = getWalletNFTs;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getCollectionNFTs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        const data = yield tonapi.fetchCollectionNFTs(address);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch collection NFTs' });
    }
});
exports.getCollectionNFTs = getCollectionNFTs;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getNFTDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        const data = yield tonapi.fetchNFTDetail(address);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch NFT detail' });
    }
});
exports.getNFTDetail = getNFTDetail;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getCollectionMetadata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        const data = yield tonapi.fetchCollectionMetadata(address);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch collection metadata' });
    }
});
exports.getCollectionMetadata = getCollectionMetadata;
