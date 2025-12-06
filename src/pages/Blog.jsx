import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Latest Ethnic Wear Trends for Women 2024',
      date: 'Feb 16, 2020',
      comments: 8,
      image: '/img/blog/blog-1.jpg',
      excerpt: 'Discover the hottest ethnic wear trends for women. From designer sarees to elegant anarkali suits, find your perfect traditional style this season.',
    },
    {
      id: 2,
      title: 'How to Style Traditional Sarees Perfectly',
      date: 'Feb 16, 2020',
      comments: 8,
      image: '/img/blog/blog-2.jpg',
      excerpt: 'Master the art of draping and styling traditional sarees. Learn expert tips on choosing the right blouse, jewelry, and accessories for any occasion.',
    },
    {
      id: 3,
      title: 'Essential Ethnic Wear Every Woman Needs',
      date: 'Feb 16, 2020',
      comments: 8,
      image: '/img/blog/blog-3.jpg',
      excerpt: 'Build your perfect ethnic wardrobe with these essential pieces. From classic silk sarees to contemporary suits - timeless elegance for every occasion.',
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
            <span className="text-dark">Blog</span>
          </div>
        </div>
      </div>

      {/* Blog */}
      <section className="blog py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full transform group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-6 mb-4 text-sm text-gray-text">
                      <span>
                        <i className="fa fa-calendar mr-2"></i>
                        {post.date}
                      </span>
                      <span>
                        <i className="fa fa-comments mr-2"></i>
                        {post.comments} Comments
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-all-3">
                      <Link to="/blog-details">{post.title}</Link>
                    </h3>
                    <p className="text-gray-text mb-6 leading-relaxed">{post.excerpt}</p>
                    <Link
                      to="/blog-details"
                      className="text-dark font-semibold uppercase border-b-2 border-dark inline-block pb-1 hover:text-primary hover:border-primary transition-all-3"
                    >
                      Read More
                    </Link>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
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
                    <div key={num} className="flex gap-4 group">
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

export default Blog;
