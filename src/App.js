import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-20 bg-gray-800">
          <Skills />
        </section>
        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>
        <section id="contact" className="py-20 bg-gray-800">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
