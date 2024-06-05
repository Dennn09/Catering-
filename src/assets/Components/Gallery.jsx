import React from "react";
import ImgePras from "../img/prasmanan1.jpg";
import ImgePrashover from "../img/prasmananhover.jpg";
import ImgeBox from "../img/box.jpg";
import ImgeBoxhover from "../img/boxhover.jpg";
import ImgeGubukan from "../img/gubukan.jpg";
import ImgeGubukanhover from "../img/gubukanhover.jpg";

const images = [
  { id: 1, default: ImgePras, hover: ImgePrashover },
  { id: 2, default: ImgeBox, hover: ImgeBoxhover },
  { id: 3, default: ImgeGubukan, hover: ImgeGubukanhover },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="relative group">
          <img
            src={image.default}
            alt={`Gallery Image ${image.id}`}
            className="w-full h-auto"
          />
          <img
            src={image.hover}
            alt={`Gallery Image ${image.id} Hover`}
            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
