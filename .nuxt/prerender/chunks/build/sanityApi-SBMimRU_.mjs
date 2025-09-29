import axios from 'file:///Users/tayloralphaaa/portfolio-v3-master/node_modules/axios/index.js';

const api = axios.create({
  baseURL: "http://localhost:3000",
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
    throw error;
  }
}

export { fetchSanityContent as f };
//# sourceMappingURL=sanityApi-SBMimRU_.mjs.map
