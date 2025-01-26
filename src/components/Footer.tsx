import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer data-aos="fade-up"
    data-aos-duration="3000" className="bg-black mx-auto my-0 max-w-screen-2xl  text-gray-100">
      <div className=" mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="space-y-2 text-sm">
            <p>FIND A STORE</p>
            <p>BECOME A MEMBER</p>
            <p>SIGN UP FOR EMAIL</p>
            <p>Send Us Feedback</p>
            <p>STUDENT DISCOUNTS</p>
          </div>
          <div className="space-y-2 ">
            <p className="font-semibold text-sm ">GET HELP</p>
            <span className="text-gray-600 text-sm">
              <p>Order Status</p>
              <p>Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
              <p>Contact Us On Nike.com Inquiries</p>
              <p>Contact Us On All Other Inquiries</p>
            </span>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">ABOUT NIKE</p>
            <span className="text-gray-600 text-sm">
              <p>News</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Sustainability</p>
            </span>
          </div>
          <Image src="/images/link.png" alt="link." width={337} height={37} />
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between  items-center">
          <div className="sm:flex-col md:flex-row  flex  items-center space-x-4">
            <span className="text-gray-400">India</span>
            <span className="text-gray-600 sm:text-[10px] md:text-sm">
              © 2023 Nike, Inc. All Rights Reserved
            </span>
          </div>
          <div data-aos="flip-left" className="flex md:ml-72 sm:hidden md:flex  space-x-6">
            <a href="#"  className="hover:text-gray-600 text-sm">
              Guides
            </a>
            <a href="#" className="hover:text-gray-600 text-sm">
              Terms of Sale
            </a>
            <a href="#" className="hover:text-gray-600 text-sm">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-600 text-sm">
              Nike Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-400"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
