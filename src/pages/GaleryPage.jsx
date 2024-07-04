import React from "react";
import { Navbar } from "../assets/Components/Navbar";
import gam1 from "../assets/img/gam1.jpg";
import gam2 from "../assets/img/gam2.jpg";
import gam3 from "../assets/img/gam3.jpg";
import gam4 from "../assets/img/gam4.jpg";
import gam5 from "../assets/img/gam5.jpg";
import gam6 from "../assets/img/gam6.jpg";
import gam7 from "../assets/img/gam7.jpg";
import gam8 from "../assets/img/gam8.jpg";
import gam9 from "../assets/img/gam9.jpg";
import gam10 from "../assets/img/gam10.jpg";
import gam11 from "../assets/img/gam11.jpg";
import gam12 from "../assets/img/gam12.jpg";
import gam13 from "../assets/img/gam13.jpg";
import gam14 from "../assets/img/gam14.jpg";
import gam15 from "../assets/img/gam15.jpg";
import gam16 from "../assets/img/gam16.jpg";

import { Footer } from "../assets/Components/Footer";

export const GaleryPage = () => {
  const images = [
    gam1,
    gam2,
    gam3,
    gam4,
    gam5,
    gam6,
    gam7,
    gam8,
    gam9,
    gam10,
    gam11,
    gam12,
    gam13,
    gam14,
    gam15,
    gam16,
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center px-4 md:px-0 mb-5">
        <div className="pt-20 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif mb-4">Galeri Foto</h2>
          <h1 className="font-bold font-body text-5xl text-[#333333]">
            Denn Catering
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
