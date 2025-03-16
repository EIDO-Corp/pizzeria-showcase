import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Menu - Pizzeria",
  description: "Discover our wide selection of artisanal pizzas, cooked in a wood-fired oven with fresh, quality ingredients.",
};

// Extended pizza categories for the menu page
const pizzaCategories = [
  {
    id: "classics",
    name: "Classic Pizzas",
    description: "Traditional Italian recipes that have made our pizzeria famous.",
    pizzas: [
      {
        id: 1,
        name: "Margherita",
        description: "The classic pizza with tomato sauce, mozzarella and fresh basil",
        price: 12.99,
        image: "/images/margherita.jpg",
        ingredients: ["Tomato sauce", "Mozzarella", "Fresh basil", "Extra virgin olive oil"]
      },
      {
        id: 2,
        name: "Napoletana",
        description: "Tomato, mozzarella, anchovies, capers and black olives",
        price: 14.99,
        image: "/images/pepperoni.jpg",
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Black olives"]
      },
      {
        id: 3,
        name: "Quattro Stagioni",
        description: "Four sections: ham, mushrooms, artichokes and olives",
        price: 15.99,
        image: "/images/supreme.jpg",
        ingredients: ["Tomato sauce", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Olives"]
      },
    ]
  },
  {
    id: "specialties",
    name: "Our Specialties",
    description: "The chef's creations that make our reputation and will make your experience unique.",
    pizzas: [
      {
        id: 4,
        name: "Royal Truffle",
        description: "Truffle cream, buffalo mozzarella, mushrooms and truffle oil",
        price: 21.99,
        image: "/images/vegetarian.jpg",
        ingredients: ["Truffle cream", "Buffalo mozzarella", "Mushrooms", "Truffle oil", "Arugula"]
      },
      {
        id: 5,
        name: "Mediterranean",
        description: "Tomato, feta, olives, red onions, bell peppers and oregano",
        price: 16.99,
        image: "/images/bbq-chicken.jpg",
        ingredients: ["Tomato sauce", "Feta cheese", "Kalamata olives", "Red onions", "Bell peppers", "Oregano"]
      },
      {
        id: 6,
        name: "Carbonara",
        description: "Fresh cream, mozzarella, pancetta, egg and parmesan",
        price: 17.99,
        image: "/images/hawaiian.jpg",
        ingredients: ["Fresh cream", "Mozzarella", "Pancetta", "Egg", "Parmesan", "Black pepper"]
      },
    ]
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    description: "Delicious meatless options, prepared with fresh seasonal vegetables.",
    pizzas: [
      {
        id: 7,
        name: "Primavera",
        description: "Tomato, mozzarella and grilled seasonal vegetables",
        price: 14.99,
        image: "/images/vegetarian.jpg",
        ingredients: ["Tomato sauce", "Mozzarella", "Zucchini", "Eggplant", "Bell peppers", "Red onions"]
      },
      {
        id: 8,
        name: "Four Cheese",
        description: "Mozzarella, gorgonzola, goat cheese and parmesan",
        price: 15.99,
        image: "/images/margherita.jpg",
        ingredients: ["Light tomato sauce", "Mozzarella", "Gorgonzola", "Goat cheese", "Parmesan"]
      },
      {
        id: 9,
        name: "Forester",
        description: "Cream, mozzarella and assorted mushrooms",
        price: 16.99,
        image: "/images/supreme.jpg",
        ingredients: ["Fresh cream", "Mozzarella", "Button mushrooms", "Oyster mushrooms", "Porcini mushrooms", "Thyme"]
      },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our artisanal pizzas prepared with passion and cooked in a wood-fired oven. 
            We use only fresh and local ingredients to offer you an authentic experience.
          </p>
        </div>

        {/* Intro Menu Section */}
        <div className="relative rounded-xl overflow-hidden h-64 md:h-96 mb-16">
          <Image
            src="/images/pizza-hero-2.jpg"
            alt="Our delicious pizzas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Passion for Pizza</h2>
              <p className="text-lg md:text-xl max-w-2xl">
                Each pizza tells a story of love for Italian tradition
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
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Ingredients:</p>
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
                      <Button className="w-full">Add to Order</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Do you have a special occasion?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            We also offer custom pizzas for your events, contact us to discuss your specific needs.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="mr-4">Contact Us</Button>
          </Link>
          <Link href="/order">
            <Button size="lg">Order Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 