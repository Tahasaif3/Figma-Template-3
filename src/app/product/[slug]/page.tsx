import { notFound } from "next/navigation"
import ProductDetailCard from "@/components/ProductDetailCard"
import { client } from "@/lib/sanity"

async function getProduct(slug: string) {
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug })

  if (!product) {
    return null
  }

  return product
}

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "product"] { "slug": slug.current }`)

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductDetailCard product={product} />
}

