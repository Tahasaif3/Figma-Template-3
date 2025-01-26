"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { client } from "@/lib/sanity"
import { urlFor } from "@/sanity/lib/image"

interface Product {
  _id: string
  productName: string
  slug: string
  category: string
  price: number
  colors: string[]
  status: string
  imageUrl: string
  description: string
  gender?: string
}

async function getProducts(): Promise<Product[]> {
  return await client.fetch(`*[_type == "product"]{
    _id,
    productName,
    "slug": slug.current,
    category,
    price,
    colors,
    status,
    "imageUrl": image.asset->url,
    description,
    gender
  }`)
}

export default function ProductGallery() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts()
      setProducts(fetchedProducts)
    }
    fetchProducts()
  }, [])

  const filters = [
    "Shoes",
    "Sports Bras",
    "Tops & T-Shirts",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Trousers & Tights",
    "Shorts",
    "Tracksuits",
    "Jumpsuits & Rompers",
    "Skirts & Dresses",
    "Socks",
    "Accessories & Equipment",
  ]

  const genders = ["Men", "Women", "Unisex"]

  const filteredProducts = products.filter((product) => {
    const categoryMatch = !selectedCategory || product.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const genderMatch = !selectedGender || product.gender?.toLowerCase() === selectedGender.toLowerCase()
    return categoryMatch && genderMatch
  })

  return (
    <div className="min-h-screen mx-auto px-4 py-8 ">
      <Navbar />
      <div className="flex flex-col sm:flex-col-reverse md:flex-row ">
        <div className="w-full md:w-1/5">
          <h2 className="text-xl font-bold mb-4">New ({filteredProducts.length})</h2>
          <ul className="space-y-2">
            {filters.map((filter, index) => (
              <li
                key={index}
                className={`text-gray-600 hover:text-black cursor-pointer ${selectedCategory === filter ? "font-bold" : ""}`}
                onClick={() => setSelectedCategory(selectedCategory === filter ? null : filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
          <div className="mt-6 ">
            <h3 className="text-lg font-semibold">Gender</h3>
            <div className="space-y-2">
              {genders.map((gender) => (
                <label key={gender} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedGender === gender}
                    onChange={() => setSelectedGender(selectedGender === gender ? null : gender)}
                  />
                  <span className="text-gray-600">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Kids</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Boys</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Girls</span>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Shop By Price</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Under ₹ 2 500.00</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">₹ 2 501.00 -₹</span>
              </label>
            </div>
          </div>
        </div>

        <main className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 relative group transition-all duration-300 ease-in-out group-hover:bg-gray-200 group-hover:shadow-md"
            >
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
                  alt={product.productName}
                  width={348}
                  height={348}
                  className="md:w-[348px] md:h-[348px] sm:w-[120px] sm:h-[120px] object-cover mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </Link>

              <p className="text-orange-600 sm:text-[12px] md:text-lg font-semibold">{product.status}</p>

              <h3 className="sm:text-[8px] md:text-sm text-black">{product.productName}</h3>
              <p className="text-gray-600 sm:text-[8px] md:text-sm">{product.category}</p>
              <p className="text-gray-400 sm:text-[8px] md:text-sm">
                {product.colors.length} {product.colors.length === 1 ? "Color" : "Colors"}
              </p>
              <p className="text-black sm:text-[8px] md:text-sm">₹ {product.price.toFixed(2)}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}