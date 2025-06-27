"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
const axios_1 = __importDefault(require("axios"));
exports.httpClient = axios_1.default.create({
    headers: {
        Accept: 'application/json'
        // Add API key here if needed
        // 'Authorization': `Bearer ${process.env.TONAPI_KEY}`
    }
});
