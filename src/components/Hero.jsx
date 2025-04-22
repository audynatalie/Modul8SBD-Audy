import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hero({ darkMode }) {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  
  // 3D Text Animation
  useEffect(() => {
    if (!titleRef.current) return;
    
    controls.start({
      rotateX: [0, 10, 0, -10, 0],
      rotateY: [0, 15, 0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    });
  }, [controls]);

  // Letter-by-letter animation for the text
  const networkText = "Network Laboratory";
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  // Continuously moving title animation
  const titleAnimation = {
    animate: {
      y: [0, -5, 0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className={`min-h-screen relative overflow-hidden pt-24 ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-indigo-100"
      }`}
    >
      {/* Enhanced moving background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill={darkMode ? "rgba(79, 70, 229, 0.15)" : "rgba(59, 130, 246, 0.2)"}
            animate={{
              d: [
                "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,149.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,165.3C672,160,768,192,864,213.3C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ],
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "easeInOut"
              }
            }}
          />
          <motion.path
            d="M0,64L48,96C96,128,192,192,288,218.7C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill={darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(79, 70, 229, 0.2)"}
            animate={{
              d: [
                "M0,64L48,96C96,128,192,192,288,218.7C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,192C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,181.3C672,203,768,213,864,213.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ],
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "easeInOut",
                delay: 2
              }
            }}
          />
          
          {/* Additional moving waves for enhanced effect */}
          <motion.path
            d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill={darkMode ? "rgba(167, 139, 250, 0.1)" : "rgba(139, 92, 246, 0.1)"}
            animate={{
              d: [
                "M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,149.3C672,149,768,139,864,133.3C960,128,1056,128,1152,122.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ],
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "easeInOut",
                delay: 1
              }
            }}
          />
        </svg>
      </div>

      {/* Enhanced 3D floating grid dots with more dynamic movement */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${darkMode ? "bg-blue-500" : "bg-indigo-600"}`}
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
              opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.6 + 0.3, Math.random() * 0.3 + 0.1]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 flex flex-col items-center justify-center relative z-20">
        <motion.div
          ref={titleRef}
          animate={controls}
          style={{ perspective: 1000 }}
          className="mb-8 text-center"
        >
          <motion.div 
            className="inline-block perspective-1000"
            variants={titleAnimation}
            animate="animate"
          >
            <div className="mb-6">
              {networkText.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block text-5xl md:text-7xl font-bold ${
                    darkMode 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400" 
                      : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
                  }`}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className={`text-xl md:text-2xl text-center max-w-3xl mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          State-of-the-art facilities for practical learning in network technology 
          and information systems engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 text-white font-medium rounded-lg shadow-lg transition-all duration-300 ${
              darkMode 
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/30" 
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-indigo-500/30"
            }`}
          >
            Explore Courses
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 font-medium rounded-lg shadow-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700 hover:shadow-gray-700/30"
                : "bg-white text-indigo-600 hover:bg-gray-50 hover:shadow-gray-300/60"
            }`}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Decorative network lines - replacing the server visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-16 relative w-full max-w-2xl mx-auto"
        >
          <svg
            className="w-full h-64 opacity-70"
            viewBox="0 0 500 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dynamic network connections */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={50 + (i % 4) * 120}
                cy={50 + Math.floor(i / 4) * 100}
                r={i % 2 === 0 ? 8 : 6}
                fill={darkMode ? 
                  i % 3 === 0 ? "rgba(129, 140, 248, 0.6)" : 
                  i % 3 === 1 ? "rgba(167, 139, 250, 0.6)" : "rgba(79, 70, 229, 0.6)" 
                  : 
                  i % 3 === 0 ? "rgba(37, 99, 235, 0.6)" : 
                  i % 3 === 1 ? "rgba(67, 56, 202, 0.6)" : "rgba(79, 70, 229, 0.6)"
                }
                animate={{
                  r: [i % 2 === 0 ? 8 : 6, i % 2 === 0 ? 10 : 8, i % 2 === 0 ? 8 : 6],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Connection lines between nodes with animated pulses */}
            {[...Array(12)].map((_, i) => {
              const startNode = i % 8;
              const endNode = (i + 1 + Math.floor(i / 3)) % 8;
              const startX = 50 + (startNode % 4) * 120;
              const startY = 50 + Math.floor(startNode / 4) * 100;
              const endX = 50 + (endNode % 4) * 120;
              const endY = 50 + Math.floor(endNode / 4) * 100;
              
              return (
                <React.Fragment key={`line-${i}`}>
                  <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={darkMode ? "rgba(139, 92, 246, 0.3)" : "rgba(79, 70, 229, 0.3)"}
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx={startX}
                    cy={startY}
                    r="3"
                    fill={darkMode ? "rgba(167, 139, 250, 0.8)" : "rgba(79, 70, 229, 0.8)"}
                    animate={{
                      x: [startX, endX],
                      y: [startY, endY],
                      opacity: [1, 0.7, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                </React.Fragment>
              );
            })}
          </svg>
          
          {/* Additional decorative pulsing circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className={`rounded-full ${darkMode ? "bg-indigo-500" : "bg-blue-500"}`}
              style={{ width: 10, height: 10, opacity: 0.5 }}
              animate={{
                scale: [1, 5, 1],
                opacity: [0.5, 0.1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}