import React, { useEffect, useRef } from "react";
import { Komentar } from "../assets/Components/Komentar";
import Img2 from "../assets/img/img2.png";
import { Footer } from "../assets/Components/Footer";

import { Navbar } from "../assets/Components/Navbar";
import { PaketLayanan } from "../assets/Components/PaketLayanan";

export const LandingPage = () => {
  const testimoniRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#testimoni") {
      testimoniRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <div className="h-[400vh] w-[100vw] flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Section1 */}
        <div className="h-[100vh] bg-image1 bg-cover bg-center flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-body text-6xl font-bold text-[#333333]">
              Denn Catering
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Selamat Datang di Website Denn Catering – Tempatnya Lezat dan
              Praktis!
            </p>
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition duration-300">
              <a
                href="https://wa.me/628219495075"
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP
              </a>
            </button>
          </div>
        </div>
        {/* Section2 Layanan Kami */}
        <div className="h-screen bg-slate-100 flex justify-center items-center">
          <div className="w-[75rem]   h-[40rem] flex flex-row">
            <div className="flex-1 p-4 flex justify-center items-center">
              <img
                src={Img2}
                alt="Section 2"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-1 p-4 space-y-8 text-xl sm:text-lg pt-24 ">
              <h1 className="font-bold font-body text-3xl text-[#333333]">
                Selamat datang di website Denn Catering!
              </h1>
              <p className="text-[#666666]">
                Sejak tahun <span className="font-bold">2024</span>, Denn
                Catering telah setia mendampingi masyarakat
                <span className="font-bold">Yogyakarta</span> dan sekitarnya
                dalam merayakan
                <span className="font-bold">momen-momen spesial.</span> Kami
                selalu menyajikan hidangan dengan
                <span className="font-bold">
                  standar cita rasa yang berkelas,
                </span>
                diolah oleh
                <span className="font-bold"> koki profesional</span> yang
                berdedikasi tinggi.
              </p>
              <p className="text-[#666666]">
                Denn Catering berkomitmen untuk menyajikan makanan yang{" "}
                <span className="font-bold">lezat, halal,</span> dan
                <span className="font-bold">berkualitas,</span> memberikan
                pengalaman kuliner yang tak terlupakan untuk setiap acara Anda.
                Temukan <span className="font-bold">pilihan menu terbaik</span>
                kami dan rasakan kenikmatan yang dihadirkan oleh Denn Catering!
              </p>
            </div>
          </div>
        </div>
        {/* Section3 */}
        <PaketLayanan />
        {/* Testimoni Section */}
        <div
          ref={testimoniRef}
          className="flex flex-col bg-slate-100 h-screen  space-y-5 pt-10 h-auto text-[#666666] items-center"
        >
          <h1 className="font-body text-4xl font-bold mb-8">Testimoni</h1>
          <div className="w-full max-w-6xl  px-4">
            <Komentar />
          </div>
        </div>
        {/* Fotter Section*/}
        <Footer />
      </div>
    </div>
  );
};
