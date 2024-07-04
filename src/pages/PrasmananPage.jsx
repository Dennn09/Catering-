import React from "react";
import { Navbar } from "../assets/Components/Navbar";
import { Footer } from "../assets/Components/Footer";

export const PrasmananPage = () => {
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
          <h2 className="text-3xl font-serif mb-4">Paket Prasmanan</h2>
          <h1 className="font-bold font-body text-5xl text-[#333333]">
            Denn Catering
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl w-full">
          <div className="border p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Paket Prasmanan I</h3>
            <ul className="list-disc list-inside">
              <li>Nasi putih</li>
              <li>Ayam goreng kremes</li>
              <li>Daging rendang</li>
              <li>Ikan bakar</li>
              <li>Sayur lodeh</li>
              <li>Sambal goreng kentang</li>
              <li>Krupuk udang</li>
              <li>Lalapan</li>
              <li>Sambal</li>
              <li>Buah segar</li>
              <li>Air mineral</li>
            </ul>
            <p className="mt-4">Harga: Rp 45.000 per porsi</p>
            <button
              onClick={() => handleOrder("Paket Prasmanan I")}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Pesan
            </button>
          </div>
          <div className="border p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Paket Prasmanan II</h3>
            <ul className="list-disc list-inside">
              <li>Nasi putih</li>
              <li>Ayam bakar</li>
              <li>Daging semur</li>
              <li>Ikan fillet saus asam manis</li>
              <li>Capcay goreng</li>
              <li>Sambal goreng ati</li>
              <li>Krupuk udang</li>
              <li>Lalapan</li>
              <li>Sambal</li>
              <li>Buah segar</li>
              <li>Air mineral</li>
            </ul>
            <p className="mt-4">Harga: Rp 55.000 per porsi</p>
            <button
              onClick={() => handleOrder("Paket Prasmanan II")}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Pesan
            </button>
          </div>
          <div className="border p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Paket Prasmanan III</h3>
            <ul className="list-disc list-inside">
              <li>Nasi putih</li>
              <li>Ayam opor</li>
              <li>Daging sapi teriyaki</li>
              <li>Ikan gurame goreng</li>
              <li>Sayur asem</li>
              <li>Tumis buncis wortel</li>
              <li>Krupuk udang</li>
              <li>Lalapan</li>
              <li>Sambal</li>
              <li>Buah segar</li>
              <li>Air mineral</li>
            </ul>
            <p className="mt-4">Harga: Rp 65.000 per porsi</p>
            <button
              onClick={() => handleOrder("Paket Prasmanan III")}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Pesan
            </button>
          </div>
          <div className="border p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Paket Prasmanan IV</h3>
            <ul className="list-disc list-inside">
              <li>Nasi putih</li>
              <li>Ayam goreng serundeng</li>
              <li>Daging sapi lada hitam</li>
              <li>Ikan fillet saus padang</li>
              <li>Sayur bening bayam</li>
              <li>Sambal goreng tahu tempe</li>
              <li>Krupuk udang</li>
              <li>Lalapan</li>
              <li>Sambal</li>
              <li>Buah segar</li>
              <li>Air mineral</li>
            </ul>
            <p className="mt-4">Harga: Rp 75.000 per porsi</p>
            <button
              onClick={() => handleOrder("Paket Prasmanan IV")}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
