// components/Courses.jsx
import React from "react";
import { motion } from "framer-motion";

// Import logos
import DMJLogo from '../assets/DMJLogo.svg';
import OSLogo from '../assets/OSLogo.svg';
import SBDLogo from '../assets/SBDLogo.svg';

const subjects = [
  {
    name: "DMJ",
    title: "Desain Manajemen Jaringan",
    description:
      "Pelajari perancangan jaringan, optimasi QoS, routing dinamis, serta troubleshooting jaringan kompleks.",
    logo: DMJLogo,
    color: "blue"
  },
  {
    name: "OS",
    title: "Operating System",
    description:
      "Eksplorasi pengelolaan proses, manajemen memori, serta pengaturan file system dalam sistem operasi modern.",
    logo: OSLogo,
    color: "green"
  },
  {
    name: "SBD",
    title: "Sistem Basis Data",
    description:
      "Dalami teknik penyimpanan dan pengelolaan data menggunakan SQL, ERD, serta normalisasi basis data.",
    logo: SBDLogo,
    color: "purple"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

const waveVariants = {
  animate: {
    x: [0, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Courses({ darkMode }) {
  return (
    <section id="courses" className="py-16 md:py-24 relative overflow-hidden">
      {/* Wave background */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden z-0">
        <svg
          width="200%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M-100 20C0 40 200 0 300 20C400 40 500 0 600 20C700 40 800 0 900 20C1000 40 1100 0 1200 20C1300 40 1400 0 1500 20C1600 40 1700 0 1800 20C1900 40 2000 0 2100 20V0H-100V20Z"
            fill={darkMode ? "#4f46e5" : "#c7d2fe"}
            fillOpacity="0.3"
            variants={waveVariants}
            animate="animate"
          />
          <motion.path
            d="M-100 20C0 40 200 0 300 20C400 40 500 0 600 20C700 40 800 0 900 20C1000 40 1100 0 1200 20C1300 40 1400 0 1500 20C1600 40 1700 0 1800 20C1900 40 2000 0 2100 20V0H-100V20Z"
            fill={darkMode ? "#3730a3" : "#a5b4fc"}
            fillOpacity="0.3"
            variants={waveVariants}
            animate="animate"
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">Explore Our Major Courses</h2>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto font-mono">
            Kembangkan keahlian teknologi informasi Anda melalui tiga mata kuliah utama kami
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                darkMode ? "bg-gray-800 hover:shadow-blue-500/20" : "bg-white hover:shadow-blue-500/20"
              }`}
              whileHover={{ 
                y: -10,
                boxShadow: darkMode 
                  ? "0 20px 25px -5px rgba(79, 70, 229, 0.2), 0 10px 10px -5px rgba(79, 70, 229, 0.1)"
                  : "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="p-1">
                <div className={`h-3 w-full ${
                  subject.color === "blue" ? "bg-gradient-to-r from-blue-400 to-blue-600" : 
                  subject.color === "green" ? "bg-gradient-to-r from-green-400 to-green-600" : 
                  "bg-gradient-to-r from-purple-400 to-purple-600"
                }`}></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-center h-24">
                  <motion.img
                    src={subject.logo}
                    alt={`${subject.name} logo`}
                    className="h-16 w-16"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                <h3 className="mt-6 text-xl md:text-2xl font-semibold text-center font-mono">{subject.title}</h3>
                <p className={`mt-4 text-center ${darkMode ? "text-gray-300" : "text-gray-600"} font-mono`}>
                  {subject.description}
                </p>
                <motion.div 
                  className="mt-6 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium font-mono ${
                    subject.color === "blue" ? "bg-blue-100 text-blue-800" : 
                    subject.color === "green" ? "bg-green-100 text-green-800" : 
                    "bg-purple-100 text-purple-800"
                  }`}>
                    #{subject.name}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}