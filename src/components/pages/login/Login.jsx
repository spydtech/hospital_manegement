import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import doctorImage from "../../../assets/home/login.jpg";
import Navbar from "../../home/Navbar";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored user data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userData"));

    // Check if the storedData exists and if the email and password match
    if (storedData && storedData.email === email && storedData.password === password) {
      localStorage.setItem("isLoggedIn", "true"); // Save login status
      localStorage.setItem("userName", storedData.fullName);
      alert("Login successful!");
      navigate('/'); // Navigate to home page after successful login
    } else {
      alert("Invalid email or password. Please try again.");
    }

    // Clear the form
    setEmail("");
    setPassword("");
  };


  return (
    <>
      <Navbar />
      <div className="flex   justify-center items-center ">
        <div className="w-full max-w-8xl  h-screen rounded-lg flex flex-col lg:flex-row">
          {/* Login Section */}
          <div
            className="hidden  lg:block w-1/2 bg-cover bg-center   "
            style={{ backgroundImage: `url(${doctorImage})` }} // Using imported image
          ></div>
          <div className="w-full lg:w-1/2 lg:pl-10 p-4 flex flex-col justify-center relative">
            <div className="flex justify-end m-2">
              <Link to="/sing_up">

                <button className="bg-[#E53E13] text-md py-3 text-white px-6  rounded-sm">
                  Signup
                </button>
              </Link>
            </div>
            <h2 className="text-3xl font-bold text-[#17469e] mb-4">Login now</h2>

            <p className="text-[#E53E13] mb-6">Hi, Welcome back 👋</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#E53E13]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 px-4 py-2 w-[90%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#E53E13]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 px-4 py-2 w-[90%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between pr-20">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[#17469e] border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-[#e53e13] float-start">
                    Remember Me
                  </span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-[90%] bg-[#17469e] text-white py-3 rounded-md font-semibold"
              >
                Login
              </button>
              <button
                type="button"
                className="w-[90%]  border bg-[#17469e] text-white  py-3 rounded-md font-semibold mt-4 "
              >
                Login with Google
              </button>
            </form>
            <p className="mt-6 text-center text-gray-600">
              Not registered yet?{" "}
              <a href="/sing_up" className="text-[#E53E13] hover:underline">
                Sign Up
              </a>
            </p>
          </div>

          {/* Image Section */}
        </div>
      </div>
    </>
  );
};

export default Login;
