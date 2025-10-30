import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16"
    >
      <About />
    </motion.div>
  );
};

export default AboutPage;