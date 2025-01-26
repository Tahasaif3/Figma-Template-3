"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import { Search, Heart, ShoppingBag, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navLinks = [
    { href: "/products", label: "New & Featured" },
    { href: "/products?category=men", label: "Men" },
    { href: "/products?category=women", label: "Women" },
    { href: "/products?category=kids", label: "Kids" },
    { href: "/products?category=sale", label: "Sale" },
    { href: "/products?category=snkrs", label: "SNKRS" },
  ]

  const topLinks = [
    { href: "/checkout", label: "Find a Store" },
    { href: "/contactus", label: "Help" },
    { href: "/joinus", label: "Join Us" },
    { href: "/login", label: "Sign In" },
  ]

  return (
    <div className="w-full z-50 sticky top-0 bg-customGray shadow-sm">
      {/* Top Bar */}
      <div className="mx-auto px-4 flex justify-between items-center h-12">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo2.png" alt="Jordan Logo" width={24} height={24} className="w-6 h-6" />
          </Link>
        </div>

        {/* Desktop Top Links */}
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-700 font-medium">
          {topLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link href={link.href} className="hover:text-gray-400">
                {link.label}
              </Link>
              {index < topLinks.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <CiMenuFries className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/images/logo2.png" alt="Jordan Logo" width={24} height={24} />
                    <span className="text-lg">Nike</span>
                  </div>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-6 px-4">
                <div className="space-y-4 mb-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-lg font-medium text-gray-900 hover:text-gray-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-4 pt-6 border-t">
                  {topLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/nike-logo.png"
                alt="Nike Logo"
                width={78.47}
                height={78.47}
                className="h-8 w-auto md:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7 ml-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "items-center transition-all duration-300",
                isSearchOpen ? "flex w-full md:w-auto" : "hidden md:flex",
              )}
            >
              <div className="relative flex items-center bg-gray-100 rounded-full w-full md:w-auto">
                <Search className="absolute left-3 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-sm placeholder:text-gray-400 rounded-full w-full"
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" />
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

