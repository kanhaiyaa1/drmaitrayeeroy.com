import type { MetadataRoute } from "next";
import { SITE_HOME } from "@/lib/site";

export const dynamic = "force-static";

// No lastModified on purpose: a build-time date would change on every build without the
// content changing, and a stale hard-coded one would be wrong. Search engines work it out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_HOME, changeFrequency: "yearly", priority: 1 }];
}
