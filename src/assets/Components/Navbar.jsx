import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="h-[4rem] flex justify-end shadow-md ">
      <div className="flex h-[100%] items-center px-4">
        <div className="flex space-x-4">
          <a href="/" className="font-semibold cursor-pointer">
            Beranda
          </a>
          <a href="/About" className="font-semibold cursor-pointer">
            Tentang
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="font-semibold cursor-pointer focus:outline-none"
            >
              Menu
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 ml-[-4rem]  w-48 bg-white text-black rounded-md shadow-lg border">
                <Link
                  to="/Prasmanan"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Paket Prasmanan
                </Link>
                <Link
                  to="/Gubuk"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Paket Gubug
                </Link>
                <Link
                  to="/NasiBox"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Paket Box
                </Link>
              </div>
            )}
          </div>
          <a href="/Galery" className="font-semibold cursor-pointer">
            Galery
          </a>
          <a href="/#testimoni" className="font-semibold cursor-pointer">
            Testimoni
          </a>
        </div>
      </div>
      <button className="bg-green-800 w-[15rem] text-white h-full text-center">
        <a
          href="https://wa.me/6282194965075"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
        >
          WHATSAPP
        </a>
      </button>
    </div>
  );
};
