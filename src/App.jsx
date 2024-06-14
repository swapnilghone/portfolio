// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect,useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Skills from './components/Skills'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const [activeSection,setActiveSection] = useState('about');
  
  const handleScroll = () => {

    const sections = document.querySelectorAll('section.section-wrap');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  }

  useEffect(()=>{
    
    AOS.init();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <>
      <Header activeSection={activeSection} />
      <main id="main">
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Resume />
          <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
