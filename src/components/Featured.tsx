import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className=" w-full mx-auto my-0 max-w-screen-2xl px-4">
      <h1 className="p-x-2 text-xl sm:font-medium md:font-medium">Featured</h1>
      <Image
        src="/images/menImage.png"
        alt="men"
        width={1536}
        height={700}
        className="sm:h-auto sm:flex md:block sm:justify-center md:justify-normal md:h-[700px] "
      />
      <div className="flex flex-col items-center justify-center text-center py-7 px-4   bg-white">
        <h1 className="text-2xl md:text-5xl font-bold my-4">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className=" max-w-xl leading-relaxed">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>

        <div className="flex space-x-4 mt-6">
          <button data-aos="flip-up" className="bg-black border  hover:text-black  text-white px-6 py-3 rounded-full hover:bg-white transition">
            Find Your Shoe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
