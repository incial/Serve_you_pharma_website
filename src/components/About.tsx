
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const pharmacyImages = [
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop",
      alt: "Modern Pharmacy Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=400&fit=crop",
      alt: "Pharmacy Shelves with Medications"
    },
    {
      src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=400&fit=crop",
      alt: "Pharmacist at Work"
    },
    {
      src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=500&h=400&fit=crop",
      alt: "Medical Supplies and Equipment"
    }
  ];

  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                What We're All About
              </h2>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
                  <p className="text-gray-600">
                    To provide reliable, affordable pharmaceutical solutions with timely delivery and exceptional service.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Eye className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To ensure accessible healthcare for all by being a leading force in pharmaceutical distribution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Pharmacy Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <Carousel className="w-full">
                <CarouselContent>
                  {pharmacyImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </motion.div>
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Serve You Pharma is a trusted pharmaceutical wholesaler supplying quality medicines to pharmacies, hospitals, 
            and veterinary clinics. Our range includes generic, branded, paediatric, and veterinary medications 
            — all at competitive prices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
