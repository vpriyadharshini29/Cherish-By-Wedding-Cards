import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WeddingCards from './pages/WeddingCards';
import Wishlist from './pages/Wishlist';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import HowToOrder from './pages/HowToOrder';
import HinduWeddingCards from './pages/HinduWeddingCards';

import SignUp from './pages/Signup';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Description from './pages/Description';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Footer from './components/Footer';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext'; // ✅ Add this

function App() {
  return (
    <WishlistProvider>
      <CartProvider> {/* ✅ Wrap everything inside CartProvider */}
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/weddingcards" element={<WeddingCards />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/search" element={<Search />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/howtoorder" element={<HowToOrder />} />
            <Route path="/hinduweddingcards" element={<HinduWeddingCards />} />
            
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/description/:id" element={<Description />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
