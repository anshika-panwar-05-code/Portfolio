import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PortFolio() {
 useEffect(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: false, // makes animations repeat on scroll
  });
}, []);



  const cardItem = [
    {
      id: 1,
      name: "Krishi-Sarthi",
      desc: `Spring Boot backend for real-time weather, soil & crop price data.
React.js frontend with 30% faster load time.
Flask-based fertility predictions (10% yield boost).
JWT-secured farmer access.`,
      code: "https://github.com/Singh-Aviraj",
    },
    {
      id: 2,
      name: "Med Assist Scribes",
      desc: `Microservices REST API handling 10,000+ daily transcriptions.
Optimized MySQL queries reducing response time by 20%.
JWT authentication for secure user access.`,
      code: "https://github.com/Singh-Aviraj",
    },
    {
      id: 3,
      name: "CyberCrafters",
      desc: `Tech blog platform on AI, IoT, blockchain, and dev.
React.js + Spring Boot app with MySQL backend.
SEO-optimized, 500+ monthly users, 40% traffic growth.
Deployed on AWS S3 + CloudFront.`,
      code: "https://github.com/Singh-Aviraj",
    },
    {
      id: 4,
      name: "MongoDB App",
      desc: "A scalable NoSQL-based inventory system with aggregation pipelines.",
      code: "https://github.com/Singh-Aviraj",
    },
    {
      id: 5,
      name: "Express API",
      desc: "RESTful API with Express.js for authentication and data handling.",
      code: "https://github.com/Singh-Aviraj",
    },
    {
      id: 6,
      name: "Python ML App",
      desc: "Machine learning model deployed with Flask for prediction services.",
      code: "https://github.com/aviarj/python-ml-app",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-white dark:bg-gray-900 py-20 max-w-screen-2xl container mx-auto px-4 md:px-20"
    >
      <div className="mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-4">
          Portfolio
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 font-medium text-lg">
          Explore some of my featured projects built with MERN, Python, and Java
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardItem.map(({ id, name, desc, code }, index) => (
          <div
            key={id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 flex flex-col justify-between p-6"
          >
            <div>
              <h2 className="text-xl font-bold text-green-700 mb-3">{name}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-line">
                {desc}
              </p>
            </div>
            <div className="mt-4">
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center transition"
              >
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;

