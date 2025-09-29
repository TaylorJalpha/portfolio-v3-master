import { g as useRoute, c as useRuntimeConfig } from './server.mjs';

function useCanonicalUrl(explicitPath) {
  var _a;
  const config = useRuntimeConfig();
  const route = useRoute();
  let base = (((_a = config.public) == null ? void 0 : _a.siteUrl) || "").replace(/\/$/, "");
  if (!base || base.includes("localhost")) {
    if (!base) {
      base = "http://localhost:3000";
    }
  }
  const path = explicitPath || route.fullPath || "/";
  const noQuery = path.split("?")[0].split("#")[0];
  const normalized = noQuery !== "/" ? noQuery.replace(/\/$/, "") : "/";
  return base + (normalized.startsWith("/") ? normalized : `/${normalized}`);
}

export { useCanonicalUrl as u };
//# sourceMappingURL=useCanonicalUrl-Bc6O9XZV.mjs.map
