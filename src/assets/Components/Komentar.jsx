// File: ../assets/components/Komentar.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Foto1 from "../img/imgProfil.jpg"; // Ganti dengan jalur gambar yang benar
import Foto2 from "../img/imgProfil.jpg"; // Ganti dengan jalur gambar yang benar
import Foto3 from "../img/imgProfil.jpg"; // Ganti dengan jalur gambar yang benar
import Foto4 from "../img/imgProfil.jpg"; // Ganti dengan jalur gambar yang benar

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const testimonials = [
  {
    name: "Deni Rahman Masulil",
    nim: "21.11.4377",
    message:
      "Denn Catering benar-benar mengagumkan! Makanan mereka selalu segar dan lezat. Pasti akan memesan lagi untuk acara keluarga kami berikutnya!",
    image: Foto1,
  },
  {
    name: "Deni Rahman Masulil",
    nim: "21.11.4377",
    message:
      "Pengalaman yang luar biasa dengan Denn Catering. Mereka sangat profesional dan responsif terhadap kebutuhan kami. Sangat direkomendasikan!",
    image: Foto2,
  },
  {
    name: "Deni Rahman Masulil",
    nim: "21.11.4377",
    message:
      "Kami sangat puas dengan layanan dari Denn Catering. Makanan enak dan layanan yang cepat membuat acara kami berjalan lancar.",
    image: Foto3,
  },
  {
    name: "Deni Rahman Masulil",
    nim: "21.11.4377",
    message:
      "Terima kasih Denn Catering untuk hidangan yang lezat dan layanan yang ramah. Semua tamu kami sangat menikmati makanan yang disediakan.",
    image: Foto4,
  },
];

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[30rem] transform translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg"
      style={{ bottom: "20px", top: "auto" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[30rem] transform translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg"
      style={{ bottom: "20px", top: "auto" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export const Komentar = () => {
  return (
    <Carousel
      className="   "
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 m-4 text-center flex flex-col justify-between"
          style={{ height: "350px" }}
        >
          <p className="italic mb-4">"{testimonial.message}"</p>
          <div className="flex flex-col items-center">
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.nim}</p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mt-4"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};
