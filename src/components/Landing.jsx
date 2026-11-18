import React from 'react';

const links = [
  { label: 'E-Mail', href: 'mailto:dietscheleon@gmail.com' },
  { label: 'LinkedIn', href: 'https://ch.linkedin.com/in/leon-dietsche-a32899106', external: true },
  { label: 'GitHub', href: 'https://github.com/LeonDietsche', external: true }
];

const Landing = ({ subtitle }) => (
  <header
    className="fixed inset-0 z-10 flex flex-col items-center justify-center px-4 text-[16px] leading-[1.3] text-black text-center"
    style={{
      fontFamily: '"Riforma LL Light", "Riforma LL", Helvetica, Arial, sans-serif',
      fontWeight: 300
    }}
  >
    <h1 className="m-0 font-light text-[16px] uppercase tracking-wide">Leon Dietsche</h1>

    <p className="mt-[1.2em] mb-0">
      {subtitle}
      <br />
      St. Gallen
    </p>

    <div className="mt-[1.2em]">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="block text-black no-underline hover:text-[rgb(130,130,130)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  </header>
);

export default Landing;
