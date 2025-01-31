import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path if needed
import LandingPage from "./components/LandingPage";
import KnowYourArtisans from "./components/KnowYouArtisans";
import AvailableProducts from "./components/availableProducts";
import HomePage from "./pages/HomePage";
import ProductById from "./components/productById";
import { axiosInstance } from "./utils/axios";
import { Navigate } from "react-router-dom";
import SignUpPage from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
function App() {
  
  return (
    <div className="content">
   
    <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/know_your_artisans" element={<KnowYourArtisans />} />
          <Route path={"/product/:id"} element={<ProductById></ProductById>}></Route>
          <Route path="/signup" element= {<SignUpPage></SignUpPage>}></Route>
         <Route path="/login" element= {<LoginPage></LoginPage>}></Route>
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
       
      </div>
  );
}

export default App;