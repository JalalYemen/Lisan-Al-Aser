import React from 'react';
import { ContentData } from '../types';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  data: ContentData['contact'];
  lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ data, lang }) => {
  return (
    <footer id="contact" className="bg-secondary-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              {lang === 'ar' ? 'لسان العصر للترجمة' : 'Lisan Al-Asr Translation'}
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              {lang === 'ar' 
                ? 'نسعى لأن نكون الشريك المثالي لكل من يبحث عن ترجمة احترافية وموثوقة، وذلك من خلال تقديم خدمات عالية الجودة.'
                : 'We strive to be the ideal partner for anyone looking for professional and reliable translation through high-quality services.'}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">
               {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-primary-500 transition-colors">{lang === 'ar' ? 'من نحن' : 'About Us'}</a></li>
              <li><a href="#services" className="hover:text-primary-500 transition-colors">{lang === 'ar' ? 'خدماتنا' : 'Services'}</a></li>
              <li><a href="#process" className="hover:text-primary-500 transition-colors">{lang === 'ar' ? 'آلية العمل' : 'Process'}</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">{lang === 'ar' ? 'اتصل بنا' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
             <h4 className="text-lg font-semibold text-white mb-6">
               {lang === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 ml-3 mt-0.5 flex-shrink-0" />
                <span>{data.address}</span>
              </li>
              {data.phone.map((phoneNumber, index) => (
                <li key={index} className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-500 ml-3 flex-shrink-0" />
                  <a 
                    href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`} 
                    dir="ltr" 
                    className="text-right hover:text-primary-500 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </li>
              ))}
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 ml-3 flex-shrink-0" />
                <a 
                  href={`mailto:${data.email}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {data.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© 2025 {lang === 'ar' ? 'لسان العصر للترجمة' : 'Lisan Al-Asr Translation'}. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;