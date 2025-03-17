"use client";

import { Testimonial } from "@/components/ui/testimonial";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Blogueuse culinaire",
    testimonial: "La meilleure pizza que j'ai jamais mangée ! La croûte est parfaitement croustillante et les ingrédients sont toujours frais.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Michael Chen",
    role: "Client local",
    testimonial: "Je commande dans cette pizzeria chaque semaine. Leur livraison est toujours à l'heure et la pizza est encore chaude !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Emma Rodriguez",
    role: "Critique culinaire",
    company: "Taste Magazine",
    testimonial: "Une perle cachée dans la ville ! Les saveurs authentiques vous transportent directement en Italie.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
  }
]

export function TestimonialDemo() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez pourquoi nos clients reviennent toujours pour plus de nos délicieuses pizzas.
          </p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
} 