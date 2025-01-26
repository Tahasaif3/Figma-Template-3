import Image from "next/image";
import React from "react";

const AirMaxSection = () => {
  return (
    <section className=" mx-auto my-0 max-w-screen-2xl flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
      <h2 className="text-lg md:text-xl font-semibold">Best of Air Max</h2>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-black rounded-full w-8 h-8 flex items-center justify-center border border-gray-300">
          <span>
            <Image
              src="/images/aeroleft.png"
              alt="aeroleft Logo"
              width={6.97}
              height={13.93}
            />
          </span>
        </button>
        <button className="text-gray-500 hover:text-black rounded-full w-8 h-8 flex items-center justify-center border border-gray-300">
          <span>
            <Image
              src="/images/aeroright.png"
              alt="aeroleft Logo"
              width={6.97}
              height={13.93}
            />
          </span>
        </button>
        <a
          href="#"
          className="text-sm md:text-base text-black font-medium hover:underline"
        >
          Shop
        </a>
      </div>
    </section>
  );
};

export default AirMaxSection;
