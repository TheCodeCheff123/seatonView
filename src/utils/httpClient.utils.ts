import axios from 'axios';

const TONAPI_BASE_URL = 'https://tonapi.io/v2';

export const httpClient = axios.create({
  baseURL: TONAPI_BASE_URL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.TONAPI_KEY}`
  }
});
