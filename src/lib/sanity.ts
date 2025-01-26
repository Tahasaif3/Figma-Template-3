import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '01lcds7q',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-18',
  useCdn: process.env.NODE_ENV === 'production',
})
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function getImageUrl(image: any): string | null {
  if (!image) return null

  if (typeof image === "string") {
    // If it's already a URL, return it
    return image
  }

  if (image.asset && typeof image.asset === "object" && "_ref" in image.asset) {
    // If it's a Sanity image reference
    try {
      return urlFor(image).width(400).height(300).url()
    } catch (error) {
      console.error("Error generating image URL:", error)
      return null
    }
  }

  console.error("Invalid image format:", image)
  return null
}




// export async function createSanityOrder(orderData: any) {
//   if (!orderData) {
//     throw new Error("Order data is required")
//   }

//   try {
//     console.log("Attempting to create Sanity order with data:", orderData)
//     const result = await client.create({
//       _type: "order",
//       ...orderData,
//     })
//     console.log("Successfully created Sanity order:", result)
//     return result
//   } catch (error) {
//     console.error("Detailed error creating Sanity order:", {
//       error,
//       orderData,
//       projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//       dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     })
//     throw error
//   }
// }


