import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="pb-20 pt-10 lg:pt-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-[2.5rem] border border-champagne/20 bg-[#0e0b08] p-10 shadow-luxury">
              <p className="text-sm uppercase tracking-[0.35em] text-champagne">Contact</p>
              <h1 className="mt-4 text-5xl font-serif text-ivory">Connect with Premium Jewellery styling.</h1>
              <p className="mt-5 max-w-xl text-sm leading-8 text-ivory/70">
                Share your jewelry questions, styling requests, or custom order ideas and our concierge team will respond quickly.
              </p>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-champagne/15 bg-[#120f0c] p-8 shadow-soft">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0f0d0b] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-champagne/80">Call</p>
                <p className="mt-2 text-base text-ivory">+92 310544XXXX</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0f0d0b] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-champagne/80">Email</p>
                <p className="mt-2 text-base text-ivory">support@premiumjewelry.com</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0f0d0b] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-champagne/80">Address</p>
                <p className="mt-2 text-base text-ivory">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-champagne/20 bg-[#0e0b08] p-8 shadow-luxury">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm uppercase tracking-[0.25em] text-champagne/90">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="mt-3 w-full rounded-[1.5rem] border border-[#3f3424] bg-[#140f0a] px-5 py-4 text-sm text-ivory outline-none focus:border-gold focus:ring-2 focus:ring-champagne/20"
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-[0.25em] text-champagne/90">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="mt-3 w-full rounded-[1.5rem] border border-[#3f3424] bg-[#140f0a] px-5 py-4 text-sm text-ivory outline-none focus:border-gold focus:ring-2 focus:ring-champagne/20"
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-[0.25em] text-champagne/90">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-3 w-full rounded-[1.5rem] border border-[#3f3424] bg-[#140f0a] px-5 py-4 text-sm text-ivory outline-none focus:border-gold focus:ring-2 focus:ring-champagne/20"
                />
                {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm uppercase tracking-[0.25em] text-champagne/90">Message</label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="mt-3 w-full rounded-[1.5rem] border border-[#3f3424] bg-[#140f0a] px-5 py-4 text-sm text-ivory outline-none focus:border-gold focus:ring-2 focus:ring-champagne/20"
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button className="w-full rounded-full bg-gradient-to-r from-champagne to-gold px-6 py-4 text-sm font-semibold text-espresso shadow-luxury hover:from-[#f0d7a0] hover:to-[#cba82b]">
                Send Message
              </button>
              {submitted && <p className="text-sm text-green-300">Thank you! Your message has been sent.</p>}
            </form>
          </div>
        </div>

        <div className="mt-16 rounded-[2.5rem] border border-champagne/20 bg-[#0f0c09] p-8 shadow-luxury">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#110c08] p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-champagne">Location</p>
              <h2 className="mt-3 text-3xl font-serif text-ivory">Visit our curated showroom</h2>
            </div>
            <div className="aspect-[16/7] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#18110d] via-[#0f0b08] to-[#0a0604] p-8">
              <p className="text-center text-sm uppercase tracking-[0.35em] text-white/40">Google Maps Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
