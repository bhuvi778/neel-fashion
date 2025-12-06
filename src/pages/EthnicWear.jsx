import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EthnicWear = () => {
  const [sortBy, setSortBy] = useState('default');
  const [showAmount, setShowAmount] = useState('12');

  const ethnicProducts = [
    { 
      id: 1, 
      name: 'Traditional Silk Saree', 
      price: 129.0, 
      image: '/img/product/product-1.jpg', 
      label: 'new',
      category: 'Sarees'
    },
    { 
      id: 2, 
      name: 'Designer Salwar Kameez', 
      price: 89.0, 
      image: '/img/product/product-2.jpg',
      category: 'Salwar Suits'
    },
    { 
      id: 3, 
      name: 'Embroidered Lehenga Choli', 
      price: 199.0, 
      image: '/img/product/product-3.jpg', 
      label: 'sale',
      oldPrice: 249.0,
      category: 'Lehengas'
    },
    { 
      id: 4, 
      name: 'Cotton Kurti Set', 
      price: 49.0, 
      image: '/img/product/product-4.jpg',
      category: 'Kurtis & Tunics'
    },
    { 
      id: 5, 
      name: 'Banarasi Silk Saree', 
      price: 159.0, 
      image: '/img/product/product-5.jpg',
      label: 'new',
      category: 'Sarees'
    },
    { 
      id: 6, 
      name: 'Anarkali Suit', 
      price: 99.0, 
      oldPrice: 129.0, 
      image: '/img/product/product-6.jpg', 
      label: 'sale',
      category: 'Salwar Suits'
    },
    { 
      id: 7, 
      name: 'Bridal Lehenga', 
      price: 299.0, 
      image: '/img/product/product-7.jpg',
      category: 'Lehengas'
    },
    { 
      id: 8, 
      name: 'Designer Palazzo Set', 
      price: 79.0, 
      image: '/img/product/product-8.jpg',
      category: 'Kurtis & Tunics'
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-text hover:text-primary transition-all-3">Home</Link>
            <span className="text-gray-text">/</span>
            <Link to="/shop" className="text-gray-text hover:text-primary transition-all-3">Shop</Link>
            <span className="text-gray-text">/</span>
            <span className="text-dark">Ethnic Wear</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Ethnic Wear Collection
            </h1>
            <p className="text-lg text-gray-text">
              Discover the timeless elegance of traditional Indian attire. From vibrant sarees to stunning lehengas, 
              explore our handpicked collection of ethnic wear that celebrates heritage with modern style.
            </p>
          </div>
        </div>
      </section>

      {/* Ethnic Wear Section */}
      <section className="shop py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Categories</h5>
                <ul className="space-y-3">
                  <li>
                    <Link to="/sarees" className="text-gray-text hover:text-primary transition-all-3 flex items-center justify-between group">
                      <span>Sarees</span>
                      <span className="text-xs text-gray-400 group-hover:text-primary">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/salwar-suits" className="text-gray-text hover:text-primary transition-all-3 flex items-center justify-between group">
                      <span>Salwar Suits</span>
                      <span className="text-xs text-gray-400 group-hover:text-primary">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/lehengas" className="text-gray-text hover:text-primary transition-all-3 flex items-center justify-between group">
                      <span>Lehengas</span>
                      <span className="text-xs text-gray-400 group-hover:text-primary">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/kurtis" className="text-gray-text hover:text-primary transition-all-3 flex items-center justify-between group">
                      <span>Kurtis & Tunics</span>
                      <span className="text-xs text-gray-400 group-hover:text-primary">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/accessories" className="text-gray-text hover:text-primary transition-all-3 flex items-center justify-between group">
                      <span>Accessories</span>
                      <span className="text-xs text-gray-400 group-hover:text-primary">→</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Price Range</h5>
                <div className="space-y-3">
                  {[
                    { label: 'Under $50', value: '0-50' },
                    { label: '$50 - $100', value: '50-100' },
                    { label: '$100 - $200', value: '100-200' },
                    { label: '$200 & Above', value: '200-999' },
                  ].map((range, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="price" className="accent-primary" />
                      <span className="text-gray-text hover:text-primary">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fabric Filter */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Fabric</h5>
                <div className="space-y-2">
                  {['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Velvet', 'Banarasi'].map((fabric, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-gray-text hover:text-primary">{fabric}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Occasion Filter */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Occasion</h5>
                <div className="space-y-2">
                  {['Wedding', 'Party', 'Festive', 'Casual', 'Formal'].map((occasion, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-gray-text hover:text-primary">{occasion}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Colors</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'bg-red-500',
                    'bg-pink-500',
                    'bg-purple-500',
                    'bg-blue-500',
                    'bg-green-500',
                    'bg-yellow-500',
                    'bg-orange-500',
                    'bg-black',
                    'bg-white',
                    'bg-gray-400'
                  ].map((color, idx) => (
                    <button
                      key={idx}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-transparent hover:border-dark transition-all-3 ${
                        color === 'bg-white' ? 'border-gray-300' : ''
                      }`}
                      title={color.replace('bg-', '').replace('-500', '')}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Filter Bar */}
              <div className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-gray-border">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <span className="text-sm text-gray-text">
                    Showing <strong>{ethnicProducts.length}</strong> products
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
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
                      <option value="newest">Newest First</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
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
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {ethnicProducts.map((product) => (
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
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-semibold text-gray-text rounded">
                        {product.category}
                      </div>
                      <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <li>
                          <Link to={`/product-details/${product.id}`} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                            <span className="arrow_expand text-xs"></span>
                          </Link>
                        </li>
                        <li>
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                            <span className="icon_heart_alt text-xs"></span>
                          </button>
                        </li>
                        <li>
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all-3">
                            <span className="icon_bag_alt text-xs"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <h6 className="mb-2">
                        <Link to={`/product-details/${product.id}`} className="text-dark hover:text-primary transition-all-3">
                          {product.name}
                        </Link>
                      </h6>
                      <div className="rating mb-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star text-yellow-400"></i>
                        ))}
                      </div>
                      <div className="text-dark font-semibold">
                        $ {product.price.toFixed(2)}
                        {product.oldPrice && (
                          <span className="ml-2 text-gray-text line-through">$ {product.oldPrice.toFixed(2)}</span>
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

      {/* Info Banner */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary text-4xl mb-3">
                <i className="fa fa-truck"></i>
              </div>
              <h5 className="font-semibold text-dark mb-2">Free Shipping</h5>
              <p className="text-sm text-gray-text">On orders above $100</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-3">
                <i className="fa fa-shield"></i>
              </div>
              <h5 className="font-semibold text-dark mb-2">100% Authentic</h5>
              <p className="text-sm text-gray-text">Guaranteed genuine products</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-3">
                <i className="fa fa-refresh"></i>
              </div>
              <h5 className="font-semibold text-dark mb-2">Easy Returns</h5>
              <p className="text-sm text-gray-text">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EthnicWear;
