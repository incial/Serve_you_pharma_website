
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Pill, Baby, Sparkles, Heart, Home, User, Stethoscope, PawPrint, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 40,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  const services = [
    {
      icon: Pill,
      title: 'Prescriptions',
      description: 'Professional prescription dispensing service with qualified pharmacists. We ensure accurate medication preparation and provide comprehensive drug counseling for safe and effective treatment.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    },
    {
      icon: Baby,
      title: 'Mother and Baby Care',
      description: 'Complete range of products for mothers and babies including baby formula, diapers, feeding accessories, maternity care items, and specialized infant medications.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    },
    {
      icon: Sparkles,
      title: 'Cosmetics',
      description: 'Wide selection of beauty and skincare products from trusted brands. Including makeup, skincare essentials, anti-aging products, and dermatologist-recommended cosmetics.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health monitoring services, vitamin supplements, nutritional products, and wellness consultations to help maintain your optimal health.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    },
    {
      icon: Home,
      title: 'Home Health Care',
      description: 'Essential home healthcare supplies including wound care products, mobility aids, home diagnostic kits, and medical devices for comfortable home treatment.',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop',
    },
    {
      icon: User,
      title: 'Personal Care',
      description: 'Daily personal care essentials including hygiene products, oral care, hair care, skin care, and specialty items for maintaining personal health and comfort.',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop',
    },
    {
      icon: Stethoscope,
      title: 'Medical Equipment',
      description: 'Quality medical equipment and devices including blood pressure monitors, thermometers, glucose meters, nebulizers, and other diagnostic instruments.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
    },
    {
      icon: PawPrint,
      title: 'Veterinary',
      description: 'Specialized veterinary medications and pet care products. Professional advice for pet health, including prescription medications and over-the-counter pet care supplies.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Complete Pharmacy Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted neighborhood pharmacy providing comprehensive healthcare solutions and professional pharmaceutical services.
          </p>
        </motion.div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {services.map((service, index) => (
              <div key={index} className="keen-slider__slide">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {loaded && instanceRef.current && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors z-10"
                onClick={() => instanceRef.current?.prev()}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors z-10"
                onClick={() => instanceRef.current?.next()}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots Pagination */}
          {loaded && instanceRef.current && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: services.length }).map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === idx ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
