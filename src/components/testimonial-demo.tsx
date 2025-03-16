"use client";

import { Testimonial } from "@/components/ui/testimonial";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Blogger",
    testimonial: "The best pizza I've ever had! The crust is perfectly crispy, and the ingredients are always fresh.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Michael Chen",
    role: "Local Customer",
    testimonial: "I order from this pizzeria every week. Their delivery is always on time, and the pizza is still hot!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Emma Rodriguez",
    role: "Food Critic",
    company: "Taste Magazine",
    testimonial: "A hidden gem in the city! The authentic flavors transport you straight to Italy.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
  }
]

export function TestimonialDemo() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See why our customers keep coming back for more of our delicious pizzas.
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