import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { JourneyTimeline } from './components/sections/JourneyTimeline';
import { ProductDevSection } from './components/sections/ProductDevSection';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { KotlSpotlight } from './components/sections/KotlSpotlight';
import { WebDevelopment } from './components/sections/WebDevelopment';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { projectCaseStudies } from './data/portfolioData';
import { ProjectCaseStudy } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  // Initialize theme from system or user preference
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

  // Find KOTL project for the dedicated spotlight
  const kotlProject = projectCaseStudies.find((p) => p.id === 'kotl-emotional-robot') || projectCaseStudies[0];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors flex flex-col font-sans">
      {/* Sticky Header */}
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <About />
        <JourneyTimeline />
        <ProductDevSection />
        <FeaturedProjects
          projects={projectCaseStudies}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <KotlSpotlight
          kotlProject={kotlProject}
          onOpenKotlModal={() => setSelectedProject(kotlProject)}
        />
        <WebDevelopment />
        <SkillsSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Clean Project Detail Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
