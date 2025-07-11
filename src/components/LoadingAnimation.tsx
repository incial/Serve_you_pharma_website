
import React from 'react';
import { motion } from 'framer-motion';
import { Pill } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <Pill className="w-16 h-16 text-green-500 mx-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <h2 className="text-2xl font-bold text-gray-800">Serve You Pharma</h2>
          <p className="text-gray-600 mt-2">Loading...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
