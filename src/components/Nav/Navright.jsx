import { useState } from "react";
import { Link } from "react-router-dom";

import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi"; // Import icons for login/logout and signup

const Navright = () => {
  const [query, setQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login/logout
  const [isSigningUp, setIsSigningUp] = useState(false); // State for showing Sign Up form

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login/logout
  };

  const handleSignUp = () => {
    setIsSigningUp(!isSigningUp); // Toggle between login/signup
  };

  return (

    <div className='w-1/2 h-[10vh] relative flex justify-between items-center ml-[2%]'>
<div>
  <h1>hlo</h1>
</div>
      {/* Left side: Search Input */}
      <div className="flex items-center">
        <i className="text-2xl text-zinc-400 ri-search-2-line mr-10"></i>

        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className='w-[60%] mr-10 p-2 text-xl outline-none bg-transparent text-zinc-400'
          type="text"
          placeholder='Search anything'
        />

        {query.length > 0 && (
          <i 
            onClick={() => setQuery("")}
            className="text-3xl text-zinc-400 ri-close-fill cursor-pointer"
          ></i>
        )}
      </div>

      <div className="flex items-center cursor-pointer">
        {/* If logged in, show logout; if not, show login/signup */}
        {isLoggedIn ? (
          <div onClick={handleLoginLogout} className="flex items-center">
            <FiLogOut className="w-8 h-8 text-zinc-600 mr-4" />
            <span className="text-lg font-semibold bg-red-500 px-2 py-1 rounded text-white">Logout</span>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            {/* Toggle between Sign Up and Login based on current mode */}
            {isSigningUp ? (
              <div onClick={handleSignUp} className="flex items-center">
                <FiUserPlus className="w-8 h-8 text-zinc-600 mr-4" />
                <span className="text-lg bg-green-500 rounded px-2 py-1 font-semibold text-white">Sign Up</span>
              </div>
            ) : (
              <div onClick={handleLoginLogout} className="flex items-center">
                <FiLogIn className="w-8 h-8 text-zinc-600 mr-4" />
               <Link ><span className="text-lg bg-blue-500 rounded px-2 py-1 font-semibold text-white">Login</span></Link> 
              </div>
            )}
          </div>
        )}

        {/* Button to switch between Login and Sign Up */}
        {!isLoggedIn && !isSigningUp && (
          <div onClick={handleSignUp} className="flex items-center ml-4">
            <FiUserPlus className="w-8 h-8 text-zinc-600 mr-4" />
            <span className="text-lg bg-green-500 rounded px-2 py-1 font-semibold text-white">Sign Up</span>
          </div>
        )}
      </div>

      {query.length > 0 && (
        <div className='w-[60%] max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded-md shadow-lg'>
          <div className='font-semibold hover:text-zinc-950 text-zinc-600 p-4 border-b-2 border-zinc-100 hover:bg-zinc-100 duration-300 cursor-pointer'>
            Result 1 for "{query}"
          </div>
          <div className='font-semibold hover:text-zinc-950 text-zinc-600 p-4 border-b-2 border-zinc-100 hover:bg-zinc-100 duration-300 cursor-pointer'>
            Result 2 for "{query}"
          </div>
        </div>
      )}
    </div>
  );
};

export default Navright;
