import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = ({ blog, posts, onOpenPost }) => {
  return (
    <section id="blog" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">{blog.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{blog.intro}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                  {post.category}
                </span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </span>
              </div>

              <h3 className="text-2xl font-light tracking-tight mb-4">{post.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`/blog/${post.slug}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onOpenPost(post.slug);
                  }}
                  className="inline-flex items-center text-sm text-black hover:text-gray-600 transition-colors"
                >
                  {blog.readLabel}
                  <ArrowRight size={14} className="ml-2" />
                </a>

                <a
                  href={`/blog/${post.slug}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onOpenPost(post.slug);
                  }}
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  {blog.directLinkLabel}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
