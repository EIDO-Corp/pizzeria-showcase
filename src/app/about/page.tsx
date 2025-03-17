import React from 'react';
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "À propos - Napoli in Paris",
  description: "Découvrez l'histoire de notre Napoli à Paris, notre équipe passionnée et notre philosophie autour de la pizza napolitaine authentique.",
};

// Membres de l'équipe
const team = [
  {
    name: "Giuseppe Romano",
    role: "Fondateur & Chef",
    bio: "Maître pizzaiolo avec plus de 25 ans d'expérience, formé à Naples. Il supervise chaque aspect de la préparation pour garantir l'authenticité.",
    image: "/images/about-1.jpg"
  },
  {
    name: "Marie Dupont",
    role: "Chef Pâtissier",
    bio: "Responsable de nos desserts italiens faits maison. Son tiramisu est devenu légendaire à Paris.",
    image: "/images/about-2.jpg"
  },
  {
    name: "Antoine Lefebvre",
    role: "Sommelier",
    bio: "Expert en vins italiens, créant des accords parfaits pour rehausser chaque bouchée de nos pizzas.",
    image: "/images/about-3.jpg"
  },
  {
    name: "Sofia Bianchi",
    role: "Chef de Cuisine",
    bio: "D'origine sicilienne, elle apporte sa touche méditerranéenne à nos entrées et plats du jour.",
    image: "/images/about-4.jpg"
  }
];

// Questions fréquemment posées
const faqs = [
  {
    question: "Qu'est-ce qui caractérise une pizza napolitaine authentique ?",
    answer: "La pizza napolitaine authentique est reconnue par sa pâte souple et aérée, son bord gonflé (cornicione), sa base fine au centre et sa cuisson rapide au feu de bois qui lui donne des petites taches carbonisées caractéristiques."
  },
  {
    question: "Utilisez-vous des ingrédients locaux ?",
    answer: "Nous privilégions les produits locaux pour les légumes frais et certains fromages. Cependant, certains ingrédients essentiels comme la farine type 00, les tomates San Marzano ou la mozzarella di bufala sont directement importés d'Italie pour garantir l'authenticité."
  },
  {
    question: "Proposez-vous des options végétariennes ou véganes ?",
    answer: "Absolument ! Notre menu comprend plusieurs options végétariennes telles que la Pizza Margherita ou la Pizza aux Légumes Grillés. Nous pouvons également adapter certaines recettes en versions véganes sur demande."
  },
  {
    question: "Le restaurant peut-il être privatisé pour un événement ?",
    answer: "Oui, nous proposons des forfaits de privatisation complète ou partielle pour vos événements professionnels ou privés. Contactez-nous par téléphone ou par e-mail pour discuter de votre projet et obtenir un devis personnalisé."
  },
  {
    question: "Faites-vous des livraisons ?",
    answer: "Oui, nous livrons dans un rayon de 5 km autour de notre restaurant. Vous pouvez commander directement sur notre site web ou par téléphone pendant les heures d'ouverture."
  },
  {
    question: "Les pizzas conviennent-elles aux enfants ?",
    answer: "Nos pizzas plaisent généralement aux enfants ! Nous proposons également un menu enfant avec une pizza de taille réduite, une boisson et un dessert à un tarif préférentiel."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">À propos de notre pizzeria</h1>
      
      {/* Notre Histoire */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Notre Histoire</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              Fondée en 2010 par le chef napolitain Giuseppe Romano, notre pizzeria est née d&apos;une passion pour les traditions culinaires italiennes authentiques. Après avoir travaillé dans les meilleures pizzerias de Naples, Giuseppe a décidé de partager son amour pour la véritable pizza napolitaine avec Paris.
            </p>
            <p className="text-lg mb-6">
              Nos débuts modestes dans un petit local du 11ème arrondissement ont rapidement évolué grâce au bouche-à-oreille et à notre engagement indéfectible envers la qualité. Aujourd&apos;hui, notre établissement est reconnu comme l&apos;une des meilleures pizzerias de la capitale, mais nous restons fidèles à nos racines et à notre philosophie : des ingrédients frais, des recettes traditionnelles et une cuisson au feu de bois.
            </p>
            <p className="text-lg">
              Chaque étape de notre développement a été guidée par le respect des méthodes ancestrales et la quête d&apos;excellence qui caractérisent la véritable pizza napolitaine.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/pizza-oven.jpg" 
              alt="Notre four à bois traditionnel" 
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      
      {/* Notre Équipe */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Notre Équipe Passionnée</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover rounded-t-lg"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-red-600 font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Notre Philosophie */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Notre Philosophie</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/restaurant-img.jpg" 
              alt="Notre restaurant" 
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Ingrédients de Qualité</h3>
            <p className="text-lg mb-6">
              Nous sélectionnons soigneusement nos ingrédients, favorisant les producteurs locaux et les importations directes d&apos;Italie pour des spécialités comme la mozzarella di bufala et les tomates San Marzano.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-red-600">Savoir-Faire Artisanal</h3>
            <p className="text-lg mb-6">
              Notre pâte fermente lentement pendant 48 heures, lui donnant sa légèreté et sa digestibilité caractéristiques. Chaque pizza est façonnée à la main et cuite dans notre four à bois à plus de 450°C pendant 60 à 90 secondes.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-red-600">Une Expérience Conviviale</h3>
            <p className="text-lg">
              Plus qu&apos;un simple restaurant, nous souhaitons offrir un moment de partage et de convivialité, comme on le fait autour d&apos;une table en Italie. Notre équipe est là pour vous aider à découvrir la culture de la pizza napolitaine dans sa dimension la plus authentique.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Questions Fréquemment Posées</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Appel à l'Action */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center mt-20">
        <h3 className="text-2xl font-bold mb-4">Venez Nous Rencontrer !</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          Nous serions ravis de vous accueillir dans notre pizzeria et de partager notre passion pour la cuisine italienne avec vous.
        </p>
        <Link href="/contact">
          <Button size="lg">Contactez-Nous</Button>
        </Link>
      </div>
    </div>
  );
} 