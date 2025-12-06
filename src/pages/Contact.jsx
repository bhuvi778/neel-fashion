import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-text hover:text-primary transition-all-3">Home</Link>
            <span className="text-gray-text">/</span>
            <span className="text-dark">Contact</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1577086649604!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      {/* Contact Section */}
      <section className="contact py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="section-title mb-8">
                <h4 className="text-dark font-semibold uppercase relative inline-block">Get in Touch</h4>
              </div>
              <p className="text-gray-text leading-relaxed mb-8">
                As you might expect of a company that began as a high-end interiors contractor, we pay strict
                attention to detail.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <i className="fa fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h6 className="text-dark font-semibold mb-2">Address</h6>
                    <p className="text-gray-text">
                      60-49 Road 11378 New York
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <h6 className="text-dark font-semibold mb-2">Phone</h6>
                    <p className="text-gray-text">+65 11.188.888</p>
                    <p className="text-gray-text">+65 11.188.888</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="text-dark font-semibold mb-2">Email</h6>
                    <p className="text-gray-text">support@colorlib.com</p>
                    <p className="text-gray-text">info@colorlib.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <i className="fa fa-clock"></i>
                  </div>
                  <div>
                    <h6 className="text-dark font-semibold mb-2">Opening Hours</h6>
                    <p className="text-gray-text">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-text">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="section-title mb-8">
                <h4 className="text-dark font-semibold uppercase relative inline-block">Send Message</h4>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Your Message *"
                  required
                  className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                ></textarea>
                <button type="submit" className="primary-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
