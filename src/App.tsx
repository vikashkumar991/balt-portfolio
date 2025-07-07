import React from 'react';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import MemeSection from './components/MemeSection';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CursorFollower />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <MemeSection />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;