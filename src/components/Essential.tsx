import Image from "next/image";
import React from "react";

const Essential = () => {
  return (
    <div className="  mx-auto my-0 max-w-screen-2xl px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">The Essentials</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group">
          <Image
            src="/images/mens-essentials.png"
            alt="Men's Essentials"
            layout="responsive"
            width={500}
            height={400}
            className="object-cover rounded-md"
          />
          <button className="absolute  bottom-4 left-4 bg-white text-sm px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
            Men s
          </button>
        </div>
        <div className="relative group">
          <Image
            src="/images/womens-essentials.png"
            alt="Women's Essentials"
            layout="responsive"
            width={500}
            height={400}
            className="object-cover rounded-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-sm px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
            Women s
          </button>
        </div>
        <div className="relative group">
          <Image
            src="/images/kids-essentials.png"
            alt="Kids' Essentials"
            layout="responsive"
            width={500}
            height={400}
            className="object-cover rounded-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-sm px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
            Kids
          </button>
        </div>
      </div>
    </div>
  );
};

export default Essential;
