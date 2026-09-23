# Pratik Mandani — Personal Engineering Portfolio

[![Live Website](https://img.shields.io/badge/Live-Website-emerald?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pratik-mandani.github.io/)
[![Deploy to GitHub Pages](https://github.com/pratik-mandani/pratik-mandani.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/pratik-mandani/pratik-mandani.github.io/actions/workflows/deploy.yml)

> **Live Portfolio URL**: [https://pratik-mandani.github.io/](https://pratik-mandani.github.io/)

Personal engineering portfolio of **Pratik Mandani**, showcasing 7+ years of hands-on industrial product testing, QA/QC workflows, PCB prototyping, and embedded firmware engineering, combined with 4+ years of full-stack web software development (PHP, Laravel, MySQL, REST APIs).

---

## ⚡ Core Technical Positioning

- **Product Development & Hardware**: Electro-mechanical assembly, production line planning, stage-gate QA/QC checklists, digital multimeter & oscilloscope testing, precision hand soldering, and SMD component rework.
- **Embedded & Firmware Engineering**: ESP32, Arduino IDE, low-level C/C++ state machines, sensor arrays, I2C, SPI, UART, I2S digital audio DACs, and PLC/Raspberry Pi integration.
- **Full-Stack Web Engineering**: 4+ continuous years at Altius Infoway delivering 100+ production platforms, custom ERP/CRM administrative software, MySQL database optimization, and pixel-perfect Figma-to-HTML implementations.

---

## 📂 Architecture & Directory Structure

```text
pratik-mandani.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated deployment to GitHub Pages
├── public/
│   ├── favicon.svg             # Custom engineering favicon
│   ├── resume/
│   │   └── Pratik_Mandani.pdf  # Verified official resume PDF
│   └── images/                 # Categorized project & journey assets
│       ├── projects/
│       ├── journey/
│       ├── profile/
│       └── certificates/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive header with navigation & CTAs
│   │   ├── Hero.tsx            # Headline, verified metrics & primary links
│   │   ├── About.tsx           # Differentiator narrative & core engineering pillars
│   │   ├── Journey.tsx         # Interactive 11-step chronological progression
│   │   ├── ProductHardware.tsx # Chapter 1: Manufacturing, QA/QC & PCB design
│   │   ├── EmbeddedFirmware.tsx# Chapter 2: Microcontroller firmware & bus protocols
│   │   ├── WebFullStack.tsx    # Chapter 3: 4+ years at Altius, 100+ sites & ERPs
│   │   ├── FeaturedProjects.tsx# Filterable case study catalog
│   │   ├── CaseStudyModal.tsx  # Deep-dive subsystem & testing architecture modal
│   │   ├── KotlSpotlight.tsx   # Personal embedded robot project feature
│   │   ├── Skills.tsx          # 4-domain categorized technical matrix
│   │   ├── ExperienceEducation.tsx # Verifiable work history & GTU Diploma
│   │   ├── ResumeSection.tsx   # CV highlights & PDF download trigger
│   │   ├── Contact.tsx         # Direct channels, form & profiles
│   │   ├── Footer.tsx          # Tech specs, back-to-top & copyright
│   │   └── BrandIcons.tsx      # SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.ts    # Centralized typed dataset (no fabricated specs)
│   ├── types.ts                # TypeScript domain models
│   ├── App.tsx                 # Main application coordinator & scroll spy
│   ├── main.tsx                # React root entrypoint
│   └── index.css               # Tailwind directives & engineering blueprints
├── index.html                  # SEO metadata, Open Graph & schema.org JSON-LD
├── tailwind.config.js          # Engineering color palette & typography
├── vite.config.ts              # Root base '/' build configuration
└── package.json
```

---

## 🛠️ Local Development & Build

```bash
# Clone the repository
git clone https://github.com/pratik-mandani/pratik-mandani.github.io.git
cd pratik-mandani.github.io

# Install dependencies
npm install

# Run local development server
npm run dev

# Run production build and type-checking
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Security & Privacy Notice

This portfolio strictly adheres to confidentiality standards:
- Zero proprietary company source code or client databases are published.
- Internal schematics and client credentials remain protected.
- Project entries reflect verified roles, public-safe architectures, and truthful metrics.
