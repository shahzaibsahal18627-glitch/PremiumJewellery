import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-[2rem] border border-[#e4d8b7]/30 bg-ivory shadow-soft"
    >
      <Link to={`/product/${product.id}`} className="group block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-espresso/70">{product.category}</p>
            <h3 className="mt-3 text-xl font-serif text-espresso">{product.name}</h3>
          </div>
          <button
            onClick={() => addToWishlist(product)}
            className="rounded-full border border-espresso/10 bg-white/90 p-3 text-espresso transition hover:border-gold hover:text-gold"
            aria-label="Add to wishlist"
          >
            <FiHeart size={18} />
          </button>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-[#f6eedc] px-4 py-2 text-sm font-semibold text-espresso shadow-[0_8px_24px_rgba(212,175,55,0.08)]">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-champagne to-gold px-4 py-2 text-sm font-semibold text-espresso shadow-luxury hover:from-[#f6e3b7] hover:to-[#c89c2d]"
          >
            <FiShoppingCart /> Add
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
