"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const images = [
  "/images/pizza-hero-1.jpg",
  "/images/pizza-hero-2.jpg",
  "/images/pizza-hero-3.jpg"
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div 
            key={image}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentImage ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image 
              src={image} 
              alt="Image héroïque de pizza" 
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative py-20 md:py-0">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 text-shadow-lg">
            Pizza Italienne Authentique Fait avec Passion
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow-md">
            Découvrez le goût de Naples avec nos pizzas cuites au feu de bois faites à partir des ingrédients les plus frais et de recettes traditionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto" isDecorative={true}>
              Commander en Ligne
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              isDecorative={true}
            >
              Voir le Menu
            </Button>
          </div>
          <div className="mt-12 flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <div className="mr-3 text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">4.9 Évaluation</p>
                <p className="text-sm text-gray-200">Basé sur 500+ avis</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <div className="mr-3 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Livraison Rapide</p>
                <p className="text-sm text-gray-200">30 minutes ou gratuit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentImage ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 