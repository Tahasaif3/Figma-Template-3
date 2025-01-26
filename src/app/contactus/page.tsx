import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
      <header className=" py-3 text-center flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">GET HELP</h1>
       

        <div className="flex justify-between items-center md:w-[400px] px-2 py-2 mt-2  border rounded">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="ml-1 bg-transparent focus:outline-none text-sm   text-gray-600 placeholder-gray-300"
          />
          <Image
            src="/images/searchbar.png"
            alt="Jordan Logo"
            width={20}
            height={20}
            className="h-6 w-auto"
          />
        </div>
      </header>

      <div className=" mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="mb-2">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside mb-4 ">
            <li className="ml-2 list-none">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </li>
            <li className="ml-2 list-none">
              If you enter your PAN information at checkout, you will be able to
              pay for your order with PayTM or a local credit or debit card.
            </li>
            <li className=" ml-2 list-none">Apple Pay</li>
          </ul>
          <p className="mb-4">
            <a href="#" className="underline font-semibold">
              Nike Members
            </a>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you&apos;re not already a Member&apos;{" "}
            <a href="#" className="underline font-semibold">
              join us
            </a>{" "}
            today.
          </p>

          <div className="flex space-x-4 mb-6">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              JOIN US
            </button>
            <button className="border border-black px-4 py-2 rounded-md">
              SHOP NIKE
            </button>
          </div>

          <h3 className="text-xl font-bold mb-2">FAQs</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Does my card need international purchases enabled?
              </p>
              <p>
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p className="font-semibold py-2">
                Please note, some banks may charge a small transaction fee for
                international orders.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Can I pay for my order with multiple methods?
              </p>
              <p>
                No, payment for Nike orders can&apos;t be split between multiple
                payment methods.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                What payment method is accepted for SNKRS orders?
              </p>
              <p>
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Why don&apos;t I see Apple Pay as an option?
              </p>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you&apos;ll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                card in your Wallet. Additionally, you&apos;ll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </div>

            <p>Was this answer helpful?</p>

            <p className="font-semibold text-gray-400">RELATED</p>
            <p className="font-semibold ">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
            <p className="font-semibold">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </p>
          </div>
        </section>

        <div className="lg:col-span-1 bg-gray-100 p-6 rounded-md text-center gap-3">
          <h3 className="text-xl font-bold mb-4 ">CONTACT US</h3>
          <div className="space-y-6">
            <div className="flex justify-center items-center flex-col text-center">
                <Image
                  src="/images/icon4.png"
                  alt="Nike Logo"
                  height={64}
                  width={64}
                />
              <p className="font-bold">
                
                000 800 919 0566
              </p>
              <p className="text-gray-800">
                Products & Orders: 24 hours a day, <br /> 7 days a week
              </p>
              <p className="text-gray-800">
                Company Info &amp; Enquiries: 07:30 - 16:30, <br /> Monday - Friday
              </p>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
            <Image
                  src="/images/icon2.png"
                  alt="Nike Logo"
                  height={64}
                  width={64}
                />
              <p className="font-bold"> 24 hours a day</p>
              <p className="text-gray-600">7 days a week</p>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
            <Image
                  src="/images/icon1.png"
                  alt="Nike Logo"
                  height={64}
                  width={64}
                />
              <p className="font-bold"> We&apos;ll reply within</p>
              <p className="text-gray-600">five business days</p>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
            <Image
                  src="/images/icon3.png"
                  alt="Nike Logo"
                  height={64}
                  width={64}
                />
              <p className="font-bold"> STORE LOCATOR</p>
              <p className="text-gray-600">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
