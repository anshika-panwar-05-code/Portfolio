import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div
          className="md:w-1/2 mt-12 md:mt-20 space-y-4 order-2 md:order-1"
          data-aos="fade-right"
        >
          <span className="text-xl text-gray-600">Welcome to My Portfolio</span>
          <div className="flex flex-wrap items-center space-x-2 text-2xl md:text-4xl font-semibold">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-green-600"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <p className="text-md md:text-lg text-gray-700 text-justify">
            
          </p>

          {/* SOCIALS + CURRENTLY WORKING */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-6 space-y-6 md:space-y-0">
            {/* SOCIAL MEDIA */}
            

            {/* CURRENTLY WORKING */}
            <div className="space-y-5" data-aos="fade-left">
              <h2 className="font-bold text-center">Currently Working On</h2>
              <div className="flex space-x-4 justify-center">
                <SiMongodb className="text-3xl text-green-700 hover:scale-110 transition rounded-full border p-1 cursor-pointer" />
                <SiExpress className="text-3xl text-gray-700 hover:scale-110 transition rounded-full border p-1 cursor-pointer" />
                <FaReact className="text-3xl text-blue-500 hover:scale-110 transition rounded-full border p-1 cursor-pointer" />
                <FaNodeJs className="text-3xl text-green-600 hover:scale-110 transition rounded-full border p-1 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="md:w-1/2 md:ml-12 md:mt-0 mt-10 order-1 md:order-2 flex justify-center"
          data-aos="zoom-in"
        >
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2022/08/28/Man-Work-on-Computer-3D-Illustration-Graphics-37264024-1.jpg" // Replace with your hosted photo URL
            alt="Anshika Panwar"
            className="rounded-full w-64 h-64 md:w-[350px] md:h-[350px] object-cover border-4 border-green-200 shadow-lg hover:scale-105 transition"
          />
        </div>
      </div>

      <hr className="mt-16 border-gray-300" />
    </div>
  );
}

export default Home;
