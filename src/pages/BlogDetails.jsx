import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-text hover:text-primary transition-all-3">Home</Link>
            <span className="text-gray-text">/</span>
            <Link to="/blog" className="text-gray-text hover:text-primary transition-all-3">Blog</Link>
            <span className="text-gray-text">/</span>
            <span className="text-dark">Blog Details</span>
          </div>
        </div>
      </div>

      {/* Blog Details */}
      <section className="blog-details py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Content */}
            <div className="lg:col-span-2">
              <article>
                <img src="/img/blog/details/blog-details.jpg" alt="Blog" className="w-full mb-8" />
                
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-text">
                  <span>
                    <i className="fa fa-calendar mr-2"></i>
                    Feb 16, 2020
                  </span>
                  <span>
                    <i className="fa fa-user mr-2"></i>
                    John Doe
                  </span>
                  <span>
                    <i className="fa fa-comments mr-2"></i>
                    8 Comments
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-dark mb-6">
                  What Curling Irons Are The Best Ones
                </h2>

                <p className="text-gray-text leading-relaxed mb-6">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="text-gray-text leading-relaxed mb-6">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>

                <div className="grid grid-cols-2 gap-6 my-12">
                  <img src="/img/blog/details/bd-1.jpg" alt="Blog detail" className="w-full" />
                  <img src="/img/blog/details/bd-2.jpg" alt="Blog detail" className="w-full" />
                </div>

                <p className="text-gray-text leading-relaxed mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit.
                </p>

                <div className="bg-gray-50 border-l-4 border-primary p-8 my-12 italic">
                  <p className="text-gray-text text-lg leading-relaxed">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
                  </p>
                </div>

                <p className="text-gray-text leading-relaxed mb-8">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                {/* Tags and Share */}
                <div className="flex flex-wrap justify-between items-center py-6 border-t border-b border-gray-border mb-12">
                  <div className="flex items-center gap-2 mb-4 lg:mb-0">
                    <span className="text-dark font-semibold mr-2">Tags:</span>
                    {['Fashion', 'Beauty', 'Lifestyle'].map((tag, idx) => (
                      <Link
                        key={idx}
                        to="#"
                        className="px-3 py-1 bg-gray-100 text-sm text-gray-text hover:bg-primary hover:text-white transition-all-3"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-dark font-semibold mr-2">Share:</span>
                    {['facebook-f', 'twitter', 'instagram', 'pinterest'].map((social, idx) => (
                      <Link
                        key={idx}
                        to="#"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-text hover:bg-primary hover:text-white transition-all-3"
                      >
                        <i className={`fab fa-${social}`}></i>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-dark mb-8">3 Comments</h4>
                  <div className="space-y-8">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="flex gap-6">
                        <img
                          src={`/img/blog/details/comment-${num}.jpg`}
                          alt="Commenter"
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h6 className="text-dark font-semibold mb-1">John Doe</h6>
                              <span className="text-sm text-gray-text">Feb 16, 2020</span>
                            </div>
                            <button className="text-sm text-gray-text hover:text-primary transition-all-3">
                              <i className="fa fa-reply mr-2"></i>Reply
                            </button>
                          </div>
                          <p className="text-gray-text leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comment Form */}
                <div>
                  <h4 className="text-2xl font-bold text-dark mb-8">Leave a Comment</h4>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name *"
                        className="px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email *"
                        className="px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Website"
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    />
                    <textarea
                      rows="6"
                      placeholder="Your Comment *"
                      className="w-full px-4 py-3 border border-gray-border focus:border-primary focus:outline-none"
                    ></textarea>
                    <button type="submit" className="primary-btn">
                      Post Comment
                    </button>
                  </form>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="mb-12">
                <form className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-3 pr-12 border border-gray-border focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-text hover:text-primary transition-all-3"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="mb-12">
                <h5 className="text-dark font-semibold mb-6 uppercase">Categories</h5>
                <ul className="space-y-3">
                  {['Fashion', 'Beauty', 'Lifestyle', 'Travel', 'Food'].map((cat, idx) => (
                    <li key={idx}>
                      <Link
                        to="#"
                        className="flex justify-between items-center text-gray-text hover:text-primary transition-all-3"
                      >
                        <span>{cat}</span>
                        <span>({Math.floor(Math.random() * 20) + 1})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="mb-12">
                <h5 className="text-dark font-semibold mb-6 uppercase">Recent Posts</h5>
                <div className="space-y-6">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex gap-4">
                      <img
                        src={`/img/blog/sidebar/sp-${num}.jpg`}
                        alt="Recent post"
                        className="w-20 h-20 object-cover"
                      />
                      <div className="flex-1">
                        <h6 className="text-sm mb-2">
                          <Link to="/blog-details" className="text-dark hover:text-primary transition-all-3">
                            What Curling Irons Are The Best Ones
                          </Link>
                        </h6>
                        <span className="text-xs text-gray-text">Feb 16, 2020</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h5 className="text-dark font-semibold mb-6 uppercase">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {['Fashion', 'Lifestyle', 'Dresses', 'Bags', 'Shoes', 'Accessories', 'Beauty'].map((tag, idx) => (
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
