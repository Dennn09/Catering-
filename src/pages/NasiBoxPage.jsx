import React from "react";
import { Navbar } from "../assets/Components/Navbar";
import { Footer } from "../assets/Components/Footer";
export const NasiBoxPage = () => {
  const handleOrder = (packageName) => {
    const message = `Halo, saya ingin memesan ${packageName} dari Denn Catering.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/6282194965075?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center px-4 md:px-0 mb-4">
        <div className="pt-20 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif mb-4">Paket Nasi Box</h2>
          <h1 className="font-bold font-body text-5xl text-[#333333]">
            Denn Catering
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl w-full">
          <div className="border p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Paket Nasi Box I</h3>
            <ul className="list-disc list-inside">
              <li>Nasi putih</li>
              <li>Ayam goreng</li>
              <li>Tumis sayur</li>
              <li>Sambel</li>
              <li>Kerupuk</li>
            </ul>
            <p className="mt-4">Harga: Rp 25.000 per porsi</p>
            <button
              onClick={() => handleOrder("Paket Nasi Box I")}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Pesan
            </button>
          </div>
          <div className="border p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Paket Nasi Box II</h3>
            <ul className="list-disc list-inside">
              <li>Nasi putih</li>
              <li>Ayam bakar</li>
              <li>Capcay</li>
              <li>Telur balado</li>
              <li>Sambel</li>
              <li>Kerupuk</li>
            </ul>
            <p className="mt-4">Harga: Rp 30.000 per porsi</p>
            <button
              onClick={() => handleOrder("Paket Nasi Box II")}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Pesan
            </button>
          </div>
          <div className="border p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Paket Nasi Box III</h3>
            <ul className="list-disc list-inside">
              <li>Nasi putih</li>
              <li>Daging rendang</li>
              <li>Sayur asem</li>
              <li>Tahu tempe bacem</li>
              <li>Sambel</li>
              <li>Kerupuk</li>
            </ul>
            <p className="mt-4">Harga: Rp 35.000 per porsi</p>
            <button
              onClick={() => handleOrder("Paket Nasi Box III")}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
