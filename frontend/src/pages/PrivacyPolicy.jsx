
import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you visit or make a purchase from Lumière, we may collect
          information necessary to provide our services.
        </p>
        <h4 className="mt-5 font-medium text-[#28241f]">Personal Information</h4>
        <ul>
          <li>Full name and email address</li>
          <li>Phone number</li>
          <li>Billing and shipping address</li>
        </ul>
        <h4 className="mt-5 font-medium text-[#28241f]">Order Information</h4>
        <ul>
          <li>Products purchased and order history</li>
          <li>Delivery preferences and transaction status</li>
        </ul>
        <h4 className="mt-5 font-medium text-[#28241f]">Technical Information</h4>
        <ul>
          <li>IP address and browser information</li>
          <li>Device details and browsing activity</li>
          <li>Cookies and similar technologies</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use collected information to:</p>
        <ul>
          <li>Process and manage customer orders.</li>
          <li>Confirm purchases and provide order updates.</li>
          <li>Arrange shipping and product delivery.</li>
          <li>Respond to customer inquiries.</li>
          <li>Improve our website and shopping experience.</li>
          <li>Prevent fraudulent transactions.</li>
          <li>Send promotional updates with your consent.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Payment Information",
    content: (
      <p>
        Lumière may use third-party payment providers to process transactions
        securely. We do not intentionally store complete payment card details
        on our website. Payment information is handled according to the
        security practices of the relevant payment provider.
      </p>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: (
      <>
        <p>Our website may use cookies to improve your browsing experience.</p>
        <ul>
          <li>Remember your shopping cart and preferences.</li>
          <li>Understand how visitors interact with our website.</li>
          <li>Improve website performance and functionality.</li>
        </ul>
        <p>
          You can manage or disable cookies through your browser settings.
          Some website features may not function correctly when cookies
          are disabled.
        </p>
      </>
    ),
  },
  {
    title: "5. Sharing Your Information",
    content: (
      <p>
        We do not sell or rent your personal information. We may share
        necessary information with trusted payment providers, shipping
        companies, hosting providers, and technical service providers.
        Information may also be disclosed when required by applicable law.
      </p>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        your personal information against unauthorized access, alteration,
        disclosure, or destruction. However, no internet transmission or
        electronic storage method is completely secure.
      </p>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p>
        We retain personal information only for as long as reasonably
        necessary to process orders, provide customer support, meet legal
        obligations, and resolve disputes. When information is no longer
        needed, we take reasonable steps to delete or securely dispose of it.
      </p>
    ),
  },
  {
    title: "8. Your Privacy Rights",
    content: (
      <>
        <p>Depending on applicable privacy laws, you may have the right to:</p>
        <ul>
          <li>Request access to your personal information.</li>
          <li>Correct inaccurate information.</li>
          <li>Request deletion of your information.</li>
          <li>Withdraw consent for promotional communications.</li>
          <li>Object to certain data processing activities.</li>
        </ul>
        <p>Contact our support team to exercise these rights.</p>
      </>
    ),
  },
  {
    title: "9. Third-Party Links",
    content: (
      <p>
        Our website may contain links to external websites. Lumière is not
        responsible for their privacy practices or security. We encourage
        you to review their privacy policies before sharing information.
      </p>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        Our website is not intentionally designed to collect personal
        information from children without appropriate authorization. If
        we become aware of improper collection, we will take reasonable
        steps to address it.
      </p>
    ),
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this policy to reflect changes in our business
        practices, website functionality, or applicable legal requirements.
        Updates will be published on this page with a revised date.
      </p>
    ),
  },
  {
    title: "12. Contact Us",
    content: (
      <p>
        If you have questions, concerns, or requests regarding this
        Privacy Policy, please contact us through our website's contact
        page or customer support email.
      </p>
    ),
  },
];

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#a77548]">
            Lumière / Customer Care
          </p>

          <h1 className="font-serif text-4xl tracking-tight text-[#28241f] sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-[#a77548]" />

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: October 30, 2026
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Your privacy matters to us. Learn how Lumière collects,
            uses, and protects your personal information.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 rounded-xl border border-[#eee9e2] bg-white p-6 sm:p-9">
          <h2 className="mb-4 font-serif text-2xl text-[#28241f]">
            Your Privacy, Our Priority
          </h2>

          <p className="text-sm leading-8 text-gray-500">
            At Lumière, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy
            explains how we collect, use, store, and protect your
            information when you visit our website, browse our collections,
            or purchase products from us.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="rounded-xl border border-[#eee9e2] bg-white px-6 py-2 sm:px-10">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className={`py-8 ${
                index !== sections.length - 1
                  ? "border-b border-[#eee9e2]"
                  : ""
              }`}
            >
              <h2 className="mb-4 font-serif text-xl text-[#28241f] sm:text-2xl">
                {section.title}
              </h2>

              <div className="space-y-4 text-sm leading-8 text-gray-500 [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-[#a77548] [&_li]:before:content-['•'] [&_ul]:space-y-2">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
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

export default PrivacyPolicy;
