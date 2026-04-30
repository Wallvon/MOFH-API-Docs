import type { MetadataRoute } from "next";
import { getPageMap } from "nextra/page-map";
import { PageMapItem } from "nextra";

export const dynamic = "force-static";

export const baseUrl = "https://api.myownfreehost.net";

async function extractSitemapEntries(
  pageMap: PageMapItem[],
): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  function processItem(item: PageMapItem) {
    if ("frontMatter" in item && item.route && item.frontMatter?.timestamp) {
      entries.push({
        url: baseUrl + item.route,
        lastModified: new Date(item.frontMatter.timestamp),
        changeFrequency: "yearly",
        priority: 1,
      });
    }

    if ("children" in item && Array.isArray(item.children)) {
      item.children.forEach((child) => processItem(child));
    }
  }

  pageMap.forEach((item) => processItem(item));

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rootPageMap = await getPageMap();
  const entries = await extractSitemapEntries(rootPageMap);

  return entries;
}
