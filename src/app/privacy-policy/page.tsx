import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Napoli in Paris',
  description: 'Our privacy policy explains how we collect, use and protect your personal data when you visit our website.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction</h2>
          <p className="mb-3">
            This Privacy Policy describes how Napoli in Paris LLC collects, uses, and shares personal information that you provide to us when you use our website.
          </p>
          <p>
            We take the protection of your personal data very seriously and respect the provisions of the General Data Protection Regulation (GDPR) and the Data Protection Act.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Data Collection</h2>
          <p className="mb-3">
            We collect different types of information when you interact with our site:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><span className="font-medium">Information provided voluntarily:</span> When you fill out a contact form, place an order or sign up for our newsletter, we collect your personal information (name, email address, telephone number, postal address).</li>
            <li><span className="font-medium">Browsing data:</span> We automatically collect certain information when you visit our site, including your IP address, browser type and version, the pages you view, the date and time of your visit.</li>
            <li><span className="font-medium">Cookies:</span> Our site uses cookies to improve your browsing experience and allow us to analyze site usage.</li>
          </ul>
          <p>
            We do not collect sensitive data as defined by the GDPR, such as information about your racial or ethnic origin, political opinions, religious or philosophical beliefs.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Use of Data</h2>
          <p className="mb-3">
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and deliver your orders</li>
            <li>Contact you regarding your account or order</li>
            <li>Respond to your information requests</li>
            <li>Improve our website and user experience</li>
            <li>Send you marketing information if you have given your consent</li>
            <li>Comply with our legal obligations</li>
            <li>Analyze the use of our site</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Legal Basis for Processing</h2>
          <p className="mb-3">
            We process your personal data on the following legal bases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Consent:</span> When you give us explicit permission to process your data for a specific purpose, such as sending our newsletter.</li>
            <li><span className="font-medium">Contract performance:</span> When processing is necessary for the performance of a contract to which you are a party, such as processing your order.</li>
            <li><span className="font-medium">Legal obligation:</span> When processing is necessary to comply with our legal obligations.</li>
            <li><span className="font-medium">Legitimate interest:</span> When processing is necessary for the purposes of our legitimate interests, such as improving our site and services.</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Data Sharing</h2>
          <p className="mb-3">
            We do not sell your personal data to third parties. We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With our service providers who help us operate our site and provide our services (e.g., delivery services, payment processing)</li>
            <li>If required by law, such as to respond to a legal process or to protect our rights</li>
            <li>In the event of a merger, acquisition or sale of assets, your personal data could be among the transferred assets</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Data Retention</h2>
          <p className="mb-3">
            We retain your personal data for as long as necessary to achieve the purposes for which it was collected, including to meet legal, accounting or reporting requirements.
          </p>
          <p>
            To determine the appropriate retention period, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your data and whether we can achieve those purposes through other means.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, access to your personal data is limited to employees, agents, contractors and other third parties who need to access it for their work. They will only process your personal data on our instructions and are subject to a duty of confidentiality.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your Rights</h2>
          <p className="mb-3">
            In accordance with the GDPR, you have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Right of access:</span> You have the right to obtain a copy of the personal data we hold about you.</li>
            <li><span className="font-medium">Right to rectification:</span> You can request the correction of inaccurate or incomplete personal data.</li>
            <li><span className="font-medium">Right to erasure:</span> You can request the deletion of your personal data in certain circumstances.</li>
            <li><span className="font-medium">Right to restriction of processing:</span> You can request the restriction of processing of your personal data.</li>
            <li><span className="font-medium">Right to data portability:</span> You can request the transfer of your personal data to yourself or to a third party.</li>
            <li><span className="font-medium">Right to object:</span> You can object to the processing of your personal data in certain circumstances.</li>
            <li><span className="font-medium">Right to withdraw consent:</span> When we process your data on the basis of your consent, you have the right to withdraw this consent at any time.</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies</h2>
          <p className="mb-3">
            Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information. You can configure your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          <p className="mb-3">
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Essential cookies:</span> Necessary for the operation of the site.</li>
            <li><span className="font-medium">Analytical cookies:</span> Allow us to analyze site usage in order to improve it.</li>
            <li><span className="font-medium">Functionality cookies:</span> Allow you to remember your preferences and personalize your experience.</li>
            <li><span className="font-medium">Targeting cookies:</span> Used to show you relevant advertisements (if applicable).</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
          <p className="mb-3">
            For any questions regarding this privacy policy or to exercise your rights, please contact us:
          </p>
          <ul className="space-y-2">
            <li><span className="font-medium">By email:</span> gdpr@pizzeria.com</li>
            <li><span className="font-medium">By mail:</span> Napoli in Paris LLC, 123 Pizza Street, 75001 Paris, France</li>
            <li><span className="font-medium">By phone:</span> +33 1 23 45 67 89</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Supervisory Authority</h2>
          <p>
            If you believe that the processing of your personal data constitutes a violation of the GDPR, you have the right to lodge a complaint with the relevant data protection authority in your country.
          </p>
        </section>

        <p className="text-center text-gray-500 text-sm mt-12">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
} 