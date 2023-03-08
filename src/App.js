import Header from './components/Header';
import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './scenes/Home'
import About from './scenes/About' 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar';
{/* <Route path='/add-new' element={<AddNew />} />
              <Route path='/recipe/:id' element={<OneRecipe />} />
              <Route path='/editrecipe/:id' element={<EditRecipe />} /> */}
function App() {
  return (
    <>
    <BrowserRouter>
    <main>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/About' element={<About />}    />
        <Route path='/' element={<Home />}    />
        {/* <Route path='/oval' element={<faceshape faceshape="oval" />}    /> */}
        <Route path='/faceshape/:faceshapeId' element={<getByFaceshape />}    />
        {/* <Route path='/faceshape' element={<getByFaceshape />}    /> */}
      </Routes>
      </main>
    </BrowserRouter>
      <Footer />
    </>
    
  );
}

export default App;

    