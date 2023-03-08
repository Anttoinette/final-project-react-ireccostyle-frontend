import Header from './components/Header';
import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './scenes/Home'
import About from './scenes/About' 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar';
import LearnMore from './scenes/LearnMore';
import FaceshapePage from './scenes/FaceshapePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <main>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/LearnMore' element={<LearnMore />}    />
        <Route path='/About' element={<About />}    />
        <Route path='/' element={<Home />}    />
        <Route path='/faceshape/:faceshapeId' element={<getByFaceshape />}    />
        <Route path='/faceshape/:faceshapeId' element={<FaceshapePage />}    />
      </Routes>
      </main>
    </BrowserRouter>
      <Footer />
    </>
    
  );
}

export default App;

    