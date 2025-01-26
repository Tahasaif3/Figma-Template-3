import React from "react";

const Hero = () => {
  return (
    <div  data-aos="fade-down"  className="mx-auto my-0 max-w-screen-2xl hidden md:block w-full font-roboto bg-customGray  shadow-sm ">
      <div className="container w-full  font-roboto   mx-auto  bg-customGray  px-4 flex  justify-center items-center md:py-3    ">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-md font-semibold">Hello Nike App</h1>
          <h2 className="text-sm ">
            Download the app to access everything Nike.{" "}
            <span className=' className="font-bold underline text-lg"'>
              {" "}
              Get Your Great
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
