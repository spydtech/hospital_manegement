import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const storedName = localStorage.getItem("userName");

    if (loggedInStatus === "true" && storedName) {
      setIsLoggedIn(true);
      setUserName(storedName);
    }
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#17469e] to-[#e53e13] text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16 items-center">
          <div className="float-end">
            <img src={logo} className="h-12 w-12 rounded-full" alt="Logo" />
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About us
                </Link>
                <Link
                  to="/features"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Features
                </Link>
                <Link
                  to="/doctors"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Doctors
                </Link>
                <Link
                  to="/reportsmasters"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="float-end">
            {/* Conditionally render the login button or user's initial */}
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-md">
                  Login
                </button>
              </Link>
            ) : (
              <div className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full">
                {userName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              About us
            </Link>
            <Link
              to="/features"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Features
            </Link>
            <Link
              to="/doctors"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Doctors
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
