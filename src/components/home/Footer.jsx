import React from "react";
import logo from "../../assets/home/logo.jpg";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b to-[#17469e] from-[#e53e13]  p-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <img src={logo} alt="Logo" className="mb-4 w-32" />
          <p>
            Over past 10+ years of experience and skills in various
            technologies, we built great scalable products. Whatever technology
            we worked with, we not just build products for our clients but we
            also...
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-75 ">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H7v4H4v3h3v7h3v-7h3s.1-1.75.17-2.75H10V9s0-1 1-1h2V5s-1.23-.23-2.66-.23c-1.54 0-3.34.69-3.34 3v3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.857.784A4.971 4.971 0 0023.337 3.3a9.921 9.921 0 01-3.127 1.196 4.964 4.964 0 00-8.45 4.526A14.06 14.06 0 011.671 3.15 4.963 4.963 0 003.13 9.729a4.93 4.93 0 01-2.24-.617v.062a4.966 4.966 0 003.978 4.868 4.952 4.952 0 01-2.237.084 4.965 4.965 0 004.63 3.439A9.923 9.923 0 010 19.54a14.008 14.008 0 007.548 2.213c9.057 0 14.01-7.514 14.01-14.033 0-.213-.004-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5C19.55 2 21 3.45 21 5.25v8.5C21 16.55 19.55 18 17.75 18h-8.5C5.45 18 4 16.55 4 14.75v-8.5C4 3.45 5.45 2 7.75 2zm0 1.5C6.784 3.5 6 4.284 6 5.25v8.5c0 .966.784 1.75 1.75 1.75h8.5c.966 0 1.75-.784 1.75-1.75v-8.5c0-.966-.784-1.75-1.75-1.75h-8.5zm8 2c.41 0 .75.34.75.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.41.34-.75.75-.75zm-3.5 1.25a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1.5a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
