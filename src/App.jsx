import React, { useEffect, useState } from 'react';
import './App.css';
import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BlogPostPage from './components/BlogPostPage';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { siteContent } from './content';
import { getBlogPostBySlug, getBlogPosts } from './blog';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [locale, setLocale] = useState('de');
  const [pathname, setPathname] = useState(window.location.pathname);
  const content = siteContent[locale];
  const blogPosts = getBlogPosts(locale);
  const blogSlug = pathname.startsWith('/blog/') ? pathname.split('/')[2] : null;
  const currentBlogPost = blogSlug ? getBlogPostBySlug(blogSlug, locale) : null;

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (nextPath) => {
    if (window.location.pathname === nextPath) {
      return;
    }

    window.history.pushState({}, '', nextPath);
    setPathname(nextPath);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = currentBlogPost ? `${currentBlogPost.title} | Leon Dietsche` : content.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', currentBlogPost?.excerpt ?? content.meta.description);
    }
  }, [content.meta.description, content.meta.title, currentBlogPost, locale]);

  return (
    <div className="App">
      <ThreeBackground />

      {showContent && (
        currentBlogPost || pathname.startsWith('/blog/') ? (
          <BlogPostPage
            post={currentBlogPost}
            blogUi={content.blog}
            locale={locale}
            onLocaleChange={setLocale}
            onBackHome={() => navigateTo('/')}
          />
        ) : (
          <>
            <Navigation
              navigation={content.navigation}
              locale={locale}
              onLocaleChange={setLocale}
            />
            <Hero hero={content.hero} />
            <About about={content.about} />
            <Skills skillsContent={content.skills} />
            <Experience experience={content.experience} />
            <Projects projects={content.projects} />
            <Blog
              blog={content.blog}
              posts={blogPosts}
              onOpenPost={(slug) => navigateTo(`/blog/${slug}`)}
            />
            <Education education={content.education} />
            <Contact contact={content.contact} />
            <Footer footer={content.footer} />
          </>
        )
      )}
    </div>
  );
}

export default App;
