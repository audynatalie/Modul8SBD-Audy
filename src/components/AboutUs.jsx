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

  // Animasi untuk teks yang bergerak terus-menerus
  const floatingTextVariants = {
    animate: {
      y: [0, -5, 0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const colorChangeVariants = {
    animate: {
      color: [
        "rgb(236, 72, 153)", // pink-500
        "rgb(168, 85, 247)", // purple-500
        "rgb(99, 102, 241)", // indigo-500
        "rgb(59, 130, 246)", // blue-500
        "rgb(236, 72, 153)"  // back to pink-500
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop"
      }
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
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }}
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
              <motion.path
                d="M0 50 L100 50 M50 0 L50 100 M25 25 L75 75 M25 75 L75 25"
                stroke={darkMode ? "#4f46e5" : "#3b82f6"}
                strokeWidth="1"
                fill="none"
                animate={{
                  strokeWidth: [1, 2, 1],
                  stroke: darkMode 
                    ? ["#4f46e5", "#c026d3", "#4f46e5"] 
                    : ["#3b82f6", "#8b5cf6", "#3b82f6"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.circle 
                cx="50" cy="50" r="3" 
                fill={darkMode ? "#4f46e5" : "#3b82f6"} 
                animate={{
                  r: [3, 5, 3],
                  fill: darkMode 
                    ? ["#4f46e5", "#c026d3", "#4f46e5"] 
                    : ["#3b82f6", "#8b5cf6", "#3b82f6"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.circle 
                cx="25" cy="25" r="2"
                fill={darkMode ? "#4f46e5" : "#3b82f6"}
                animate={{
                  r: [2, 4, 2],
                  fill: darkMode 
                    ? ["#4f46e5", "#c026d3", "#4f46e5"] 
                    : ["#3b82f6", "#8b5cf6", "#3b82f6"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
              <motion.circle 
                cx="75" cy="75" r="2"
                fill={darkMode ? "#4f46e5" : "#3b82f6"}
                animate={{
                  r: [2, 4, 2],
                  fill: darkMode 
                    ? ["#4f46e5", "#c026d3", "#4f46e5"] 
                    : ["#3b82f6", "#8b5cf6", "#3b82f6"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              <motion.circle 
                cx="25" cy="75" r="2"
                fill={darkMode ? "#4f46e5" : "#3b82f6"}
                animate={{
                  r: [2, 4, 2],
                  fill: darkMode 
                    ? ["#4f46e5", "#c026d3", "#4f46e5"] 
                    : ["#3b82f6", "#8b5cf6", "#3b82f6"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              />
              <motion.circle 
                cx="75" cy="25" r="2"
                fill={darkMode ? "#4f46e5" : "#3b82f6"}
                animate={{
                  r: [2, 4, 2],
                  fill: darkMode 
                    ? ["#4f46e5", "#c026d3", "#4f46e5"] 
                    : ["#3b82f6", "#8b5cf6", "#3b82f6"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-mono mb-6 inline-block"
            initial="initial"
            animate="animate"
            variants={floatingTextVariants}
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              About Us
            </motion.span>
          </motion.h2>
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.25, 0.5, 0.25],
                background: [
                  "linear-gradient(to right, #db2777, #9333ea)",
                  "linear-gradient(to right, #8b5cf6, #3b82f6)",
                  "linear-gradient(to right, #db2777, #9333ea)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <p className={`relative font-mono text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
              Praktikum <motion.span 
                className="font-bold"
                animate={{ color: ["#3b82f6", "#8b5cf6", "#3b82f6"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >Netlab</motion.span> adalah laboratorium 
              unggulan yang menyediakan fasilitas pembelajaran praktis dalam bidang 
              <motion.span 
                variants={colorChangeVariants}
                animate="animate"
                className="font-semibold"
              > teknologi jaringan</motion.span>, 
              <motion.span 
                className="text-green-500 font-semibold"
                animate={{ 
                  scale: [1, 1.05, 1],
                  color: ["#10b981", "#34d399", "#10b981"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              > sistem operasi</motion.span>, dan 
              <motion.span 
                className="text-indigo-500 font-semibold"
                animate={{ 
                  y: [0, -2, 0, 2, 0],
                  color: ["#6366f1", "#818cf8", "#6366f1"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              > manajemen basis data</motion.span>.
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
                <motion.div 
                  className={`text-2xl mr-4 p-3 rounded-full ${
                    index % 3 === 0 
                      ? "bg-blue-100 text-blue-600" 
                      : index % 3 === 1 
                        ? "bg-purple-100 text-purple-600" 
                        : "bg-green-100 text-green-600"
                  }`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold font-mono"
                  animate={index % 2 === 0 ? {
                    y: [0, -3, 0, 3, 0]
                  } : {}}
                  transition={index % 2 === 0 ? {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop"
                  } : {}}
                >
                  {feature.title}
                </motion.h3>
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
          <motion.h3 
            className="text-2xl font-bold font-mono mb-4 text-center bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0 0 5px rgba(59, 130, 246, 0.5)",
                "0 0 15px rgba(124, 58, 237, 0.5)",
                "0 0 5px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror"
            }}
            style={{
              backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6, #3b82f6)",
              backgroundSize: "200% 100%",
              animation: "gradientShift 5s linear infinite",
            }}
          >
            Visi Kami
          </motion.h3>
          <div className="relative">
            <motion.div 
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            ></motion.div>
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

      {/* Floating particles effect - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
              y: [0, -Math.random() * 200 - 100],
              x: [0, (Math.random() - 0.5) * 100],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.3, 0.7, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Adding digital rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            className="absolute w-1 rounded-full"
            style={{
              height: Math.random() * 100 + 50,
              left: `${(i / 15) * 100}%`,
              top: `-${Math.random() * 50 + 50}px`,
              background: `linear-gradient(to bottom, 
                rgba(${darkMode ? '79, 70, 229' : '59, 130, 246'}, 0) 0%,
                rgba(${darkMode ? '79, 70, 229' : '59, 130, 246'}, 0.7) 50%,
                rgba(${darkMode ? '79, 70, 229' : '59, 130, 246'}, 0) 100%)`,
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Add global CSS for animated gradient backgrounds */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}