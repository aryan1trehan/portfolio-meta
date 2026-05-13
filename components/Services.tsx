"use client";

import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Campaign Architecture",
    desc: "Full-funnel Meta systems — TOFU, MOFU, BOFU — running simultaneously. Not boosted posts. A structure that scales.",
  },
  {
    n: "02",
    title: "Creative Strategy",
    desc: "Ads built around your offer, not trends. Every creative is a hypothesis. We test it, kill it, or scale it.",
  },
  {
    n: "03",
    title: "Audience Intelligence",
    desc: "Custom audiences, lookalikes, behavioural layers. We find the buyer before your competitor does.",
  },
  {
    n: "04",
    title: "CRO & Funnel Optimisation",
    desc: "Traffic without conversion is noise. We fix the funnel before we pour budget into it.",
  },
  {
    n: "05",
    title: "Lead Generation & App Growth",
    desc: "Intent-based funnels that fill pipelines and drive installs. Quality over volume, always.",
  },
  {
    n: "06",
    title: "Brand Awareness & Positioning",
    desc: "We build the equity that makes your conversion ads inevitable. Presence before the ask.",
  },
];

export default function Services() {
  return (
    <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#B8960C]/10">
      {services.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group bg-[#111] p-8 hover:-translate-y-1 transition-transform duration-200 border-t-2 border-t-[#B8960C]/30 hover:border-t-[#B8960C] cursor-default"
        >
          <p className="font-georgia text-[2.5rem] text-[#B8960C] leading-none mb-5">{s.n}</p>
          <h3 className="font-inter text-sm font-semibold text-white uppercase tracking-widest mb-3">{s.title}</h3>
          <p className="font-inter text-xs text-white/40 leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
