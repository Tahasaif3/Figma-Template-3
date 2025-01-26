"use client"

import { useState } from "react"
import { useCart } from "@/app/Context/CartContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postalCode: "",
    locality: "",
    state: "",
    country: "India",
    email: "",
    phone: "",
    pan: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast.success("Order placed successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center lg:text-left">
        <h3 className="text-lg font-semibold">Enter your name and address:</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="w-full p-3 col-span-2 sm:col-span-1"
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className="w-full p-3 col-span-2 sm:col-span-1"
        />
        <Input
          name="addressLine1"
          placeholder="Address Line 1"
          value={formData.addressLine1}
          onChange={handleInputChange}
          required
          className="w-full p-3 col-span-2"
        />
        <Input
          name="addressLine2"
          placeholder="Address Line 2"
          value={formData.addressLine2}
          onChange={handleInputChange}
          className="w-full p-3 col-span-2"
        />
        <Input
          name="addressLine3"
          placeholder="Address Line 3"
          value={formData.addressLine3}
          onChange={handleInputChange}
          className="w-full p-3 col-span-2"
        />
        <Input
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleInputChange}
          required
          className="w-full p-3"
        />
        <Input
          name="locality"
          placeholder="Locality"
          value={formData.locality}
          onChange={handleInputChange}
          required
          className="w-full p-3"
        />
        <Select name="state" onValueChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}>
          <SelectTrigger className="w-full p-3">
            <SelectValue placeholder="State/Territory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maharashtra">Maharashtra</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="karnataka">Karnataka</SelectItem>
          </SelectContent>
        </Select>
        <Select name="country" defaultValue="India" disabled>
          <SelectTrigger className="w-full p-3">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="India">India</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="saveAddress" />
          <label htmlFor="saveAddress" className="text-sm">
            Save this address to my profile
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="preferredAddress" />
          <label htmlFor="preferredAddress" className="text-sm">
            Make this my preferred address
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold">What`s your contact information?</h3>
        </div>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full p-3"
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full p-3"
        />
      </div>

      <div className="space-y-4">
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold">What`s your PAN?</h3>
        </div>
        <Input
          name="pan"
          placeholder="PAN"
          value={formData.pan}
          onChange={handleInputChange}
          required
          className="w-full p-3"
        />
        <div className="flex items-center space-x-2">
          <Checkbox id="savePAN" />
          <label htmlFor="savePAN" className="text-sm">
            Save PAN details to Nike Profile
          </label>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="agreement" required />
        <label htmlFor="agreement" className="text-sm text-gray-600 leading-relaxed">
          I have read and consent to Nike processing my information in accordance with the{" "}
          <a href="#" className="underline font-semibold">
            Privacy Statement
          </a>{" "}
          and{" "}
          <a href="#" className="underline font-semibold">
            Cookie Policy
          </a>
          .
        </label>
      </div>

      <Button type="submit" variant="secondary" className="w-full p-3 bg-gray-200 text-gray-800 hover:bg-gray-300">
        Continue
      </Button>
    </form>
  )
}

