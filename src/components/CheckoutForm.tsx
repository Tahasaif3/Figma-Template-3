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
      <h3 className="text-lg font-semibold">Enter your name and address:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="w-full"
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className="w-full"
        />
        <Input
          name="addressLine1"
          placeholder="Address Line 1"
          value={formData.addressLine1}
          onChange={handleInputChange}
          required
          className="w-full col-span-full"
        />
        <Input
          name="addressLine2"
          placeholder="Address Line 2"
          value={formData.addressLine2}
          onChange={handleInputChange}
          className="w-full col-span-full"
        />
        <Input
          name="addressLine3"
          placeholder="Address Line 3"
          value={formData.addressLine3}
          onChange={handleInputChange}
          className="w-full col-span-full"
        />
        <Input
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleInputChange}
          required
          className="w-full"
        />
        <Input
          name="locality"
          placeholder="Locality"
          value={formData.locality}
          onChange={handleInputChange}
          required
          className="w-full"
        />
        <Select name="state" onValueChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="State/Territory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maharashtra">Maharashtra</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="karnataka">Karnataka</SelectItem>
          </SelectContent>
        </Select>
        <Select name="country" defaultValue="India" disabled>
          <SelectTrigger className="w-full">
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
          <label
            htmlFor="saveAddress"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Save this address to my profile
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="preferredAddress" />
          <label
            htmlFor="preferredAddress"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Make this my preferred address
          </label>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6">What`s your contact information?</h3>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="w-full"
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
        required
        className="w-full"
      />

      <h3 className="text-lg font-semibold mt-6">What`s your PAN?</h3>
      <Input
        name="pan"
        placeholder="PAN"
        value={formData.pan}
        onChange={handleInputChange}
        required
        className="w-full"
      />
      <div className="flex items-center space-x-2">
        <Checkbox id="savePAN" />
        <label
          htmlFor="savePAN"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Save PAN details to Nike Profile
        </label>
      </div>

      <div className="flex items-start space-x-2 mt-6">
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

      <Button type="submit" className="w-full">
        Place Order
      </Button>
    </form>
  )
}

