"use client"
import React from 'react';
import {useAppContext} from "@/context/AppContext";

const PrivacyPolicy = () => {
  const {sharedState: data} = useAppContext();

  return (
    <div className="container mx-auto px-4 py-8 sm:w-3/4">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
        <p className="text-gray-600">
          We collect only the following types of personal information when you use our website:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-600">
          <li><strong>Name:</strong> Your full name</li>
          <li><strong>Email Address:</strong> Your email address</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
        <p className="text-gray-600">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-600">
          <li>To provide and improve our services.</li>
          <li>To respond to inquiries or provide support.</li>
          <li>To send you updates, if you have opted-in to receive emails.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">3. Data Sharing and Disclosure</h2>
        <p className="text-gray-600">
          We do not sell, rent, or lease your personal data to third parties. However, we may share your information in the following cases:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-600">
          <li>If required by law, to comply with legal obligations.</li>
          <li>With third-party service providers to help us manage our website or services (e.g., email delivery services).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">4. Data Security</h2>
        <p className="text-gray-600">
          We implement reasonable security measures to protect the personal information you provide to us. However, please understand that no method of transmission over the internet is completely secure, and we cannot guarantee the absolute security of your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">5. Your Rights</h2>
        <p className="text-gray-600">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-600">
          <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> You can request that we correct any inaccuracies in your data.</li>
          <li><strong>Deletion:</strong> You can request that we delete your personal data.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date" at the top.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:
        </p>
        <p className="text-gray-600">
          Email: <a href={`mailto:${data.email}`} className="text-blue-600">{data.email}</a>
        </p>
      </section>

      <div className="text-center mt-8 text-sm text-gray-500">
        <p>&copy; 2024 {data.siteName}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
