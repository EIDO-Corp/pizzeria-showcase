import React from 'react';
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About - Napoli in Paris",
  description: "Discover the story of our Napoli in Paris, our passionate team, and our philosophy around authentic Neapolitan pizza.",
};

// Team members
const team = [
  {
    name: "Giuseppe Romano",
    role: "Founder & Chef",
    bio: "Master pizzaiolo with over 25 years of experience, trained in Naples. He oversees every aspect of preparation to ensure authenticity.",
    image: "/images/about-1.jpg"
  },
  {
    name: "Marie Dupont",
    role: "Pastry Chef",
    bio: "Responsible for our homemade Italian desserts. Her tiramisu has become legendary throughout Paris.",
    image: "/images/about-2.jpg"
  },
  {
    name: "Antoine Lefebvre",
    role: "Sommelier",
    bio: "Expert in Italian wines, creating perfect pairings to enhance every bite of our pizzas.",
    image: "/images/about-3.jpg"
  },
  {
    name: "Sofia Bianchi",
    role: "Head Chef",
    bio: "Of Sicilian origin, she brings her Mediterranean touch to our appetizers and daily specials.",
    image: "/images/about-4.jpg"
  }
];

// Frequently asked questions
const faqs = [
  {
    question: "What characterizes an authentic Neapolitan pizza?",
    answer: "Authentic Neapolitan pizza is recognized by its supple and airy dough, its puffed edge (cornicione), its thin base in the center, and its quick wood-fired baking which gives it characteristic small charred spots."
  },
  {
    question: "Do you use local ingredients?",
    answer: "We prioritize local products for fresh vegetables and certain cheeses. However, some essential ingredients like type 00 flour, San Marzano tomatoes, or buffalo mozzarella are directly imported from Italy to ensure authenticity."
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Absolutely! Our menu includes several vegetarian options such as Pizza Margherita or Grilled Vegetable Pizza. We can also adapt certain recipes in vegan versions upon request."
  },
  {
    question: "Can the restaurant be privatized for an event?",
    answer: "Yes, we offer complete or partial privatization packages for your professional or private events. Contact us by phone or email to discuss your project and get a personalized quote."
  },
  {
    question: "Do you deliver?",
    answer: "Yes, we deliver within a 5 km radius around our restaurant. You can order directly on our website or by phone during opening hours."
  },
  {
    question: "Are the pizzas suitable for children?",
    answer: "Our pizzas generally appeal to children! We also offer a children's menu with a reduced size pizza, a drink, and a dessert at a preferential rate."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">About Our Pizzeria</h1>
      
      {/* Our Story */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              Founded in 2010 by Neapolitan chef Giuseppe Romano, our pizzeria was born from a passion for authentic Italian culinary traditions. After working in the best pizzerias in Naples, Giuseppe decided to share his love for real Neapolitan pizza with Paris.
            </p>
            <p className="text-lg mb-6">
              Our modest beginnings in a small location in the 11th arrondissement quickly evolved thanks to word of mouth and our unwavering commitment to quality. Today, our establishment is recognized as one of the best pizzerias in the capital, but we remain true to our roots and our philosophy: fresh ingredients, traditional recipes, and wood-fired cooking.
            </p>
            <p className="text-lg">
              Every step of our development has been guided by respect for ancestral methods and the pursuit of excellence that characterize true Neapolitan pizza.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/pizza-oven.jpg" 
              alt="Our traditional wood-fired oven" 
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Passionate Team</h2>
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
      
      {/* Our Philosophy */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/restaurant-img.jpg" 
              alt="Our restaurant" 
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Quality Ingredients</h3>
            <p className="text-lg mb-6">
              We carefully select our ingredients, favoring local producers and direct imports from Italy for specialties like buffalo mozzarella and San Marzano tomatoes.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-red-600">Artisanal Know-How</h3>
            <p className="text-lg mb-6">
              Our dough ferments slowly for 48 hours, giving it its characteristic lightness and digestibility. Each pizza is hand-shaped and baked in our wood-fired oven at over 450°C for 60 to 90 seconds.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-red-600">A Convivial Experience</h3>
            <p className="text-lg">
              More than just a restaurant, we want to offer a moment of sharing and conviviality, as one does around a table in Italy. Our team is there to help you discover the culture of Neapolitan pizza in its most authentic dimension.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
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
      
      {/* Call to Action */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center mt-20">
        <h3 className="text-2xl font-bold mb-4">Come Meet Us!</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          We would be delighted to welcome you to our pizzeria and share our passion for Italian cuisine with you.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
} 