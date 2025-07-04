import React from "react";
import {

  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Anshika Panwar
            </h2>
            <div className="flex space-x-5">
          
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-700 w-full max-w-xs mt-4 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &copy; 2025 Anshika Panwar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
