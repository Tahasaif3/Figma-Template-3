import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <div className="sm:mt-8 md:mt-0  w-full  mx-auto my-0 max-w-screen-2xl ">
      <Image
        src="/images/shoes1.png"
        alt="shoess"
        width={1536}
        height={700}
        className=" sm:h-auto sm:flex md:block sm:justify-center md:justify-normal md:h-[700px]  "
      />
    </div>
  );
};

export default Hero2;
