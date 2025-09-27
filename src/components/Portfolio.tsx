import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ExternalLink, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'photography', label: 'Photography' },
    { id: 'video', label: 'Video Production' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'events', label: 'Events' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Fashion Editorial',
      category: 'photography',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'High-end fashion photography for luxury brand campaign',
    },
    {
      id: 2,
      title: 'Corporate Documentary',
      category: 'video',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Documentary showcasing innovative tech company culture',
    },
    {
      id: 3,
      title: 'Product Launch Campaign',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete campaign for premium consumer electronics',
    },
    {
      id: 4,
      title: 'Wedding Cinematography',
      category: 'events',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Cinematic wedding film with emotional storytelling',
    },
    {
      id: 5,
      title: 'Architecture Photography',
      category: 'photography',
      image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Modern architecture captured with dramatic lighting',
    },
    {
      id: 6,
      title: 'Music Video Production',
      category: 'video',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Creative music video with innovative visual effects',
    },
    {
      id: 7,
      title: 'Brand Commercial',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Television commercial for international brand',
    },
    {
      id: 8,
      title: 'Conference Coverage',
      category: 'events',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Comprehensive event coverage for tech conference',
    },
    {
      id: 9,
      title: 'Portrait Series',
      category: 'photography',
      image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Artistic portrait series exploring human emotion',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Explore our diverse collection of creative work spanning photography, video production, and commercial projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-3xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-slate-900 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.05 }}
                layout
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 0.9 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: hoveredItem === item.id ? 0 : 20,
                    opacity: hoveredItem === item.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-600/30">
                    {filters.find(f => f.id === item.category)?.label}
                  </span>
                </motion.div>

                {/* Floating Action Button */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ 
                    scale: hoveredItem === item.id ? 1 : 0,
                    rotate: hoveredItem === item.id ? 0 : -90
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-3xl font-semibold transition-all duration-300 border border-slate-700 hover:border-slate-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;