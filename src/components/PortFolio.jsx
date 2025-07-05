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
JWT-secured farmer access. Architected a custom CVE detection model that scans
source code and delivers.`,
      code: "https://github.com/anshika-panwar-05-code",
    },
    {
      id: 2,
      name: "DevSecOps AI Assistant",
      desc: `Created an AI-powered assistant to identify and auto-fix
security vulnerabilities in source code during the development lifecycle.
Integrated Trivy and GitHub Actions to automate static
and container-level security scanning.`,
      code: "https://github.com/anshika-panwar-05-code",
    },
    {
      id: 3,
      name: "Teeka-Sarthi",
      desc: ` Spearheaded the development of a vaccination tracking
platform under guidance from the Chief Development Officer (CDO), streamlining immunization workflows across
Anganwadi centers.
Implemented secure Spring Boot REST APIs for data
entry, geo-tagged visit proofs, and vaccine schedules.`,
      code: "https://github.com/anshika-panwar-05-code",
    },
    {
  id: 4,
  name: "Interview Experience Platform",
  desc: "A full-stack platform to share and read interview experiences with authentication and CRUD features using MERN stack.",
  code: "https://inter-exp-fronted.onrender.com/",
},
{
  id: 5,
  name: "tic-tac-toe",
  desc: "A React-based tic-tac-toe game with clean UI, local state management, and replay functionality.",
  code: "https://github.com/anshika-panwar-05-code/tic-tac-toe",
},
{
  id: 6,
  name: "studentcourse-platform-Backend",
  desc: "Backend RESTful API for managing student course enrollment using Express.js, Node.js, and MongoDB.",
  code: "https://github.com/anshika-panwar-05-code",
},
{
  id: 7,
  name: "react-spreadsheet-table",
  desc: "A dynamic spreadsheet table built with React allowing cell editing, row operations, and CSV export.",
  code: "https://github.com/anshika-panwar-05-code",
},
{
  id: 8,
  name: "Stayfinder",
  desc: "A React and Node.js based hotel and PG listing platform with filters, search, and user authentication.",
  code: "https://github.com/anshika-panwar-05-code/Stayfinder",
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

