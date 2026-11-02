
import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API or email service here.
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-[#faf9f6] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl"
      />

      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200/80 bg-white px-5 py-12 shadow-sm sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        data-aos="fade-up"
      >
        {/* Decorative accent */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 bg-amber-600"
        />

        <div className="mx-auto max-w-2xl text-center">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-amber-600" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs">
              A little something special
            </p>
            <span className="h-px w-7 bg-amber-600" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-light leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Good style.
            <br />
            <span className="font-semibold">Great rewards.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Subscribe to our newsletter for new arrivals, exclusive
            offers, style inspiration, and 20% off your first order.
          </p>

          {/* Newsletter form */}
          <form
            onSubmit={onSubmitHandler}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:rounded-full sm:border sm:border-gray-200 sm:bg-[#faf9f6] sm:p-1.5 sm:transition-all sm:duration-300 sm:focus-within:border-amber-500 sm:focus-within:ring-4 sm:focus-within:ring-amber-100/70"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
              }}
              placeholder="Enter your email address"
              required
              className="min-w-0 flex-1 rounded-full border border-gray-200 bg-[#faf9f6] px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 sm:border-0 sm:bg-transparent sm:py-3 sm:focus:border-transparent"
            />

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gray-900 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 sm:px-8 sm:py-3.5"
            >
              Subscribe
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </form>

          {/* Feedback */}
          {subscribed ? (
            <p
              role="status"
              className="mt-5 text-sm font-medium text-green-700"
            >
              Thank you for your interest! Newsletter signup needs to be
              connected to our email service to complete your subscription.
            </p>
          ) : (
            <p className="mt-5 text-[11px] leading-5 text-gray-400">
              By subscribing, you agree to receive marketing emails.
              Unsubscribe anytime.
            </p>
          )}

          {/* Trust details */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-gray-100 pt-6 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-400 sm:gap-x-8">
            <span className="flex items-center gap-2">
              <span className="text-amber-600">✓</span>
              Exclusive offers
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-600">✓</span>
              New arrivals
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-600">✓</span>
              No spam
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterBox;
