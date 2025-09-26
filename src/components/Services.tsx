import React from 'react';
import { Camera, Video, Palette, Film, CreditCard as Edit, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services for events, portraits, and commercial projects.',
      features: ['Event Photography', 'Portrait Sessions', 'Commercial Shoots', 'Product Photography'],
      color: 'blue',
    },
    {
      id: 2,
      icon: Video,
      title: 'Video Production',
      description: 'High-quality video production from concept to final delivery.',
      features: ['Corporate Videos', 'Documentaries', 'Music Videos', 'Commercial Ads'],
      color: 'emerald',
    },
    {
      id: 3,
      icon: Edit,
      title: 'Post Production',
      description: 'Complete post-production services including editing, color grading, and sound design.',
      features: ['Video Editing', 'Color Grading', 'Sound Design', 'Visual Effects'],
      color: 'amber',
    },
    {
      id: 4,
      icon: Film,
      title: 'Cinematography',
      description: 'Cinematic storytelling with professional-grade equipment and expertise.',
      features: ['Cinema Quality', 'Professional Crew', 'Advanced Equipment', 'Creative Direction'],
      color: 'purple',
    },
    {
      id: 5,
      icon: Palette,
      title: 'Creative Direction',
      description: 'Complete creative direction and concept development for your projects.',
      features: ['Brand Strategy', 'Visual Identity', 'Creative Concepts', 'Art Direction'],
      color: 'rose',
    },
    {
      id: 6,
      icon: Megaphone,
      title: 'Marketing Content',
      description: 'Engaging content creation for social media and marketing campaigns.',
      features: ['Social Media Content', 'Marketing Videos', 'Brand Content', 'Campaign Assets'],
      color: 'cyan',
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive media solutions tailored to bring your vision to life with professional excellence and creative innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-gradient-to-br ${getColorClasses(service.color)} border rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${getIconColor(service.color)}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-slate-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${getIconColor(service.color).replace('text-', 'bg-')} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent to-transparent group-hover:from-white/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;