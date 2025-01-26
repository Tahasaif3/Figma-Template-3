import { client } from "@/lib/sanity"
import slugify from "slugify"

const updateSlugs = async () => {
  const products = await client.fetch(`*[_type == "product" && !defined(slug.current)]`)

  const transaction = client.transaction()

  products.forEach((product) => {
    const slug = slugify(product.productName, { lower: true })
    transaction.patch(product._id, {
      set: {
        slug: {
          _type: "slug",
          current: slug,
        },
      },
    })
  })

  await transaction.commit()
  console.log(`Updated ${products.length} products with slugs`)
}

updateSlugs()

