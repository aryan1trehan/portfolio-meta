"use client";

import { motion } from "framer-motion";

export default function CtaFooter() {
  return (
    <>
      {/* SECTION 10 — CTA */}
      <section id="contact" className="bg-[#050505] px-6 py-[120px] text-center relative overflow-hidden">
        {/* Subtle gold glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 600px 300px at 50% 60%, rgba(189,255,0,0.08), transparent)' }} />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-georgia text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-[#EDEDED] leading-[1.1] mb-6">
              If the ROAS isn&apos;t there,<br />
              <span className="text-[#BDFF00]">we already know why.</span>
            </h2>
            <p className="font-inter text-[#EDEDED]/50 text-base mb-10">
              Let&apos;s find out what&apos;s possible for your brand.
            </p>
            <a
              href="mailto:hello@enhanccee.com"
              className="inline-block font-georgia text-black bg-[#BDFF00] hover:bg-[#CCFF00] hover:scale-[1.02] text-lg px-12 py-5 transition-all duration-200 mb-8"
            >
              Book a Free Audit
            </a>
            <p className="font-inter text-[#EDEDED]/20 text-xs tracking-widest uppercase mb-10">
              No commitment. No jargon. Just clarity.
            </p>

            {/* Contact pills */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['hello@enhanccee.com', 'India · International', 'Meta Certified Partner'].map((pill) => (
                <span key={pill} className="font-inter text-xs text-[#EDEDED]/40 border border-[#222222] px-5 py-2.5 tracking-wide">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-[#BDFF00]/15 px-6 py-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-6">
            {['Services', 'Work', 'Process', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-inter text-xs text-[#EDEDED]/30 hover:text-[#EDEDED]/60 uppercase tracking-widest transition-colors duration-200">
                {link}
              </a>
            ))}
          </nav>
          <p className="font-inter text-xs text-[#EDEDED]/20">
            © 2025 Enhanccee. All rights reserved. · <span className="text-[#BDFF00]/40">Built for performance.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
