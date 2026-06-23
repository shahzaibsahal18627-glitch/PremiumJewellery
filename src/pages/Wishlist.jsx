import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, moveToCart } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main className="pb-20 pt-10 lg:pt-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-champagne/20 bg-[#0e0b08] p-10 shadow-luxury">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-champagne">Wishlist</p>
              <h1 className="mt-3 text-4xl font-serif text-ivory">Saved favorites</h1>
            </div>
            <p className="text-sm text-ivory/70">A curated edit of pieces you adore.</p>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="mt-12 rounded-[2rem] border border-dashed border-white/15 bg-[#0b0b0b] p-12 text-center text-ivory/70">
              Your wishlist is empty. Add jewelry you love to save for later.
            </div>
          ) : (
            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {wishlistItems.map((product) => (
                <div key={product.id} className="rounded-[2rem] border border-champagne/15 bg-[#0d0b08] p-6 shadow-soft">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <img src={product.image} alt={product.name} className="h-28 w-28 rounded-[1.75rem] object-cover" />
                    <div className="flex-1 space-y-3">
                      <p className="text-lg font-semibold text-ivory">{product.name}</p>
                      <p className="text-sm text-ivory/65">{product.material}</p>
                      <p className="text-sm font-semibold text-gold">${product.price}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={() => moveToCart(product, addToCart)}
                      className="rounded-full bg-gradient-to-r from-champagne to-gold px-5 py-3 text-sm font-semibold text-espresso shadow-luxury hover:from-[#f0d7a0] hover:to-[#c89c2d]"
                    >
                      Move to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-ivory hover:bg-white/10"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
