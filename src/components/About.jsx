import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      name="About"
      className="bg-white dark:bg-gray-900 py-20 max-w-screen-xl mx-auto px-4 md:px-10"
    >
      {/* Intro */}
      <div data-aos="fade-up" className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 mb-4">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-6">
          Passionate and solution-driven Computer Science undergrad with hands-on experience in building scalable backend systems and full-stack applications. Skilled in Java, Node.js, MongoDB, and ReactJS, with a solid grasp of data structures, algorithms, and distributed systems. Proven ability to work in fast-paced environments, deliver end-to-end technical solutions, and collaborate effectively in team settings. Eager to contribute to high-impact systems at scale and solve complex challenges in tech-forward organizations.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Resume Button */}
          <a
            href="/Anshika_Panwar (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition font-semibold flex items-center space-x-2"
          >
            📄 <span>View Resume</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anshika-panwar-131660297"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition font-semibold flex items-center space-x-2"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/anshika-panwar-05-code"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition font-semibold flex items-center space-x-2"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/2200681540016/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition font-semibold flex items-center space-x-2"
          >
            <SiLeetcode size={20} />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
