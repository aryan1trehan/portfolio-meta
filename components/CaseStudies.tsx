"use client";

import { motion } from "framer-motion";

const cases = [
  {
    brand: "boAt",
    tag: "D2C · Consumer Electronics · India",
    result: "5.2x ROAS",
    body: "Rebuilt the entire catalogue and retargeting architecture. Scaled from ₹8L to ₹40L/month. ROAS held through every rupee of that ramp.",
  },
  {
    brand: "AstroTalk",
    tag: "SaaS · App Growth · India + International",
    result: "32% CPL Drop",
    body: "4-stage qualified lead funnel via Instant Form and Messenger. CPL dropped 32% in week three. Consultation bookings tripled month-on-month.",
  },
  {
    brand: "BeatO Healthcare",
    tag: "Healthcare · App + Subscription · India",
    result: "4.1x ROAS",
    body: "Policy-compliant creatives that still convert. App-install and subscription funnel. 4.1x ROAS in a category where most agencies don't even know the rules.",
  },
  {
    brand: "Umaid Palace",
    tag: "Luxury Hospitality · India + International",
    result: "Premium Repositioning",
    body: "Cinematic awareness strategy for ultra-premium travellers. The brand stopped feeling like a hotel. It started feeling like a destination.",
  },
  {
    brand: "Amthor International",
    tag: "International B2B · Europe + Gulf",
    result: "6x Qualified Leads",
    body: "Cross-border campaigns across 6 markets, localised per geography. Lead volume increased 6x in 45 days. Their sales team stopped chasing cold outreach.",
  },
  {
    brand: "Rangat · Sverve · Mufasa Man",
    tag: "Fashion · D2C · India",
    result: "7x Peak ROAS",
    body: "Three distinct fashion brands. One performance standard. Seasonal drops, catalogue ads, conversion retargeting. Peak sale ROAS: 7x.",
  },
];

export default function CaseStudies() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cases.map((c, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group bg-[#121212] border-t-2 border-t-[#A3B18A]/30 hover:border-t-[#A3B18A] p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
        >
          <h3 className="font-georgia text-[#E9EDC9] text-2xl font-normal mb-2">{c.brand}</h3>
          <span className="inline-block font-inter text-[10px] uppercase tracking-widest text-[#E9EDC9]/40 bg-[#1B2621] px-3 py-1 mb-4">
            {c.tag}
          </span>
          <p className="font-georgia text-[#A3B18A] text-3xl font-normal mb-4">{c.result}</p>
          <p className="font-inter text-sm text-[#E9EDC9]/60 leading-relaxed mb-6">{c.body}</p>
          <a href="#contact" className="font-inter text-xs text-[#A3B18A] hover:text-[#B8C9A0] uppercase tracking-widest transition-colors duration-200">
            Full Case Study →
          </a>
        </motion.article>
      ))}
    </div>
  );
}
