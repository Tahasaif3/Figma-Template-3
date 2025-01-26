"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckoutForm } from "@/components/CheckoutForm";
import { OrderSummary } from "@/components/OrderSummary";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto sm:px-4 lg:px-16 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:items-start space-y-6 lg:space-y-0">
          {/* Left Section */}
          <div className="lg:w-2/3 w-full">
            <h2 className="text-2xl font-semibold mb-4">How would you like to get your order?</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Customs regulation for India requires a copy of the recipient’s KYC. The address on this KYC needs to
              match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC.{" "}
              <a href="#" className="underline font-semibold">
                Learn More
              </a>
            </p>

            {/* Delivery Button */}
            <Button variant="outline" className="w-full justify-start mb-6">
              <Image src="/images/Group.png" alt="Deliver" width={21} height={19} className="mr-2" />
              Deliver it
            </Button>

            {/* Checkout Form */}
            <CheckoutForm />

            {/* Steps Section */}
            <div className="space-y-4 mt-8">
              {["Delivery", "Shipping", "Billing", "Payment"].map((step, index) => (
                <h3
                  key={step}
                  className={`text-lg font-medium border-b py-2 ${
                    index === 0 ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step}
                </h3>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 w-full">
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
