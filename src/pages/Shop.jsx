import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [sortBy, setSortBy] = useState('default');
  const [showAmount, setShowAmount] = useState('12');

  const allProducts = [
    { id: 1, name: 'Buttons tweed blazer', price: 59.0, image: '/img/product/product-1.jpg', label: 'new' },
    { id: 2, name: 'Flowy striped skirt', price: 49.0, image: '/img/product/product-2.jpg' },
    { id: 3, name: 'Cotton blouse', price: 59.0, image: '/img/product/product-3.jpg', label: 'sale' },
    { id: 4, name: 'Slim striped dress', price: 59.0, image: '/img/product/product-4.jpg' },
    { id: 5, name: 'Elegant evening gown', price: 89.0, image: '/img/product/product-5.jpg' },
    { id: 6, name: 'Tropical Kimono', price: 49.0, oldPrice: 59.0, image: '/img/product/product-6.jpg', label: 'sale' },
    { id: 7, name: 'Designer handbag', price: 79.0, image: '/img/product/product-7.jpg' },
    { id: 8, name: 'Stylish trench coat', price: 99.0, oldPrice: 119.0, image: '/img/product/product-8.jpg', label: 'sale' },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-text hover:text-primary transition-all-3">Home</Link>
            <span className="text-gray-text">/</span>
            <span className="text-dark">Shop</span>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <section className="shop py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Categories</h5>
                <ul className="space-y-3">
                  {['Ethnic Wear', 'Sarees', 'Salwar Suits', 'Lehengas', 'Kurtis & Tunics', 'Accessories'].map((cat, idx) => (
                    <li key={idx}>
                      <Link to="#" className="text-gray-text hover:text-primary transition-all-3">
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Price</h5>
                <div className="space-y-2">
                  <input type="range" min="0" max="1000" className="w-full" />
                  <div className="flex justify-between text-sm text-gray-text">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Size</h5>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, idx) => (
                    <button
                      key={idx}
                      className="w-12 h-12 border border-gray-border hover:border-primary hover:text-primary transition-all-3"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Colors</h5>
                <div className="flex flex-wrap gap-2">
                  {['bg-black', 'bg-gray-400', 'bg-blue-500', 'bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, idx) => (
                    <button
                      key={idx}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-transparent hover:border-dark transition-all-3`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h5 className="text-dark font-semibold mb-4 uppercase">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {['Sarees', 'Suits', 'Lehengas', 'Anarkali', 'Palazzo', 'Ethnic'].map((tag, idx) => (
                    <Link
                      key={idx}
                      to="#"
                      className="px-4 py-2 border border-gray-border text-sm text-gray-text hover:border-primary hover:text-primary transition-all-3"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Filter Bar */}
              <div className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-gray-border">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <span className="text-sm text-gray-text">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-border focus:border-primary focus:outline-none"
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-text">Show:</span>
                  <select 
                    value={showAmount}
                    onChange={(e) => setShowAmount(e.target.value)}
                    className="px-4 py-2 border border-gray-border focus:border-primary focus:outline-none"
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {products.map((product) => (
                  <div key={product.id} className="product-item group">
                    <div className="relative overflow-hidden mb-4 bg-cover-center h-[400px]"
                      style={{ backgroundImage: `url('${product.image}')` }}>
                      {product.label && (
                        <div className={`absolute top-4 left-4 ${
                          product.label === 'new' ? 'label-new' : 
                          product.label === 'sale' ? 'label-sale' : 
                          'label-stockout'
                        }`}>
                          {product.label}
                        </div>
                      )}
                      <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <li>
                          <Link to="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                            <span className="arrow_expand text-xs"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                            <span className="icon_heart_alt text-xs"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                            <span className="icon_bag_alt text-xs"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <h6 className="mb-2">
                        <Link to="/product-details" className="text-dark hover:text-primary transition-all-3">
                          {product.name}
                        </Link>
                      </h6>
                      <div className="rating mb-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star text-yellow-400"></i>
                        ))}
                      </div>
                      <div className="text-dark font-semibold">
                        $ {product.price.toFixed(1)}
                        {product.oldPrice && (
                          <span className="ml-2 text-gray-text line-through">$ {product.oldPrice.toFixed(1)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <ul className="flex gap-2">
                  {[1, 2, 3].map((page) => (
                    <li key={page}>
                      <Link
                        to="#"
                        className={`w-10 h-10 flex items-center justify-center border border-gray-border hover:bg-primary hover:text-white hover:border-primary transition-all-3 ${
                          page === 1 ? 'bg-primary text-white border-primary' : 'text-dark'
                        }`}
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
