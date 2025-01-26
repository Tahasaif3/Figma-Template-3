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
      <div className="flex-grow">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-64 py-6">
          <div className="lg:flex lg:gap-8 max-w-[1200px] mx-auto">
            <div className="lg:w-2/3 space-y-6">
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-3xl font-semibold">How would you like to get your order?</h2>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                  Customs regulation for India requires a copy of the recipient`s KYC. The address on this KYC needs to
                  match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC.{" "}
                  <a href="#" className="underline font-semibold">
                    Learn More
                  </a>
                </p>
              </div>

              <Button variant="outline" className="w-full justify-start h-auto py-5 px-4 gap-5 text-base font-medium">
                <Image src="/images/Group.png" alt="Deliver" width={21} height={19} />
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
              <div className="lg:sticky lg:top-4">
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

