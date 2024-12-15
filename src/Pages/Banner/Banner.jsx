import React from "react";
import backgroundimg from "../../assets/images/BannerImg.webp";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="hero-overlay  bg-opacity-30"></div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-content flex-col lg:flex-row-reverse gap-10 px-6 text-white"
      >
        <div className="w-full text-center max-w-4xl flex flex-col items-center">
          <h1 className="text-7xl font-extrabold leading-tight text-white">
            Find Your <span className="text-[#872526]"> Dream Job</span> Today
          </h1>
          <p className="mt-6 mb-8 text-lg font-light leading-relaxed drop-shadow-md w-[600px]">
            Explore thousands of opportunities from top companies. Your next
            career move starts here. Join us and unlock the door to success!
          </p>
          <div className="flex gap-4 items-center">
            <button className="btn bg-[#872526] border-none text-white font-bold transition-all duration-300 shadow-lg">
              Get Started
            </button>
            <button className="btn font-bold border-2 bg-transparent text-white transition-all duration-300 shadow-lg">
              View More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
