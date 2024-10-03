import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const { cloth } = location.state || {}; // Retrieve cloth details (or cart items)

  // State to handle user reviews or comments
  const [review, setReview] = useState("");
  const [comments, setComments] = useState([]);

  if (!cloth) {
    return <div>No items available for order.</div>;
  }

  // Function to handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      setComments([...comments, review]);
      setReview(""); // Clear the review input after submission
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <img
        src={cloth.clothImage}
        alt={cloth.name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{cloth.name}</h3>
      <p className="text-sm text-gray-500 mb-2">Category: {cloth.category}</p>
      <p className="text-sm text-gray-500 mb-2">{cloth.description}</p>
      <p className="text-lg font-semibold text-blue-500 mb-4">${cloth.price}</p>
      
      {/* Review and Comment Section */}
      <div className="my-4">
        <h2 className="text-lg font-bold mb-2">Leave a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Display submitted comments */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">User Comments</h3>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded mb-2">
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to leave a review!</p>
        )}
      </div>

      {/* Confirm Order Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full mt-4">
        Confirm Order
      </button>
    </div>
  );
};

export default Order;
