import React from 'react';
import { ContentData } from '../types';
import { motion } from 'framer-motion';

interface ProcessProps {
  data: ContentData['process'];
}

const Process: React.FC<ProcessProps> = ({ data }) => {
  return (
    <section id="process" className="py-20 bg-secondary-900 text-white relative overflow-hidden">
      {/* Decorative bg elements - adjusted to new palette */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{data.title}</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary-700 -translate-y-full transform" style={{ top: '40px' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {data.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-secondary-800 rounded-full border-4 border-secondary-700 group-hover:border-primary-500 flex items-center justify-center mb-6 z-10 transition-colors duration-300 relative shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;