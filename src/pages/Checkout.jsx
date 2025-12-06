import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'United States',
    address: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    notes: '',
  });

  const cartItems = [
    { id: 1, name: 'Buttons tweed blazer', price: 59.0, quantity: 1 },
    { id: 2, name: 'Flowy striped skirt', price: 49.0, quantity: 1 },
    { id: 3, name: 'Cotton T-Shirt', price: 59.0, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-text hover:text-primary transition-all-3">Home</Link>
            <span className="text-gray-text">/</span>
            <span className="text-dark">Checkout</span>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <section className="checkout py-24">
        <div className="container mx-auto px-4">
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Billing Details */}
              <div>
                <h4 className="text-2xl font-bold text-dark mb-8">Billing Details</h4>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-dark font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-dark font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-dark font-semibold mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-dark font-semibold mb-2">Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street Address"
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-semibold mb-2">Town / City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-dark font-semibold mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-dark font-semibold mb-2">Postcode / ZIP *</label>
                      <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-dark font-semibold mb-2">Phone *</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-semibold mb-2">Order notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Your Order */}
              <div>
                <h4 className="text-2xl font-bold text-dark mb-8">Your Order</h4>
                <div className="bg-gray-50 p-8">
                  <table className="w-full mb-6">
                    <thead>
                      <tr className="border-b border-gray-border">
                        <th className="text-left py-4 text-dark font-semibold">Product</th>
                        <th className="text-right py-4 text-dark font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="border-b border-gray-border">
                          <td className="py-4 text-gray-text">
                            {item.name} x {item.quantity}
                          </td>
                          <td className="py-4 text-right text-dark font-semibold">
                            $ {(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-b border-gray-border">
                        <td className="py-4 text-gray-text">Subtotal</td>
                        <td className="py-4 text-right text-dark font-semibold">
                          $ {subtotal.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-border">
                        <td className="py-4 text-gray-text">Shipping</td>
                        <td className="py-4 text-right text-dark font-semibold">Free</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-dark font-bold text-lg">Total</td>
                        <td className="py-4 text-right text-primary font-bold text-xl">
                          $ {subtotal.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <h6 className="text-dark font-semibold mb-4">Payment Method</h6>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                        <span className="text-gray-text">Check Payment</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="payment" className="w-4 h-4" />
                        <span className="text-gray-text">Paypal</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="payment" className="w-4 h-4" />
                        <span className="text-gray-text">Credit Card</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="primary-btn w-full text-center">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
