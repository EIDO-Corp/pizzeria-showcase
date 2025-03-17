"use client";

import Image from "next/image";
import { useState } from "react";
import { pizzaTypes } from "@/lib/utils";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Toutes les Pizzas" },
    { id: "popular", name: "Populaires" },
    { id: "vegetarian", name: "Végétariennes" },
    { id: "meat", name: "Amateurs de Viande" },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Notre Menu Délicieux</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explorez notre large sélection de pizzas artisanales faites avec les meilleurs ingrédients et cuites à la perfection dans notre four à bois.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzaTypes.map((pizza) => (
            <Card key={pizza.id} hoverable className="overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{pizza.name}</CardTitle>
                  <div className="bg-amber-100 text-amber-800 font-bold rounded-full px-3 py-1 text-sm">
                    {pizza.price.toFixed(2)} €
                  </div>
                </div>
                <CardDescription>{pizza.description}</CardDescription>
              </CardHeader>
              <CardFooter className="border-t border-gray-100 pt-4 dark:border-gray-800">
                <Button className="w-full" isDecorative={true}>Ajouter à la Commande</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" isDecorative={true}>
            Voir le Menu Complet
          </Button>
        </div>
      </div>
    </section>
  );
} 