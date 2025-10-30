import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16"
    >
      <Services />
    </motion.div>
  );
};

export default ServicesPage;