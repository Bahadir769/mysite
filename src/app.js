import React  from 'react';
import About  from './components/about';
import Home  from './components/home';
import Contact  from './components/contact';
import Notpage  from './components/notpage';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import './css/app.css';

function app() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Notpage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    );
}

export default app;