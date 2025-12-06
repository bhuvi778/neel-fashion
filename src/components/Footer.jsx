import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* About Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Link to="/">
                <img src="/img/logo.png" alt="Logo" className="h-8" />
              </Link>
            </div>
            <p className="text-gray-text mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.
            </p>
            <div className="flex gap-2 mb-0">
              <Link to="#" className="hover:opacity-80 transition-all-3">
                <img src="/img/payment/payment-1.png" alt="Payment" className="h-6" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-all-3">
                <img src="/img/payment/payment-2.png" alt="Payment" className="h-6" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-all-3">
                <img src="/img/payment/payment-3.png" alt="Payment" className="h-6" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-all-3">
                <img src="/img/payment/payment-4.png" alt="Payment" className="h-6" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-all-3">
                <img src="/img/payment/payment-5.png" alt="Payment" className="h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h6 className="text-dark font-semibold mb-6 uppercase">Quick Links</h6>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-text hover:text-primary transition-all-3">About</Link></li>
              <li><Link to="/blog" className="text-gray-text hover:text-primary transition-all-3">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-text hover:text-primary transition-all-3">Contact</Link></li>
              <li><Link to="#" className="text-gray-text hover:text-primary transition-all-3">FAQ</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="lg:col-span-2">
            <h6 className="text-dark font-semibold mb-6 uppercase">Account</h6>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-text hover:text-primary transition-all-3">My Account</Link></li>
              <li><Link to="#" className="text-gray-text hover:text-primary transition-all-3">Orders Tracking</Link></li>
              <li><Link to="/checkout" className="text-gray-text hover:text-primary transition-all-3">Checkout</Link></li>
              <li><Link to="#" className="text-gray-text hover:text-primary transition-all-3">Wishlist</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h6 className="text-dark font-semibold mb-6 uppercase">Newsletter</h6>
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="site-btn"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex gap-4">
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                <i className="fab fa-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-text text-sm">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <i className="fa fa-heart text-primary"></i> by{' '}
            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
