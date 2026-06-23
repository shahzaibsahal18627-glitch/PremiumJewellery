import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#080605] text-white/80">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-3">
        <div>
          <h2 className="text-xl font-serif uppercase tracking-[0.25em] text-champagne">Premium Jewellery</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            Discover luxurious jewelry crafted with exceptional care. Your timeless accessories start here.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/70 transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>support@premiumjewelry.com</li>
              <li>+92 310544XXXX</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Follow Us</p>
          <div className="mt-6 flex items-center gap-4 text-white/90">
            <a href="#" aria-label="Instagram" className="hover:text-gold">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gold">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-gold">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Premium Jewellery. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
