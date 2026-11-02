
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this handler to your backend or email service
    // before using the form to receive real customer messages.
    const subject = encodeURIComponent(
      formData.subject || 'Customer inquiry'
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:Lumiere@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactDetails = [
    {
      number: '01',
      title: 'Visit Our Store',
      description: (
        <>
          Near Liberty Market
          <br />
          Suite 350, Lahore
        </>
      ),
    },
    {
      number: '02',
      title: 'Call Us',
      description: (
        <a
          href="tel:+14155550132"
          className="transition-colors hover:text-[#a77548]"
        >
          (344) 555-0132
        </a>
      ),
    },
    {
      number: '03',
      title: 'Email Us',
      description: (
        <a
          href="mailto:Lumiere@gmail.com"
          className="break-all transition-colors hover:text-[#a77548]"
        >
          Lumiere@gmail.com
        </a>
      ),
    },
  ];

  return (
    <main className="overflow-hidden border-t border-gray-100 bg-[#faf9f6] text-[#1c1c1c]">

      {/* Hero */}
      <section className="mx-auto grid max-w-[1600px] grid-cols-1 md:min-h-[420px] md:grid-cols-2">
        <div className="flex items-center px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          <div className="max-w-xl">
            <p
              data-aos="fade-up"
              className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548] sm:text-xs"
            >
              <span className="h-px w-8 bg-[#a77548]" />
              We would love to hear from you
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-serif text-5xl leading-[1.1] sm:text-6xl lg:text-7xl"
            >
              Let's start a
              <br />
              <span className="italic text-[#a77548]">conversation.</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-8"
            >
              Have a question about an order, need help finding your
              style, or simply want to get in touch? We're here to help
              make your shopping experience a little easier.
            </p>

            <a
              href="#contact-form"
              data-aos="fade-up"
              data-aos-delay="300"
              className="group mt-8 inline-flex items-center gap-8 bg-[#1c1c1c] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#a77548] sm:text-xs"
            >
              Send us a message
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div
          data-aos="fade-in"
          className="group relative min-h-[330px] overflow-hidden sm:min-h-[420px] md:min-h-0"
        >
          <img
            src={assets.contact_img}
            alt="Get in touch with Dreams Clothing"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

          <div className="absolute bottom-8 left-7 border-l border-white/70 pl-4 text-white sm:bottom-10 sm:left-10">
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
              Dreams Clothing
            </p>
            <p className="mt-2 font-serif text-2xl italic sm:text-3xl">
              Here for your style.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mb-10" data-aos="fade-up">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548]">
              Get in touch
            </p>
            <Title text1="WE'RE" text2="HERE TO HELP" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="border border-gray-200 bg-[#faf9f6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4b99e] hover:shadow-lg hover:shadow-black/[0.03] sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-serif text-3xl italic text-[#c5a17d]">
                    {item.number}
                  </span>
                  <span className="h-px w-12 bg-gray-200" />
                </div>

                <h3 className="font-serif text-2xl text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Store Information */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* Form */}
          <div
            id="contact-form"
            data-aos="fade-up"
            className="border border-gray-200 bg-white p-6 sm:p-9 lg:p-12"
          >
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548]">
              Drop us a line
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl">
              How can we help?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Fill in the details below and let us know what's on your mind.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-gray-700"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#a77548]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#a77548]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  className="w-full border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#a77548]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-gray-700"
                >
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="w-full resize-y border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#a77548]"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-4 bg-[#1c1c1c] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#a77548] sm:w-auto"
              >
                Send message
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-xs leading-5 text-gray-400">
                Your email app will open with your message prepared.
                You can review and send it from there.
              </p>
            </form>
          </div>

          {/* Store and Careers */}
          <div className="flex flex-col gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548]">
                Find us
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl">
                Our store
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                Near Liberty Market
                <br />
                Suite 350, Lahore
              </p>

              <div className="mt-6 space-y-3 border-t border-gray-200 pt-6 text-sm text-gray-600">
                <p>
                  <span className="mr-2 text-gray-400">Phone</span>
                  <a
                    href="tel:+14155550132"
                    className="transition-colors hover:text-[#a77548]"
                  >
                    (344) 555-0132
                  </a>
                </p>

                <p className="break-words">
                  <span className="mr-2 text-gray-400">Email</span>
                  <a
                    href="mailto:Lumiere@gmail.com"
                    className="transition-colors hover:text-[#a77548]"
                  >
                    Lumiere@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-[#eee9e1] p-7 sm:p-9"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#a77548]">
                Grow with us
              </p>

              <h3 className="mt-4 font-serif text-3xl">
                A place for new ideas.
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Interested in working with Dreams Clothing? Get in touch
                to ask about potential opportunities and future openings.
              </p>

              <a
                href="mailto:Lumiere@gmail.com?subject=Careers%20at%20Dreams%20Clothing"
                className="group mt-6 inline-flex items-center gap-4 border-b border-gray-800 pb-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-900 transition-colors hover:border-[#a77548] hover:text-[#a77548]"
              >
                Ask about careers
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <NewsletterBox />
        </div>
      </section>

    </main>
  );
};

export default Contact;
