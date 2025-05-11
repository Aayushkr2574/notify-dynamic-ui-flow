
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lookscout-dark-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
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
              <span className="font-bold text-xl text-white">Lookscout</span>
            </div>
            <p className="text-lookscout-gray-400 mb-6">
              Generate outside the box thinking with the possibility to target the low.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-lookscout-dark-800 hover:bg-lookscout-blue transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-lookscout-dark-800 hover:bg-lookscout-blue transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-lookscout-dark-800 hover:bg-lookscout-blue transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-lookscout-gray-400 hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get Email Notifications</h3>
            <p className="text-lookscout-gray-400 mb-4">
              Generate outside the box thinking with the possibility to target the low.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-2 px-4 bg-lookscout-dark-800 rounded-l-lg focus:outline-none text-white"
              />
              <button className="bg-lookscout-blue px-4 py-2 rounded-r-lg hover:bg-lookscout-blue-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-lookscout-dark-800 pt-8 text-center md:flex md:justify-between text-lookscout-gray-400">
          <p>&copy; 2023 Lookscout. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-start">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
