import { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import products from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => products.find((item) => item.id === id), [id]);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-champagne">Product Not Found</p>
        <h1 className="mt-4 text-3xl font-serif text-ivory">The item you were looking for does not exist.</h1>
        <button
          onClick={() => navigate('/shop')}
          className="mt-8 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-espresso hover:bg-[#b18f2e]"
        >
          Return to Shop
        </button>
      </main>
    );
  }

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <main className="pb-20 pt-10 lg:pt-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-champagne/20 bg-[#0e0b08] p-10 shadow-luxury">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#110c08]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[520px] w-full rounded-[2.25rem] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.1),_transparent_30%)]" />
              </div>
              <div className="space-y-6 rounded-[2.25rem] border border-champagne/15 bg-[#120f0c] p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne/80">Premium Jewellery Signature</p>
                <h1 className="text-4xl font-serif text-ivory">{product.name}</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-3xl font-semibold text-gold">${product.price}</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm uppercase tracking-[0.35em] text-ivory">{product.rating} ⭐</span>
                </div>
                <p className="text-sm leading-7 text-ivory/70">{product.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-[#0d0b08] p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-champagne/70">Material</p>
                    <p className="mt-2 text-base text-ivory">{product.material}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#0d0b08] p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-champagne/70">Weight</p>
                    <p className="mt-2 text-base text-ivory">{product.weight}</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-[2rem] border border-champagne/15 bg-[#120f0c] p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne">Purchase Options</p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="rounded-full bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold text-ivory">{quantity}</span>
                    <button
                      onClick={() => setQuantity((current) => Math.min(current + 1, product.stock))}
                      className="rounded-full bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="w-full rounded-full bg-gradient-to-r from-champagne to-gold px-5 py-4 text-sm font-semibold text-espresso shadow-luxury hover:from-[#f0d7a0] hover:to-[#c89c2d]"
                  >
                    <FiShoppingCart className="mr-2 inline-block" /> Add to Cart
                  </button>
                  <button
                    onClick={() => addToWishlist(product)}
                    className="w-full rounded-full border border-champagne/20 bg-white/5 px-5 py-4 text-sm font-semibold text-ivory hover:border-gold hover:text-gold"
                  >
                    <FiHeart className="mr-2 inline-block" /> Add to Wishlist
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-champagne/15 bg-[#120f0c] p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne">Related Products</p>
                <div className="mt-6 space-y-4">
                  {relatedProducts.map((related) => (
                    <Link
                      key={related.id}
                      to={`/product/${related.id}`}
                      className="block rounded-3xl border border-white/10 bg-[#0d0b08] p-4 transition hover:border-gold"
                    >
                      <p className="font-semibold text-ivory">{related.name}</p>
                      <p className="mt-1 text-sm text-white/60">${related.price}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-champagne/15 bg-[#120f0c] p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-champagne">Product Details</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-ivory">Description</h2>
                <p className="mt-4 text-sm leading-7 text-ivory/70">{product.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-ivory">Care & Craftsmanship</h2>
                <p className="mt-4 text-sm leading-7 text-ivory/70">
                  Each Premium Jewellery piece is curated for luminous shine, wearable comfort, and long-lasting beauty.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-champagne/15 bg-[#120f0c] p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-champagne">Customer Reviews</p>
            <div className="mt-6 space-y-5">
              {[1, 2, 3].map((review) => (
                <div key={review} className="rounded-3xl border border-white/10 bg-[#0d0b08] p-6">
                  <p className="text-sm font-semibold text-ivory">Customer {review}</p>
                  <p className="mt-2 text-sm text-ivory/70">Absolutely breathtaking quality. The piece feels luxurious and fits perfectly.</p>
                  <p className="mt-3 text-sm text-gold">5.0 ⭐</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
