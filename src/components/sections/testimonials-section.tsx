"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See why our customers keep coming back for more of our delicious pizzas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-red-500 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-8 pt-16 md:p-12 md:pt-20">
              {/* Testimonial Slides */}
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "transition-opacity duration-500 absolute inset-0",
                      index === activeIndex ? "opacity-100 z-10" : "opacity-0"
                    )}
                  >
                    <blockquote className="text-xl md:text-2xl font-medium text-center mb-8">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 relative rounded-full overflow-hidden mb-4 border-2 border-red-500">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === activeIndex ? "bg-red-600 w-6" : "bg-gray-300 dark:bg-gray-600"
                    )}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 