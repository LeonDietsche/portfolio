import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LanguageSwitch = ({ locale, onLocaleChange, languageLabel, mobile = false }) => (
  <div
    className={`flex items-center ${mobile ? 'justify-between px-4 pt-2' : 'gap-3'} text-xs tracking-[0.2em] uppercase`}
  >
    <span className="text-gray-400">{languageLabel}</span>
    <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1">
      <button
        type="button"
        onClick={() => onLocaleChange('de')}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === 'de' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'
        }`}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => onLocaleChange('en')}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === 'en' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'
        }`}
      >
        EN
      </button>
    </div>
  </div>
);

const Navigation = ({ navigation, locale, onLocaleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((currentScrolled) => (
        currentScrolled === nextScrolled ? currentScrolled : nextScrolled
      ));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm md:backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-light tracking-tight hover:text-gray-600 transition-colors"
          >
            Leon Dietsche
          </button>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex space-x-8">
              {navigation.items.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-light tracking-wide hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <LanguageSwitch
              locale={locale}
              onLocaleChange={onLocaleChange}
              languageLabel={navigation.languageLabel}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Open navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 pb-4">
            <LanguageSwitch
              locale={locale}
              onLocaleChange={(nextLocale) => {
                onLocaleChange(nextLocale);
                setIsOpen(false);
              }}
              languageLabel={navigation.languageLabel}
              mobile
            />
            <div className="pt-4 space-y-2">
              {navigation.items.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-light tracking-wide hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
