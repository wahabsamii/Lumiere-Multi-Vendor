
import React, { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products = [] } = useContext(ShopContext);

  const latestProducts = useMemo(
    () => products.slice(0, 10),
    [products]
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, [latestProducts]);

  console.log('the latest products:', latestProducts)
  return (
    <section
      id="latest-collection"
      className="relative overflow-hidden bg-[#faf9f6] px-4 py-16 text-gray-900 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div
          className="mb-10 flex flex-col justify-between gap-6 border-b border-gray-200 pb-7 sm:mb-12 sm:flex-row sm:items-end sm:pb-9"
          data-aos="fade-up"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1.5">
              <Sparkles
                size={13}
                className="text-amber-600"
                aria-hidden="true"
              />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-600">
                Freshly picked for you
              </span>
            </div>

            <div className="text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              <Title text1="LATEST" text2="COLLECTIONS" />
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
              Discover the newest arrivals, thoughtfully selected
              to elevate your everyday style.
            </p>
          </div>

          <Link
            to="/collection"
            className="group inline-flex w-fit items-center gap-3 border-b border-gray-300 pb-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:border-amber-600 hover:text-amber-700"
          >
            Explore all
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Collection details */}
        <div
          className="mb-6 flex items-center justify-between"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-xs font-medium tracking-wide text-gray-500">
            The new-season edit
          </p>

          <span className="text-xs tabular-nums text-gray-500">
            {String(latestProducts.length).padStart(2, '0')} pieces
          </span>
        </div>

        {/* Product grid */}
        {latestProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
            {latestProducts.map((item, index) => (
              <div
                key={item._id || item.id || index}
                data-aos="fade-up"
                data-aos-delay={Math.min((index % 5) * 70, 280)}
                className="group min-w-0"
              >
                <div className="h-full transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1">
                  <ProductItem
                    id={item._id || item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/70 px-6 py-16 text-center"
            data-aos="fade-up"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
              <Sparkles
                size={22}
                className="text-amber-700"
                aria-hidden="true"
              />
            </div>

            <h3 className="text-lg font-medium tracking-tight">
              Something new is on its way
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Our latest collection is being prepared.
              Check back soon to discover your next favorite.
            </p>
          </div>
        )}

        {/* Bottom editorial accent */}
        <div className="mt-12 flex items-center gap-4 border-t border-gray-200 pt-5 sm:mt-16">
          <span className="h-px w-8 bg-amber-600" />

          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gray-500">
            Curated with intention
          </p>

          <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-gray-400">
            Discover your style
          </span>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
