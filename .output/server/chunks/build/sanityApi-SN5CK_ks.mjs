import axios from 'axios';

function useSanityImageUrl(source) {
  if (source && source.asset && source.asset.url) {
    return source.asset.url;
  }
  return "/assets/css/mdrg.jpg";
}
const api = axios.create({
  baseURL: "https://salty-thicket-78087-c98e1b01d069.herokuapp.com" ,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
async function fetchSanityContent(query) {
  try {
    const response = await api.post("/api/fetch-sanity", { query });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Rails API:", error);
    throw error;
  }
}

export { fetchSanityContent as f, useSanityImageUrl as u };
//# sourceMappingURL=sanityApi-SN5CK_ks.mjs.map
