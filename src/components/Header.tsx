
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all ${
      scrolled ? "shadow-md" : ""
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                  fill="#437EF7"
                />
              </svg>
              <span className="font-bold text-xl text-lookscout-dark">Lookscout</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-lookscout-dark hover:text-lookscout-blue transition-colors">Home</a>
            <a href="#" className="text-lookscout-dark hover:text-lookscout-blue transition-colors">Our Products</a>
            <a href="#" className="text-lookscout-dark hover:text-lookscout-blue transition-colors">Resources</a>
            <a href="#" className="text-lookscout-dark hover:text-lookscout-blue transition-colors">Contacts</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="font-medium text-lookscout-gray-700 hover:text-lookscout-blue transition-colors">
              Log In
            </a>
            <Button className="btn-primary">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 absolute top-16 left-0 right-0 bg-white shadow-md animate-fade-in">
            <nav className="flex flex-col space-y-4 pb-4">
              <a href="#" className="px-4 py-2 text-lookscout-dark hover:bg-lookscout-blue-50 rounded-md">Home</a>
              <a href="#" className="px-4 py-2 text-lookscout-dark hover:bg-lookscout-blue-50 rounded-md">Our Products</a>
              <a href="#" className="px-4 py-2 text-lookscout-dark hover:bg-lookscout-blue-50 rounded-md">Resources</a>
              <a href="#" className="px-4 py-2 text-lookscout-dark hover:bg-lookscout-blue-50 rounded-md">Contacts</a>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <a href="#" className="px-4 py-2 text-center font-medium text-lookscout-gray-700 hover:bg-lookscout-blue-50 rounded-md">
                Log In
              </a>
              <Button className="btn-primary mx-4">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
