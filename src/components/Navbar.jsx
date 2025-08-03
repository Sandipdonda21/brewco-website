// src/components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-mug-hot text-amber-800 text-3xl mr-2"></i>
              <span className="heading-font text-2xl font-bold text-amber-900">Brew & Co.</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all">Services</a>
              <a href="#menu" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all">Menu</a>
              <a href="#about" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all">About</a>
              <a href="#testimonials" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-all">Testimonials</a>
              <a href="#contact" className="bg-amber-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition-all">Get a Quote</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#services" className="block px-3 py-2 text-base font-medium text-amber-900 hover:text-amber-700">Services</a>
          <a href="#menu" className="block px-3 py-2 text-base font-medium text-amber-900 hover:text-amber-700">Menu</a>
          <a href="#about" className="block px-3 py-2 text-base font-medium text-amber-900 hover:text-amber-700">About</a>
          <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-amber-900 hover:text-amber-700">Testimonials</a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium text-white bg-amber-800 rounded-full text-center">Get a Quote</a>
        </div>
      </div>
    </nav>
  );
}