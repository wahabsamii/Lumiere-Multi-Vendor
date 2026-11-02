
import React from 'react';
import { assets } from '../assets/assets';

const policies = [
  {
    icon: assets.exchange_icon,
    number: '01',
    title: 'Easy Exchanges',
    description:
      'A simple, hassle-free exchange process to help you find the perfect fit.',
    detail: 'HASSLE-FREE SERVICE',
  },
  {
    icon: assets.quality_icon,
    number: '02',
    title: '7-Day Returns',
    description:
      'Shop with confidence with our 7-day return policy, subject to our terms.',
    detail: 'SHOP WITH CONFIDENCE',
  },
  {
    icon: assets.support_img,
    number: '03',
    title: 'Dedicated Support',
    description:
      'Our support team is here to help with your questions and shopping needs.',
    detail: 'HERE WHEN YOU NEED US',
  },
];

const OurPolicy = () => {
  return (
    <section
      id="our-policy"
      className="relative overflow-hidden bg-[#faf9f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div
          className="mb-12 text-center sm:mb-16"
          data-aos="fade-up"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-amber-600" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs">
              The promise we make
            </p>
            <span className="h-px w-8 bg-amber-600" />
          </div>

          <h2 className="text-2xl font-light tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            A Better Way to <span className="font-semibold">Shop</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Great style deserves a great experience. Enjoy thoughtful
            service and peace of mind at every step of your journey.
          </p>
        </div>

        {/* Policy cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {policies.map((policy, index) => (
            <article
              key={policy.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-200/80 bg-white px-6 py-9 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:shadow-xl hover:shadow-gray-900/5 sm:px-5 sm:py-10 lg:px-8"
            >
              {/* Number */}
              <span className="absolute right-5 top-5 text-xs font-medium tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-amber-600">
                {policy.number}
              </span>

              {/* Icon container */}
              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#faf9f6] ring-1 ring-gray-100 transition-all duration-500 group-hover:bg-amber-50 group-hover:ring-amber-100">
                <img
                  src={policy.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
                {policy.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-7 text-gray-500">
                {policy.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-px w-5 bg-amber-600 transition-all duration-300 group-hover:w-9" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {policy.detail}
                </span>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-600 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom trust statement */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-gray-200 pt-7 text-center sm:mt-14 sm:flex-row sm:gap-4"
          data-aos="fade-up"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-sm text-amber-700">
            ✓
          </span>

          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            Your satisfaction matters. We're here to make every order
            a better experience.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurPolicy;
