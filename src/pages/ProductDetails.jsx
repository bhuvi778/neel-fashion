import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const [mainImage, setMainImage] = useState('/img/product/details/product-1.jpg');

  const thumbnails = [
    '/img/product/details/product-1.jpg',
    '/img/product/details/product-2.jpg',
    '/img/product/details/product-3.jpg',
    '/img/product/details/product-4.jpg',
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
            <span className="text-dark">Product Details</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="product-details py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img src={mainImage} alt="Product" className="w-full" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {thumbnails.map((thumb, idx) => (
                  <img
                    key={idx}
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-full cursor-pointer border-2 transition-all-3 ${
                      mainImage === thumb ? 'border-primary' : 'border-transparent hover:border-gray-border'
                    }`}
                    onClick={() => setMainImage(thumb)}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-sm text-gray-text uppercase mb-2 block">Coat</span>
              <h3 className="text-3xl font-bold text-dark mb-4">Buttons tweed blazer</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa fa-star text-yellow-400"></i>
                  ))}
                </div>
                <span className="text-gray-text text-sm">(138 reviews)</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-6">$59.0</div>
              <p className="text-gray-text mb-6 leading-relaxed">
                Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia
                consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <h6 className="text-dark font-semibold mb-3">Size</h6>
                <div className="flex gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border transition-all-3 ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h6 className="text-dark font-semibold mb-3">Color</h6>
                <div className="flex gap-2">
                  {[
                    { name: 'black', color: 'bg-black' },
                    { name: 'gray', color: 'bg-gray-400' },
                    { name: 'blue', color: 'bg-blue-500' },
                  ].map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full ${color.color} border-2 transition-all-3 ${
                        selectedColor === color.name ? 'border-dark' : 'border-transparent'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 hover:bg-gray-50 transition-all-3"
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 h-12 text-center border-x border-gray-border"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 hover:bg-gray-50 transition-all-3"
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
                <button className="primary-btn flex-1">Add to cart</button>
                <button className="w-12 h-12 border border-gray-border hover:border-primary hover:text-primary transition-all-3">
                  <i className="fa fa-heart"></i>
                </button>
              </div>

              {/* Product Meta */}
              <ul className="space-y-2 text-sm">
                <li className="flex">
                  <span className="text-gray-text w-32">Availability:</span>
                  <span className="text-dark font-semibold">In Stock</span>
                </li>
                <li className="flex">
                  <span className="text-gray-text w-32">Shipping:</span>
                  <span className="text-dark">01 day shipping. <span className="text-primary">Free pickup today</span></span>
                </li>
                <li className="flex">
                  <span className="text-gray-text w-32">Weight:</span>
                  <span className="text-dark">0.5 kg</span>
                </li>
                <li className="flex">
                  <span className="text-gray-text w-32">Share on:</span>
                  <div className="flex gap-3">
                    <Link to="#" className="text-gray-text hover:text-primary transition-all-3">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#" className="text-gray-text hover:text-primary transition-all-3">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#" className="text-gray-text hover:text-primary transition-all-3">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Description Tabs */}
          <div className="border-t border-gray-border pt-12">
            <div className="mb-8">
              <ul className="flex gap-8 border-b border-gray-border">
                {['Description', 'Reviews (138)', 'Additional information'].map((tab, idx) => (
                  <li key={idx}>
                    <button className={`pb-4 font-semibold transition-all-3 ${
                      idx === 0 ? 'text-primary border-b-2 border-primary' : 'text-gray-text hover:text-primary'
                    }`}>
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-gray-text leading-relaxed">
              <p className="mb-4">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.
              </p>
              <p>
                Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title mb-8">
            <h4 className="text-dark font-semibold uppercase relative inline-block">Related Products</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="product-item group">
                <div className="relative overflow-hidden mb-4 bg-cover-center h-[400px]"
                  style={{ backgroundImage: `url('/img/product/related/rp-${num}.jpg')` }}>
                  <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
                      Product Name
                    </Link>
                  </h6>
                  <div className="text-dark font-semibold">$ 59.0</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
