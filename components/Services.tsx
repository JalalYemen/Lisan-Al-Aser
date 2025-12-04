import React from 'react';
import { ContentData } from '../types';
import { motion } from 'framer-motion';

interface ServicesProps {
  data: ContentData['services'];
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">مجالات العمل</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
             نقدم مجموعة متكاملة من الخدمات اللغوية والاستشارية لتلبية احتياجات الأفراد والمؤسسات
          </p>
        </div>

        <div className="space-y-16">
          {data.categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold text-secondary-800 mb-8 border-r-4 border-primary-500 pr-4">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-start"
                    >
                      <div className="p-3 bg-secondary-50 text-secondary-700 rounded-lg mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-secondary-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;