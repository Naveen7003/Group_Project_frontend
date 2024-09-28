import React from "react";
import { useLocation } from "react-router-dom";

const AddToCart = () => {
  const location = useLocation();
  const { cloth } = location.state || {}; // Retrieve the cloth data

  if (!cloth) {
    return <div>No item added to cart.</div>;
  }

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Item Added to Cart</h1>
      <img
        src={cloth.clothImage}
        alt={cloth.name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{cloth.name}</h3>
      <p className="text-sm text-gray-500 mb-2">Category: {cloth.category}</p>
      <p className="text-sm text-gray-500 mb-2">{cloth.description}</p>
      <p className="text-lg font-semibold text-blue-500 mb-4">${cloth.price}</p>
    </div>
  );
};

export default AddToCart;
