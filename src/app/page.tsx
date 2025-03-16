import MenuSection from "@/components/sections/menu-section";
import AboutSection from "@/components/sections/about-section";
import { TestimonialDemo } from "@/components/testimonial-demo";
import ContactSection from "@/components/sections/contact-section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center">
        {/* Background image with proper sizing */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pizza-hero.jpg"
            alt="Delicious artisanal pizza"
            fill
            priority
            className="object-cover brightness-50"
            sizes="100vw"
          />
        </div>
        
        {/* Content overlay */}
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Authentic Neapolitan Pizza in Paris
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Discover our artisanal pizzas prepared with respect for Italian tradition.
            Fresh ingredients, 48-hour fermented dough, and wood-fired cooking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/menu">
              <Button variant="secondary" size="lg" className="font-medium">
                View Menu
              </Button>
            </Link>
            <Link href="/order">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 font-medium">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <MenuSection />
      <AboutSection />
      <TestimonialDemo />
      <ContactSection />
    </main>
  );
}
