import { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      `Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-14 sm:py-18 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Let&rsquo;s Build Something
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have a project, product idea or opportunity? Feel free to get in touch.
          </p>
        </div>

        {/* Contact Form */}
        <div className="p-5 sm:p-7 rounded-lg border border-slate-200 bg-white mb-8 max-w-3xl mx-auto shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2 text-sm rounded border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="w-full px-3.5 py-2 text-sm rounded border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your requirements or message..."
                className="w-full px-3.5 py-2 text-sm rounded border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs"
              >
                Send Message via Email
              </button>

              {submitted && (
                <span className="text-xs font-semibold text-emerald-600">
                  ✓ Email client opened!
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Direct Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-center">
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col items-center shadow-2xs"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Email</span>
            <span className="text-xs font-semibold text-slate-800 break-all">{personalInfo.contact.email}</span>
          </a>

          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col items-center shadow-2xs"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">GitHub</span>
            <span className="text-xs font-semibold text-blue-600">pratik-mandani</span>
          </a>

          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col items-center shadow-2xs"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">LinkedIn</span>
            <span className="text-xs font-semibold text-blue-600">pratik-mandani</span>
          </a>

          <div className="p-3.5 rounded-lg border border-slate-200 bg-white flex flex-col items-center shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Location</span>
            <span className="text-xs font-semibold text-slate-800">{personalInfo.contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
