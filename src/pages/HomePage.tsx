import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <Portfolio />
      <About />
      <Services />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;