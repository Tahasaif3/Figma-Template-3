import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-grow flex justify-center items-center px-4 py-10">
        <div
          data-aos="zoom-in"
          className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg"
        >
          <div className="flex justify-center mb-4">
            <Image
              src="/images/nike-logo.png"
              alt="Nike Logo"
              height={64}
              width={64}
            />
          </div>

          <h1 className="text-center text-2xl font-bold tracking-wide mb-6">
            YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
          </h1>

          <form>
            <div className="mb-4">
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div className="mb-4">
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div className="flex items-center justify-between mb-4 text-sm">
              <label className="flex items-center text-gray-500">
                <input type="checkbox" className="mr-2" />
                Keep me signed in
              </label>
              <a href="#" className="text-gray-400 hover:text-black">
                Forgotten your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              SIGN IN
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            By logging in, you agree to Nike&apos;s{" "}
            <a href="#" className="text-gray-500 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-500 underline">
              Terms of Use
            </a>
            .
          </div>

          <div className="mt-6 text-center text-gray-500 text-sm">
            Not a Member?{" "}
            <span className="border-b-[0.5px] border-black">
              <a href="#" className="text-black font-semibold">
                Join Us.
              </a>
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
