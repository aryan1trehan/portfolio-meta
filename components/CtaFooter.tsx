"use client";

import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: "📍",
    label: "ADDRESS",
    value: "12, Connaught Place, New Delhi 110001",
  },
  {
    icon: "📞",
    label: "PHONE",
    value: "+91 98765 43210",
  },
  {
    icon: "✉",
    label: "EMAIL",
    value: "hello@enhanccee.com",
  },
  {
    icon: "🕐",
    label: "HOURS",
    value: "Mon – Sat: 9 AM – 7 PM IST",
  },
];

const categories = [
  "Meta Ads Management",
  "Creative Strategy",
  "Lead Generation",
  "E-Commerce Scaling",
  "Brand Awareness",
  "App Growth",
];

export default function CtaFooter() {
  return (
    <>
      {/* SECTION 10 — CONTACT */}
      <section id="contact" className="bg-[#6D001A] px-6 py-[80px] relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">

            {/* LEFT — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#FFFFFF]/50" />
                <p className="font-josefin text-[11px] font-light uppercase tracking-[0.3em] text-[#FFFFFF]/60">
                  Get In Touch
                </p>
              </div>

              {/* Heading */}
              <h2 className="font-cormorant text-[clamp(2.8rem,5vw,4rem)] font-normal leading-[1.1] text-[#FFFFFF] mb-6">
                Start Your <em className="italic text-[#FFFFFF]/70 font-light">Partnership</em>
              </h2>

              {/* Sub */}
              <p className="font-josefin text-sm font-light text-[#FFFFFF]/60 leading-relaxed mb-10 max-w-[38ch]">
                Whether you&apos;re scaling a D2C brand or launching your first campaign, we&apos;d love to engineer your growth. Fill the form or reach us directly.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-[#FFFFFF]/20 flex items-center justify-center shrink-0 text-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/40 mb-1">
                        {item.label}
                      </p>
                      <p className="font-josefin text-sm font-light text-[#FFFFFF]/80">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/50 block mb-2">First Name</label>
                    <input type="text" placeholder="Ravi" className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/25 font-josefin text-sm font-light px-4 py-3 focus:outline-none focus:border-[#FFFFFF]/40 transition-colors" />
                  </div>
                  <div>
                    <label className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/50 block mb-2">Last Name</label>
                    <input type="text" placeholder="Kumar" className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/25 font-josefin text-sm font-light px-4 py-3 focus:outline-none focus:border-[#FFFFFF]/40 transition-colors" />
                  </div>
                </div>

                {/* Row 2 */}
                <div>
                  <label className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/50 block mb-2">Brand / Company Name</label>
                  <input type="text" placeholder="Your Brand" className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/25 font-josefin text-sm font-light px-4 py-3 focus:outline-none focus:border-[#FFFFFF]/40 transition-colors" />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/50 block mb-2">Email</label>
                    <input type="email" placeholder="you@brand.com" className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/25 font-josefin text-sm font-light px-4 py-3 focus:outline-none focus:border-[#FFFFFF]/40 transition-colors" />
                  </div>
                  <div>
                    <label className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/50 block mb-2">Country</label>
                    <input type="text" placeholder="e.g. India, UAE, UK" className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/25 font-josefin text-sm font-light px-4 py-3 focus:outline-none focus:border-[#FFFFFF]/40 transition-colors" />
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <label className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/50 block mb-2">Category of Interest</label>
                  <select className="w-full bg-[#6D001A] border border-[#FFFFFF]/15 text-[#FFFFFF]/60 font-josefin text-sm font-light px-4 py-3 focus:outline-none focus:border-[#FFFFFF]/40 transition-colors appearance-none cursor-pointer">
                    <option value="">Select a category</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Row 5 */}
                <div>
                  <label className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/50 block mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell us about your brand, monthly ad budget, and goals..." className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 text-[#FFFFFF] placeholder-[#FFFFFF]/25 font-josefin text-sm font-light px-4 py-3 focus:outline-none focus:border-[#FFFFFF]/40 transition-colors resize-none" />
                </div>

                {/* Submit */}
                <button type="submit" className="self-start font-josefin text-xs uppercase tracking-[0.3em] text-[#000000] bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 px-10 py-4 transition-all duration-200 hover:scale-[1.02]">
                  Send Enquiry →
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#000000] border-t border-[#FFFFFF]/5 px-6 py-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-8">
            {['Services', 'Work', 'Process', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-josefin text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/30 hover:text-[#FFFFFF]/60 transition-colors duration-200">
                {link}
              </a>
            ))}
          </nav>
          <p className="font-josefin text-[10px] font-light text-[#FFFFFF]/20 tracking-wide">
            © 2025 Enhanccee. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
