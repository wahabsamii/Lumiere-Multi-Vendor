
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assets';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative m-0 w-full overflow-hidden bg-[#111111] p-0 text-white">
      <div className="grid min-h-[600px] w-full grid-cols-1 md:min-h-[calc(100svh-110px)] md:grid-cols-2">

        {/* Hero Content */}
        <div className="relative z-10 flex items-center px-6 py-16 sm:px-12 sm:py-20 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-xl">

            <p
              data-aos="fade-up"
              className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8a078] sm:text-xs"
            >
              <span className="h-px w-8 bg-[#b8a078]" />
              Discover the new collection
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              Find your
              <br />
              own kind of
              <br />
              <span className="italic text-[#b8a078]">style.</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:mt-8 sm:text-base sm:leading-8"
            >
              Modern essentials. Timeless design. Discover pieces
              that feel like they were made for you.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-9 flex flex-wrap items-center gap-5 sm:mt-10"
            >
              <Link
                to="/collection"
                className="group inline-flex min-h-14 items-center justify-center gap-8 bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors duration-300 hover:bg-[#b8a078] sm:px-7 sm:text-xs"
              >
                Shop the collection
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                Designed for everyday
              </span>
            </div>

          </div>
        </div>

        {/* Hero Image */}
        <div
          className="group relative min-h-[380px] overflow-hidden sm:min-h-[480px] md:min-h-0"
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          <img
            src={assets.p_img53}
            alt="Featured fashion collection"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 md:bg-gradient-to-r md:from-[#111111]/20 md:via-transparent md:to-transparent" />

          {/* Image label */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="absolute bottom-6 left-6 border-l border-[#b8a078] pl-4 sm:bottom-10 sm:left-10"
          >
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
              The latest edit
            </p>
            <p className="mt-2 font-serif text-xl italic text-white sm:text-2xl">
              Effortless by nature.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
