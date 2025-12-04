import React, { useState, useEffect } from 'react';
import { arabicContent, englishContent } from './lib/data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [data, setData] = useState(arabicContent);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    setData(lang === 'ar' ? arabicContent : englishContent);
    // Update HTML dir and lang attributes
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen bg-white ${lang === 'ar' ? 'font-sans' : 'font-sans'}`}>
      
      <Navbar data={data.nav} lang={lang} toggleLang={toggleLang} />
      
      <main>
        <Hero data={data.hero} />
        <Stats stats={data.stats} />
        <Services data={data.services} />
        <Process data={data.process} />
        <Partners data={data.partners} />
      </main>
      
      <Footer data={data.contact} lang={lang} />

    </div>
  );
};

export default App;