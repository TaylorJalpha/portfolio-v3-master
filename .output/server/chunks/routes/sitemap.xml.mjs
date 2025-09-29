import { d as defineEventHandler, u as useRuntimeConfig, s as setHeader } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

async function getDynamicEntries(event) {
  try {
    const query = `{
      "projects": *[_type == "project" && !(_id in path('drafts.**'))]{slug, _updatedAt},
      "caseStudies": *[_type == "caseStudy" && !(_id in path('drafts.**'))]{slug, _updatedAt},
      "blogPosts": *[_type == "blogPost" && !(_id in path('drafts.**'))]{slug, _updatedAt}
    }`;
    const base = true ? "https://salty-thicket-78087-c98e1b01d069.herokuapp.com" : false ? "https://fierce-cliffs-40135-8a4277dc65fb.herokuapp.com/" : "http://localhost:3000";
    const resp = await $fetch(`${base}/api/fetch-sanity`, { method: "POST", body: { query } });
    const result = (resp == null ? void 0 : resp.result) || resp;
    const entries = [];
    const push = (arr, prefix) => {
      var _a;
      for (const doc of arr || []) {
        const slug = ((_a = doc == null ? void 0 : doc.slug) == null ? void 0 : _a.current) || (doc == null ? void 0 : doc.slug);
        if (!slug) continue;
        entries.push({ loc: `${prefix}/${slug}`, lastmod: doc == null ? void 0 : doc._updatedAt });
      }
    };
    push(result == null ? void 0 : result.projects, "/project");
    push(result == null ? void 0 : result.caseStudies, "/case-study");
    push(result == null ? void 0 : result.blogPosts, "/blog");
    return entries;
  } catch (e) {
    return [];
  }
}
const sitemap_xml = defineEventHandler(async (event) => {
  var _a;
  const config = useRuntimeConfig();
  const siteUrl = (((_a = config.public) == null ? void 0 : _a.siteUrl) || "").replace(/\/$/, "");
  const staticPaths = ["/", "/portfolio"];
  const dynamicEntries = await getDynamicEntries();
  const urls = [
    ...staticPaths.map((p) => ({ loc: p })),
    ...dynamicEntries
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` + urls.map((u) => {
    const loc = siteUrl ? `${siteUrl}${u.loc}` : u.loc;
    const lastmod = u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString()}</lastmod>` : "";
    return `<url><loc>${loc}</loc>${lastmod}</url>`;
  }).join("") + `</urlset>`;
  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return xml;
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
