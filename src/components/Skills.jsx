import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    "Java", "JavaScript", "React.js", "Node.js", "Express.js",
    "MongoDB", "Git", "GitHub", "Postman",
    "DSA", "OOP", "DBMS", "REST APIs", "Operating Systems",
    "Computer Networks", "Tailwind CSS", "HTML", "CSS",
  ];

  return (
    <div
      name="Skills"
      className="bg-white dark:bg-white py-20 max-w-screen-xl mx-auto px-4 md:px-10"
    >
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-8">
          🛠️ Skills
        </h2>
        <p className="text-black  mb-8 max-w-xl mx-auto">
          Here are some of the technologies and concepts I actively use while building scalable applications and solving real-world problems.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-700 transition cursor-default"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
