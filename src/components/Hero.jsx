import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const typingTextRef = useRef(null);

  useEffect(() => {
    if (!typingTextRef.current) return;

    const text = "Praktikum Jaringan dan Sistem Informasi";
    let currentText = "";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentText;
        }
        index++;
      } else {
        clearInterval(typingInterval);
        if (typingTextRef.current) {
          typingTextRef.current.classList.remove("typing-effect");
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }
    }
  };

  return (
    <motion.section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
      variants={backgroundVariants}
      animate="animate"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 ref={typingTextRef} className="text-3xl font-semibold mb-4">
          {/* Text will be typed here */}
        </h1>
      </div>
    </motion.section>
  );
}
