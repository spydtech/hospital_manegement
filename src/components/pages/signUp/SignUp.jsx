import React, { useState } from 'react';
import signupbanner from '../../../assets/home/login.jpg';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        // You can add validation here if needed
        localStorage.setItem('userData', JSON.stringify(formData));
        alert('Data saved to local storage!');
        // Optionally, reset the form after submission
        setFormData({
            fullName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full">
                <img
                    src={signupbanner}
                    alt="Left Container"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="rounded p-4 flex flex-col justify-center">
                <div className="flex justify-end m-2">
                    <button className="bg-[#E53E13] h-[35px] text-white w-[120px] rounded-sm">Login</button>
                </div>

                <h1 className="text-4xl text-[#17469E] font-medium ml-5">Sign up</h1>

                {/* Form Here */}
                <form className="space-y-4 mt-3 ml-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-[#E53E13]">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter your Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#E53E13]">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Enter your Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#E53E13]">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[#E53E13]">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#E53E13]">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 block w-full md:w-[90%] border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="bg-[#17469E] text-white w-full md:w-[90%] h-[40px] rounded-sm">Sign Up</button>
                    </div>
                    <div className="flex items-center justify-around">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
