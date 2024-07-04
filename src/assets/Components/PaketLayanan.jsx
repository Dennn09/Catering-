import React from "react";
import { Link } from "react-router-dom";
import image1 from "../img/imge1.jpg";
import image2 from "../img/imge2.jpg";
import image3 from "../img/imge3.jpeg";

export const PaketLayanan = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center py-16">
      <h1 className="font-bold text-[3.5rem] text-[#333333] font-body">
        Paket Layanan Kami
      </h1>
      <p>Berikut adalah paket yang kami sediakan di Denn Catering</p>
      <div className="h-[40rem] w-[90rem] justify-center flex space-x-4 pt-[2rem]">
        <div className="flex flex-col items-center">
          <img
            src={image1}
            alt="Paket Prasmanan"
            className="w-[22rem] h-[30rem] object-cover"
          />
          <Link to="/prasmanan">
            <button className="mt-4 bg-green-200 font-bold font-body py-2 px-4 rounded">
              Paket Prasmanan ⟶
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={image2}
            alt="Paket Gubuk"
            className="w-[22rem] h-[30rem] object-cover"
          />
          <Link to="/gubuk">
            <button className="mt-4 bg-green-200 font-bold font-body py-2 px-4 rounded">
              Paket Gubuk ⟶
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={image3}
            alt="Paket Nasi Box"
            className="w-[22rem] h-[30rem] object-cover"
          />
          <Link to="/nasibox">
            <button className="mt-4 bg-green-200 font-bold font-body py-2 px-4 rounded">
              Paket Nasi Box ⟶
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
