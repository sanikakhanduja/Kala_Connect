import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Ensure you have this icon or replace it with the correct one

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cartItemCount = 2; // Example cart count, can be dynamic
    const token = localStorage.getItem("token");

    return (
        <nav className="bg-[#8C6D5F] shadow-xl p-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-4xl font-extrabold text-white hover:text-[#F1C6AC] transition duration-300">
                    Kala Connect
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-10 text-xl font-medium text-white">
                    <Link to="/" className="hover:text-[#F1C6AC] font-serif transition duration-300">Home</Link>
                    <Link to="/products" className="hover:text-[#F1C6AC] font-serif transition duration-300">Products</Link>
                    <Link to="/know_your_artisans" className="hover:text-[#F1C6AC] font-serif transition duration-300">Know Your Artisans</Link>
                </div>

                {/* Right Section: Login/Logout & Cart */}
                <div className="flex items-center space-x-6">
                {token ? (
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload(); // Force re-render
        }}
        className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
      >
        Logout
      </button>
    ) : (
      <Link
        to={"/signup"}
        className="bg-[#7e4f4a] text-white px-6 py-3 rounded-full font-serif hover:bg-[#9e6d69] transition duration-300"
      >
        SignUp/Login
      </Link>
    )}
                    {/* Cart Icon */}
                    <Link to="/cart" className="relative">
                        <FaShoppingCart size={28} className="text-white hover:text-[#F1C6AC] transition duration-300" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex flex-col space-y-4 mt-4 bg-[#F7EDE1] p-4 rounded-lg shadow-xl">
                <Link to="/" className="text-[#3e2a47] hover:text-[#a17167] font-serif text-xl transition duration-300">Home</Link>
                <Link to="/products" className="text-[#3e2a47] hover:text-[#a17167] font-serif text-xl transition duration-300">Products</Link>
                <Link to="/know_your_artisans" className="text-[#3e2a47] hover:text-[#a17167] font-serif text-xl transition duration-300">Know Your Artisans</Link>
            </div>
        </nav>
    );
};

export default Navbar;