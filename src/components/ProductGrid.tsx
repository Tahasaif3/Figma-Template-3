import Image from "next/image";
import React from "react";

const ProductGrid = () => {
  const products = [
    {
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Women's Shoes",
      image: "/images/shoe1.png",
    },
    {
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Men's Shoes",
      image: "/images/shoe2.png",
    },
    {
      name: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      category: "Men's Shoes",
      image: "/images/shoe3.png",
    },
  ];

  return (
    <section className="mx-auto my-0 max-w-screen-2xl px-4 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              height={441.36}
              width={441.36}
              className="w-full h-auto object-contain"
            />
            <div className="lg:flex  lg:items-center lg:gap-36 ">
              <div className="flex justify-start flex-col sm:items-center md:items-start ">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-sm  text-gray-600">{product.category}</p>
              </div>
              <p className="text-sm font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
