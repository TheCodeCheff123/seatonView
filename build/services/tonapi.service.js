"use strict";
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
exports.fetchCollectionMetadata = exports.fetchNFTDetail = exports.fetchCollectionNFTs = exports.fetchWalletNFTs = void 0;
const httpClient_utils_1 = require("../utils/httpClient.utils");
const BASE_URL = 'https://tonapi.io/v2';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchWalletNFTs = (wallet) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${BASE_URL}/accounts/${wallet}/nfts`;
    const res = yield httpClient_utils_1.httpClient.get(url);
    return res.data;
});
exports.fetchWalletNFTs = fetchWalletNFTs;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchCollectionNFTs = (collection) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${BASE_URL}/nft/collections/${collection}/items`;
    const res = yield httpClient_utils_1.httpClient.get(url);
    return res.data;
});
exports.fetchCollectionNFTs = fetchCollectionNFTs;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchNFTDetail = (nft) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${BASE_URL}/nft/items/${nft}`;
    const res = yield httpClient_utils_1.httpClient.get(url);
    return res.data;
});
exports.fetchNFTDetail = fetchNFTDetail;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchCollectionMetadata = (collection) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${BASE_URL}/nft/collections/${collection}`;
    const res = yield httpClient_utils_1.httpClient.get(url);
    return res.data;
});
exports.fetchCollectionMetadata = fetchCollectionMetadata;
