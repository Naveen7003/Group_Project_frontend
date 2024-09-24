import React, { useState } from "react";

const UserProfile = () => {
  // User information state (You can get this from props or API in a real app)
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Frontend Developer at XYZ Company. Passionate about creating beautiful and functional user interfaces.",
    location: "New York, USA",
    profileImage: "https://via.placeholder.com/150", // Placeholder image, replace with actual image URL
  });

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user.profileImage}
            alt="User Profile"
            className="rounded-full w-32 h-32 border-4 border-blue-500"
          />
        </div>

        {/* User Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>

          {/* Bio */}
          <p className="text-gray-700 mb-4">{user.bio}</p>

          {/* Location */}
          <div className="flex justify-center items-center text-gray-500 mb-6">
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

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
