const About = () => (
  <main className="pb-20 pt-10 lg:pt-16">
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-champagne">About Premium Jewellery</p>
          <h1 className="text-5xl font-serif text-ivory">A refined story of satin-lit luxury</h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-ivory/75">
            Premium Jewellery brings together deep textures, warm gold accents, and premium craftsmanship to create jewelry that feels as rich as it looks.
          </p>
          <div className="rounded-[2rem] border border-champagne/20 bg-[#120f0b] p-8 shadow-luxury">
            <p className="text-sm uppercase tracking-[0.35em] text-champagne/90">Our signature promise</p>
            <p className="mt-4 text-sm leading-7 text-ivory/70">
              Every collection blends artful materials and polished design with a modern edge for unforgettable heirloom moments.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-champagne/20 bg-[#0e0b08] p-1 shadow-luxury">
          <img
            src={`${import.meta.env.BASE_URL}assets/p5.jpg`}
            alt="Luxury jewelry banner"
            className="h-96 w-full rounded-[2.25rem] object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,_rgba(232,212,168,0.14),_transparent_26%)]" />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-champagne/20 bg-[#120f0c] p-8 shadow-soft">
          <h2 className="text-2xl font-serif text-champagne">Brand Story</h2>
          <p className="mt-4 text-sm leading-8 text-ivory/75">
            Each piece is designed to capture the glow of silk and the warmth of burnished gold, creating jewelry with modern soul.
          </p>
        </div>
        <div className="rounded-[2rem] border border-champagne/20 bg-[#120f0c] p-8 shadow-soft">
          <h2 className="text-2xl font-serif text-champagne">Mission & Vision</h2>
          <p className="mt-4 text-sm leading-8 text-ivory/75">
            We deliver unforgettable luxury through elevated craftsmanship, thoughtful design, and radiant customer experiences.
          </p>
        </div>
        <div className="rounded-[2rem] border border-champagne/20 bg-[#120f0c] p-8 shadow-soft">
          <h2 className="text-2xl font-serif text-champagne">Our Team</h2>
          <p className="mt-4 text-sm leading-8 text-ivory/75">
            A curated team of artisans, designers, and style experts dedicated to premium quality and graceful presentation.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default About;
