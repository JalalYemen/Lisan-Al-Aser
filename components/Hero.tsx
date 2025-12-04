import React from 'react';
import { motion } from 'framer-motion';
import { ContentData } from '../types';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  data: ContentData['hero'];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
        {/* Updated gradient to Navy Blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/80 to-secondary-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-right w-full mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-6">
            {data.badges.map((badge, idx) => (
              <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-primary-500" />
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {data.title}
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <a href="#contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 text-center">
              تواصل معنا
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-lg transition-colors text-center">
              استكشف خدماتنا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;