import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import axios from "../utils/Axios"; // Assuming this is your axios instance

const AdminLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous error messages
    setErrorMessage("");

    try {
      // API call to login admin
      const response = await axios.post("https://group-project-tbwn.onrender.com/admin/signin", formData);
      console.log("Admin logged in:", response.data);

      // Redirect to admin dashboard after successful login
      navigate("/admin/form"); // Change "/admin/dashboard" to the desired route
    } catch (error) {
      console.error("Error during admin login:", error);
      if (error.response) {
        setErrorMessage(error.response.data.message || "Error logging in.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

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

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginForm;
