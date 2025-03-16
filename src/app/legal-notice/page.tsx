import React from 'react';

export const metadata = {
  title: 'Legal Notice - Artisanal Pizzeria',
  description: 'Legal notice for our artisanal pizzeria. Information about the website editor, hosting and terms of use.',
};

export default function LegalNotice() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Legal Notice</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Website Editor</h2>
          <p className="mb-2"><span className="font-medium">Company name:</span> Artisanal Pizzeria LLC</p>
          <p className="mb-2"><span className="font-medium">Address:</span> 123 Pizza Street, 75001 Paris, France</p>
          <p className="mb-2"><span className="font-medium">Phone:</span> +33 1 23 45 67 89</p>
          <p className="mb-2"><span className="font-medium">Email:</span> contact@pizzeria.com</p>
          <p className="mb-2"><span className="font-medium">Business ID:</span> 123 456 789 00012</p>
          <p className="mb-2"><span className="font-medium">Share capital:</span> €10,000</p>
          <p className="mb-2"><span className="font-medium">Publication Director:</span> John Smith</p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hosting</h2>
          <p className="mb-2"><span className="font-medium">Host name:</span> Vercel Inc.</p>
          <p className="mb-2"><span className="font-medium">Address:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          <p className="mb-2"><span className="font-medium">Website:</span> <a href="https://vercel.com" className="text-red-500 hover:text-red-700 transition-colors" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Intellectual Property</h2>
          <p className="mb-3">
            All content on the site (texts, images, videos, logos, etc.) is protected by copyright and remains the exclusive property of Artisanal Pizzeria LLC.
            Any reproduction, representation, modification, publication, adaptation or exploitation of all or part of the elements of the site, regardless of the means or process used, is prohibited without prior written authorization from Artisanal Pizzeria LLC.
          </p>
          <p>
            The trademarks and logos present on the site are registered trademarks of Artisanal Pizzeria LLC or its partners. Any unauthorized reproduction constitutes an infringement liable to sanctions.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Data</h2>
          <p className="mb-3">
            We are committed to protecting the privacy of users of our site in accordance with the General Data Protection Regulation (GDPR) and the Data Protection Act.
          </p>
          <p className="mb-3">
            Personal data collected on this site is intended for Artisanal Pizzeria LLC and is in no way transferred or sold to third parties. They are used only in the context of customer relationship management and to improve our services.
          </p>
          <p>
            In accordance with current regulations, you have the right to access, rectify, delete and object to your personal data. To exercise these rights, please contact us by email at: gdpr@pizzeria.com.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies</h2>
          <p className="mb-3">
            Our site uses cookies to improve your browsing experience. Cookies are small text files stored on your computer that allow us to analyze site usage.
          </p>
          <p>
            You can configure your browser to refuse cookies or to be alerted when cookies are sent. However, some parts of the site may not function properly if you disable cookies.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Limitation of Liability</h2>
          <p>
            Artisanal Pizzeria LLC cannot be held responsible for direct or indirect damages resulting from the use of the site, including but not limited to, data loss, financial losses or business interruptions. We strive to keep the site information up to date, but do not guarantee the accuracy, completeness or relevance of the information provided.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Applicable Law and Jurisdiction</h2>
          <p>
            This legal notice is subject to French law. In case of dispute, French courts will have exclusive jurisdiction.
          </p>
        </section>

        <p className="text-center text-gray-500 text-sm mt-12">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
} 