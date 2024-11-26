import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AboutHero from './components/about/AboutHero'
import DestionHero from './components/destination/DestionHero';
import ExploreAsia from './components/destination/ExploreAsia';
import BlogHero from './components/blog/BlogHero';
import ContactPage from './components/contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<AboutHero />}/>
      <Route path='/destinations/europe' element={<DestionHero />}/>
      <Route path='/destinations/asia' element={<ExploreAsia />}/>
      <Route path='/blog' element={<BlogHero />}/>
      <Route path='/contact' element={<ContactPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;