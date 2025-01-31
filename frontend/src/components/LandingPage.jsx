import React from "react";
import Carousel from "../components/carousel"; // Adjust the path if needed
import { motion } from "framer-motion";
import { FaLeaf, FaGlobe, FaUsers } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F0E3] via-[#A7C7D7] to-[#F1C6AC] text-gray-900 relative overflow-hidden font-['DM Serif Text']">

      {/* Carousel Component */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Carousel />
      </motion.div>

      {/* Hero Section */}
      <div
        className="container mx-auto px-6 py-20 text-center relative z-10"
        style={{
          backgroundImage: "url('path-to-your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          className="text-7xl font-bold mb-6 text-[#3e2a47] leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Empowering Rural Women Artisans
        </motion.h1>
        <motion.p
          className="text-3xl font-semibold text-gray-800 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Discover high-quality, sustainable handmade products crafted with care by rural women artisans. Your purchase helps provide better opportunities for these talented women to flourish and lead brighter futures.
        </motion.p>
        <motion.button
          className="bg-[#F1C6AC] px-12 py-4 rounded-full text-lg font-bold hover:cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.location.href = '/products'} // Adjust to actual product page route
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Services Provided Section */}
      <section
        className="py-16"
        style={{
          backgroundImage: "url('background_dolls.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(228, 214, 183, 0.9)", // Slight transparency for text contrast
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-[#3e2a47] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#F8F0E3] p-10 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-semibold text-[#8C6D5F] mb-6">Skills Development</h3>
              <p className="text-lg text-gray-800">We offer training programs to rural artisans to enhance their skills, improving their craft while helping them gain financial independence.</p>
            </div>
            <div className="bg-[#F8F0E3] p-10 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-semibold text-[#8C6D5F] mb-6">Eco-Friendly Packaging</h3>
              <p className="text-lg text-gray-800">We prioritize sustainability by using eco-friendly materials for all our packaging, reducing waste and contributing to a greener planet.</p>
            </div>
            <div className="bg-[#F8F0E3] p-10 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-semibold text-[#8C6D5F] mb-6">Global Marketplace</h3>
              <p className="text-lg text-gray-800">We connect artisans with global customers, helping them scale their businesses and gain recognition for their exquisite handmade goods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Meter Section */}
      <div
        className="container mx-auto px-6 py-20 text-center relative z-10"
        style={{
          backgroundImage: "url('path-to-your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 255, 255, 0.6)", // Transparent background for text
        }}
      >
        <motion.h2
          className="text-5xl font-bold mb-6 text-[#3e2a47] leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Our Impact
        </motion.h2>
        <div className="flex justify-around items-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaUsers size={50} className="text-[#8C6D5F] mb-4" />
            <p className="text-xl font-semibold text-gray-800">Empowered Women</p>
            <p className="text-2xl font-bold text-[#8C6D5F]">75%</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaLeaf size={50} className="text-[#8C6D5F] mb-4" />
            <p className="text-xl font-semibold text-gray-800">Eco-friendly Practices</p>
            <p className="text-2xl font-bold text-[#8C6D5F]">80%</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaGlobe size={50} className="text-[#8C6D5F] mb-4" />
            <p className="text-xl font-semibold text-gray-800">Global Reach</p>
            <p className="text-2xl font-bold text-[#8C6D5F]">90%</p>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section
        className="py-16"
        style={{
          backgroundImage: "url('path-to-your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(167, 199, 215, 0.7)", // Slight transparency for text contrast
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-[#3e2a47] mb-12">What Our Customers Say</h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-[#F8F0E3] p-8 rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
              <p className="italic text-lg text-gray-700">"Kala Connect has introduced me to amazing, unique products. I'm proud to support artisans and help them achieve their goals!"</p>
              <p className="mt-4 font-bold text-[#8C6D5F]">Emma L.</p>
            </div>
            <div className="bg-[#F8F0E3] p-8 rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
              <p className="italic text-lg text-gray-700">"It’s a truly meaningful platform. I’ve bought multiple items and feel connected to the artisans' stories. Highly recommend!"</p>
              <p className="mt-4 font-bold text-[#8C6D5F]">Rajiv M.</p>
            </div>
            <div className="bg-[#F8F0E3] p-8 rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
              <p className="italic text-lg text-gray-700">"Kala Connect has introduced me to amazing, unique products. I'm proud to support artisans and help them achieve their goals!"</p>
              <p className="mt-4 font-bold text-[#8C6D5F]">Emma L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-8 mt-16"
        style={{
          backgroundImage: "url('path-to-your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(140, 109, 95, 0.7)", // Slight transparency for text contrast
        }}
      >
        <p className="text-white text-xl font-semibold">© 2024 Kala Connect. Empowering Rural Women Artisans.</p>
        <p className="text-white text-sm">All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage