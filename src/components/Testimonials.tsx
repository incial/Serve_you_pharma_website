
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Pharmacy Manager',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Their prices are competitive and the customer service is top-notch. Highly recommend for any pharmacy business.',
    },
    {
      name: 'Michael Chen',
      role: 'Hospital Administrator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'We can always rely on timely delivery and high-quality medicines. Best vendor for emergency supplies.',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Veterinary Clinic Owner',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c4e3e90b?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Their veterinary medicine selection is excellent and the bulk discounts have helped our clinic significantly.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            This User Opinion Highlights Our Consistent Product Quality
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-green-500 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
