// components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer({ darkMode }) {
  return (
    <footer className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
    }`}>
      {/* 3D Wave effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill={darkMode ? "#1f2937" : "#e5e7eb"}
            animate={{
              d: [
                "M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ],
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 8,
                ease: "easeInOut"
              }
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.h3 
              className="text-xl font-bold font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Network Laboratory
            </motion.h3>
            <motion.p 
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Providing state-of-the-art facilities for practical learning in network technology and information systems.
            </motion.p>
            <motion.div 
              className="mt-6 flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[FaTwitter, FaGithub, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-500 hover:text-blue-600"} transform transition-all`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold font-mono">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {["Home", "Courses", "About", "Contact"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 transform transition-all"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1"
          >
            <h3 className="text-xl font-bold font-mono">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-blue-500" />
                <span>Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir R Roosseno, Kukusan, Beji, Depok City, West Java 16425</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 flex-shrink-0 text-blue-500" />
                <span>info@netlab.ui.ac.id</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0 text-blue-500" />
                <span>+62 21 7863419</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm">© {new Date().getFullYear()} Network Laboratory. All rights reserved.</p>
        </motion.div>
      </div>

      {/* 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(8px)",
              zIndex: 0
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, Math.random() * 360],
              opacity: [0.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        ))}
      </div>
    </footer>
  );
}