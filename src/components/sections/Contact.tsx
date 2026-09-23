import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailtoUrl = `mailto:pratikmandani61508@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Send a Message
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl mx-auto">
            Interested in discussing product development, embedded firmware, or full-stack software? Reach out directly via the form or channels below.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50/70 dark:bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xs mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your project details or technical inquiry here..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Send Message via Email</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {submitted && (
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  ✓ Email client opened!
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <a
            href="mailto:pratikmandani61508@gmail.com"
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors flex flex-col items-center"
          >
            <span className="text-xl mb-1">✉️</span>
            <span className="text-xs font-bold text-slate-400 block uppercase">Email</span>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 break-all">
              pratikmandani61508@gmail.com
            </span>
          </a>

          <a
            href="tel:+919773427049"
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors flex flex-col items-center"
          >
            <span className="text-xl mb-1">📱</span>
            <span className="text-xs font-bold text-slate-400 block uppercase">Phone</span>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              +91 9773427049
            </span>
          </a>

          <a
            href="https://github.com/pratik-mandani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors flex flex-col items-center"
          >
            <span className="text-xl mb-1">💻</span>
            <span className="text-xs font-bold text-slate-400 block uppercase">GitHub</span>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              pratik-mandani
            </span>
          </a>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col items-center">
            <span className="text-xl mb-1">💼</span>
            <span className="text-xs font-bold text-slate-400 block uppercase">LinkedIn</span>
            <span className="text-xs font-semibold text-slate-400 italic">
              [Placeholder - Add URL]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
