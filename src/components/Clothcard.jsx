import React from "react";

const Clothcard = ({ cloth }) => {
  const { name, category, description, price, clothImage } = cloth;

  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <img
        src={clothImage}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      <p className="text-lg font-semibold text-blue-500 mb-4">${price}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default Clothcard;
