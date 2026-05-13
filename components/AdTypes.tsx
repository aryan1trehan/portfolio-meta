"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    label: "Awareness",
    headline: "Make the right people feel you.",
    body: "Reach, recall, and video campaigns — built for brands entering new markets or launching new products. We've run awareness funnels for Umaid Palace, Rangat Jaipur, and Tichu.",
    bullets: ["Reach & Frequency Campaigns", "Video View — ThruPlay Optimised", "Brand Recall Lift Studies", "Influencer Content Amplification"],
  },
  {
    label: "Lead Generation",
    headline: "Quality leads. Every day.",
    body: "Instant Forms, Messenger flows, and CRM-integrated pipelines — engineered for intent. AstroTalk's consultation funnel. BeatO's wellness sign-ups. 30% lower CPL within 30 days.",
    bullets: ["Instant Form Lead Ads", "Messenger & WhatsApp Flows", "Event & Webinar Registration", "CRM-Integrated Pipelines"],
  },
  {
    label: "Sales & Conversions",
    headline: "Scale revenue. Protect margin.",
    body: "Purchase-optimised campaigns, dynamic catalogue ads, and retargeting sequences. boAt from ₹8L to ₹40L/month. The Sverve and Mufasa Man — consistent 5x+ ROAS.",
    bullets: ["Dynamic Catalogue Ads", "Purchase & ATC Optimisation", "Abandoned Cart Retargeting", "Attribution Window Management"],
  },
  {
    label: "App Promotion",
    headline: "Installs that convert inside the app.",
    body: "App install campaigns, in-app event optimisation, and re-engagement flows built on Meta's SKAdNetwork framework. Quality installs — not vanity numbers.",
    bullets: ["App Install Campaigns — iOS & Android", "In-App Event Optimisation", "Re-engagement & Retention Ads", "Value-Based App Bidding"],
  },
  {
    label: "Retargeting & CRO",
    headline: "Warm audiences. Activated.",
    body: "Pixel-powered sequences, intent-based segmentation, and A/B-tested creatives — paired with CRO. The fastest path to ROAS improvement for most brands.",
    bullets: ["Pixel Retargeting — 3, 7, 30-day Windows", "Video Viewer Sequences", "Engagement Custom Audiences", "Landing Page A/B Testing"],
  },
];

export default function AdTypes() {
  const [active, setActive] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div>
      {/* Desktop tabs */}
      <div className="hidden md:block">
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`font-inter text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200 ${
                active === i
                  ? "bg-[#A3B18A] text-black"
                  : "border border-[#2A3A30] text-[#E9EDC9]/60 hover:border-[#A3B18A]/40 hover:text-[#A3B18A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-12 items-start"
          >
            <div>
              <h3 className="font-georgia text-2xl text-[#E9EDC9] mb-3">{tabs[active].headline}</h3>
              <p className="font-inter text-sm text-[#E9EDC9]/60 leading-relaxed">{tabs[active].body}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {tabs[active].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 font-inter text-sm text-[#E9EDC9]">
                  <span className="text-[#A3B18A] mt-1 shrink-0">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden flex flex-col gap-2">
        {tabs.map((tab, i) => (
          <div key={i} className="border border-[#2A3A30]">
            <button
              onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 font-inter text-sm font-semibold text-[#E9EDC9] uppercase tracking-widest"
            >
              {tab.label}
              <span className="text-[#A3B18A] text-lg">{openAccordion === i ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {openAccordion === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <p className="font-georgia text-lg text-[#E9EDC9] mb-2">{tab.headline}</p>
                    <p className="font-inter text-sm text-[#E9EDC9]/60 mb-4 leading-relaxed">{tab.body}</p>
                    <ul className="flex flex-col gap-2">
                      {tab.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 font-inter text-sm text-[#E9EDC9]">
                          <span className="text-[#A3B18A] shrink-0">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
