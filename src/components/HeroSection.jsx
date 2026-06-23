import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-obsidian via-espresso to-espresso text-white">
    <div className="absolute inset-0 opacity-30">
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
        <defs>
          <filter id="silk-wave">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="4" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" />
          </filter>
        </defs>
        <path d="M0,360 C260,310 420,450 720,380 C980,320 1140,440 1200,380 L1200,800 L0,800 Z" fill="#d4af37" fillOpacity="0.08" filter="url(#silk-wave)" />
        <path d="M0,410 Q320,340 640,420 T1200,390 L1200,800 L0,800 Z" fill="#b85c31" fillOpacity="0.12" filter="url(#silk-wave)" />
      </svg>
    </div>

    <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-champagne/20 bg-terracotta/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-champagne">
          <span className="block h-2 w-2 rounded-full bg-champagne" />
          Signature Collection
        </div>
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-champagne/90">Premium Jewellery</p>
          <h1 className="max-w-3xl text-5xl font-serif uppercase leading-tight tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            Unleash the <span className="italic text-champagne">shining beauty</span> of satin-lit jewelry.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-ivory/70 sm:text-lg">
            Discover bold silhouettes, artisanal finishes, and fluid luxury crafted to elevate every modern moment with warmth and elegance.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-champagne to-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-espresso shadow-luxury hover:shadow-luxury transition"
          >
            Explore collection
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full border border-champagne/40 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-champagne transition hover:bg-champagne/15"
          >
            Discover story
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative overflow-hidden rounded-[2.5rem] border border-champagne/15 bg-[#100a07]/80 p-4 shadow-luxury">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(232,212,168,0.12),_transparent_30%)]" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0d0b]">
          <img
            src={`${import.meta.env.BASE_URL}assets/hero-banner.jpg`}
            alt="Luxury jewelry showcase"
            className="h-[520px] w-full object-cover object-center"
          />
          <div className="absolute left-6 top-6 rounded-full border border-champagne/30 bg-[#ffffff0f] px-4 py-2 text-xs uppercase tracking-[0.35em] text-champagne/90">
            New Arrivals
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0907] via-[#0b0907]/80 to-transparent" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
