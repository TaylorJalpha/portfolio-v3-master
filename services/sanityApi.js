
import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://salty-thicket-78087-c98e1b01d069.herokuapp.com'
      : process.env.NODE_ENV === 'staging'
      ? 'https://fierce-cliffs-40135-8a4277dc65fb.herokuapp.com/'
      : 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function fetchSanityContent(query) {
  try {
    const response = await api.post('/api/fetch-sanity', { query });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Rails API:', error);
    throw error;
  }
}
