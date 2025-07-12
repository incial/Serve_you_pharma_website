import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const About = () => {
  const pharmacyImages = [
    {
      src: "/about-images/1.jpg",
      alt: "Modern Pharmacy Interior"
    },
    {
      src: "/about-images/2.jpg",
      alt: "Pharmacy Shelves with Medications"
    },
    {
      src: "/about-images/3.jpg",
      alt: "Pharmacist at Work"
    },
    {
      src: "/about-images/4.jpg",
      alt: "Medical Supplies and Equipment"
    },
    {
      src: "/about-images/5.jpg",
      alt: "Pharmacy Team Serving Customers"
    }
  ];

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

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
                Your Trusted Healthcare Partner
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
                    To enhance community health by providing high-quality, affordable medications and personalized care. 
                    We are committed to delivering prescriptions and wellness products accurately and on time, while guiding 
                    customers with trusted expertise across both modern medicine and traditional remedies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Eye className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To be the most trusted pharmacy in our region, known for compassionate service, clinical excellence, 
                    and a holistic approach to healing. We envision a seamless pharmacy experience where timely delivery 
                    and transparent care bring wellness to every household.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Pharmacy Carousel */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Carousel 
                setApi={setApi}
                opts={{
                  loop: true,
                  align: "start",
                }}
              >
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
          </div>
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
            Serve You Pharma is your neighborhood pharmacy committed to providing exceptional pharmaceutical care. 
            With our team of qualified pharmacists and healthcare professionals, we offer comprehensive pharmacy services 
            including prescription medications, health consultations, and a wide range of healthcare products. 
            We pride ourselves on building lasting relationships with our community through personalized care and trusted expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
