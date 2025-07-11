
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const badges = [
    { icon: Shield, text: '100% Genuine Product', position: 'top-4 -right-4' },
    { icon: Truck, text: 'Fast Delivery', position: 'top-20 -left-8' },
    { icon: Package, text: 'Bulk Ordering', position: 'bottom-8 -right-8' },
    { icon: Clock, text: '24/7 Support', position: 'bottom-4 -left-4' },
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Trusted by{' '}
              <span className="text-blue-500">Pharmacies</span>{' '}
              for Consistent Supply
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              "Providing Generic, Branded, Paediatric, and Veterinary Medicines at Affordable Prices."
            </p>

            {/* Contact Us button - hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex justify-start">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Doctor Image with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Doctor Image Circle */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
                  alt="Professional Pharmacist"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`absolute ${badge.position} bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2 min-w-max`}
                >
                  <badge.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Us button - shown only on mobile, centered below the image */}
        <div className="lg:hidden flex justify-center mt-8">
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white w-full max-w-xs"
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
