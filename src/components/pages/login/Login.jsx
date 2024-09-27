import React, { useState } from 'react';
import signupbanner from '../../../assets/home/login.jpg';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            email: '',
            password: '',
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="h-full">
                <img
                    src={signupbanner}
                    alt="Left Container"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="rounded p-4 flex flex-col justify-center">
                <div className="flex justify-end m-2">
                    <button className="bg-[#E53E13] h-[35px] text-white w-[120px] rounded-sm">Sign Up</button>
                </div>

                <h1 className="text-4xl text-[#17469E] font-medium ml-5 mb-2">Login Now</h1>

                <p className="text-xl ml-5 mt-2">Hi, Welcome back 👋</p>
                <form className="space-y-4 mt-3 ml-5" onSubmit={handleSubmit}>
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

                    <div className="mt-6">
                        <button type="submit" className="bg-[#17469E] text-white w-full md:w-[90%] h-[50px]  rounded-sm">Login</button>
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
                <div className="ml-5">
                <button
            type="button"
            className="w-[90%]  border bg-[#17469e] text-white md:w-[90%] h-[50px] rounded-md font-semibold mt-4 "
          >
            Login with Google
          </button>
                </div>
                <div className="ml-5">
                <p className="mt-6 text-center text-gray-600">
          Not registered yet?{" "}
          <a href="#" className="text-[#E53E13] hover:underline">
            Sign Up
          </a>
        </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
