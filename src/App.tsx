import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Products } from './components/sections/Products';
import { WebPlatforms } from './components/sections/WebPlatforms';
import { Journey } from './components/sections/Journey';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { projectCaseStudies } from './data/portfolioData';
import { ProjectCaseStudy } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  // Initialize theme from user preference or system
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors flex flex-col font-sans">
      {/* Sticky Navigation Bar with Scroll Progress */}
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Skills />
        <Products
          projects={projectCaseStudies}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <WebPlatforms />
        <Journey />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
