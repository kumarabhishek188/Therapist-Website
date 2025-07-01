'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'About', 'Services', 'FAQ', 'Contact'];

export default function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/serena-blake-logo.jpg"
            alt="Dr. Serena Blake Therapy Logo"
            width={64}
            height={64}
            className="bg-white rounded-full p-1 border border-gray-200"
          />
          <h1 className="font-bold text-xl text-blue-700 dark:text-blue-200">
            Dr. Serena Blake
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-300 hover:underline underline-offset-4 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-300 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
