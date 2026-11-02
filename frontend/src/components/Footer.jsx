
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Home', to: '/' },
    { label: 'Our Collection', to: '/collection' },
    { label: 'Best Sellers', to: '/#best-sellers' },
    { label: 'About Us', to: '/about' },
  ];

  const supportLinks = [
    { label: 'Contact Us', to: '/contact' },
    // { label: 'Delivery Information', to: '/delivery' },
    { label: 'Returns & Exchanges', to: '/returns' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
  ];

  const linkClass =
    'inline-flex w-fit items-center text-sm text-gray-500 transition-colors duration-300 hover:text-amber-700';

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-[#faf9f6] text-gray-900">

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-20">

          {/* Brand information */}
          <div>
            <Link
              to="/"
              aria-label="Dreams Clothing home"
              className="inline-flex"
            >
              <img
                src={assets.logo}
                className="mb-5 w-36 object-contain"
                alt="Dreams Clothing"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              Discover your style with Lumiere. Explore modern
              trends, timeless essentials, and everyday favorites
              designed to make every outfit feel special.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-600" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-700">
                Find your style
              </p>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gray-900">
              Explore
            </h3>

            <ul className="flex flex-col gap-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gray-900">
              Customer Care
            </h3>

            <ul className="flex flex-col gap-4">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gray-900">
              Get in Touch
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-7 text-gray-500">
              Have a question about your order or need help finding
              the right style? We'd love to hear from you.
            </p>

            <a
              href="tel:+923441619945"
              className="mb-4 block w-fit text-sm text-gray-600 transition-colors duration-300 hover:text-amber-700"
            >
              +92 342 1619 987
            </a>

            <a
              href="mailto:contact@lumiere.com"
              className="block w-fit break-all text-sm text-gray-600 transition-colors duration-300 hover:text-amber-700"
            >
              contact@lumiere.com
            </a>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-gray-900 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-amber-700"
            >
              Contact Us
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Brand statement */}
        <div className="border-t border-gray-200 py-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-xs">
            Modern style. Timeless appeal.
          </p>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500">
            © {currentYear} Lumiere. All rights reserved.
          </p>

          <div><span  className="text-xs mr-1">Design and Develop by:</span>{ }
          <Link
            to="https:wahabsami.dev" target='_blank'
            className="text-xs text-gray-500 transition-colors duration-300 hover:text-amber-700"
          >
            Abdul Wahab
          </Link></div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
