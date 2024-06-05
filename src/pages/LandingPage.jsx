import React from "react";
import { Komentar } from "../assets/Components/Komentar";
import Img2 from "../assets/img/img2.png";
import Gallery from "../assets/Components/Gallery";

export const LandingPage = () => {
  return (
    <div className="h-[550vh] w-[100vw] flex flex-col">
      {/* Navbar */}
      <div className="h-[4rem] flex justify-end">
        <div className="flex h-[100%] items-center px-4">
          <div className="flex space-x-4">
            <h1 className="font-semibold">Beranda</h1>
            <h1 className="font-semibold">Tentang</h1>
            <h1 className="font-semibold">Layanan</h1>
            <h1 className="font-semibold">Kontak</h1>
          </div>
        </div>
        <button className="bg-green-800 w-[15rem] text-white h-full text-center">
          WHATSAPP
        </button>
      </div>
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
            WHATSAPP
          </button>
        </div>
      </div>
      {/* Section2 */}
      <div className="h-screen bg-slate-100 flex justify-center items-center">
        <div className="w-3/4 h-4/5 flex flex-row">
          <div className="flex-1 p-4 flex justify-center items-center">
            <img
              src={Img2}
              alt="Section 2"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 p-4 space-y-8 text-xl sm:text-lg pt-24 animate-fadeIn">
            <h1 className="font-bold font-body text-8xl text-[#333333]">
              Tentang Kami
            </h1>
            <p className="text-[#666666]">
              Selamat datang di DennCatering tempat di mana kelezatan bertemu
              dengan kenyamanan. Sejak 2024, kami telah menjadi pilihan utama
              untuk layanan catering yang tak tertandingi.
            </p>
            <p className="text-[#666666]">
              Kami di DennCatering membangun segalanya atas dasar komitmen
              terhadap kualitas, kreativitas, dan kepuasan pelanggan. Setiap
              langkah yang kami ambil, dari pemilihan bahan baku hingga
              penyajian akhir, dipenuhi dengan perhatian terhadap detail dan
              semangat untuk menghadirkan kebahagiaan melalui hidangan kami.
            </p>
          </div>
        </div>
      </div>
      {/* Section3 */}
      <div className="h-[100vh] w-full flex flex-col items-center py-16">
        <h1 className="text-6xl font-bold mb-4 font-body text-[#666666]">
          Menu Kami
        </h1>
        <h2 className="text-xl mb-14 text-[#666666]">
          Berikut Adalah Menu yang kami sediakan di Denn Catering
        </h2>
        <div className="h-3/4 w-4/6 flex">
          <div className="relative bg-image2 bg-cover bg-center flex-1 h-5/6 mr-4">
            <div className="absolute inset-0 bg-white opacity-70"></div>
            <div className="relative z-10 h-full flex pl-10 flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4 font-body text-[#666666]">
                Paket Prasmanan
              </h3>
              <ul className="list-disc list-inside text-lg">
                <li>Nasi Kuning / Nasi Uduk</li>
                <li>Ayam Kecap / Sambal / Lada Hitam</li>
                <li>Daging Ikan Fillet Asam Manis</li>
                <li>Cap Cay</li>
                <li>Telur Balado</li>
                <li>Pecel Sayur</li>
                <li>Acar</li>
                <li>Kerupuk Udang / Ikan</li>
                <li>Semangka</li>
                <li>Ice Cream</li>
                <li>Air Putih / Soft Drink / Teh</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="relative flex-1 bg-image3 bg-cover bg-center flex mb-4">
              <div className="absolute inset-0 bg-white opacity-70"></div>
              <div className="relative z-10 h-full flex pl-10 flex-col justify-center">
                <h3 className="text-4xl font-bold mb-4 font-body text-[#666666]">
                  Paket Gubug
                </h3>
                <ul className="list-disc list-inside text-lg">
                  <li>Bakso Daging</li>
                  <li>Bakso Ikan</li>
                  <li>Gado-Gado</li>
                  <li>Mi Ayam</li>
                  <li>Pempek</li>
                  <li>Tahu Tumpat</li>
                </ul>
              </div>
            </div>
            <div className="relative flex-1 bg-image4 bg-cover bg-center flex">
              <div className="absolute inset-0 bg-white opacity-70"></div>
              <div className="relative z-10 h-full flex pl-10 flex-col justify-center">
                <h3 className="text-4xl font-bold mb-4 font-body text-[#666666]">
                  Paket Nasi Box
                </h3>
                <ul className="list-disc list-inside text-lg">
                  <li>Nasi Putih</li>
                  <li>Sambel Goreng Krecek + Telur Puyuh</li>
                  <li>Ayam Goreng</li>
                  <li>Telur Pindang</li>
                  <li>Mi Goreng</li>
                  <li>Perkedel</li>
                  <li>Kerupuk Udang</li>
                  <li>Pisang</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Galery Sevtion */}
      <div className="flex flex-col items-center justify-center min-h-screen py-16 w-full">
        <h1 className="text-6xl font-bold mb-8 font-body text-gray-600 text-center">
          Galeri
        </h1>
        <div className=" flex w-2/3 h-5/6 space-x-4 p-4 justify-around">
          <div className="h-4/5 w-[25rem] bg-imagePras bg-cover flex items-center justify-center transition duration-500 hover:bg-imagePrasHover">
            {/* Content for 1 */}
          </div>
          <div className="flex flex-col h-full  w-[40rem] space-y-4">
            <div className="bg-imageGubuk bg-cover h-2/5 flex items-center justify-center w-[30rem] border-b border-red-300 p-4 transition duration-500 hover:bg-imageGubukHover">
              {/* Content for 2 */}
            </div>
            <div className="bg-imagebox bg-cover h-3/5 flex items-center justify-center p-4 transition duration-500 hover:bg-imageboxHover">
              {/* Content for 3 */}
            </div>
          </div>
        </div>
      </div>

      {/* Testimoni Section */}
      <div className="flex flex-col  border space-y-5 pt-10 h-auto text-[#666666] items-center">
        <h1 className="font-body text-4xl font-bold mb-8">Testimoni</h1>
        <div className="w-full max-w-6xl  px-4">
          <Komentar />
        </div>
      </div>
    </div>
  );
};
