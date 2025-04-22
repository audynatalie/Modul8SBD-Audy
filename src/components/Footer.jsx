// components/Footer.jsx
import React from "react";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer({ darkMode }) {
  return (
    <footer className={`transition-colors duration-300 ${
      darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold">Praktikum Netlab</h3>
            <p className="mt-2">
              Menyediakan fasilitas pembelajaran praktis dalam bidang teknologi informasi dan jaringan.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-blue-500 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li>Gedung Netlab</li>
              <li>Jl. Teknik Komputer No. 123</li>
              <li>Surabaya, Indonesia</li>
              <li>Email: info@netlab.ac.id</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p>© {new Date().getFullYear()} Praktikum Netlab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}