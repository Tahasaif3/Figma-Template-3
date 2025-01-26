"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { CheckoutForm } from "@/components/CheckoutForm"
import { OrderSummary } from "@/components/OrderSummary"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CheckoutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">How would you like to get your order?</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Customs regulation for India requires a copy of the recipients KYC. The address on this KYC needs to
              match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC.{" "}
              <a href="#" className="underline font-semibold">
                Learn More
              </a>
            </p>

            <Button variant="outline" className="w-full justify-start mb-6">
              <Image src="/images/Group.png" alt="Deliver" width={21} height={19} className="mr-2" />
              Deliver it
            </Button>

            <CheckoutForm />

            <div className="space-y-4 mt-8">
              {["Delivery", "Shipping", "Billing", "Payment"].map((step, index) => (
                <h3
                  key={step}
                  className={`text-lg font-medium border-b py-2 ${index === 0 ? "text-gray-800" : "text-gray-400"}`}
                >
                  {step}
                </h3>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="sticky top-4">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

