
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  const values = [
    {
      number: '01',
      title: 'Thoughtful Quality',
      description:
        'We believe great style starts with thoughtful choices. We aim to offer pieces that balance comfort, versatility, and timeless appeal.',
    },
    {
      number: '02',
      title: 'Effortless Shopping',
      description:
        'From discovering your favorite styles to placing an order, we work to make every step simple, intuitive, and enjoyable.',
    },
    {
      number: '03',
      title: 'Customer First',
      description:
        'Your experience matters to us. We aim to provide clear information, helpful support, and a shopping journey you can feel confident about.',
    },
  ];

  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#1c1c1c]">

      {/* Hero Section */}
      <section className="relative border-t border-gray-200">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:min-h-[570px] md:grid-cols-2">

          <div className="flex items-center px-6 py-16 sm:px-12 sm:py-20 lg:px-20 xl:px-24">
            <div className="max-w-xl">
              <p
                data-aos="fade-up"
                className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548] sm:text-xs"
              >
                <span className="h-px w-8 bg-[#a77548]" />
                The story behind our style
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
              >
                More than
                <br />
                just <span className="italic text-[#a77548]">fashion.</span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-7 max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-8"
              >
                We believe what you wear should feel like you. Discover
                thoughtfully selected styles that bring confidence,
                comfort, and individuality into everyday life.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-9 flex flex-wrap items-center gap-5"
              >
                <Link
                  to="/collection"
                  className="group inline-flex items-center gap-8 bg-[#1c1c1c] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#a77548] sm:text-xs"
                >
                  Explore our collection
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-6"
              >
                <div>
                  <p className="font-serif text-2xl italic">Your</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-gray-500">
                    Style
                  </p>
                </div>

                <div className="h-10 w-px bg-gray-200" />

                <div>
                  <p className="font-serif text-2xl italic">Your</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-gray-500">
                    Story
                  </p>
                </div>

                <div className="h-10 w-px bg-gray-200" />

                <div>
                  <p className="font-serif text-2xl italic">Your</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-gray-500">
                    Confidence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            data-aos="fade-in"
            className="group relative min-h-[400px] overflow-hidden sm:min-h-[520px] md:min-h-0"
          >
            <img
              src={assets.about_img}
              alt="Fashion and personal style"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

            <div className="absolute bottom-8 left-7 border-l border-white/70 pl-4 text-white sm:bottom-12 sm:left-10">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/75">
                Dreams Clothing
              </p>
              <p className="mt-2 font-serif text-2xl italic sm:text-3xl">
                Wear what feels like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          <div data-aos="fade-up">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548]">
              Who we are
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Style should be
              <br />
              <span className="italic text-[#a77548]">
                personal, always.
              </span>
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="space-y-5 text-sm leading-8 text-gray-600 sm:text-base"
          >
            <p>
              At Dreams Clothing, we see fashion as more than the clothes
              you wear. It is a way to express your personality, embrace
              your individuality, and feel comfortable in your own skin.
            </p>

            <p>
              Our approach is simple: bring together styles that feel
              current without losing their everyday appeal. Whether
              you are refreshing your wardrobe or looking for a piece
              that makes an outfit feel complete, we want discovering
              your next favorite to be an enjoyable experience.
            </p>

            <p>
              Every detail of the shopping experience matters to us.
              From browsing our collection to choosing the pieces that
              feel right for you, our goal is to make personal style
              feel approachable and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Image and Mission */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-2">

          <div
            data-aos="fade-right"
            className="relative min-h-[350px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]"
          >
            <img
              src={assets.p_img1}
              alt="A look from our clothing collection"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
            <div data-aos="fade-up" className="max-w-lg">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548]">
                What drives us
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Our mission is to
                <br />
                make style <span className="italic">feel effortless.</span>
              </h2>

              <p className="mt-7 text-sm leading-8 text-gray-600 sm:text-base">
                We aim to create a shopping experience where finding
                something you love feels easy and rewarding. By bringing
                together versatile styles and a customer-focused approach,
                we want to help you build a wardrobe that reflects who
                you are.
              </p>

              <div className="mt-8 border-l-2 border-[#a77548] pl-5">
                <p className="font-serif text-xl italic text-gray-800 sm:text-2xl">
                  “The best style is the one that feels like your own.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-up">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548]">
              The Dreams difference
            </p>

            <Title text1="WHY" text2="CHOOSE US" />
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-md text-sm leading-7 text-gray-500"
          >
            A thoughtful approach to fashion, backed by a shopping
            experience designed around you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4b99e] hover:shadow-xl hover:shadow-black/[0.03] sm:p-9 lg:p-10"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-serif text-3xl italic text-[#c5a17d]">
                  {value.number}
                </span>

                <span className="h-px w-12 bg-gray-200 transition-all duration-300 group-hover:w-20 group-hover:bg-[#a77548]" />
              </div>

              <h3 className="font-serif text-2xl text-gray-900 sm:text-3xl">
                {value.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Vision Banner */}
      <section className="relative overflow-hidden bg-[#1c1c1c] px-6 py-20 text-center text-white sm:px-10 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#a77548]/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl" data-aos="fade-up">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c5a17d]">
            Our philosophy
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Fashion changes.
            <br />
            <span className="italic text-[#c5a17d]">
              Your individuality stays.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            We believe the most meaningful wardrobe is one that works
            for your life, reflects your personality, and gives you the
            freedom to be yourself.
          </p>

          <Link
            to="/collection"
            className="group mt-9 inline-flex items-center gap-8 border border-white/30 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-[#c5a17d] hover:bg-[#c5a17d] hover:text-black sm:text-xs"
          >
            Find your style
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <NewsletterBox />
        </div>
      </section>

    </main>
  );
};

export default About;
