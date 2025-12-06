import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ onSearchToggle }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const allProducts = [
    { id: 1, name: 'Buttons tweed blazer', price: 59.0, image: '/img/product/product-1.jpg', category: 'outerwear', label: 'new' },
    { id: 2, name: 'Flowy striped skirt', price: 49.0, image: '/img/product/product-2.jpg', category: 'bottoms' },
    { id: 3, name: 'Cotton blouse', price: 59.0, image: '/img/product/product-3.jpg', category: 'tops', label: 'sale' },
    { id: 4, name: 'Slim striped dress', price: 59.0, image: '/img/product/product-4.jpg', category: 'dresses' },
    { id: 5, name: 'Elegant evening gown', price: 89.0, image: '/img/product/product-5.jpg', category: 'dresses' },
    { id: 6, name: 'Tropical Kimono', price: 49.0, image: '/img/product/product-6.jpg', category: 'outerwear' },
    { id: 7, name: 'Designer handbag', price: 79.0, image: '/img/product/product-7.jpg', category: 'bags' },
    { id: 8, name: 'Stylish trench coat', price: 99.0, image: '/img/product/product-8.jpg', category: 'outerwear' },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Categories Section */}
      <section className="categories">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Large Category */}
            <div className="categories__item categories__large__item relative h-[638px] bg-cover-center flex items-center overflow-hidden pl-[70px] p-0"
              style={{ backgroundImage: "url('/img/categories/category-1.jpg')" }}>
              <div className="categories__text max-w-[480px]">
                <h1 className="font-cookie text-dark text-[48px] leading-[1.2] mb-[5px]">Women's fashion</h1>
                <p className="text-dark mb-[15px] leading-relaxed">
                  Discover exquisite collection of ethnic wear, designer sarees, and traditional outfits. 
                  Celebrate elegance with our curated range of women's fashion.
                </p>
                <Link to="/shop" className="categories__link text-sm text-dark uppercase font-semibold relative inline-block pb-[3px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary hover:text-primary transition-all-3">
                  Shop now
                </Link>
              </div>
            </div>

            {/* Small Categories Grid */}
            <div className="grid grid-cols-2">
              {[
                { title: "Ethnic Wear", items: '358 items', img: '/img/categories/category-2.jpg' },
                { title: "Traditional Sarees", items: '273 items', img: '/img/categories/category-3.jpg' },
                { title: "Designer Suits", items: '159 items', img: '/img/categories/category-4.jpg' },
                { title: "Accessories", items: '792 items', img: '/img/categories/category-5.jpg' },
              ].map((cat, idx) => (
                <div key={idx} className="categories__item relative h-[314px] bg-cover-center flex items-center overflow-hidden pl-[30px] p-0"
                  style={{ backgroundImage: `url('${cat.img}')` }}>
                  <div className="categories__text">
                    <h4 className="text-dark font-bold text-[20px] leading-[1.2] mb-0">{cat.title}</h4>
                    <p className="text-dark mb-[10px] text-[14px]">{cat.items}</p>
                    <Link to="/shop" className="categories__link text-sm text-dark uppercase font-semibold relative inline-block pb-[3px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary hover:text-primary transition-all-3">
                      Shop now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product pt-[60px] pb-[50px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-[50px]">
            <div className="lg:col-span-4">
              <div className="section-title mb-[45px]">
                <h4 className="text-dark font-semibold uppercase relative inline-block">New product</h4>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="filter__controls flex flex-wrap justify-start lg:justify-end gap-[35px]">
                {[
                  { label: 'All', filter: 'all' },
                  { label: 'Dresses', filter: 'dresses' },
                  { label: 'Tops', filter: 'tops' },
                  { label: 'Bottoms', filter: 'bottoms' },
                  { label: 'Outerwear', filter: 'outerwear' },
                  { label: 'Bags & Shoes', filter: 'bags' },
                ].map((item, idx) => (
                  <li key={idx} className={activeFilter === item.filter ? 'active' : ''}>
                    <button
                      onClick={() => setActiveFilter(item.filter)}
                      className="text-sm font-semibold uppercase transition-all-3"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row property__gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 product-item mb-[35px] px-[15px]">
                <div className="product__item">
                  <div className="product__item__pic relative overflow-hidden mb-0 bg-cover-center h-[360px]"
                    style={{ backgroundImage: `url('${product.image}')` }}>
                    {product.label && (
                      <div className={`label ${product.label}`}>
                        {product.label}
                      </div>
                    )}
                    <ul className="product__hover">
                      <li>
                        <Link to="#">
                          <span className="arrow_expand"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_heart_alt"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_bag_alt"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6 className="mb-1">
                      <Link to="/product-details">
                        {product.name}
                      </Link>
                    </h6>
                    <div className="rating leading-[18px] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star text-[10px] text-[#e3c01c] -mr-1"></i>
                      ))}
                    </div>
                    <div className="product__price">$ {product.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section with Carousel */}
      <section className="banner relative h-[500px] lg:h-[600px] bg-cover-center mb-[100px]" style={{ backgroundImage: "url('/img/banner/banner-1.jpg')" }}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-center h-full">
            <div className="max-w-2xl text-center">
              <span className="text-white text-sm uppercase mb-4 block tracking-widest">R.S OUTFIT</span>
              <h1 className="text-white text-6xl font-bold mb-8">Exclusive Ethnic Wear</h1>
              <Link to="/shop" className="text-white font-semibold uppercase border-b-2 border-white inline-block pb-2 hover:text-primary hover:border-primary transition-all-3">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trend Section */}
      <section className="trend pt-[100px] pb-[100px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: 'New Arrivals', items: [
                { name: 'Designer chain bag', price: 59.0, img: '/img/trend/trend-1.jpg' },
                { name: 'Pearl drop earrings', price: 59.0, img: '/img/trend/trend-2.jpg' },
                { name: 'Silk blend top', price: 59.0, img: '/img/trend/trend-3.jpg' },
              ]},
              { title: 'Best Sellers', items: [
                { name: 'Gold hoop earrings', price: 59.0, img: '/img/trend/trend-4.jpg' },
                { name: 'Crystal earrings', price: 59.0, img: '/img/trend/trend-5.jpg' },
                { name: 'Leather shoulder bag', price: 59.0, img: '/img/trend/trend-6.jpg' },
              ]},
              { title: 'Featured Items', items: [
                { name: 'Premium cashmere sweater', price: 89.0, img: '/img/trend/trend-7.jpg' },
                { name: 'Statement earrings', price: 45.0, img: '/img/trend/trend-8.jpg' },
                { name: 'Designer stud set', price: 65.0, img: '/img/trend/trend-9.jpg' },
              ]},
            ].map((section, idx) => (
              <div key={idx}>
                <div className="section-title mb-8">
                  <h4 className="text-dark text-xl font-semibold uppercase relative inline-block after:bottom-[-6px]">{section.title}</h4>
                </div>
                <div className="space-y-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="overflow-hidden mb-[35px]">
                      <div className="float-left mr-[25px]">
                        <img src={item.img} alt={item.name} className="w-[90px]" />
                      </div>
                      <div className="overflow-hidden">
                        <h6 className="mb-1">
                          <Link to="/product-details" className="text-sm text-dark hover:text-primary transition-all-3">
                            {item.name}
                          </Link>
                        </h6>
                        <div className="rating leading-[18px] mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star text-[10px] text-[#e3c01c] -mr-1"></i>
                          ))}
                        </div>
                        <div className="text-dark font-semibold">$ {item.price.toFixed(1)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="discount mb-[100px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-0">
              <img src="/img/discount.jpg" alt="Discount" className="w-full h-full object-cover" />
            </div>
            <div className="p-0 bg-[#f5f5f5] flex items-center justify-center py-20 lg:py-0">
              <div className="text-center px-8">
                <span className="text-primary text-sm uppercase tracking-widest mb-4 block">Discount</span>
                <h2 className="text-5xl font-bold text-dark mb-4">Women's Fashion Sale</h2>
                <h5 className="text-2xl text-dark mb-8">
                  <span className="text-primary font-bold">Sale</span> 50%
                </h5>
                <div className="flex justify-center gap-6 mb-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-dark mb-2">22</div>
                    <p className="text-gray-text uppercase text-sm">Days</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-dark mb-2">18</div>
                    <p className="text-gray-text uppercase text-sm">Hour</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-dark mb-2">46</div>
                    <p className="text-gray-text uppercase text-sm">Min</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-dark mb-2">05</div>
                    <p className="text-gray-text uppercase text-sm">Sec</p>
                  </div>
                </div>
                <Link to="/shop" className="primary-btn">
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services pt-[100px] pb-[100px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="services-item">
              <i className="fa fa-car"></i>
              <h6 className="text-dark font-semibold mb-1">Free Shipping</h6>
              <p className="text-gray-text text-sm mb-0">For all oder over $99</p>
            </div>
            <div className="services-item">
              <i className="fa fa-money-bill"></i>
              <h6 className="text-dark font-semibold mb-1">Money Back Guarantee</h6>
              <p className="text-gray-text text-sm mb-0">If good have Problems</p>
            </div>
            <div className="services-item">
              <i className="fa fa-life-ring"></i>
              <h6 className="text-dark font-semibold mb-1">Online Support 24/7</h6>
              <p className="text-gray-text text-sm mb-0">Dedicated support</p>
            </div>
            <div className="services-item">
              <i className="fa fa-headphones"></i>
              <h6 className="text-dark font-semibold mb-1">Payment Secure</h6>
              <p className="text-gray-text text-sm mb-0">100% secure payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <div className="container-fluid px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="instagram-item relative">
                <div className="w-full h-full bg-cover-center absolute inset-0" style={{ backgroundImage: `url('/img/instagram/insta-${num}.jpg')` }}></div>
                <div className="relative z-10 text-center opacity-0 hover:opacity-100 transition-all duration-300">
                  <i className="fab fa-instagram text-dark text-3xl mb-2 block"></i>
                  <Link to="#" className="text-dark text-base font-medium">
                    @ ashion_shop
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
