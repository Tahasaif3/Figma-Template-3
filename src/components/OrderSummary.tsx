"use client"

import { useCart } from "@/app/Context/CartContext"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OrderSummary() {
  const { cart } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 500
  const total = subtotal + shipping

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery/Shipping</span>
            <span>{shipping === 500 ? "Free" : `₹${shipping}`}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <p className="text-sm font-semibold">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.productName}
                width={96}
                height={96}
                className="rounded-md"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.productName}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-sm">₹{item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

