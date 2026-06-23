import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext.jsx';

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-black shadow-soft"
      >
        <FiShoppingCart size={18} />
        Cart ({cartItems.length})
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 w-[320px] rounded-3xl border border-white/10 bg-[#0d0d0d] p-5 shadow-soft"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Mini Cart</p>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-gold">
              <FiX />
            </button>
          </div>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-sm text-white/60">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="rounded-3xl border border-white/10 bg-[#111111] p-4">
                  <div className="flex items-start gap-3">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-white/60">${item.price}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
                        >
                          -
                        </button>
                        <span className="text-sm text-white/80">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-[#111111] p-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Total</p>
            <p className="mt-2 text-xl font-semibold text-gold">${cartTotal.toFixed(2)}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartDrawer;
