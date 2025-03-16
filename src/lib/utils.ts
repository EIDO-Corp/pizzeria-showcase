import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pizzaTypes = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    image: "/images/margherita.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Traditional pizza topped with pepperoni slices",
    price: 14.99,
    image: "/images/pepperoni.jpg",
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Fresh vegetables, tomato sauce, and mozzarella cheese",
    price: 13.99,
    image: "/images/vegetarian.jpg",
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "Ham, pineapple, tomato sauce, and mozzarella cheese",
    price: 15.99,
    image: "/images/hawaiian.jpg",
  },
  {
    id: 5,
    name: "Supreme",
    description: "Loaded with pepperoni, sausage, bell peppers, onions, and olives",
    price: 16.99,
    image: "/images/supreme.jpg",
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "BBQ sauce, grilled chicken, red onions, and cilantro",
    price: 15.99,
    image: "/images/bbq-chicken.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    content: "The best pizza I've ever had! The crust is perfectly crispy, and the ingredients are always fresh.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Local Customer",
    content: "I order from this pizzeria every week. Their delivery is always on time, and the pizza is still hot!",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Food Critic",
    content: "A hidden gem in the city! The authentic flavors transport you straight to Italy.",
    avatar: "/images/avatar-3.jpg",
  },
]; 