import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctorImage from "../../../assets/home/login.jpg";
import Navbar from "../../home/Navbar";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store form data in localStorage
        localStorage.setItem("userData", JSON.stringify(formData));
        alert("User Registred successfully");
        // Optionally, reset the form after submission
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="w-full max-w-8xl h-screen rounded-lg flex flex-col lg:flex-row">
                    {/* Login Section */}
                    <div
                        className="hidden lg:block w-1/2 bg-cover bg-center"
                        style={{ backgroundImage: `url(${doctorImage})` }}
                    ></div>
                    <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center relative">
                        <div className="flex justify-end m-2 mr-4">
                            <Link to="/login">
                                <button className="bg-[#E53E13] text-md py-3 text-white px-6 rounded-sm">
                                    Login
                                </button>
                            </Link>
                        </div>

                        <h1 className="text-4xl text-[#17469E] font-medium ml-5">Sign up</h1>

                        {/* Form Here */}
                        <form className="space-y-2 mt-3 ml-5" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-sm font-medium text-[#E53E13]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter your Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-[#E53E13]"
                                >
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Enter your Phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-[#E53E13]"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-[#E53E13]"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-[#E53E13]"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="bg-[#17469E] text-white w-full md:w-[90%] py-3 rounded-sm"
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className="flex items-center justify-around">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                                </label>
                            </div>
                        </form>
                    </div>

                    {/* Image Section */}
                </div>
            </div>
        </>

    );
};

export default Signup;
