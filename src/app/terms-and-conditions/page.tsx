import React from 'react';

export const metadata = {
  title: 'Conditions Générales - Napoli in Paris',
  description: 'Conditions Générales de notre Napoli in Paris. Informations sur les commandes, la livraison, le paiement et les retours.',
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Conditions Générales</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 1 - Préambule</h2>
          <p className="mb-3">
            Ces Conditions Générales (ci-après &quot;CG&quot;) s&apos;appliquent à toutes les commandes passées sur le site www.pizzeria.com (ci-après &quot;le Site&quot;) et aux services de livraison et de vente à emporter de Napoli in Paris LLC (ci-après &quot;Pizzeria&quot;).
          </p>
          <p>
            Toute commande passée sur le Site implique l&apos;acceptation pleine et entière de ces CG par le client. Pizzeria se réserve le droit de modifier ces CG à tout moment, les modifications prenant effet à partir du moment où elles sont publiées sur le Site.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 2 - Produits et Prix</h2>
          <p className="mb-3">
            Les produits proposés à la vente sont ceux qui apparaissent sur le Site et dans nos restaurants, sous réserve de disponibilité. Les photographies des produits sont présentées à titre illustratif uniquement et n&apos;ont aucune valeur contractuelle.
          </p>
          <p className="mb-3">
            Les prix sont indiqués en euros toutes taxes comprises (TVA). Pizzeria se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la confirmation de la commande.
          </p>
          <p>
            Des frais de livraison peuvent être appliqués en fonction de la zone géographique et du montant de la commande. Ces frais sont clairement indiqués lors du processus de commande avant confirmation.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 3 - Commandes</h2>
          <p className="mb-3">
            Pour passer une commande, le client doit suivre ces étapes :
          </p>
          <ul className="list-decimal pl-6 space-y-2 mb-3">
            <li>Sélectionner des produits et les ajouter au panier</li>
            <li>Vérifier le contenu du panier et procéder au paiement</li>
            <li>Créer un compte ou se connecter à un compte existant</li>
            <li>Entrer les informations de livraison ou choisir l&apos;option de vente à emporter</li>
            <li>Choisir le mode de paiement et confirmer la commande</li>
          </ul>
          <p className="mb-3">
            Une fois la commande confirmée, un e-mail de confirmation est envoyé à l&apos;adresse e-mail fournie par le client. La commande n&apos;est définitivement enregistrée qu&apos;après réception du paiement.
          </p>
          <p>
            Pizzeria se réserve le droit de refuser ou d&apos;annuler toute commande en cas de litige avec le client, de non-conformité aux informations fournies, ou d&apos;un problème avec la commande.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 4 - Paiement</h2>
          <p className="mb-3">
            Le paiement peut être effectué par les moyens suivants :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Carte de crédit (Visa, MasterCard)</li>
            <li>PayPal</li>
            <li>Espèces (uniquement pour les commandes à emporter ou à la livraison)</li>
            <li>Chèques-repas (uniquement dans nos établissements)</li>
          </ul>
          <p>
            Le paiement par carte de crédit est traité via une interface sécurisée. Les données bancaires sont cryptées et ne sont jamais transmises en clair sur le réseau. Pizzeria n&apos;a jamais accès aux informations confidentielles liées au mode de paiement.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 5 - Livraison</h2>
          <p className="mb-3">
            La livraison est proposée dans un rayon de 5 km autour de notre établissement. Les délais de livraison sont donnés à titre indicatif et peuvent varier en fonction du trafic, des conditions météorologiques ou du volume de clients.
          </p>
          <p className="mb-3">
            En cas de retard de livraison de plus de 30 minutes par rapport au temps annoncé, le client peut recevoir un bon de réduction pour une commande future.
          </p>
          <p>
            Si personne n&apos;est présent à l&apos;adresse de livraison, le livreur tentera de contacter le client. En cas de non-réponse, la commande sera retournée à notre établissement et le client devra la récupérer dans les 2 heures. Aucun remboursement ne sera effectué dans ce cas.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 6 - Droit de Rétractation et Réclamations</h2>
          <p className="mb-3">
            Conformément aux lois sur la protection des consommateurs, le droit de rétractation ne peut pas être exercé pour les produits alimentaires périssables.
          </p>
          <p className="mb-3">
            Toute réclamation concernant la qualité du produit ou une erreur dans la commande doit être signalée immédiatement après réception de la commande en contactant notre service client par téléphone ou par e-mail.
          </p>
          <p>
            En cas de produit manquant ou non conforme, Pizzeria s&apos;engage à offrir un remplacement ou un remboursement du produit concerné, à condition que la réclamation soit faite dans les 2 heures suivant la réception de la commande.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 7 - Responsabilité</h2>
          <p className="mb-3">
            Pizzeria ne peut être tenue responsable des dommages de toute nature pouvant résulter d&apos;une indisponibilité temporaire du Site ou de l&apos;impossibilité de procéder à une livraison en raison d&apos;un cas de force majeure.
          </p>
          <p>
            Les informations sur les allergènes présents dans nos produits sont disponibles sur le Site et sur demande dans nos établissements. Il appartient au client de vérifier la composition des produits et de signaler toute allergie lors de la commande.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 8 - Protection des Données Personnelles</h2>
          <p className="mb-3">
            Les informations collectées lors de la commande sont nécessaires au traitement de la commande et à la gestion de la relation commerciale. Elles peuvent être transmises à des entreprises qui contribuent à ces relations, telles que celles responsables de la livraison ou du paiement.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), le client a le droit d&apos;accéder, de rectifier, de s&apos;opposer et de supprimer les données le concernant. Pour exercer ces droits, le client peut contacter Pizzeria à l&apos;adresse e-mail : gdpr@pizzeria.com. Pour plus d&apos;informations, veuillez consulter notre Politique de Confidentialité.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 9 - Propriété Intellectuelle</h2>
          <p>
            Tous les éléments du Site (textes, images, logos, etc.) sont la propriété exclusive de Pizzeria ou de ses partenaires. Toute reproduction, représentation, modification ou exploitation de tout ou partie de ces éléments est strictement interdite sans autorisation préalable.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Article 10 - Droit Applicable et Litiges</h2>
          <p className="mb-3">
            Ces CG sont soumises au droit français. En cas de litige, les tribunaux français auront compétence exclusive.
          </p>
          <p>
            Conformément aux dispositions du code de la consommation concernant le règlement amiable des litiges, le client peut utiliser le service de médiation MEDICYS, accessible à : www.medicys.fr ou par courrier à MEDICYS - 73 Boulevard de Clichy, 75009 Paris.
          </p>
        </section>

        <p className="text-center text-gray-500 text-sm mt-12">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
} 