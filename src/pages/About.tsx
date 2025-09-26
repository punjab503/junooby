import React from 'react';
import { Award, Users, Camera, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Camera, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Zap, label: 'Years Experience', value: '10+' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading creative vision with over 12 years of experience in visual storytelling.',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Cinematographer',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Award-winning cinematographer specializing in documentary and commercial work.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Photography Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Master of light and composition with expertise in fashion and portrait photography.',
    },
    {
      name: 'David Park',
      role: 'Post-Production Lead',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Technical wizard bringing stories to life through innovative editing and effects.',
    },
  ];

  return (
    <section className="pt-24 pb-24 px-4 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            About Junooby
          </h1>
          <p className="text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            We are a creative media company dedicated to transforming ideas into compelling visual stories that resonate with audiences worldwide.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Founded in 2014, Junooby began as a small team of passionate creatives with a shared vision: to push the boundaries of visual storytelling and create content that not only looks beautiful but also drives meaningful engagement.
              </p>
              <p>
                Over the past decade, we've grown from a boutique studio to a full-service media company, working with brands ranging from innovative startups to Fortune 500 companies. Our commitment to excellence and innovation has earned us recognition in the industry and, more importantly, the trust of our clients.
              </p>
              <p>
                Today, we continue to evolve, embracing new technologies and creative approaches while staying true to our core mission: creating exceptional visual experiences that tell your story in the most compelling way possible.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl opacity-20" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The creative minds behind every project, bringing diverse expertise and passion to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105"
            >
              <div className="relative mb-6 mx-auto w-32 h-32">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-3">{member.role}</p>
              <p className="text-slate-400 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-12 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-slate-400">
                We strive for perfection in every frame, every edit, and every project we deliver.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-slate-400">
                We embrace new technologies and creative approaches to stay ahead of the curve.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-slate-400">
                We work closely with our clients to understand their vision and bring it to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;