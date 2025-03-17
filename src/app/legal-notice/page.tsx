import React from 'react';

export const metadata = {
  title: 'Mentions Légales - Napoli in Paris',
  description: 'Mentions légales pour notre Napoli in Paris. Informations sur l\'éditeur du site, l\'hébergement et les conditions d\'utilisation.',
};

export default function LegalNotice() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Mentions Légales</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Éditeur du site</h2>
          <p className="mb-2"><span className="font-medium">Nom de la société :</span> Napoli in Paris LLC</p>
          <p className="mb-2"><span className="font-medium">Adresse :</span> 123 Pizza Street, 75001 Paris, France</p>
          <p className="mb-2"><span className="font-medium">Téléphone :</span> +33 1 23 45 67 89</p>
          <p className="mb-2"><span className="font-medium">Email :</span> contact@pizzeria.com</p>
          <p className="mb-2"><span className="font-medium">ID d&apos;entreprise :</span> 123 456 789 00012</p>
          <p className="mb-2"><span className="font-medium">Capital social :</span> 10 000 €</p>
          <p className="mb-2"><span className="font-medium">Directeur de publication :</span> John Smith</p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hébergement</h2>
          <p className="mb-2"><span className="font-medium">Nom de l&apos;hébergeur :</span> Vercel Inc.</p>
          <p className="mb-2"><span className="font-medium">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          <p className="mb-2"><span className="font-medium">Site web :</span> <a href="https://vercel.com" className="text-red-500 hover:text-red-700 transition-colors" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Propriété Intellectuelle</h2>
          <p className="mb-3">
            Tout le contenu du site (textes, images, vidéos, logos, etc.) est protégé par le droit d&apos;auteur et reste la propriété exclusive de Napoli in Paris LLC.
            Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le processus utilisé, est interdite sans autorisation écrite préalable de Napoli in Paris LLC.
          </p>
          <p>
            Les marques et logos présents sur le site sont des marques déposées de Napoli in Paris LLC ou de ses partenaires. Toute reproduction non autorisée constitue une contrefaçon passible de sanctions.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Données Personnelles</h2>
          <p className="mb-3">
            Nous nous engageons à protéger la vie privée des utilisateurs de notre site conformément au Règlement Général sur la Protection des Données (RGPD) et à la Loi sur la Protection des Données.
          </p>
          <p className="mb-3">
            Les données personnelles collectées sur ce site sont destinées à Napoli in Paris LLC et ne sont en aucun cas transférées ou vendues à des tiers. Elles sont utilisées uniquement dans le cadre de la gestion de la relation client et pour améliorer nos services.
          </p>
          <p>
            Conformément à la réglementation en vigueur, vous avez le droit d\&apos;accéder, de rectifier, de supprimer et de vous opposer à vos données personnelles. Pour exercer ces droits, veuillez nous contacter par email à : gdpr@pizzeria.com.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies</h2>
          <p className="mb-3">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous permettent d\&apos;analyser l\&apos;utilisation du site.
          </p>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies ou pour être alerté lorsque des cookies sont envoyés. Cependant, certaines parties du site peuvent ne pas fonctionner correctement si vous désactivez les cookies.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Limitation de Responsabilité</h2>
          <p>
            Napoli in Paris LLC ne peut être tenu responsable des dommages directs ou indirects résultant de l\&apos;utilisation du site, y compris mais sans s\&apos;y limiter, la perte de données, les pertes financières ou les interruptions d\&apos;activité. Nous nous efforçons de maintenir les informations du site à jour, mais ne garantissons pas l\&apos;exactitude, l\&apos;exhaustivité ou la pertinence des informations fournies.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Droit Applicable et Juridiction</h2>
          <p>
            Cette mention légale est soumise au droit français. En cas de litige, les tribunaux français auront compétence exclusive.
          </p>
        </section>

        <p className="text-center text-gray-500 text-sm mt-12">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
} 