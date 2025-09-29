import axios from 'axios';

const api = axios.create({
  baseURL: "https://salty-thicket-78087-c98e1b01d069.herokuapp.com" ,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
async function fetchSanityContent(query) {
  var _a, _b;
  try {
    const response = await api.post("/api/fetch-sanity", { query });
    return (_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.result) != null ? _b : response == null ? void 0 : response.data;
  } catch (error) {
    console.error("Error fetching data from Rails API:", error);
    if (process.env.NUXT_ENV === "generate") {
      console.warn("API not available during build, returning null for query:", query);
      return null;
    }
    throw error;
  }
}

export { fetchSanityContent as f };
//# sourceMappingURL=sanityApi-SBMimRU_.mjs.map
