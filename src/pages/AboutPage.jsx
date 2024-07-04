import React from "react";
import { Navbar } from "../assets/Components/Navbar";
import { Footer } from "../assets/Components/Footer";
export const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center px-4 border md:px-0">
        <div className="pt-20 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif mb-4">Tentang Kami</h2>
          <h1 className="font-bold font-body text-5xl text-[#333333]">
            Denn Catering
          </h1>
        </div>
        <div className=" p-6 flex flex-col w-full font-montserrat max-w-4xl mt-8 bg-white rounded ">
          <p className=" mb-4">
            <strong>Denn Catering</strong> adalah salah satu penyedia layanan
            catering di Jogja yang menu-menunya sangat populer di berbagai
            acara. <strong>Didirikan pada tahun 2024</strong>, Denn Catering
            memiliki kemampuan dalam menyediakan beragam menu dengan
            <strong>porsi besar maupun kecil</strong>. Denn Catering melayani
            berbagai kalangan, termasuk
            <strong>
              pejabat, mahasiswa, anak sekolah, dan ibu-ibu arisan
            </strong>
            .
          </p>
          <p className=" mb-4">
            Denn Catering menawarkan berbagai pilihan menu yang dapat dinikmati
            oleh semua kalangan dan dapat disesuaikan dengan
            <strong>anggaran</strong> yang dimiliki. Menu yang ditawarkan
            mencakup <strong>masakan biasa</strong> hingga
            <strong>menu modern</strong>. Keunggulan ini didukung oleh
            <strong>sertifikasi-sertifikasi</strong> yang telah dimiliki oleh
            Denn Catering.
          </p>
          <p className=" mb-4">
            Denn Catering menyediakan berbagai jenis layanan catering, seperti:
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Paket Prasmanan Denn Catering</strong>
              </li>
              <li>
                <strong>Paket Gubug</strong>
              </li>
              <li>
                <strong>Paket Nasi Kotak</strong>
              </li>
            </ul>
          </p>
          <p className="">
            Denn Catering selalu berusaha untuk memberikan yang terbaik bagi
            pelanggan. Beragam menu yang ditawarkan memudahkan Anda dalam
            menentukan pilihan yang sesuai untuk acara Anda.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
