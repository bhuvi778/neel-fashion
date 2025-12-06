import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModel from './components/SearchModel';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Shop from './pages/Shop';
import EthnicWear from './pages/EthnicWear';
import ProductDetails from './pages/ProductDetails';
import ShopCart from './pages/ShopCart';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Preloader />}
      <SearchModel active={searchActive} onClose={() => setSearchActive(false)} />
      
      <div className="min-h-screen flex flex-col">
        <Header 
          onSearchToggle={() => setSearchActive(true)}
          mobileMenuActive={mobileMenuActive}
          setMobileMenuActive={setMobileMenuActive}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onSearchToggle={() => setSearchActive(true)} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/ethnic-wear" element={<EthnicWear />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/shop-cart" element={<ShopCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
