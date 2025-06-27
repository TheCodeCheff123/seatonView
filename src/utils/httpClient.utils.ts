import axios from 'axios';

export const httpClient = axios.create({
  headers: {
    Accept: 'application/json'
    // Add API key here if needed
    // 'Authorization': `Bearer ${process.env.TONAPI_KEY}`
  }
});
