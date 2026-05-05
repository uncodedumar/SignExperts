export const SITE_NAME = "Sign Experts IL";

export const SITE_DESCRIPTION =
  "Sign Experts IL is a leading sign company in Illinois providing outdoor and indoor signage, vehicle wraps, LED signs, installation, and custom graphics for businesses.";

/** Public site origin, no trailing slash. Uses NEXT_PUBLIC_SITE_URL or a sensible default. */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.signexperts.net";
  return raw.replace(/\/+$/, "");
}
