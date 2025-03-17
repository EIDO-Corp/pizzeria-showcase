import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pizzaTypes = [
  {
    id: 1,
    name: "Margherita",
    description: "Pizza classique avec sauce tomate, mozzarella et basilic",
    price: 12.99,
    image: "/images/margherita.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Pizza traditionnelle garnie de tranches de pepperoni",
    price: 14.99,
    image: "/images/pepperoni.jpg",
  },
  {
    id: 3,
    name: "Végétarienne",
    description: "Légumes frais, sauce tomate et fromage mozzarella",
    price: 13.99,
    image: "/images/vegetarian.jpg",
  },
  {
    id: 4,
    name: "Hawaïenne",
    description: "Jambon, ananas, sauce tomate et fromage mozzarella",
    price: 15.99,
    image: "/images/hawaiian.jpg",
  },
  {
    id: 5,
    name: "Suprême",
    description: "Garnie de pepperoni, saucisse, poivrons, oignons et olives",
    price: 16.99,
    image: "/images/supreme.jpg",
  },
  {
    id: 6,
    name: "Poulet BBQ",
    description: "Sauce BBQ, poulet grillé, oignons rouges et coriandre",
    price: 15.99,
    image: "/images/bbq-chicken.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Blogueuse culinaire",
    content: "La meilleure pizza que j'ai jamais mangée ! La croûte est parfaitement croustillante et les ingrédients sont toujours frais.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Client local",
    content: "Je commande dans cette pizzeria chaque semaine. Leur livraison est toujours à l'heure et la pizza est encore chaude !",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Critique culinaire",
    content: "Une perle cachée dans la ville ! Les saveurs authentiques vous transportent directement en Italie.",
    avatar: "/images/avatar-3.jpg",
  },
]; 