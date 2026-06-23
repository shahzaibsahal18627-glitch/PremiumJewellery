import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter basename="/Premium-Jewellery">
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </PageWrapper>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
