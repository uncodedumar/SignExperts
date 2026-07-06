/** Trim and cap meta descriptions for search snippets. */
export function truncateMetaDescription(text: string, max = 160): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed = lastSpace > 120 ? slice.slice(0, lastSpace) : slice;
  return `${trimmed.trimEnd()}…`;
}
