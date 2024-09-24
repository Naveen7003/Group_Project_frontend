import React from 'react';

const Offercard = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex items-center">
        
        
        <div className="w-1/4">
          <img 
            src="data:image/jpeg;base64,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"  // Replace this with your actual image URL
            alt="Offer Image"
            className="rounded-lg shadow-lg object-contain h-full w-full"
          />
        </div>

     
        <div className="w-2/3 pl-6">
          <h2 className="text-3xl font-bold mb-2">Special Offer!</h2>
          <p className="text-lg">
            Get up to <span className="font-bold text-yellow-300">50% off</span> on selected items!
          </p>
          <p className="text-sm mt-2">
            Offer valid till: <span className="font-bold">30th September, 2024</span>
          </p>
          <button className="mt-4 bg-yellow-300 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offercard;