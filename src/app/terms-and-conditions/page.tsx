import React from 'react';

export const metadata = {
  title: 'Terms and Conditions - Artisanal Pizzeria',
  description: 'Terms and Conditions of our artisanal pizzeria. Information about orders, delivery, payment, and returns.',
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms and Conditions</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 1 - Preamble</h2>
          <p className="mb-3">
            These Terms and Conditions (hereinafter &quot;T&C&quot;) apply to all orders placed on the website www.pizzeria.com (hereinafter &quot;the Site&quot;) and to the delivery and takeaway services of Artisanal Pizzeria LLC (hereinafter &quot;Pizzeria&quot;).
          </p>
          <p>
            Any order placed on the Site implies full and complete acceptance of these T&C by the customer. Pizzeria reserves the right to modify these T&C at any time, with the modifications taking effect from the time they are posted on the Site.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 2 - Products and Prices</h2>
          <p className="mb-3">
            The products offered for sale are those that appear on the Site and in our restaurants, subject to availability. The photographs of the products are presented for illustrative purposes only and have no contractual value.
          </p>
          <p className="mb-3">
            Prices are indicated in euros including all taxes (VAT). Pizzeria reserves the right to change its prices at any time, but products will be invoiced based on the rates in effect at the time the order is confirmed.
          </p>
          <p>
            Delivery charges may be applied depending on the geographical area and the amount of the order. These charges are clearly indicated during the ordering process before confirmation.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 3 - Orders</h2>
          <p className="mb-3">
            To place an order, the customer must follow these steps:
          </p>
          <ul className="list-decimal pl-6 space-y-2 mb-3">
            <li>Select products and add them to the cart</li>
            <li>Check the cart contents and proceed to payment</li>
            <li>Create an account or log in to an existing account</li>
            <li>Enter delivery information or choose the takeaway option</li>
            <li>Choose the payment method and confirm the order</li>
          </ul>
          <p className="mb-3">
            Once the order is confirmed, a confirmation email is sent to the email address provided by the customer. The order is only definitively registered after receipt of payment.
          </p>
          <p>
            Pizzeria reserves the right to refuse or cancel any order in case of a dispute with the customer, non-compliance with the information provided, or a problem with the order.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 4 - Payment</h2>
          <p className="mb-3">
            Payment can be made by the following methods:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Credit card (Visa, MasterCard)</li>
            <li>PayPal</li>
            <li>Cash (only for takeaway orders or upon delivery)</li>
            <li>Meal vouchers (only in our establishments)</li>
          </ul>
          <p>
            Credit card payment is processed through a secure interface. Bank data is encrypted and never transmitted in clear text over the network. Pizzeria never has access to confidential information related to the payment method.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 5 - Delivery</h2>
          <p className="mb-3">
            Delivery is offered within a 5 km radius around our establishment. Delivery times are given as an indication and may vary depending on traffic, weather conditions or customer volume.
          </p>
          <p className="mb-3">
            In case of a delivery delay of more than 30 minutes compared to the announced time, the customer may receive a discount voucher for a future order.
          </p>
          <p>
            If no one is present at the delivery address, the delivery person will attempt to contact the customer. If there is no response, the order will be returned to our establishment and the customer will have to pick it up within 2 hours. No refund will be made in this case.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 6 - Right of Withdrawal and Complaints</h2>
          <p className="mb-3">
            In accordance with consumer protection laws, the right of withdrawal cannot be exercised for perishable food products.
          </p>
          <p className="mb-3">
            Any complaint regarding product quality or an error in the order must be reported immediately upon receipt of the order by contacting our customer service by phone or email.
          </p>
          <p>
            In case of a missing or non-conforming product, Pizzeria undertakes to offer a replacement or a refund of the product concerned, provided that the complaint is made within 2 hours following the receipt of the order.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 7 - Liability</h2>
          <p className="mb-3">
            Pizzeria cannot be held responsible for damages of any kind that may result from a temporary unavailability of the Site or the impossibility of making a delivery due to a case of force majeure.
          </p>
          <p>
            Information on allergens present in our products is available on the Site and upon request in our establishments. It is the customer&apos;s responsibility to check the composition of the products and to report any allergies when ordering.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 8 - Protection of Personal Data</h2>
          <p className="mb-3">
            The information collected during the order is necessary for the processing of the order and the management of the commercial relationship. It may be transmitted to companies that contribute to these relationships, such as those responsible for delivery or payment.
          </p>
          <p>
            In accordance with the General Data Protection Regulation (GDPR), the customer has the right to access, rectify, oppose and delete data concerning them. To exercise these rights, the customer can contact Pizzeria at the email address: gdpr@pizzeria.com. For more information, please refer to our Privacy Policy.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 9 - Intellectual Property</h2>
          <p>
            All elements of the Site (texts, images, logos, etc.) are the exclusive property of Pizzeria or its partners. Any reproduction, representation, modification or exploitation of all or part of these elements is strictly prohibited without prior authorization.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 10 - Applicable Law and Disputes</h2>
          <p className="mb-3">
            These T&C are subject to French law. In case of dispute, French courts will have exclusive jurisdiction.
          </p>
          <p>
            In accordance with consumer code provisions regarding the amicable settlement of disputes, the customer may use the mediation service MEDICYS, accessible at: www.medicys.fr or by mail at MEDICYS - 73 Boulevard de Clichy, 75009 Paris.
          </p>
        </section>

        <p className="text-center text-gray-500 text-sm mt-12">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
} 