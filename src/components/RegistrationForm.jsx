import axios from "../utils/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    profileImage: "",
    contact: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (formData.contact.length !== 10 || isNaN(formData.contact)) {
      setErrorMessage("Please enter a valid 10-digit contact number.");
      return;
    }

    // Clear error message if everything is valid
    setErrorMessage("");

    try {
      const response = await axios.post("https://group-project-tbwn.onrender.com/user/signup", formData);
      console.log("Response: ", response);

      // On successful signup, set login state to true and navigate to home
      setIsLoggedIn(true); // Update login state
      navigate("/"); // Navigate to home page
    } catch (error) {
      if (error.response) {
        console.error("Response Error:", error.response.data);
        setErrorMessage(error.response.data.message || "An error occurred");
      } else {
        console.error("Error:", error.message);
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Contact
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="contact"
            name="contact"
            type="text"
            placeholder="Enter 10 digit contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileImage">
            Profile Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="profileImage"
            name="profileImage"
            type="text"
            placeholder="Enter profile image URL"
            value={formData.profileImage}
            onChange={handleChange}
          />
        </div>

        {/* Image Preview */}
        {formData.profileImage && (
          <div className="mb-4 flex justify-center">
            <img
              src={formData.profileImage}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        )}

        


        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
