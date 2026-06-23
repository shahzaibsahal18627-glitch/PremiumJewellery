import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080605]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-serif uppercase tracking-[0.35em] text-champagne">
          Premium Jewellery
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-[0.14em] transition ${
                  isActive ? 'text-gold' : 'text-white/80 hover:text-gold'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/wishlist" className="relative text-white/90 hover:text-gold">
            <FiHeart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold text-xs font-semibold text-black">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative text-white/90 hover:text-gold">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold text-xs font-semibold text-black">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button className="md:hidden text-white/90" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-white/10 bg-[#050505] px-4 pb-5"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-base font-medium uppercase tracking-[0.14em] text-white/80 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-6 pt-2">
              <Link to="/wishlist" className="flex items-center gap-2 text-white/80 hover:text-gold" onClick={() => setOpen(false)}>
                <FiHeart size={20} /> Wishlist
              </Link>
              <Link to="/cart" className="flex items-center gap-2 text-white/80 hover:text-gold" onClick={() => setOpen(false)}>
                <FiShoppingCart size={20} /> Cart
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
