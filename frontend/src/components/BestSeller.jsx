
import React, { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products = [] } = useContext(ShopContext);

  const bestSeller = useMemo(
    () => products.filter((item) => item.bestseller).slice(0, 5),
    [products]
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, [bestSeller]);

  return (
    <section
      id="best-sellers"
      className="relative overflow-hidden bg-white px-4 py-16 text-gray-900 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div
          className="mb-10 flex flex-col gap-6 border-b border-gray-200 pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
          data-aos="fade-up"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-600" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs">
                Customer favorites
              </p>
            </div>

            <div className="text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              <Title text1="BEST" text2="SELLERS" />
            </div>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
              Loved by our customers and chosen for their standout style.
              Discover the pieces everyone is talking about.
            </p>
          </div>

          <Link
            to="/collection"
            className="group inline-flex w-fit items-center gap-3 border-b border-gray-300 pb-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-gray-900"
          >
            <span>Shop all styles</span>
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </div>

        {/* Collection metadata */}
        <div
          className="mb-6 flex items-center justify-between"
          data-aos="fade-up"
        >
          <p className="text-xs font-medium text-gray-500 sm:text-sm">
            The most-loved selection
          </p>

          <p className="text-xs tracking-wide text-gray-500">
            <span className="font-semibold text-gray-900">
              {String(bestSeller.length).padStart(2, '0')}
            </span>{' '}
            PRODUCTS
          </p>
        </div>

        {/* Best-selling products */}
        {bestSeller.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
            {bestSeller.map((item, index) => (
              <div
                key={item._id || item.id || index}
                className="group min-w-0"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="h-full transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1">
                  <ProductItem
                    id={item._id || item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-[#faf9f6] px-6 py-16 text-center">
            <span
              aria-hidden="true"
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-2xl text-amber-700"
            >
              ★
            </span>

            <h3 className="text-lg font-medium tracking-tight">
              Favorites are on their way
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Our best-selling styles will appear here soon.
              Explore the collection to find your next favorite.
            </p>

            <Link
              to="/collection"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-amber-700"
            >
              Explore collection <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}

        {/* Bottom accent */}
        <div className="mt-12 flex items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:mt-16">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-[10px]">
              Selected by you, loved by many
            </p>
          </div>

          <p className="text-[9px] uppercase tracking-[0.16em] text-gray-400 sm:text-[10px]">
            Best of the best
          </p>
        </div>

      </div>
    </section>
  );
};

export default BestSeller;
