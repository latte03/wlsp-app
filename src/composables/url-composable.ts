interface AssetsImageUrlOptions {
  extension: '.jpg' | '.png' | '.svg'
}

export function useAssetsImageURL(imageName: string, props?: AssetsImageUrlOptions) {
  return computed(
    () =>
      new URL(`../assets/images/${imageName}${props?.extension || '.png'}`, import.meta.url).href,
  )
}
