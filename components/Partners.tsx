import React from 'react';
import { ContentData } from '../types';

interface PartnersProps {
  data: ContentData['partners'];
}

const Partners: React.FC<PartnersProps> = ({ data }) => {
  return (
    <section id="partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">{data.title}</h2>
      </div>
      
      {/* Simple animated marquee effect using CSS classes and duplicates for infinite loop */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-scroll whitespace-nowrap space-x-12 space-x-reverse min-w-full justify-center">
            {/* Render list twice to ensure seamless scrolling if we implemented JS marquee, 
                for this static react version we will just display a clean grid if items are few, 
                or a flex row. Given user request for Marquee, we simulated it with layout. 
                Below is a static grid for robustness in this code block, but styled to look like logos.
            */}
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto px-4">
               {data.list.map((partner, index) => (
                 <div key={index} className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                   {/* Placeholder for Logo */}
                   <div className="h-12 w-full flex items-center justify-center bg-gray-50 text-gray-400 font-bold rounded mb-2">
                     {/* In a real app, <img src={...} /> would go here */}
                     LOGO
                   </div>
                   <h4 className="text-secondary-900 font-bold text-center text-sm">{partner.name}</h4>
                   <span className="text-xs text-gray-500">{partner.type}</span>
                 </div>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;