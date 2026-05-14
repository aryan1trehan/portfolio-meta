"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const primaryStats = [
  { value: 7, suffix: "x", label: "Peak ROAS Delivered" },
  { value: 4.8, suffix: "x", label: "Average ROAS (Last 90 Days)" },
  { value: "₹78Cr+", suffix: "", label: "Meta Ad Spend Managed", raw: true },
  { value: 30, suffix: "%", label: "Avg CPL Reduction in 30 Days" },
];

const secondaryStats = [
  { value: 25, suffix: "+", label: "Brands Scaled Globally" },
  { value: 10, suffix: "+", label: "Industries Mastered" },
  { value: 7, suffix: "", label: "Continents Reached" },
  { value: 8, suffix: "+", label: "Ad Objective Types Deployed" },
];

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end * 10) / 10);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Results() {
  return (
    <div id="results">
      {/* Primary stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#6D001A]/10 mb-px">
        {primaryStats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#6D001A] p-8"
          >
            <p className="font-georgia text-[clamp(2.5rem,5vw,4rem)] text-[#FFFFFF] leading-none mb-2">
              {s.raw ? s.value : <CountUp end={s.value as number} suffix={s.suffix} />}
            </p>
            <p className="font-inter text-xs text-[#FFFFFF]/60 uppercase tracking-widest">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Secondary stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#6D001A]/10 mb-12">
        {secondaryStats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            className="bg-[#000000] p-6"
          >
            <p className="font-georgia text-[clamp(2rem,4vw,3rem)] text-[#FFFFFF] leading-none mb-1">
              <CountUp end={s.value as number} suffix={s.suffix} />
            </p>
            <p className="font-inter text-xs text-[#FFFFFF]/40 uppercase tracking-widest">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Pull quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="font-georgia italic text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#FFFFFF] leading-relaxed">
          The brands that came for one month
          <br />
          <span className="text-[#FFFFFF]">stayed for years. The returns made the decision.</span>
        </p>
      </motion.blockquote>
    </div>
  );
}
