import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { AboutPage } from "../pages/AboutPage";
import { PrasmananPage } from "../pages/PrasmananPage";
import { GubukPage } from "../pages/GubukPage";
import { NasiBoxPage } from "../pages/NasiBoxPage";
import { GaleryPage } from "../pages/GaleryPage";
export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Galery" element={<GaleryPage/>}/>
        <Route path="/Prasmanan" element={<PrasmananPage/>}/>
        <Route path="/Gubuk" element={<GubukPage/>}/>
        <Route path="/NasiBox" element={<NasiBoxPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
