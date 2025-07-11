
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingAnimation from '../components/LoadingAnimation';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
