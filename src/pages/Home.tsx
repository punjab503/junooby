import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      
      {/* Quick Services Preview */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From stunning photography to cinematic video production, we bring your vision to life with professional excellence.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Photography',
                description: 'Professional photography for all occasions',
                image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
              },
              {
                title: 'Video Production',
                description: 'High-quality video content creation',
                image: 'https://images.pexels.com/photos/1983082/pexels-photo-1983082.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
              },
              {
                title: 'Creative Direction',
                description: 'Strategic creative solutions for your brand',
                image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;