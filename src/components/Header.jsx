import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearchToggle, mobileMenuActive, setMobileMenuActive }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      {/* Offcanvas Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[9998] transition-all duration-300 ${
          mobileMenuActive ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuActive(false)}
      ></div>

      {/* Offcanvas Menu */}
      <div className={`fixed top-0 right-0 w-[300px] h-full bg-white z-[9999] transform transition-transform duration-300 ${
        mobileMenuActive ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div 
            className="text-3xl cursor-pointer text-right mb-6 hover:text-primary transition-all-3"
            onClick={() => setMobileMenuActive(false)}
          >
            +
          </div>
          
          <ul className="flex gap-4 mb-6">
            <li>
              <span className="icon_search cursor-pointer hover:text-primary transition-all-3" onClick={onSearchToggle}></span>
            </li>
            <li>
              <Link to="#" className="relative hover:text-primary transition-all-3">
                <span className="icon_heart_alt"></span>
                <div className="absolute -top-2 -right-2 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</div>
              </Link>
            </li>
            <li>
              <Link to="/shop-cart" className="relative hover:text-primary transition-all-3">
                <span className="icon_bag_alt"></span>
                <div className="absolute -top-2 -right-2 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</div>
              </Link>
            </li>
          </ul>

          <div className="mb-6">
            <Link to="/">
              <img src="/img/logo.png" alt="Logo" className="h-8" />
            </Link>
          </div>

          <nav className="mb-6">
            <ul className="space-y-4">
              <li><Link to="/" className="block py-2 hover:text-primary transition-all-3">Home</Link></li>
              <li><Link to="/shop" className="block py-2 hover:text-primary transition-all-3">Shop</Link></li>
              <li><Link to="/ethnic-wear" className="block py-2 hover:text-primary transition-all-3">Ethnic Wear</Link></li>
              <li><Link to="/sarees" className="block py-2 hover:text-primary transition-all-3">Sarees</Link></li>
              <li><Link to="/salwar-suits" className="block py-2 hover:text-primary transition-all-3">Suits</Link></li>
              <li><Link to="/blog" className="block py-2 hover:text-primary transition-all-3">Blog</Link></li>
              <li><Link to="/contact" className="block py-2 hover:text-primary transition-all-3">Contact</Link></li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <Link to="#" className="text-sm hover:text-primary transition-all-3">Login</Link>
            <Link to="#" className="text-sm hover:text-primary transition-all-3">Register</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header bg-white shadow-sm">
        <div className="container-fluid px-4 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="w-1/4 lg:w-1/5">
              <Link to="/">
                <img src="/img/logo.png" alt="Logo" className="h-8" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex w-1/2 justify-center">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link to="/" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Shop All
                  </Link>
                </li>
                <li>
                  <Link to="/ethnic-wear" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Ethnic Wear
                  </Link>
                </li>
                <li>
                  <Link to="/sarees" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Sarees
                  </Link>
                </li>
                <li>
                  <Link to="/salwar-suits" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Suits
                  </Link>
                </li>
                <li className="relative group">
                  <Link to="#" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Pages
                  </Link>
                  <ul className="dropdown-menu min-w-[200px] p-4">
                    <li className="mb-2">
                      <Link to="/product-details" className="block text-sm text-gray-text hover:text-primary transition-all-3">
                        Product Details
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/shop-cart" className="block text-sm text-gray-text hover:text-primary transition-all-3">
                        Shop Cart
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/checkout" className="block text-sm text-gray-text hover:text-primary transition-all-3">
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="block text-sm text-gray-text hover:text-primary transition-all-3">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/blog" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm font-semibold text-dark hover:text-primary transition-all-3 uppercase">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Section */}
            <div className="flex items-center justify-end w-1/4 lg:w-1/4">
              <div className="hidden lg:flex items-center gap-4 mr-6">
                <Link to="#" className="text-sm hover:text-primary transition-all-3">Login</Link>
                <Link to="#" className="text-sm hover:text-primary transition-all-3">Register</Link>
              </div>
              
              <ul className="hidden lg:flex items-center gap-4">
                <li>
                  <span className="icon_search cursor-pointer hover:text-primary transition-all-3" onClick={onSearchToggle}></span>
                </li>
                <li>
                  <Link to="#" className="relative hover:text-primary transition-all-3">
                    <span className="icon_heart_alt"></span>
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</div>
                  </Link>
                </li>
                <li>
                  <Link to="/shop-cart" className="relative hover:text-primary transition-all-3">
                    <span className="icon_bag_alt"></span>
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</div>
                  </Link>
                </li>
              </ul>

              {/* Mobile Menu Toggle */}
              <div 
                className="lg:hidden cursor-pointer text-xl"
                onClick={() => setMobileMenuActive(true)}
              >
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
