// Single source of truth for site-wide SEO values. Set once, rarely changed.
// Everything here is deliberately time-independent (no "years of experience", counts or dates)
// so it stays true without updates. Change only if her name, role or domain changes.
// Must match the host the site is actually served from. Vercel redirects the bare domain to
// www, so www is the canonical host. If the Vercel primary domain is ever switched, change
// this one line (canonical, og:url, sitemap, robots and JSON-LD all derive from it).
export const SITE_URL = "https://www.drmaitrayeeroy.com";
// Canonical home URL with trailing slash, used for canonical, og:url, sitemap and JSON-LD.
export const SITE_HOME = `${SITE_URL}/`;
export const SITE_NAME = "Prof. (Dr.) Maitrayee Roy";
export const SITE_TITLE = "Prof. (Dr.) Maitrayee Roy | Histopathologist & FRCPath Educator";
export const SITE_DESCRIPTION =
  "Prof. (Dr.) Maitrayee Roy, MD, FRCPath: histopathologist and Professor of Pathology at MMDU Mullana, co-owner of Maitri Diagnostic Lab, Ambala.";
export const OG_IMAGE = "/og-image.jpg";
