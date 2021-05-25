import React, { useState } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSectiom';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../components/InfoSectiom/Data';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />

      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
