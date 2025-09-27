import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Film, CreditCard as Edit, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services for events, portraits, and commercial projects.',
      features: ['Event Photography', 'Portrait Sessions', 'Commercial Shoots', 'Product Photography'],
      color: 'blue',
      pricing: 'Starting at UGX 500,000',
      backContent: 'Capture life\'s precious moments with our professional photography services. From weddings to corporate events, we deliver stunning visuals that tell your story.',
    },
    {
      id: 2,
      icon: Video,
      title: 'Video Production',
      description: 'High-quality video production from concept to final delivery.',
      features: ['Corporate Videos', 'Documentaries', 'Music Videos', 'Commercial Ads'],
      color: 'emerald',
      pricing: 'Starting at UGX 2,000,000',
      backContent: 'Bring your vision to life with cinematic quality video production. Our team handles everything from pre-production planning to post-production magic.',
    },
    {
      id: 3,
      icon: Edit,
      title: 'Post Production',
      description: 'Complete post-production services including editing, color grading, and sound design.',
      features: ['Video Editing', 'Color Grading', 'Sound Design', 'Visual Effects'],
      color: 'amber',
      pricing: 'Starting at UGX 300,000',
      backContent: 'Transform raw footage into polished masterpieces. Our post-production team uses cutting-edge technology to enhance every frame.',
    },
    {
      id: 4,
      icon: Film,
      title: 'Cinematography',
      description: 'Cinematic storytelling with professional-grade equipment and expertise.',
      features: ['Cinema Quality', 'Professional Crew', 'Advanced Equipment', 'Creative Direction'],
      color: 'purple',
      pricing: 'Starting at UGX 3,000,000',
      backContent: 'Create cinematic experiences that captivate audiences. Our cinematographers combine technical expertise with artistic vision.',
    },
    {
      id: 5,
      icon: Palette,
      title: 'Creative Direction',
      description: 'Complete creative direction and concept development for your projects.',
      features: ['Brand Strategy', 'Visual Identity', 'Creative Concepts', 'Art Direction'],
      color: 'rose',
      pricing: 'Starting at UGX 1,500,000',
      backContent: 'Guide your brand\'s visual journey with strategic creative direction. We help define and execute your unique visual identity.',
    },
    {
      id: 6,
      icon: Megaphone,
      title: 'Marketing Content',
      description: 'Engaging content creation for social media and marketing campaigns.',
      features: ['Social Media Content', 'Marketing Videos', 'Brand Content', 'Campaign Assets'],
      color: 'cyan',
      pricing: 'Starting at UGX 800,000',
      backContent: 'Boost your brand\'s online presence with compelling marketing content designed to engage and convert your audience.',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/20 hover:border-blue-500/40',
      emerald: 'from-emerald-500/10 to-emerald-600/10 border-emerald-500/20 hover:border-emerald-500/40',
      amber: 'from-amber-500/10 to-amber-600/10 border-amber-500/20 hover:border-amber-500/40',
      purple: 'from-purple-500/10 to-purple-600/10 border-purple-500/20 hover:border-purple-500/40',
      rose: 'from-rose-500/10 to-rose-600/10 border-rose-500/20 hover:border-rose-500/40',
      cyan: 'from-cyan-500/10 to-cyan-600/10 border-cyan-500/20 hover:border-cyan-500/40',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: 'text-blue-400',
      emerald: 'text-emerald-400',
      amber: 'text-amber-400',
      purple: 'text-purple-400',
      rose: 'text-rose-400',
      cyan: 'text-cyan-400',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive media solutions tailored to bring your vision to life with professional excellence and creative innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isFlipped = flippedCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                className="relative h-80 perspective-1000"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setFlippedCard(service.id)}
                onHoverEnd={() => setFlippedCard(null)}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d cursor-pointer"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front of card */}
                  <div className={`absolute inset-0 backface-hidden bg-gradient-to-br ${getColorClasses(service.color)} border rounded-3xl p-8`}>
                    <div className="mb-6">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className={`w-8 h-8 ${getIconColor(service.color)}`} />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <div className={`w-2 h-2 rounded-full ${getIconColor(service.color).replace('text-', 'bg-')} mr-3`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <p className={`text-lg font-semibold ${getIconColor(service.color)}`}>
                      {service.pricing}
                    </p>
                  </div>

                  {/* Back of card */}
                  <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${getColorClasses(service.color)} border rounded-3xl p-8 flex flex-col justify-center`}>
                    <div className="text-center">
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: isFlipped ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <IconComponent className={`w-10 h-10 ${getIconColor(service.color)}`} />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl font-bold mb-4 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isFlipped ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-slate-300 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isFlipped ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        {service.backContent}
                      </motion.p>
                      
                      <motion.button 
                        className={`px-6 py-3 bg-gradient-to-r ${getIconColor(service.color).replace('text-', 'from-')} to-transparent rounded-2xl font-semibold text-white hover:scale-105 transition-transform duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        Get Quote
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800 rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. Our team is ready to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-3xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-700 rounded-3xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;