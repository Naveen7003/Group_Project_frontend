import React, { useEffect, useState } from "react";

const UserProfile = () => {
  // User information state
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Frontend Developer at XYZ Company.",
    location: "New York, USA",
    profileImage: "https://via.placeholder.com/150", 
  });

  const [location] = useState("USA");
  const [products, setProducts] = useState([]);

  // Fetch products based on location
  useEffect(() => {
    fetch(`/api/products?country=${location}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [location]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* User Profile Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white shadow-md rounded-lg p-8 flex items-center">
          <div className="mr-6">
            <img
              src={user.profileImage}
              alt="User Profile"
              className="rounded-full w-32 h-32 border-4 border-blue-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-gray-700 mb-4">{user.bio}</p>
            <div className="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-4.72 0-8.25 3.53-8.25 8.25 0 6.198 7.401 11.098 7.738 11.298a.75.75 0 0 0 .774 0C12.849 21.598 20.25 16.698 20.25 10.5c0-4.72-3.53-8.25-8.25-8.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              {user.location}
            </div>
          </div>
        </div>
      </div>

      {/* Products Display Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Products Available in {location}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
