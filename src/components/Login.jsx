import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/Axios";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("https://group-project-tbwn.onrender.com/user/login", formData);
      console.log("Login successful:", response.data);
      
      setIsLoggedIn(true); // Set login state to true
      navigate("/"); // Redirect to dashboard or another page
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        setErrorMessage(error.response.data.message || "Login failed. Please try again.");
      } else {
        setErrorMessage("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[80%] pt-20 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600">ShopEase</h1>
          <p className="text-gray-500 mt-2">Welcome back! Please login to your account.</p>
        </div>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div className="flex justify-end mb-6">
            <Link to={"/ForgetPassword"} className="text-blue-500 text-sm hover:underline">Forgot Password?</Link>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Login to your account
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account? 
              <Link to={"/signup"} className="text-blue-500 font-semibold hover:underline ml-1">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
