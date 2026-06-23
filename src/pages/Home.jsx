import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import ProductCard from '../components/ProductCard.jsx';
import products from '../data/products.js';

const categories = [
  { label: 'Rings', description: 'Polished signature rings that capture light and character.' },
  { label: 'Necklaces', description: 'Statement chains crafted for luxurious layering.' },
  { label: 'Earrings', description: 'Refined silhouettes with luminous finishes.' },
  { label: 'Bracelets', description: 'Elegant wrist pieces designed for modern glamour.' },
];

const testimonials = [
  { name: 'Sophia James', quote: 'Sapphire+ created a stunning piece that felt bespoke from the first touch.', rating: 5 },
  { name: 'Mia Carter', quote: 'Every detail felt premium, and the packaging was absolutely exquisite.', rating: 5 },
  { name: 'Emma Blake', quote: 'A timeless collection with texture, warmth, and elegant presence.', rating: 4.9 },
];

const Home = () => {
  const featured = products.slice(0, 8);

  return (
    <main className="space-y-20 pb-20 pt-10 lg:pt-16">
      <HeroSection />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] border border-champagne/20 bg-gradient-to-br from-[#130f0c] via-espresso/90 to-[#140f0b] p-10 shadow-luxury"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-champagne">Bespoke Categories</p>
            <h2 className="mt-4 text-4xl font-serif text-ivory sm:text-5xl">Curated pieces for every mood.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-ivory/75">
              Dive into rich silhouettes, warm gold accents, and artisan stories shaped in luxuriously soft textures.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <div key={category.label} className="rounded-[1.75rem] border border-white/10 bg-[#0f0d0b] p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-champagne/70">{category.label}</p>
                  <p className="mt-3 text-sm leading-7 text-ivory/75">{category.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[2rem] border border-champagne/20 bg-terracotta/20 p-10 shadow-luxury"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-ivory/80">Dare to Dazzle</p>
              <h3 className="mt-4 text-3xl font-serif text-ivory">A rich canvas for bold jewelry.</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/75">
                Warm terracotta tones and satin textures celebrate jewelry that moves like silk and shines like gold.
              </p>
              <div className="mt-8 grid gap-4">
                {['Luminous finishes', 'Crafted comfort', 'Modern heritage'].map((item) => (
                  <div key={item} className="rounded-3xl border border-champagne/15 bg-[#120d0a] px-5 py-4 text-sm text-ivory/80">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-espresso p-10 shadow-luxury"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(232,212,168,0.14),_transparent_35%)]" />
              <div className="relative space-y-5 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne/80">Signature Edit</p>
                <h3 className="text-3xl font-serif">Satin fusion pieces.</h3>
                <p className="text-sm leading-7 text-white/70">
                  Bold rings and earrings designed for statement moments in a soft, luxurious rhythm.
                </p>
                <div className="rounded-[1.75rem] border border-white/10 bg-[#0b0806] p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-champagne/80">Spotlight</p>
                  <p className="mt-3 text-lg font-semibold text-ivory">Sapphire Halo Ring</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-champagne">New Arrivals</p>
            <h2 className="mt-3 text-3xl font-serif text-ivory sm:text-4xl">Premium pieces with crisp contrast.</h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full border border-champagne bg-champagne/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-champagne transition hover:bg-champagne/20"
          >
            View full edit
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,92,49,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.12),_transparent_28%)]" />
        <div className="relative rounded-[2.5rem] border border-champagne/20 bg-gradient-to-br from-terracotta/25 via-espresso/90 to-espresso p-10 shadow-luxury">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-champagne">Dare to Dazzle</p>
              <h2 className="text-4xl font-serif text-ivory">Sculpted luxury with silky depth.</h2>
              <p className="max-w-xl text-sm leading-8 text-ivory/80">
                Our latest range blends rich terracotta tones, satin drapery, and glowing metal detail for jewelry that feels as refined as it looks.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Artisan craftsmanship', 'Ethically sourced stones', 'Premium presentation', 'Seamless service'].map((item) => (
                <div key={item} className="rounded-[2rem] border border-champagne/25 bg-[#12100d]/85 p-6 text-white/80">
                  <p className="text-base font-serif text-champagne">{item}</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">Designed with texture, balance, and understated allure.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">Testimonials</p>
        <h2 className="mt-4 text-3xl font-serif text-white sm:text-4xl">What our clients say</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 shadow-soft">
              <div className="flex items-center gap-3 text-gold">
                <span className="text-3xl">“</span>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">Verified buyer</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/70">{testimonial.quote}</p>
              <p className="mt-6 text-sm font-semibold text-white">Rating: {testimonial.rating} / 5</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
