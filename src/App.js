import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Common/css/style.css'
import Home from './Domain/Home';
import Search from './Domain/Search';
import Faqpage from './Domain/Faqpage';
import Package from './Domain/Package';
import About from './Domain/About';
import Contact from './Domain/Contact';
import Register from './Domain/Register';
import Login from './Domain/Login';
function App() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.slide-up, .slide-left, .slide-right');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;

        if (isVisible) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path='' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='package' element={<Package />} />
          <Route path='faq' element={<Faqpage />} />
          <Route path='search' element={<Search />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
