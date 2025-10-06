
import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://portfolio-v3-rails-backend-0096da26ec3e.herokuapp.com/'
      : process.env.NODE_ENV === 'staging'
      ? 'https://fierce-cliffs-40135-8a4277dc65fb.herokuapp.com/'
      : 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function fetchSanityContent(query, preview = false) {
  try {
    const response = await api.post('/api/fetch-sanity', { 
      query,
      preview: preview || false
    });
    
    // Sanity returns shape { result, query, ms }. Normalize to return `result` directly.
    // This ensures callers consistently receive either an array of docs or a single doc.
    return response?.data?.result ?? response?.data;
  } catch (error) {
    console.error('Error fetching data from Rails API:', error);
    
    // During build time, if the API is not available, return null instead of throwing
    // This prevents the build process from failing
    if (process.env.NODE_ENV === 'production' && process.env.NUXT_ENV === 'generate') {
      console.warn('API not available during build, returning null for query:', query);
      return null;
    }
    throw error;
  }
}
