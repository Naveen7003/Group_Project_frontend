import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi"; // Icons for login/logout

const Navright = ({ isLoggedIn, setIsLoggedIn }) => {
  const [query, setQuery] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false); // Set the login state to false on logout
  };

  return (
    <div className="w-1/2 h-[10vh] relative flex justify-between items-center ml-[2%]">
      {/* Left side: Search Input */}
      <div className="flex items-center">
        <i className="text-2xl text-zinc-400 ri-search-2-line mr-10"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="w-[60%] mr-10 p-2 text-xl outline-none bg-transparent text-zinc-400"
          type="text"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="text-3xl text-zinc-400 ri-close-fill cursor-pointer"
          ></i>
        )}
      </div>

      <div className="flex items-center cursor-pointer">
        {isLoggedIn ? (
          <div onClick={handleLogout} className="flex items-center">
            <FiLogOut className="w-8 h-8 text-zinc-600 mr-4" />
            <span className="text-lg font-semibold bg-red-500 px-2 py-1 rounded text-white">
              Logout
            </span>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiLogIn className="w-8 h-8 text-zinc-600 mr-4" />
              <Link to="/login">
                <span className="text-lg bg-blue-500 rounded px-2 py-1 font-semibold text-white">
                  Login
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/signup">
                <span className="text-lg bg-green-500 rounded px-2 py-1 font-semibold text-white">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {query.length > 0 && (
        <div className="w-[60%] max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded-md shadow-lg">
          <div className="font-semibold hover:text-zinc-950 text-zinc-600 p-4 border-b-2 border-zinc-100 hover:bg-zinc-100 duration-300 cursor-pointer">
            Result 1 for "{query}"
          </div>
          <div className="font-semibold hover:text-zinc-950 text-zinc-600 p-4 border-b-2 border-zinc-100 hover:bg-zinc-100 duration-300 cursor-pointer">
            Result 2 for "{query}"
          </div>
        </div>
      )}
    </div>
  );
};

export default Navright;
