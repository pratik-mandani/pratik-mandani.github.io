import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Journey } from './components/sections/Journey';
import { ProductDevelopment } from './components/sections/ProductDevelopment';
import { KotlProject } from './components/sections/KotlProject';
import { WebDevelopment } from './components/sections/WebDevelopment';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Clean Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Engineering Philosophy */}
        <About />

        {/* 3. Engineering Journey (3 Stages) */}
        <Journey />

        {/* 4. Product Development & Electronics */}
        <ProductDevelopment />

        {/* 5. Active Personal Project: KOTL Desktop AI Robot */}
        <KotlProject />

        {/* 6. Web Development & Client Projects (Filterable 20 verified websites) */}
        <WebDevelopment />

        {/* 7. Work Experience (Altius Infoway & Symbian Vending) */}
        <Experience />

        {/* 8. Technical Skills (3 confirmed categories) */}
        <Skills />

        {/* 9. Resume & Technical Documentation */}
        <Resume />

        {/* 10. Contact / Direct Inquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
