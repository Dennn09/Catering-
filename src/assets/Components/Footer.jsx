import React from "react";
import ig from "../img/instragram.svg";
import fc from "../img/facebook-outline.svg";
import tw from "../img/twitter-outline.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div>
            <p className="text-lg font-semibold">Denn Catering</p>
            <p className="text-sm">© 2024 All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/">Beranda</Link>
            <Link to="/About">Tentang</Link>
            <Link to="/Galery">Galery</Link>
          </div>
          <div>
            <p className="text-sm">Follow us:</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fc} alt="Facebook" className="h-6 w-6 bg-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ig} alt="Instagram" className="h-6 w-6 bg-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tw} alt="Twitter" className="h-6 w-6 bg-white " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
