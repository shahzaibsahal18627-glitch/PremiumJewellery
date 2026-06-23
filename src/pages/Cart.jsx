import { useMemo } from 'react';
import { useCart } from '../context/CartContext.jsx';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  const itemCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);

  return (
    <main className="pb-20 pt-10 lg:pt-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-champagne/20 bg-[#0e0b08] p-10 shadow-luxury">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-champagne">Shopping Cart</p>
              <h1 className="mt-3 text-4xl font-serif text-ivory">Your cart summary</h1>
            </div>
            <button
              onClick={clearCart}
              className="rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-ivory/80 hover:bg-white/10"
            >
              Clear Cart
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="mt-12 rounded-[2rem] border border-dashed border-white/15 bg-[#0b0b0b] p-12 text-center text-ivory/70">
              Your cart is empty. Add your favorite jewelry pieces to get started.
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="rounded-[2rem] border border-white/10 bg-[#0d0b08] p-6 shadow-soft">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <img src={item.image} alt={item.name} className="h-28 w-28 rounded-3xl object-cover" />
                      <div className="flex-1 space-y-2">
                        <p className="text-lg font-semibold text-ivory">{item.name}</p>
                        <p className="text-sm text-ivory/65">{item.material}</p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-ivory/70">
                          <span>Quantity: {item.quantity}</span>
                          <span>Price: ${item.price}</span>
                          <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-full bg-white/5 px-4 py-2 text-sm text-ivory/80 hover:bg-white/10"
                      >
                        -
                      </button>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-full bg-white/5 px-4 py-2 text-sm text-ivory/80 hover:bg-white/10"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-full bg-white/5 px-4 py-2 text-sm text-ivory/80 hover:bg-red-400/20"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <aside className="rounded-[2rem] border border-champagne/20 bg-[#120f0c] p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne">Order Summary</p>
                <div className="mt-6 space-y-4 text-ivory/70">
                  <div className="flex items-center justify-between">
                    <span>Items</span>
                    <span>{itemCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-lg font-semibold text-ivory">Total</p>
                    <p className="text-3xl font-bold text-gold">${cartTotal.toFixed(2)}</p>
                  </div>
                </div>
                <button className="mt-8 w-full rounded-full bg-gradient-to-r from-champagne to-gold px-6 py-4 text-sm font-semibold text-espresso shadow-luxury hover:from-[#f0d7a0] hover:to-[#c89c2d]">
                  Proceed to Checkout
                </button>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
