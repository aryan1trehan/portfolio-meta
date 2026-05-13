"use client";

import { motion } from "framer-motion";

const industries = [
  { icon: "🛍", name: "E-Commerce", desc: "Up to 7x ROAS · DTC Scaling · Catalogue Ads", badge: "7x ROAS" },
  { icon: "👗", name: "Fashion", desc: "Up to 6x ROAS · Seasonal Drops · Visual-First Creative", badge: "6x ROAS" },
  { icon: "🏥", name: "Medical & Healthcare", desc: "Compliant Ads · Lead Gen · App Installs", badge: "Compliant" },
  { icon: "🏨", name: "Hospitality", desc: "Luxury Positioning · Booking Campaigns · Awareness", badge: "Luxury" },
  { icon: "💎", name: "Jewellery", desc: "High-AOV Conversions · Catalogue · Retargeting", badge: "High-AOV" },
  { icon: "📱", name: "SaaS & Apps", desc: "Install Campaigns · In-App Events · Retention", badge: "App Growth" },
];

export default function Industries() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D4AF37]/10">
      {industries.map((ind, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group bg-[#1A1A1B] p-8 hover:border hover:border-[#D4AF37]/30 transition-all duration-200 cursor-default"
        >
          <span className="text-3xl mb-5 block" aria-hidden="true">{ind.icon}</span>
          <h3 className="font-georgia text-[#F5F5F7] text-xl font-normal mb-2">{ind.name}</h3>
          <p className="font-inter text-xs text-[#F5F5F7]/40 leading-relaxed mb-4">{ind.desc}</p>
          <span className="inline-block font-inter text-[10px] uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1">
            {ind.badge}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
