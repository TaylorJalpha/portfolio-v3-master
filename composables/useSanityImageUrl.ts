// Sanity image URL builder is no longer available. Use a fallback or handle gracefully.
export function useSanityImageUrl(source: any): string {
  // If you have a direct image URL, return it; otherwise, return a placeholder
  if (source && source.asset && source.asset.url) {
    return source.asset.url
  }
  return '/assets/css/mdrg.jpg' // fallback image or update as needed
}