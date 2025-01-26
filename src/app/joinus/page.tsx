import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar /> 
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div
          data-aos="zoom-in"
          className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/nike-logo.png"
              alt="Nike Logo"
              height={64}
              width={64}
            />
          </div>

          <h1 className="text-center text-xl font-bold mb-4">
            BECOME A NIKE MEMBER
          </h1>
          <p className="text-center text-gray-500 text-sm mb-6">
            Create your Nike Member profile and get <br /> first access to the
            very best of Nike <br /> products, inspiration, and community.
          </p>

  
          <form>
            
            <input
              type="email"
              placeholder="Email address"
              className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

    
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="text"
              placeholder="First Name"
              className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

    
            <input
              type="date"
              className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />
            <p className="text-xs text-gray-500 mb-3 text-center">
              Get a Nike Member Reward every year on your Birthday.
            </p>

            <select
              className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
              defaultValue="India"
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>

     
            <div className="flex justify-between mb-4">
              <button
                type="button"
                className="w-[48%] py-2 border rounded-md hover:bg-gray-100"
              >
                Male
              </button>
              <button
                type="button"
                className="w-[48%] py-2 border rounded-md hover:bg-gray-100"
              >
                Female
              </button>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="email-updates"
                className="w-4 h-4 mr-2"
              />
              <label htmlFor="email-updates" className="text-sm text-gray-600">
                Sign up for emails to get updates from Nike on products, offers,
                and your Member benefits.
              </label>
            </div>
            <p className="text-xs text-center text-gray-500 py-5 mt-4">
              By creating an account, you agree to Nike&apos;s{" "}
              <a href="#" className="underline text-gray-500">
                Privacy <br /> Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-gray-500">
                Terms of Use
              </a>
              .
            </p>

           
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              JOIN US
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-4">
            Already a Member?{" "}
            <a href="#" className="text-black underline font-medium">
              Sign In.
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
