import React, { useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// Import logos
import DMJLogo from '../assets/DMJLogo.svg';
import OSLogo from '../assets/OSLogo.svg';
import SBDLogo from '../assets/SBDLogo.svg';

const subjects = [
  {
    name: "DMJ",
    title: "Desain Manajemen Jaringan", 
    description: "Pelajari perancangan jaringan, optimasi QoS, routing dinamis, serta troubleshooting jaringan kompleks.",
    logo: DMJLogo,
    color: "blue"
  },
  {
    name: "OS",
    title: "Operating System",
    description: "Eksplorasi pengelolaan proses, manajemen memori, serta pengaturan file system dalam sistem operasi modern.",
    logo: OSLogo,
    color: "green"
  },
  {
    name: "SBD",
    title: "Sistem Basis Data",
    description: "Dalami teknik penyimpanan dan pengelolaan data menggunakan SQL, ERD, serta normalisasi basis data.",
    logo: SBDLogo,
    color: "purple"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.2, 
      duration: 0.6 
    }
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

// Matrix-style digital rain effect
const DigitalRain = ({ darkMode }) => {
  const raindrops = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    height: Math.random() * 50 + 30,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-0.5 rounded-full bg-gradient-to-b opacity-30"
          style={{
            left: `${drop.x}%`,
            height: `${drop.height}px`,
            background: darkMode 
              ? `linear-gradient(to bottom, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0))`
              : `linear-gradient(to bottom, rgba(99, 102, 241, 0), rgba(99, 102, 241, 0.6), rgba(99, 102, 241, 0))`
          }}
          initial={{ top: -drop.height }}
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Animated circuit board lines background
const CircuitLines = ({ darkMode }) => {
  const lines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    angle: Math.random() * 360,
    length: Math.random() * 15 + 5,
    thickness: Math.random() * 1 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 8 + 4
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute rounded-full"
          style={{
            height: `${line.thickness}px`,
            width: `${line.length}%`,
            left: `${line.startX}%`,
            top: `${line.startY}%`,
            transformOrigin: "left center",
            rotate: `${line.angle}deg`,
            background: darkMode
              ? `linear-gradient(to right, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.7), rgba(59, 130, 246, 0))`
              : `linear-gradient(to right, rgba(79, 70, 229, 0), rgba(79, 70, 229, 0.5), rgba(79, 70, 229, 0))`
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Floating connection nodes
const ConnectionNodes = ({ darkMode }) => {
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            width: node.size,
            height: node.size,
            left: `${node.x}%`,
            top: `${node.y}%`,
            background: darkMode
              ? `radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0))`
              : `radial-gradient(circle, rgba(79, 70, 229, 0.6), rgba(79, 70, 229, 0))`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Fancy animated title with hover effects
const AnimatedTitle = ({ text, darkMode }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04
      }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.h2
      className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block relative"
          variants={child}
          whileHover={{
            y: -5,
            scale: 1.2,
            color: darkMode 
              ? "#93c5fd" // blue-300
              : "#4f46e5", // indigo-600
            transition: {
              type: "spring",
              stiffness: 500
            }
          }}
          animate={{
            y: [0, letter === ' ' ? 0 : Math.random() > 0.7 ? -3 : 3, 0],
            color: index % 3 === 0 
              ? [darkMode ? "#ffffff" : "#1e293b", darkMode ? "#3b82f6" : "#4f46e5", darkMode ? "#ffffff" : "#1e293b"]
              : index % 3 === 1
              ? [darkMode ? "#ffffff" : "#1e293b", darkMode ? "#60a5fa" : "#6366f1", darkMode ? "#ffffff" : "#1e293b"]
              : [darkMode ? "#ffffff" : "#1e293b", darkMode ? "#93c5fd" : "#818cf8", darkMode ? "#ffffff" : "#1e293b"]
          }}
          transition={{
            y: {
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2 + index * 0.1,
              ease: "easeInOut"
            },
            color: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3 + index * 0.2,
              ease: "easeInOut"
            }
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

// Animated glowing underline
const GlowingUnderline = ({ darkMode }) => {
  return (
    <motion.div
      className={`h-1 w-24 mx-auto mt-4 rounded-full ${darkMode ? "bg-blue-500" : "bg-indigo-500"}`}
      animate={{
        width: ["6rem", "10rem", "6rem"],
        boxShadow: [
          darkMode 
            ? "0 0 5px #3b82f6, 0 0 10px #3b82f6" 
            : "0 0 5px #4f46e5, 0 0 10px #4f46e5",
          darkMode 
            ? "0 0 15px #3b82f6, 0 0 25px #3b82f6" 
            : "0 0 15px #4f46e5, 0 0 25px #4f46e5",
          darkMode 
            ? "0 0 5px #3b82f6, 0 0 10px #3b82f6" 
            : "0 0 5px #4f46e5, 0 0 10px #4f46e5"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Animated logo that rotates and glows
const AnimatedLogo = ({ logo, color, darkMode }) => {
  const glowColor = 
    color === "blue" 
      ? darkMode ? "0 0 15px rgba(59, 130, 246, 0.7)" : "0 0 15px rgba(59, 130, 246, 0.5)"
      : color === "green"
      ? darkMode ? "0 0 15px rgba(34, 197, 94, 0.7)" : "0 0 15px rgba(34, 197, 94, 0.5)"
      : darkMode ? "0 0 15px rgba(168, 85, 247, 0.7)" : "0 0 15px rgba(168, 85, 247, 0.5)";

  return (
    <motion.div
      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
        darkMode
          ? color === "blue"
            ? "bg-blue-600"
            : color === "green"
            ? "bg-green-600"
            : "bg-purple-600"
          : color === "blue"
            ? "bg-blue-200"
            : color === "green"
            ? "bg-green-200"
            : "bg-purple-200"
      }`}
      animate={{
        rotate: [0, 10, 0, -10, 0],
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 0 0 rgba(0, 0, 0, 0)",
          glowColor,
          "0 0 0 rgba(0, 0, 0, 0)"
        ]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.img 
        src={logo} 
        alt="Course Logo" 
        className="w-6 h-6"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 0, 0, 0, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
    </motion.div>
  );
};

// Animated card titles with flowing gradient effect
const AnimatedCardTitle = ({ title, color, darkMode }) => {
  const baseColors = {
    blue: darkMode ? ["#93c5fd", "#3b82f6", "#1d4ed8"] : ["#60a5fa", "#3b82f6", "#2563eb"],
    green: darkMode ? ["#86efac", "#22c55e", "#15803d"] : ["#4ade80", "#22c55e", "#16a34a"],
    purple: darkMode ? ["#d8b4fe", "#a855f7", "#7e22ce"] : ["#c4b5fd", "#8b5cf6", "#7c3aed"]
  };

  const colorScheme = baseColors[color];

  return (
    <motion.h4
      className={`text-lg font-semibold mb-2 bg-clip-text text-transparent`}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colorScheme[0]}, ${colorScheme[1]}, ${colorScheme[2]}, ${colorScheme[1]})`,
        backgroundSize: "300% 300%"
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {title}
    </motion.h4>
  );
};

// Floating name text with 3D effect
const FloatingName = ({ name, darkMode }) => {
  return (
    <motion.h3
      className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"} relative`}
      animate={{
        textShadow: darkMode 
          ? [
              "0 1px 0 #93c5fd, 0 2px 0 #93c5fd",
              "0 2px 0 #60a5fa, 0 4px 0 #3b82f6",
              "0 1px 0 #93c5fd, 0 2px 0 #93c5fd"
            ]
          : [
              "0 1px 0 #c7d2fe, 0 2px 0 #a5b4fc",
              "0 2px 0 #818cf8, 0 4px 0 #6366f1", 
              "0 1px 0 #c7d2fe, 0 2px 0 #a5b4fc"
            ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {name}
    </motion.h3>
  );
};

// Enhanced card hover effects
const EnhancedCard = ({ subject, index, darkMode }) => {
  const bgPulse = {
    animate: {
      background: 
        subject.color === "blue" 
          ? darkMode 
            ? ["linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)", "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"]
            : ["linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)", "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)"]
          : subject.color === "green"
            ? darkMode 
              ? ["linear-gradient(135deg, #166534 0%, #14532d 100%)", "linear-gradient(135deg, #14532d 0%, #166534 100%)"]
              : ["linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", "linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)"]
            : darkMode 
              ? ["linear-gradient(135deg, #581c87 0%, #4c1d95 100%)", "linear-gradient(135deg, #4c1d95 0%, #581c87 100%)"]
              : ["linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)", "linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%)"]
    }
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.05,
        boxShadow: darkMode 
          ? `0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4), 0 0 15px ${
              subject.color === "blue" ? "rgba(59, 130, 246, 0.5)" : 
              subject.color === "green" ? "rgba(34, 197, 94, 0.5)" : 
              "rgba(168, 85, 247, 0.5)"
            }`
          : `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px ${
              subject.color === "blue" ? "rgba(59, 130, 246, 0.3)" : 
              subject.color === "green" ? "rgba(34, 197, 94, 0.3)" : 
              "rgba(168, 85, 247, 0.3)"
            }`
      }}
      transition={{
        hover: {
          type: "spring",
          stiffness: 300,
          damping: 10
        }
      }}
      className={`rounded-lg p-6 shadow-lg relative overflow-hidden ${
        darkMode
          ? subject.color === "blue" 
            ? "bg-gradient-to-br from-blue-900 to-blue-700"
            : subject.color === "green"
            ? "bg-gradient-to-br from-green-900 to-green-700"
            : "bg-gradient-to-br from-purple-900 to-purple-700"
          : subject.color === "blue"
            ? "bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
            : subject.color === "green"
            ? "bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
            : "bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
      }`}
    >
      {/* Animated background for the card */}
      <motion.div 
        className="absolute inset-0"
        variants={bgPulse}
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <AnimatedLogo 
            logo={subject.logo} 
            color={subject.color} 
            darkMode={darkMode} 
          />
          <FloatingName 
            name={subject.name} 
            darkMode={darkMode} 
          />
        </div>
        
        <AnimatedCardTitle 
          title={subject.title} 
          color={subject.color} 
          darkMode={darkMode} 
        />
        
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} relative z-10`}>
          {subject.description}
        </p>

        {/* Animated corner accent */}
        <motion.div 
          className="absolute bottom-0 right-0 w-12 h-12"
          style={{
            background: `radial-gradient(circle at bottom right, ${
              subject.color === "blue" 
                ? darkMode ? "rgba(59, 130, 246, 0.6)" : "rgba(59, 130, 246, 0.3)" 
                : subject.color === "green" 
                ? darkMode ? "rgba(34, 197, 94, 0.6)" : "rgba(34, 197, 94, 0.3)"
                : darkMode ? "rgba(168, 85, 247, 0.6)" : "rgba(168, 85, 247, 0.3)"
            }, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default function Courses({ darkMode }) {
  return (
    <section
      id="courses"
      className={`py-16 md:py-24 relative overflow-hidden ${
        darkMode 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
    >
      {/* Animated background layers */}
      <DigitalRain darkMode={darkMode} />
      <CircuitLines darkMode={darkMode} />
      <ConnectionNodes darkMode={darkMode} />

      {/* Enhanced wave background with multiple layers */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden z-0">
        <motion.svg
          width="200%"
          height="100%"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          variants={waveVariants}
          animate="animate"
          className={darkMode ? "fill-gray-700" : "fill-blue-50"}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </motion.svg>
        
        <motion.svg
          width="200%"
          height="100%"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          variants={{
            animate: {
              x: [0, -150],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              },
            },
          }}
          animate="animate"
          className={`absolute top-0 ${darkMode ? "fill-gray-800 opacity-60" : "fill-blue-100 opacity-70"}`}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </motion.svg>
        
        {/* Additional wave with different animation */}
        <motion.svg
          width="200%"
          height="100%"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{
            x: [0, -180],
            y: [0, 5, 0, -5, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: "easeInOut",
            }
          }}
          className={`absolute top-0 ${darkMode ? "fill-gray-700 opacity-40" : "fill-blue-200 opacity-50"}`}
        >
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" />
        </motion.svg>
      </div>

      {/* Floating binary code in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className={`absolute text-xs font-mono opacity-20 ${darkMode ? "text-blue-300" : "text-indigo-500"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, 100]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Title Section */}
        <div className="text-center mb-16">
          <AnimatedTitle text="Explore Our Major Courses" darkMode={darkMode} />
          <GlowingUnderline darkMode={darkMode} />
        </div>

        {/* Course Cards with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject, i) => (
            <EnhancedCard 
              key={subject.name}
              subject={subject}
              index={i}
              darkMode={darkMode}
            />
          ))}
        </div>
        
        {/* Add pulsing accent decorations */}
        <div className="absolute top-20 left-10 w-16 h-16 md:w-24 md:h-24 pointer-events-none">
          <motion.div 
            className={`absolute inset-0 rounded-full ${darkMode ? "bg-blue-900" : "bg-blue-100"} opacity-20`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32 pointer-events-none">
          <motion.div 
            className={`absolute inset-0 rounded-full ${darkMode ? "bg-purple-900" : "bg-purple-100"} opacity-20`}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      {/* Add CSS for any additional effects */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}