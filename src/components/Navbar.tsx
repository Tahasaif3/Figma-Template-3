import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="w-full mt-0 z-10 mx-auto bg-customGray shadow-sm">
      <div className="mx-auto px-4 flex justify-between items-center md:py-3">
        <div className="flex items-center sm:py-3 md:py-0">
          <a href="/">
            <Image src="/images/logo2.png" alt="Jordan Logo" width={24} height={24} />
          </a>
        </div>
        <div className="hidden md:flex space-x-2 text-sm text-gray-700 font-medium">
          <Link href="/checkout" className="hover:text-gray-400">
            Find a Store
          </Link>
          <h1>|</h1>
          <Link href="/contactus" className="hover:text-gray-400">
            Help
          </Link>
          <h1>|</h1>
          <Link href="/joinus" className="hover:text-gray-400">
            Join Us
          </Link>
          <h1>|</h1>
          <Link href="/login" className="hover:text-gray-400">
            Sign In
          </Link>
        </div>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex gap-1 items-center py-2">
                    <div className="flex items-center">
                      <Image src="/images/logo2.png" alt="Jordan Logo" width={24} height={24} />
                    </div>
                    <h1 className="text-md">Nike</h1>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="md:hidden sm:flex text-start flex-col space-x-2 py-2 gap-5 text-sm text-gray-700 font-medium">
                    <Link href="/login" className="ml-2">
                      Sign In
                    </Link>
                    <Link href="/checkout" className="ml-2">
                      Find a Store
                    </Link>
                    <Link href="/contactus">Help</Link>
                    <Link href="/joinus">Join Us</Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <nav className="hidden md:block w-full bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/nike-logo.png"
              alt="Nike Logo"
              width={78.47}
              height={78.47}
            />
          </div>
          <div className="hidden md:flex items-center space-x-7 ml-4 text-md font-medium text-gray-800">
            <Link href="/products" className="hover:text-gray-400">
              New & Featured
            </Link>
            <Link
                href="/products?category=men"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Men
              </Link>
              <Link
                href="/products?category=women"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Women
              </Link>
              <Link
                href="/products?category=kids"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Kids
              </Link>
              <Link
                href="/products?category=sale"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Sale
              </Link>
              <Link
                href="/products?category=snkrs"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                SNKRS
              </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center bg-gray-100 px-2 py-2 rounded-full">
              <Image
                src="/images/searchbar.png"
                alt="search bar"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <input
                type="text"
                placeholder="Search"
                className="ml-1 bg-transparent focus:outline-none text-sm font-medium text-gray-600 placeholder-gray-300"
              />
            </div>
            <Image
              src="/images/heart.png"
              alt="heart"
              width={24}
              height={24}
              className="h-5 w-auto"
            />
            <a href="/cart">
              <Image
                src="/images/marketplace.png"
                alt="marketplace"
                width={24}
                height={24}
                className="h-6 w-auto hover:h-[26px] hover:w-[26px]"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
