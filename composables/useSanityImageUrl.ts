import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from '@/lib/sanity'

const builder = imageUrlBuilder(sanityClient)

export function useSanityImageUrl(source: any): string {
  return builder.image(source).width(1200).url()
}