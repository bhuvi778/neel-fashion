import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SalwarSuits = () => {
  const [sortBy, setSortBy] = useState('default');
  const [showAmount, setShowAmount] = useState('12');

  const salwarProducts = [
    { 
      id: 1, 
      name: 'Designer Salwar Kameez', 
      price: 89.0, 
      image: '/img/product/product-2.jpg',
      type: 'Anarkali'
    },
    { 
      id: 2, 
      name: 'Anarkali Suit', 
      price: 99.0, 
      oldPrice: 129.0, 
      image: '/img/product/product-6.jpg', 
      label: 'sale',
      type: 'Anarkali'
    },
    { 
      id: 3, 
      name: 'Punjabi Suit', 
      price: 79.0, 
      image: '/img/product/product-1.jpg',
      label: 'new',
      type: 'Punjabi'
    },
    { 
      id: 4, 
      name: 'Palazzo Suit Set', 
      price: 85.0, 
      image: '/img/product/product-3.jpg',
      type: 'Palazzo'
    },
    { 
      id: 5, 
      name: 'Churidar Suit', 
      price: 75.0, 
      image: '/img/product/product-4.jpg',
      type: 'Churidar'
    },
    { 
      id: 6, 
      name: 'Straight Cut Suit', 
      price: 69.0, 
      oldPrice: 89.0,
      image: '/img/product/product-5.jpg', 
      label: 'sale',
      type: 'Straight'
    },
    { 
      id: 7, 
      name: 'Sharara Suit', 
      price: 109.0, 
      image: '/img/product/product-7.jpg',
      label: 'new',
      type: 'Sharara'
    },
    { 
      id: 8, 
      name: 'Pakistani Suit', 
      price: 95.0, 
      image: '/img/product/product-8.jpg',
      type: 'Pakistani'
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
            <Link to="/ethnic-wear" className="text-gray-text hover:text-primary transition-all-3">Ethnic Wear</Link>
            <span className="text-gray-text">/</span>
            <span className="text-dark">Salwar Suits</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Salwar Suits Collection
            </h1>
            <p className="text-lg text-gray-text">
              Discover our beautiful range of salwar suits, from traditional Anarkalis to modern palazzo sets. 
              Perfect blend of comfort and style for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Salwar Suits Section */}
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
                    <Link to="/ethnic-wear" className="text-gray-text hover:text-primary transition-all-3 flex items-center justify-between group">
                      <span>All Ethnic Wear</span>
                      <span className="text-xs text-gray-400 group-hover:text-primary">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sarees" className="text-gray-text hover:text-primary transition-all-3 flex items-center justify-between group">
                      <span>Sarees</span>
                      <span className="text-xs text-gray-400 group-hover:text-primary">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/salwar-suits" className="text-primary font-semibold flex items-center justify-between">
                      <span>Salwar Suits</span>
                      <span className="text-xs">●</span>
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
                </ul>
              </div>

              {/* Suit Types */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Suit Types</h5>
                <div className="space-y-2">
                  {['Anarkali Suits', 'Punjabi Suits', 'Palazzo Suits', 'Churidar Suits', 'Straight Suits', 'Sharara Suits', 'Pakistani Suits'].map((type, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-gray-text hover:text-primary">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h5 className="text-dark font-semibold mb-4 uppercase">Price Range</h5>
                <div className="space-y-3">
                  {[
                    { label: 'Under $75', value: '0-75' },
                    { label: '$75 - $100', value: '75-100' },
                    { label: '$100 - $150', value: '100-150' },
                    { label: '$150 & Above', value: '150-999' },
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
                  {['Cotton', 'Georgette', 'Silk', 'Chiffon', 'Chanderi', 'Crepe'].map((fabric, idx) => (
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
                  {['Party', 'Wedding', 'Festive', 'Casual', 'Formal'].map((occasion, idx) => (
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
                  ].map((color, idx) => (
                    <button
                      key={idx}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-transparent hover:border-dark transition-all-3`}
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
                    Showing <strong>{salwarProducts.length}</strong> salwar suits
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
                {salwarProducts.map((product) => (
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
                        {product.type}
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
    </>
  );
};

export default SalwarSuits;
