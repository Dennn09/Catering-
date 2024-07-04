/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Abril"],
        montserrat : ["Montserrat"],
      },
      backgroundImage: {
        'image1': "url('/src/assets/img/image.png')",
        'image2': "url('/src/assets/img/prasmanan.jpg')",
        'image3': "url('/src/assets/img/gubug.jpg')",
        'image4': "url('/src/assets/img/nasibox.jpg')",
        'imagebox': "url('/src/assets/img/box.jpg')",
        'imageboxHover': "url('/src/assets/img/boxhover.jpg')",
        'imagePras': "url('/src/assets/img/prasmanan1.jpg')",
        'imagePrasHover': "url('/src/assets/img/prasmananhover.jpg')",
        'imageGubuk': "url('/src/assets/img/gubukan.jpg')",
        'imageGubukHover': "url('/src/assets/img/gubukanhover.jpg')",
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
};
