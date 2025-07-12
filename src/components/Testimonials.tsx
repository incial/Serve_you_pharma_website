
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, UserRound } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arun Josy Thomas',
      gender: 'male',
      rating: 5,
      text: 'Always a great experience at Serve you pharma. Friendly staff, fast service, and they truly care about your health. Thank you for being reliable and professional every time.',
    },
    {
      name: 'Ann Lilly Jose',
      gender: 'female',
      rating: 5,
      text: 'Good service. I called at night for urgent medicine and the staff delivered the medicine to my home as soon as I told them. I am very satisfied with their service.',
    },
    {
      name: 'Akhil Mathew Mohan',
      gender: 'male',
      rating: 5,
      text: 'Excellent service overall! The staff were friendly and professional, and the home delivery was especially impressive.',
    },
    {
      name: 'Gijo George',
      gender: 'male',
      rating: 5,
      text: 'A pharmacy with dedicated management and staff. Home delivery available on demand. Good experience.',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Customers Say About Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  {testimonial.gender === 'female' ? (
                    <UserRound className="w-6 h-6 text-blue-600" />
                  ) : (
                    <User className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
