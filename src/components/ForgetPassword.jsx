import React, { useState, useEffect } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false); // For form load animation

  useEffect(() => {
    // Trigger form animation with a bounce effect after component mounts
    setTimeout(() => setShowForm(true), 100);
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending the email to backend)
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div
        className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full transition-all duration-1000 ease-in-out transform ${
          showForm ? "animate-bounceIn" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center animate-fadeIn">Forget Password</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Enter your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform focus:scale-110"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-600"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
      {/* Adding Tailwind Keyframe Animations */}
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(-200px);
          }
          60% {
            opacity: 1;
            transform: scale(1.1);
          }
          80% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 1s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ForgetPassword;
