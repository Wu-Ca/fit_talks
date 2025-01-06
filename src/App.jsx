import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Home from './components/Home';
    import About from './components/About';
    import Features from './components/Features';
    import Contact from './components/Contact';
    import Footer from './components/Footer';
    import Header from './components/Header';

    function App() {
      return (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      );
    }

    export default App;
