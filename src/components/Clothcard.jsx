import React from "react";
import { useNavigate } from "react-router-dom";

const Clothcard = ({ cloth }) => {
  const { name, category, description, price, clothImage } = cloth;
  const navigate = useNavigate();

  // Function to handle "Add to Cart" button click
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Prevents the event from triggering the order route
    navigate('/add-to-cart', { state: { cloth } });
  };

  // Function to handle click on image or any other part of the card except AddToCart button
  const handleCardClick = () => {
    navigate('/order', { state: { cloth } });
  };

  return (
    <div 
      className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 cursor-pointer"
      onClick={handleCardClick} // Clicking anywhere on the card navigates to the order page
    >
      <img
        src={clothImage}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      <p className="text-lg font-semibold text-blue-500 mb-4">${price}</p>
      
      {/* Prevents the card click from triggering when Add to Cart button is clicked */}
      <button 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Clothcard;
