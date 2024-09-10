import { useState } from 'react'
import React from 'react';
import './App.css'
import Header from './components/header.jsx' 
import Home from './components/home.jsx';
import Services from './components/services.jsx';
import Gallery from './components/gallery.jsx';
import Tarjetas from './components/tarjetas.jsx';
import Contact from './components/contacto.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <Home />
      <Services/>
      <Gallery/>
      <Tarjetas/> 
      <Contact/>
      <Footer/> 
      
    </div>
    

  );

}

export default App;
