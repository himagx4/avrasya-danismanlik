import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import References from './components/References';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.title = "Avrasya Danışmanlık - Premium Danışmanlık Hizmetleri";
    
    // Genel arka planı dark gradient yap
    document.body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.minHeight = '100vh';
    document.body.style.color = '#ffffff';
    
    return () => {
      // Cleanup - component unmount olduğunda
      document.body.style.background = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.color = '';
    };
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'stats', 'references', 'testimonials', 'news', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App premium-theme">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Stats />
      <References />
      <Testimonials />
      <News />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;