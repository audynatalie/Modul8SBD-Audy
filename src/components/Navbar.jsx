import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaServer, FaNetworkWired } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

// Import logo
import Logo from '../assets/Logo.svg';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll behavior for navbar
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      if (position > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update last scroll position
      setLastScrollTop(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const navItems = [
    { name: "Home", href: "#hero", icon: <FaServer /> },
    { name: "Courses", href: "#courses", icon: <FaNetworkWired /> },
    { name: "About Us", href: "#about", icon: <FaNetworkWired /> }
  ];

  // Animate the "Network Laboratory" text constantly
  const networkText = "Network Laboratory";
  const letterVariants = {
    initial: { y: 0 },
    animate: (i) => ({
      y: [0, -5, 0],
      transition: {
        delay: i * 0.1,
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.nav 
      className={`fixed w-full z-30 transition-all duration-500 ${
        darkMode 
          ? (scrollPosition > 100 ? "bg-gray-900/95 backdrop-blur-lg" : "bg-gray-900") 
          : (scrollPosition > 100 ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white shadow-md")
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <motion.h1
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}
              variants={letterVariants}
              animate="animate"
            >
              {networkText.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants} custom={index}>
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Menu Button for mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className={`${darkMode ? "text-white" : "text-gray-800"}`}>
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`${darkMode ? "text-gray-200 hover:text-blue-300" : "text-gray-700 hover:text-blue-600"} flex items-center transition-colors duration-300`}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`${
                darkMode 
                  ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } p-2 rounded-full transition-colors duration-300`}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`lg:hidden absolute top-16 left-0 w-full ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800 border-t border-gray-200"
              } p-6 space-y-4 shadow-lg`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`flex items-center space-x-2 ${
                    darkMode ? "hover:text-blue-300" : "hover:text-blue-600"
                  } transition-colors duration-300`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`${
                  darkMode 
                    ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } p-2 rounded-full transition-colors duration-300`}
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}