// components/AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaNetworkWired, FaDatabase, FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

export default function AboutUs({ darkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const features = [
    {
      icon: <FaNetworkWired />,
      title: "Infrastruktur Jaringan",
      description: "Laboratorium yang dilengkapi dengan perangkat jaringan terkini."
    },
    {
      icon: <FaServer />,
      title: "Server Dedicated",
      description: "Server khusus untuk kebutuhan praktikum dan riset."
    },
    {
      icon: <FaDatabase />,
      title: "Database Engine",
      description: "Berbagai platform database untuk pembelajaran sistem basis data."
    },
    {
      icon: <FaCode />,
      title: "Dukungan Pemrograman",
      description: "Tools dan framework pengembangan software terkini."
    },
    {
      icon: <FaLaptopCode />,
      title: "Virtual Lab",
      description: "Akses virtual lab untuk praktikum jarak jauh."
    },
    {
      icon: <FaUserGraduate />,
      title: "Asisten Berpengalaman",
      description: "Didukung asisten praktikum yang terlatih dan berpengalaman."
    }
  ];

  return (
    <section id="about" className={`relative py-16 md:py-24 overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 L100 50 M50 0 L50 100 M25 25 L75 75 M25 75 L75 25"
                stroke={darkMode ? "#4f46e5" : "#3b82f6"}
                strokeWidth="1"
                fill="none"
              />
              <circle cx="50" cy="50" r="3" fill={darkMode ? "#4f46e5" : "#3b82f6"} />
              <circle cx="25" cy="25" r="2" fill={darkMode ? "#4f46e5" : "#3b82f6"} />
              <circle cx="75" cy="75" r="2" fill={darkMode ? "#4f46e5" : "#3b82f6"} />
              <circle cx="25" cy="75" r="2" fill={darkMode ? "#4f46e5" : "#3b82f6"} />
              <circle cx="75" cy="25" r="2" fill={darkMode ? "#4f46e5" : "#3b82f6"} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            About Us
          </h2>
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.25, 0.5, 0.25]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <p className={`relative font-mono text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
              Praktikum <span className="font-bold text-blue-500">Netlab</span> adalah laboratorium 
              unggulan yang menyediakan fasilitas pembelajaran praktis dalam bidang 
              <span className="text-purple-500 font-semibold"> teknologi jaringan</span>, 
              <span className="text-green-500 font-semibold"> sistem operasi</span>, dan 
              <span className="text-indigo-500 font-semibold"> manajemen basis data</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-lg shadow-lg ${
                darkMode 
                  ? "bg-gray-800 hover:bg-gray-750" 
                  : "bg-white hover:bg-gray-50"
              } transition-all duration-300 transform hover:-translate-y-2`}
              whileHover={{
                boxShadow: darkMode
                  ? "0 20px 25px -5px rgba(79, 70, 229, 0.4), 0 10px 10px -5px rgba(79, 70, 229, 0.3)"
                  : "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`text-2xl mr-4 p-3 rounded-full ${
                  index % 3 === 0 
                    ? "bg-blue-100 text-blue-600" 
                    : index % 3 === 1 
                      ? "bg-purple-100 text-purple-600" 
                      : "bg-green-100 text-green-600"
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-mono">{feature.title}</h3>
              </div>
              <p className={`font-mono ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-16 p-8 rounded-xl shadow-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3 className="text-2xl font-bold font-mono mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Visi Kami
          </h3>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur"></div>
            <p className={`relative font-mono text-center text-lg italic leading-relaxed p-4 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              "Menjadi pusat pembelajaran praktis terdepan yang menghasilkan tenaga ahli teknologi informasi
              dengan kompetensi tinggi dalam bidang jaringan, sistem operasi, dan basis data 
              untuk memenuhi kebutuhan industri digital."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, 0.3)`,
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.7, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}