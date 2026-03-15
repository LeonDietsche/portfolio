import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';

const LocaleSwitch = ({ locale, onLocaleChange }) => (
  <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1">
    <button
      type="button"
      onClick={() => onLocaleChange('de')}
      className={`rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase transition-colors ${
        locale === 'de' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'
      }`}
    >
      DE
    </button>
    <button
      type="button"
      onClick={() => onLocaleChange('en')}
      className={`rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase transition-colors ${
        locale === 'en' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'
      }`}
    >
      EN
    </button>
  </div>
);

const BlogPostPage = ({ post, blogUi, locale, onLocaleChange, onBackHome }) => {
  if (!post) {
    return (
      <div className="min-h-screen px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft size={14} className="mr-2" />
            {blogUi.backLabel}
          </button>
          <h1 className="text-4xl font-light tracking-tight mb-4">{blogUi.notFoundTitle}</h1>
          <p className="text-gray-600">{blogUi.notFoundText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-12">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} className="mr-2" />
            {blogUi.backLabel}
          </button>
          <LocaleSwitch locale={locale} onLocaleChange={onLocaleChange} />
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-200 p-8 lg:p-12 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
              {post.category}
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-2" />
              {post.date}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">{post.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">{post.lead}</p>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-xl font-medium tracking-tight">{section.heading}</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-200 p-6 space-y-4">
            <h2 className="text-xl font-medium tracking-tight">{post.takeaway.title}</h2>
            <p className="italic text-gray-800">{post.takeaway.quote}</p>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              {post.takeaway.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>

          {post.takeaway.note ? (
            <p className="mt-6 text-sm text-gray-500 leading-relaxed">{post.takeaway.note}</p>
          ) : null}
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostPage;
