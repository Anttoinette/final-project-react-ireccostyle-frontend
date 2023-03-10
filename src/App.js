import Header from "./components/Header";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./scenes/Home";
import About from "./scenes/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-router-dom";
import FaceshapePage from "./scenes/FaceshapePage";
import ReviewPage from "./components/ReviewPage.jsx";
import Reviews from "./scenes/Reviews";
function App() {
  const [reviews, setReviews] = useState("");
  // const [reviewsCount, setReviews] = useState("")
  return (
    <>
      <BrowserRouter>
        <main>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/faceshape/:faceshapeId"
              element={<getByFaceshape />}
            />
            <Route path="/faceshape/:faceshapeId" element={<FaceshapePage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
