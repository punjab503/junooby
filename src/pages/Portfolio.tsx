import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16"
    >
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;