import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { ProductHardware } from './components/ProductHardware';
import { EmbeddedFirmware } from './components/EmbeddedFirmware';
import { WebFullStack } from './components/WebFullStack';
import { KotlSpotlight } from './components/KotlSpotlight';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'journey',
        'hardware',
        'embedded',
        'fullstack',
        'projects',
        'kotl',
        'skills',
        'experience',
        'resume',
        'contact',
      ];

      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Journey />
        <ProductHardware />
        <EmbeddedFirmware />
        <WebFullStack />
        <FeaturedProjects />
        <KotlSpotlight />
        <Skills />
        <ExperienceEducation />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
