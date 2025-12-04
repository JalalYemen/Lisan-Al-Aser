import React from 'react';
import { ContentData } from '../types';
import { motion } from 'framer-motion';

interface StatsProps {
  stats: ContentData['stats'];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="relative -mt-16 z-20 px-4 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-xl border-b-4 border-primary-600 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-secondary-900 mb-1 font-sans">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;