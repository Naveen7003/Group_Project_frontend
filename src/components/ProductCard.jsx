import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-500 font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
