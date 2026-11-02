
import React from "react";
import { Link } from "react-router-dom";

const returnSteps = [
  {
    number: "01",
    title: "Contact Our Team",
    description:
      "Reach out to our customer support team with your order number and reason for the return or exchange.",
  },
  {
    number: "02",
    title: "Get Approval",
    description:
      "Our team will review your request and provide instructions for returning your item.",
  },
  {
    number: "03",
    title: "Send Your Item",
    description:
      "Pack the product securely with its original packaging and send it according to our instructions.",
  },
  {
    number: "04",
    title: "Receive Your Resolution",
    description:
      "Once your returned item has been inspected and approved, we will process your eligible refund or exchange.",
  },
];

const policies = [
  {
    title: "Return Eligibility",
    description:
      "Items must be unused, unworn, unwashed, and in their original condition with all tags and packaging intact. Proof of purchase or a valid order number is required.",
  },
  {
    title: "Exchange Policy",
    description:
      "Exchanges are subject to product availability. If your preferred size or item is unavailable, our team can help you explore alternative options.",
  },
  {
    title: "Refund Policy",
    description:
      "Approved refunds will be processed through the original payment method where possible. The time required for the refund to appear may depend on your payment provider.",
  },
  {
    title: "Non-Returnable Items",
    description:
      "Items marked as final sale or otherwise identified as non-returnable at the time of purchase may not be eligible for returns, except where required by applicable law.",
  },
];

function Returns() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#a77548]">
            Lumière / Customer Care
          </p>

          <h1 className="font-serif text-4xl tracking-tight text-[#28241f] sm:text-5xl lg:text-6xl">
            Returns & Exchanges
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-[#a77548]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            We want you to love every purchase. If something isn't quite
            right, our team is here to help make your shopping experience
            simple and comfortable.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8 rounded-xl border border-[#eee9e2] bg-white p-6 sm:p-9">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#a77548]">
            Our Promise
          </span>

          <h2 className="mt-3 font-serif text-2xl text-[#28241f] sm:text-3xl">
            Your satisfaction matters to us.
          </h2>

          <p className="mt-4 text-sm leading-8 text-gray-500">
            At Lumière, every detail matters. We carefully prepare each
            order to ensure it reaches you in excellent condition. If
            you receive an item that does not meet your expectations,
            you can contact our support team to discuss an eligible
            return or exchange.
          </p>
        </section>

        {/* Return policy */}
        <section className="mb-8 rounded-xl border border-[#eee9e2] bg-white px-6 py-8 sm:px-10">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a77548]">
              Before You Return
            </p>

            <h2 className="mt-3 font-serif text-2xl text-[#28241f] sm:text-3xl">
              Our Return Policy
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Please review the following conditions before submitting
              your return or exchange request.
            </p>
          </div>

          <div className="divide-y divide-[#eee9e2]">
            {policies.map((policy, index) => (
              <div
                key={policy.title}
                className="flex gap-5 py-6 first:pt-0 last:pb-0"
              >
                <span className="pt-1 font-serif text-lg text-[#a77548]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-medium text-[#28241f]">
                    {policy.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {policy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-8 rounded-xl border border-[#eee9e2] bg-white px-6 py-8 sm:px-10">
          <div className="mb-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a77548]">
              Simple & Convenient
            </p>

            <h2 className="mt-3 font-serif text-2xl text-[#28241f] sm:text-3xl">
              How It Works
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Follow these simple steps to request a return or exchange.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {returnSteps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d9c6ae] font-serif text-sm text-[#a77548]">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-medium text-[#28241f]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-8 rounded-xl border border-[#eee9e2] bg-[#f1eee8] p-6 sm:p-9">
          <h2 className="font-serif text-2xl text-[#28241f]">
            A Few Things to Remember
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-600">
            <li>• Always contact our team before sending an item back.</li>
            <li>• Include your order number with your return request.</li>
            <li>• Keep your product and original packaging in good condition.</li>
            <li>• Return shipping arrangements and costs will be confirmed by our team.</li>
            <li>• Refund and return rights required by applicable law will always be respected.</li>
          </ul>
        </section>

        {/* Contact CTA */}
        <section className="rounded-xl bg-[#28241f] px-6 py-12 text-center sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c6a77f]">
            We're Here to Help
          </p>

          <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
            Need Help With a Return?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">
            Have questions about your order or need assistance with
            an exchange? Get in touch with our customer support team.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#a77548] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-white hover:text-[#28241f]"
          >
            Contact Us
          </Link>
        </section>

        {/* Bottom */}
        <div className="mt-10 text-center">
          <p className="font-serif text-xl text-[#a77548]">
            Lumière
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-400">
            Timeless Style. Everyday Elegance.
          </p>
        </div>

      </div>
    </main>
  );
}

export default Returns;
