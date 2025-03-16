import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutSection() {
  const qualities = [
    "Authentic Italian recipes",
    "Fresh, locally-sourced ingredients",
    "Wood-fired oven for perfect crust",
    "Handmade dough daily",
    "Family-owned since 1995",
    "Award-winning pizzas"
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
                  alt="Pizza chef preparing dough"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-64 md:h-80 shadow-lg">
                <Image
                  src="/images/about-2.jpg"
                  alt="Fresh ingredients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative rounded-lg overflow-hidden h-64 md:h-80 shadow-lg">
                <Image
                  src="/images/about-3.jpg"
                  alt="Wood-fired oven"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-48 md:h-64 shadow-lg">
                <Image
                  src="/images/about-4.jpg"
                  alt="Pizzeria interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Welcome to Pizzeria, where passion meets tradition. Our journey started in 1995 when our 
              founder, Antonio, brought authentic Neapolitan pizza recipes from his hometown in Italy to create 
              an unforgettable dining experience.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Every pizza we create tells a story of dedication to quality, freshness, and tradition. 
              We use only the finest ingredients, hand-knead our dough daily, and bake each pizza to perfection 
              in our authentic wood-fired oven imported from Naples.
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

            <Button size="lg" isDecorative={true}>Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 