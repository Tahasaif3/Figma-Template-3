import React from "react";

const CategoryLinks = () => {
  return (
    <div className=" mx-auto my-0 max-w-screen-2xl sm:px-6 md:px-48 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div>
          <h2 className="font-bold text-lg mb-4">Icons</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Shoes</h2>
          <ul className="space-y-2 text-gray-600">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Clothing</h2>
          <ul className="space-y-2 text-gray-600">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Kids</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Infant & Toddler Shoes</li>
            <li>Kids Shoes</li>
            <li>Kids Jordan Shoes</li>
            <li>Kids Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryLinks;
