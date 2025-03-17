import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Menu - Pizzeria",
  description: "Découvrez notre large sélection de pizzas artisanales, cuites dans un four à bois avec des ingrédients frais et de qualité.",
};

// Extended pizza categories for the menu page
const pizzaCategories = [
  {
    id: "classics",
    name: "Pizzas Classiques",
    description: "Recettes italiennes traditionnelles qui ont rendu notre pizzeria célèbre.",
    pizzas: [
      {
        id: 1,
        name: "Margherita",
        description: "La pizza classique avec sauce tomate, mozzarella et basilic frais",
        price: 12.99,
        image: "/images/margherita.jpg",
        ingredients: ["Sauce tomate", "Mozzarella", "Basilic frais", "Huile d'olive extra vierge"]
      },
      {
        id: 2,
        name: "Napoletana",
        description: "Tomate, mozzarella, anchois, câpres et olives noires",
        price: 14.99,
        image: "/images/pepperoni.jpg",
        ingredients: ["Sauce tomate", "Mozzarella", "Anchois", "Câpres", "Olives noires"]
      },
      {
        id: 3,
        name: "Quattro Stagioni",
        description: "Quatre sections : jambon, champignons, artichauts et olives",
        price: 15.99,
        image: "/images/supreme.jpg",
        ingredients: ["Sauce tomate", "Mozzarella", "Jambon", "Champignons", "Artichauts", "Olives"]
      },
    ]
  },
  {
    id: "specialties",
    name: "Nos Spécialités",
    description: "Les créations du chef qui font notre réputation et rendront votre expérience unique.",
    pizzas: [
      {
        id: 4,
        name: "Truffe Royale",
        description: "Crème de truffe, mozzarella de bufflonne, champignons et huile de truffe",
        price: 21.99,
        image: "/images/vegetarian.jpg",
        ingredients: ["Crème de truffe", "Mozzarella de bufflonne", "Champignons", "Huile de truffe", "Roquette"]
      },
      {
        id: 5,
        name: "Méditerranéenne",
        description: "Tomate, feta, olives, oignons rouges, poivrons et origan",
        price: 16.99,
        image: "/images/bbq-chicken.jpg",
        ingredients: ["Sauce tomate", "Fromage feta", "Olives Kalamata", "Oignons rouges", "Poivrons", "Origan"]
      },
      {
        id: 6,
        name: "Carbonara",
        description: "Crème fraîche, mozzarella, pancetta, œuf et parmesan",
        price: 17.99,
        image: "/images/hawaiian.jpg",
        ingredients: ["Crème fraîche", "Mozzarella", "Pancetta", "Œuf", "Parmesan", "Poivre noir"]
      },
    ]
  },
  {
    id: "vegetarian",
    name: "Végétarien",
    description: "Délicieuses options sans viande, préparées avec des légumes de saison frais.",
    pizzas: [
      {
        id: 7,
        name: "Primavera",
        description: "Tomate, mozzarella et légumes de saison grillés",
        price: 14.99,
        image: "/images/vegetarian.jpg",
        ingredients: ["Sauce tomate", "Mozzarella", "Courgette", "Aubergine", "Poivrons", "Oignons rouges"]
      },
      {
        id: 8,
        name: "Quatre Fromages",
        description: "Mozzarella, gorgonzola, fromage de chèvre et parmesan",
        price: 15.99,
        image: "/images/margherita.jpg",
        ingredients: ["Sauce tomate légère", "Mozzarella", "Gorgonzola", "Fromage de chèvre", "Parmesan"]
      },
      {
        id: 9,
        name: "Forestière",
        description: "Crème, mozzarella et champignons variés",
        price: 16.99,
        image: "/images/supreme.jpg",
        ingredients: ["Crème fraîche", "Mozzarella", "Champignons de Paris", "Champignons pleurotes", "Champignons porcini", "Thym"]
      },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="mb-4">Notre Menu</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez nos pizzas artisanales préparées avec passion et cuites dans un four à bois. 
            Nous utilisons uniquement des ingrédients frais et locaux pour vous offrir une expérience authentique.
          </p>
        </div>

        {/* Intro Menu Section */}
        <div className="relative rounded-xl overflow-hidden h-64 md:h-96 mb-16">
          <Image
            src="/images/pizza-hero-2.jpg"
            alt="Nos délicieuses pizzas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">La Passion de la Pizza</h2>
              <p className="text-lg md:text-xl max-w-2xl">
                Chaque pizza raconte une histoire d&apos;amour pour la tradition italienne
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        {pizzaCategories.map((category) => (
          <section key={category.id} id={category.id} className="mb-16">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-8">
              <h2 className="text-3xl font-bold">{category.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.pizzas.map((pizza) => (
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
                      <div className="bg-amber-100 text-amber-800 font-bold rounded-full px-3 py-1 text-sm dark:bg-amber-900/30 dark:text-amber-500">
                        ${pizza.price.toFixed(2)}
                      </div>
                    </div>
                    <CardDescription>{pizza.description}</CardDescription>
                    
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Ingrédients :</p>
                      <div className="flex flex-wrap gap-1">
                        {pizza.ingredients.map((ingredient, idx) => (
                          <span 
                            key={idx}
                            className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1 text-xs"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="border-t border-gray-100 pt-4 dark:border-gray-800">
                    <Link href="/order" className="w-full">
                      <Button className="w-full">Ajouter à la commande</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Avez-vous une occasion spéciale ?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Nous proposons également des pizzas personnalisées pour vos événements, contactez-nous pour discuter de vos besoins spécifiques.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="mr-4">Contactez-nous</Button>
          </Link>
          <Link href="/order">
            <Button size="lg">Commander maintenant</Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 