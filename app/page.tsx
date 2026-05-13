'use client'
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { Card } from "@/components/ui/card"
import FlowArt, { FlowSection } from "@/components/ui/story-scroll"
import Navbar from "@/components/Navbar"
import Ticker from "@/components/Ticker"
import Services from "@/components/Services"
import AdTypes from "@/components/AdTypes"
import Industries from "@/components/Industries"
import Results from "@/components/Results"
import CaseStudies from "@/components/CaseStudies"
import CtaFooter from "@/components/CtaFooter"

export default function Home() {
  return (
    <main className="bg-[#121212] text-white">
      <Navbar />

      {/* SECTION 01 — HERO */}
      <Card className="w-full min-h-screen bg-[#121212] relative overflow-hidden rounded-none border-none">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
        {/* Faint gold diagonal grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(45deg, #A3B18A 1px, transparent 1px), linear-gradient(-45deg, #A3B18A 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="flex h-screen">
          <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.3em] text-[#A3B18A] mb-6">
              Performance · Precision · Global
            </p>
            {/* H1 */}
            <h1 className="font-georgia text-[clamp(2.8rem,6vw,5rem)] font-normal leading-[1.1] text-white mb-6">
              We don&apos;t run ads.<br />
              <span className="text-[#A3B18A]">We engineer growth.</span>
            </h1>
            {/* Sub-headline */}
            <p className="font-inter text-lg text-white/60 mb-10">
              ₹78Cr+ managed. 25+ brands. 7 continents.
            </p>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#contact"
                className="animate-pulse-cta inline-block px-8 py-4 bg-[#A3B18A] hover:bg-[#A3B18A] text-black font-georgia font-bold text-base rounded-none transition-all duration-200 text-center">
                Start with a Free Audit
              </a>
              <a href="#work"
                className="inline-block px-8 py-4 border border-[#2A3A30] hover:border-[#A3B18A]/50 text-white/70 hover:text-white font-inter text-base transition-all duration-200 text-center">
                View our work  ↓
              </a>
            </div>
            {/* Trust strip */}
            <div className="flex flex-wrap gap-3">
              {['₹78Cr+ in managed spend', 'Up to 7x ROAS', '25+ brands · 7 continents', 'boAt · AstroTalk · Umaid Palace'].map((pill) => (
                <span key={pill} className="font-inter text-xs text-white/50 border border-[#2A3A30] px-4 py-2 tracking-wide">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* SECTION 02 — TICKER */}
      <Ticker />

      {/* SECTION 03–08 — STORY SCROLL */}
      <FlowArt aria-label="Enhanccee Story">

        {/* SECTION 03 — WHO WE ARE */}
        <FlowSection aria-label="Who we are" style={{ backgroundColor: '#1B2621', color: '#E9EDC9' }}>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">01 — Who We Are</p>
          <hr className="my-[2vw] border-t border-[#2A3A30]" />
          <div className="flex flex-col lg:flex-row gap-[6vw] items-start">
            {/* Left */}
            <div className="flex-1">
              <h2 className="font-georgia text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.0] text-[#E9EDC9] mb-[3vw]">
                Born in Jaipur.<br />
                <span className="text-[#A3B18A]">Trusted everywhere.</span>
              </h2>
              <p className="font-inter text-base leading-relaxed text-[#E9EDC9]/60 mb-4 max-w-[55ch]">
                Enhanccee is a performance-first Meta Ads agency. Every campaign is a calculated move. Every rupee has a job.
              </p>
              <p className="font-inter text-base leading-relaxed text-[#E9EDC9]/60 max-w-[55ch]">
                We&apos;ve scaled boAt, driven AstroTalk&apos;s lead engine, positioned Umaid Palace for global luxury travellers, and taken brands like Amthor International, Tichu, BeatO Healthcare, Mufasa Man, Rangat Jaipur, and The Sverve across India, the Gulf, Europe, and beyond.
              </p>
            </div>
            {/* Right — big stat */}
            <div className="flex-shrink-0 flex flex-col items-start lg:items-end lg:border-l lg:border-[#A3B18A]/30 lg:pl-[5vw]">
              <p className="font-georgia text-[clamp(4rem,10vw,9rem)] font-normal text-[#A3B18A] leading-none">₹78Cr+</p>
              <p className="font-inter text-sm text-[#E9EDC9]/40 mt-2 tracking-wide">managed across 25+ brands</p>
              <p className="font-inter text-xs text-[#E9EDC9]/40 mt-1 tracking-wider">10+ industries · 7 continents</p>
            </div>
          </div>
        </FlowSection>

        {/* SECTION 04 — SERVICES */}
        <FlowSection aria-label="What we do" style={{ backgroundColor: '#121212', color: '#fff' }}>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">02 — What We Do</p>
          <hr className="my-[2vw] border-t border-[#2A3A30]" />
          <h2 className="font-georgia text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.0] text-white mb-3">
            Six disciplines.<br />
            <span className="text-[#A3B18A]">One outcome.</span>
          </h2>
          <p className="font-inter text-sm text-white/40 mb-[4vw]">Creative. Targeting. CRO. Architecture. All of it. Under one roof.</p>
          <Services />
        </FlowSection>

        {/* SECTION 05 — AD TYPES */}
        <FlowSection aria-label="Campaign types" style={{ backgroundColor: '#1B2621', color: '#E9EDC9' }}>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">03 — Campaign Types</p>
          <hr className="my-[2vw] border-t border-[#2A3A30]" />
          <h2 className="font-georgia text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.0] text-[#E9EDC9] mb-[3vw]">
            Every objective.<br />
            <span className="text-[#A3B18A]">Mastered.</span>
          </h2>
          <AdTypes />
        </FlowSection>

        {/* SECTION 06 — INDUSTRIES */}
        <FlowSection aria-label="Industries" style={{ backgroundColor: '#121212', color: '#fff' }}>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">04 — Industries</p>
          <hr className="my-[2vw] border-t border-[#2A3A30]" />
          <h2 className="font-georgia text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.0] text-white mb-3">
            Ten industries.<br />
            <span className="text-[#A3B18A]">One standard.</span>
          </h2>
          <p className="font-inter text-sm text-white/40 mb-[4vw]">We don&apos;t learn on your budget. We&apos;ve already been here.</p>
          <Industries />
        </FlowSection>

        {/* SECTION 07 — RESULTS */}
        <FlowSection aria-label="The numbers" style={{ backgroundColor: '#1B2621', color: '#E9EDC9' }}>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">05 — The Numbers</p>
          <hr className="my-[2vw] border-t border-[#2A3A30]" />
          <h2 className="font-georgia text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.0] text-[#E9EDC9] mb-3">
            The numbers.<br />
            <span className="text-[#A3B18A]">Unedited.</span>
          </h2>
          <p className="font-inter text-sm text-[#E9EDC9]/40 mb-[4vw]">Real campaigns. Real budgets. Real returns.</p>
          <Results />
        </FlowSection>

        {/* SECTION 08 — PROCESS */}
        <FlowSection aria-label="The process" style={{ backgroundColor: '#121212', color: '#fff' }}>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">06 — The Process</p>
          <hr className="my-[2vw] border-t border-[#2A3A30]" />
          <h2 className="font-georgia text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.0] text-white mb-3">
            A system.<br />
            <span className="text-[#A3B18A]">Not a service.</span>
          </h2>
          <p className="font-inter text-sm text-white/40 mb-[4vw]">Five steps. No assumptions. No surprises.</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#A3B18A]/20 z-0" />
            {[
              { n: '01', title: 'Audit', body: 'We read your account before we touch it. Every leak, every wasted rupee, every missed signal — documented.' },
              { n: '02', title: 'Strategy', body: 'Full-funnel architecture. Audience maps. Creative briefs. Offer positioning. Everything locked in before launch.' },
              { n: '03', title: 'Creative', body: 'Ads built on hypotheses, not instincts. Video, static, carousel — tested against real audiences, not opinions.' },
              { n: '04', title: 'Launch', body: 'Structured. Multi-variable. The data speaks within 7–14 days. We know exactly what to do when it does.' },
              { n: '05', title: 'Scale', body: 'Winners get budget. Losers get cut. Margins protected. Results reported. No vanity. No noise.' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 p-6 border border-white/5 hover:border-[#A3B18A]/30 transition-colors duration-200 bg-[#121212]">
                <p className="font-georgia text-[clamp(2.5rem,4vw,3.5rem)] text-[#A3B18A] leading-none mb-4">{step.n}</p>
                <p className="font-inter text-sm font-semibold text-white uppercase tracking-wider mb-3">{step.title}</p>
                <p className="font-inter text-xs text-white/40 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* SECTION 09 — CASE STUDIES */}
        <FlowSection aria-label="Selected work" id="work" style={{ backgroundColor: '#1B2621', color: '#E9EDC9' }}>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">07 — Selected Work</p>
          <hr className="my-[2vw] border-t border-[#2A3A30]" />
          <h2 className="font-georgia text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.0] text-[#E9EDC9] mb-3">
            A few of the brands<br />
            <span className="text-[#A3B18A]">we&apos;ve built.</span>
          </h2>
          <p className="font-inter text-sm text-[#E9EDC9]/40 mb-[4vw]">Every number here is real. Every result is repeatable.</p>
          <CaseStudies />
        </FlowSection>

      </FlowArt>

      {/* SECTION 10 — CTA + FOOTER */}
      <CtaFooter />

    </main>
  )
}
