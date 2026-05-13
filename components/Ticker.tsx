"use client";

const brands = [
  "boAt", "AstroTalk", "Rangat Jaipur", "Tichu", "Amthor International",
  "Umaid Palace", "BeatO Healthcare", "Mufasa Man", "The Sverve"
];

export default function Ticker() {
  const items = [...brands, ...brands]; // duplicate for seamless loop

  return (
    <div className="w-full bg-[#03254E] border-y border-[#545677]/15 py-5 overflow-hidden">
      <div className="flex items-center gap-0">
        <p className="font-inter text-xs text-[#E2E8F4]/40 uppercase tracking-[0.15em] whitespace-nowrap px-6 shrink-0">
          Some of the brands we&apos;ve scaled —
        </p>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-ticker whitespace-nowrap">
            {items.map((brand, i) => (
              <span key={i} className="font-georgia text-[#E2E8F4] text-sm inline-flex items-center gap-4 px-4">
                {brand}
                <span className="text-[#545677] text-xs">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
