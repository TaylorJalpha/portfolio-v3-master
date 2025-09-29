function useSanityImageUrl(source) {
  if (source && source.asset && source.asset.url) {
    return source.asset.url;
  }
  return "/assets/css/mdrg.jpg";
}

export { useSanityImageUrl as u };
//# sourceMappingURL=useSanityImageUrl-FhHXDlFi.mjs.map
