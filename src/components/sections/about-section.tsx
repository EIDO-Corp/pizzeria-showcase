import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutSection() {
  const qualities = [
    "Recettes italiennes authentiques",
    "Ingrédients frais et locaux",
    "Four à bois pour une croûte parfaite",
    "Pâte faite à la main quotidiennement",
    "Entreprise familiale depuis 1995",
    "Pizzas primées"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden h-48 md:h-64 shadow-lg">
                <Image
                  src="/images/about-1.jpg"
                  alt="Chef de pizza préparant la pâte"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-64 md:h-80 shadow-lg">
                <Image
                  src="/images/about-2.jpg"
                  alt="Ingrédients frais"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative rounded-lg overflow-hidden h-64 md:h-80 shadow-lg">
                <Image
                  src="/images/about-3.jpg"
                  alt="Four à bois"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-48 md:h-64 shadow-lg">
                <Image
                  src="/images/about-4.jpg"
                  alt="Intérieur de la pizzeria"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6">Notre Histoire</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Bienvenue à la Pizzeria, où la passion rencontre la tradition. Notre parcours a commencé en 1995 lorsque notre 
              fondateur, Antonio, a apporté des recettes authentiques de pizza napolitaine de sa ville natale en Italie pour créer 
              une expérience culinaire inoubliable.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Chaque pizza que nous créons raconte une histoire de dévouement à la qualité, à la fraîcheur et à la tradition. 
              Nous n&apos;utilisons que les meilleurs ingrédients, pétrissons notre pâte à la main chaque jour, et cuisons chaque pizza à la perfection 
              dans notre authentique four à bois importé de Naples.
            </p>

            {/* Qualities List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3 text-green-500 bg-green-100 p-1 rounded-full dark:bg-green-900/30">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{quality}</span>
                </div>
              ))}
            </div>

            <Button size="lg" isDecorative={true}>En savoir plus sur nous</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 