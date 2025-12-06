import React from 'react';
import { Link } from 'react-router-dom';

const ShopCart = () => {
  const cartItems = [
    { id: 1, name: 'Buttons tweed blazer', price: 59.0, quantity: 1, image: '/img/shop-cart/cp-1.jpg' },
    { id: 2, name: 'Flowy striped skirt', price: 49.0, quantity: 1, image: '/img/shop-cart/cp-2.jpg' },
    { id: 3, name: 'Cotton T-Shirt', price: 59.0, quantity: 2, image: '/img/shop-cart/cp-3.jpg' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-text hover:text-primary transition-all-3">Home</Link>
            <span className="text-gray-text">/</span>
            <span className="text-dark">Shop Cart</span>
          </div>
        </div>
      </div>

      {/* Shopping Cart */}
      <section className="shopping-cart py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Table */}
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-border">
                      <th className="text-left py-4 text-dark font-semibold">Product</th>
                      <th className="text-center py-4 text-dark font-semibold">Price</th>
                      <th className="text-center py-4 text-dark font-semibold">Quantity</th>
                      <th className="text-center py-4 text-dark font-semibold">Total</th>
                      <th className="text-center py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b border-gray-border">
                        <td className="py-6">
                          <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                            <h6 className="text-dark">{item.name}</h6>
                          </div>
                        </td>
                        <td className="text-center text-dark font-semibold">$ {item.price.toFixed(2)}</td>
                        <td className="text-center">
                          <div className="flex items-center justify-center border border-gray-border w-fit mx-auto">
                            <button className="w-10 h-10 hover:bg-gray-50 transition-all-3">
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-12 h-10 text-center border-x border-gray-border"
                            />
                            <button className="w-10 h-10 hover:bg-gray-50 transition-all-3">
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td className="text-center text-dark font-semibold">$ {(item.price * item.quantity).toFixed(2)}</td>
                        <td className="text-center">
                          <button className="text-gray-text hover:text-primary transition-all-3">
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
                <Link to="/shop" className="primary-btn">
                  Continue Shopping
                </Link>
                <button className="px-8 py-3 border border-gray-border text-dark hover:border-primary hover:text-primary transition-all-3">
                  Update Cart
                </button>
              </div>

              {/* Coupon */}
              <div className="mt-12 p-8 bg-gray-50">
                <h6 className="text-dark font-semibold mb-4">Discount Codes</h6>
                <form className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter your coupon code"
                    className="flex-1 px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                  />
                  <button type="submit" className="primary-btn">
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>

            {/* Cart Total */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8">
                <h6 className="text-dark font-semibold mb-6 uppercase">Cart Total</h6>
                <ul className="space-y-4 mb-6">
                  <li className="flex justify-between pb-4 border-b border-gray-border">
                    <span className="text-gray-text">Subtotal</span>
                    <span className="text-dark font-semibold">$ {subtotal.toFixed(2)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-text">Shipping</span>
                    <span className="text-dark font-semibold">Free</span>
                  </li>
                </ul>
                <div className="flex justify-between pb-6 mb-6 border-b border-gray-border">
                  <span className="text-dark font-semibold text-lg">Total</span>
                  <span className="text-primary font-bold text-xl">$ {subtotal.toFixed(2)}</span>
                </div>
                <Link to="/checkout" className="primary-btn w-full text-center block">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCart;
