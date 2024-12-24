"use client"

import {useAppContext} from "@/context/AppContext";
import Link from "next/link";
import React from "react";

export default function TermsOfUsePage() {

  const {sharedState: data} = useAppContext();

  return (
    <div className="container mx-auto px-4 py-8 sm:w-3/4">
      <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Welcome to {data.siteName}, a service provided by {data.siteName}. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
        <p>
          By using our website, products, or services, you acknowledge that you have read, understood, and agree to these Terms of Use. If you do not agree with these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Modifications to the Terms</h2>
        <p>
          We reserve the right to modify or update these terms at any time. Any changes will be effective immediately upon posting to this page. It is your responsibility to review these terms periodically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
        <p>
          As a user of our services, you agree to:
        </p>
        <ul className="list-disc ml-6">
          <li>Provide accurate and complete information.</li>
          <li>Use our services in compliance with all applicable laws and regulations.</li>
          <li>Not engage in any unlawful activity or behavior that could harm the service or other users.</li>
          <li>Maintain the confidentiality of your account credentials, if applicable.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Restrictions on Use</h2>
        <p>
          You may not:
        </p>
        <ul className="list-disc ml-6">
          <li>Copy, distribute, or modify any content without authorization.</li>
          <li>Use our services for illegal, harmful, or unethical purposes.</li>
          <li>Attempt to interfere with the operation of our website or services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
        <p>
          Your use of our services is also governed by our Privacy Policy, which can be found <Link href={'/privacypolicy'} className={'underline text-blue-700 font-bold'}>here</Link>. Please review it to understand how we collect, use, and protect your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
        <p>
          We may suspend or terminate your access to our services if you violate these terms or engage in any behavior that harms our platform or users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
        <p>
          Our services are provided “as is” and “as available” without warranties of any kind, either express or implied. We do not guarantee that our services will always be available, error-free, or meet your expectations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, {data.siteName} will not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance with the laws of California, USA. Any disputes related to these terms shall be subject to the exclusive jurisdiction of the courts in {data.address}.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms of Use, please contact us at:
        </p>
        <p className="text-gray-600">
          Email: <a href={`mailto:${data.email}`} className="text-blue-600">{data.email}</a>
        </p>
        <p>Phone: {data.phone}</p>
      </section>
    </div>
  );
};