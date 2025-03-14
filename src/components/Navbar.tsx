'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
}

export default function Navbar({ isDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/30 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl lg:text-4xl font-black italic">
              hbg
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/about" className={`${isDarkMode ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'} font-semibold italic transition-all duration-300`}>
              about
            </Link>
            <Link href="/projects" className={`${isDarkMode ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'} font-semibold italic transition-all duration-300`}>
              projects
            </Link>
            <Link href="/contact" className={`${isDarkMode ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'} font-semibold italic transition-all duration-300`}>
              contact
            </Link>
          </div>
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-dashed border-black/20`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block px-3 py-2 text-base font-semibold italic text-black hover:bg-gray-100"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="block px-3 py-2 text-base font-semibold italic text-black hover:bg-gray-100"
          >
            projects
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-semibold italic text-black hover:bg-gray-100"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}