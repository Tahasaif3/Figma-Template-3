"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { useCart } from "@/app/Context/CartContext"
import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"

const ProductDetailCard = ({ product }: { product: any }) => {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <h2 className="text-2xl font-semibold text-red-600">Product not found.</h2>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    const item = {
      id: product._id,
      productName: product.productName,
      price: product.price,
      image: product.image ? urlFor(product.image).url() : "/images/placeholder.png",
      quantity: 1,
    }

    addToCart(item)

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <>
      <Navbar />
      <div className="md:pt-40 flex flex-col lg:flex-row items-center gap-8 p-6 max-w-6xl mx-auto">
        <div data-aos="zoom-out-up" className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={product.image ? urlFor(product.image).url() : "/images/placeholder.png"}
            alt={product.productName || "Product"}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.productName || "Unnamed Product"}</h1>
          <p className="text-gray-600">{product.description || "No description available."}</p>
          <p className="text-2xl font-bold">₹ {product.price ? product.price.toFixed(2) : "0.00"}</p>
          <Button size="lg" className="w-full sm:w-auto" onClick={handleAddToCart} disabled={isAdding}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            {isAdding ? "Adding to Cart..." : "Add to Cart"}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetailCard

