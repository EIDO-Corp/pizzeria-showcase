import React from 'react';

export const metadata = {
  title: 'Politique de Confidentialité - Napoli in Paris',
  description: 'Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous visitez notre site web.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Politique de Confidentialité</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction</h2>
          <p className="mb-3">
            Cette Politique de Confidentialité décrit comment Napoli in Paris LLC collecte, utilise et partage les informations personnelles que vous nous fournissez lorsque vous utilisez notre site web.
          </p>
          <p>
            Nous prenons très au sérieux la protection de vos données personnelles et respectons les dispositions du Règlement Général sur la Protection des Données (RGPD) et de la Loi sur la Protection des Données.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Collecte de Données</h2>
          <p className="mb-3">
            Nous collectons différents types d&apos;informations lorsque vous interagissez avec notre site :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><span className="font-medium">Informations fournies volontairement :</span> Lorsque vous remplissez un formulaire de contact, passez une commande ou vous inscrivez à notre newsletter, nous collectons vos informations personnelles (nom, adresse e-mail, numéro de téléphone, adresse postale).</li>
            <li><span className="font-medium">Données de navigation :</span> Nous collectons automatiquement certaines informations lorsque vous visitez notre site, y compris votre adresse IP, le type et la version de votre navigateur, les pages que vous consultez, la date et l&apos;heure de votre visite.</li>
            <li><span className="font-medium">Cookies :</span> Notre site utilise des cookies pour améliorer votre expérience de navigation et nous permettre d&apos;analyser l&apos;utilisation du site.</li>
          </ul>
          <p>
            Nous ne collectons pas de données sensibles telles que définies par le RGPD, comme des informations sur votre origine raciale ou ethnique, vos opinions politiques, vos croyances religieuses ou philosophiques.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Utilisation des Données</h2>
          <p className="mb-3">
            Les informations que nous collectons sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Traiter et livrer vos commandes</li>
            <li>Vous contacter concernant votre compte ou votre commande</li>
            <li>Répondre à vos demandes d&apos;informations</li>
            <li>Améliorer notre site web et l&apos;expérience utilisateur</li>
            <li>Vous envoyer des informations marketing si vous avez donné votre consentement</li>
            <li>Respecter nos obligations légales</li>
            <li>Analyser l&apos;utilisation de notre site</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Base Légale du Traitement</h2>
          <p className="mb-3">
            Nous traitons vos données personnelles sur les bases légales suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Consentement :</span> Lorsque vous nous donnez explicitement la permission de traiter vos données pour un but spécifique, comme l&apos;envoi de notre newsletter.</li>
            <li><span className="font-medium">Exécution du contrat :</span> Lorsque le traitement est nécessaire à l&apos;exécution d&apos;un contrat auquel vous êtes partie, comme le traitement de votre commande.</li>
            <li><span className="font-medium">Obligation légale :</span> Lorsque le traitement est nécessaire pour respecter nos obligations légales.</li>
            <li><span className="font-medium">Intérêt légitime :</span> Lorsque le traitement est nécessaire aux fins de nos intérêts légitimes, comme l&apos;amélioration de notre site et de nos services.</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Partage de Données</h2>
          <p className="mb-3">
            Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations dans les situations suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Avec nos prestataires de services qui nous aident à faire fonctionner notre site et à fournir nos services (par exemple, services de livraison, traitement des paiements)</li>
            <li>Si requis par la loi, par exemple pour répondre à un processus légal ou pour protéger nos droits</li>
            <li>En cas de fusion, d&apos;acquisition ou de vente d&apos;actifs, vos données personnelles pourraient faire partie des actifs transférés</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Conservation des Données</h2>
          <p className="mb-3">
            Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées, y compris pour répondre aux exigences légales, comptables ou de reporting.
          </p>
          <p>
            Pour déterminer la durée de conservation appropriée, nous prenons en compte la quantité, la nature et la sensibilité des données personnelles, le risque potentiel de préjudice en cas d&apos;utilisation ou de divulgation non autorisée, les objectifs pour lesquels nous traitons vos données et si nous pouvons atteindre ces objectifs par d&apos;autres moyens.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Sécurité des Données</h2>
          <p>
            Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient accidentellement perdues, utilisées ou accessibles de manière non autorisée, altérées ou divulguées. De plus, l&apos;accès à vos données personnelles est limité aux employés, agents, sous-traitants et autres tiers qui ont besoin d&apos;y accéder pour leur travail. Ils ne traiteront vos données personnelles que sur nos instructions et sont soumis à un devoir de confidentialité.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Vos Droits</h2>
          <p className="mb-3">
            Conformément au RGPD, vous avez les droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Droit d&apos;accès :</span> Vous avez le droit d&apos;obtenir une copie des données personnelles que nous détenons à votre sujet.</li>
            <li><span className="font-medium">Droit de rectification :</span> Vous pouvez demander la correction de données personnelles inexactes ou incomplètes.</li>
            <li><span className="font-medium">Droit à l&apos;effacement :</span> Vous pouvez demander la suppression de vos données personnelles dans certaines circonstances.</li>
            <li><span className="font-medium">Droit à la limitation du traitement :</span> Vous pouvez demander la limitation du traitement de vos données personnelles.</li>
            <li><span className="font-medium">Droit à la portabilité des données :</span> Vous pouvez demander le transfert de vos données personnelles à vous-même ou à un tiers.</li>
            <li><span className="font-medium">Droit d&apos;opposition :</span> Vous pouvez vous opposer au traitement de vos données personnelles dans certaines circonstances.</li>
            <li><span className="font-medium">Droit de retirer le consentement :</span> Lorsque nous traitons vos données sur la base de votre consentement, vous avez le droit de retirer ce consentement à tout moment.</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies</h2>
          <p className="mb-3">
            Les cookies sont de petits fichiers texte placés sur votre appareil pour collecter des informations standard sur les journaux Internet et le comportement des visiteurs. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer lorsqu&apos;un cookie est envoyé.
          </p>
          <p className="mb-3">
            Nous utilisons les types de cookies suivants :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Cookies essentiels :</span> Nécessaires au fonctionnement du site.</li>
            <li><span className="font-medium">Cookies analytiques :</span> Nous permettent d&apos;analyser l&apos;utilisation du site afin de l&apos;améliorer.</li>
            <li><span className="font-medium">Cookies de fonctionnalité :</span> Vous permettent de vous souvenir de vos préférences et de personnaliser votre expérience.</li>
            <li><span className="font-medium">Cookies de ciblage :</span> Utilisés pour vous montrer des publicités pertinentes (le cas échéant).</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
          <p className="mb-3">
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter :
          </p>
          <ul className="space-y-2">
            <li><span className="font-medium">Par e-mail :</span> gdpr@pizzeria.com</li>
            <li><span className="font-medium">Par courrier :</span> Napoli in Paris LLC, 123 Pizza Street, 75001 Paris, France</li>
            <li><span className="font-medium">Par téléphone :</span> +33 1 23 45 67 89</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Autorité de Contrôle</h2>
          <p>
            Si vous pensez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit de déposer une plainte auprès de l&apos;autorité de protection des données compétente dans votre pays.
          </p>
        </section>

        <p className="text-center text-gray-500 text-sm mt-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
      </div>
    </div>
  );
} 