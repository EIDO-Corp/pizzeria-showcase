import { Metadata } from "next";
import { TestimonialDemo } from "@/components/testimonial-demo";
import { Testimonial } from "@/components/ui/testimonial";

export const metadata: Metadata = {
  title: "Testimonials - Napoli in Paris",
  description: "Discover what our customers say about our Napoli in Paris, our service, and our delicious pizzas.",
};

const testimonials = [
  {
    name: "Marie Durand",
    role: "Regular Customer",
    testimonial: "I've been coming here every Friday night for 2 years. The Margherita pizza is simply perfect - the true Neapolitan recipe! The staff is always smiling and the atmosphere is warm. My favorite Italian restaurant in Paris.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Thomas Martin",
    role: "Food Critic",
    testimonial: "As a food critic, I've tasted pizzas all over Europe. This pizzeria offers one of the best pizza doughs I've ever tried - crispy on the outside, soft on the inside, with ingredients of exemplary freshness.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Camille Dubois",
    role: "Neighborhood Resident",
    testimonial: "I live just around the corner from this pizzeria and I often stop by to take away a pizza. The service is quick, the pizzas are always excellent and the value for money is unbeatable for such authentic pizza.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Lucas Petit",
    role: "Student",
    testimonial: "Their student deals are great! A hearty pizza, a drink, and a dessert at a reduced price. Perfect for my tight budget. The quality is nothing like fast-food chains, it's truly homemade.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Sophie Legrand",
    role: "Mother",
    testimonial: "We often come as a family on Sunday afternoons. The kids love watching the pizza chef prepare pizzas in front of the wood-fired oven. The children's menu is really suitable and the welcome for the youngest is always warm.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Jean Moreau",
    role: "Entrepreneur",
    testimonial: "I regularly organize business lunches here. The atmosphere is relaxed yet professional, and the food always impresses my clients. Their wine cellar is particularly remarkable with excellent Italian wines.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Émilie Bertrand",
    role: "Vegetarian",
    testimonial: "As a vegetarian, I'm often limited in pizzerias. Here, they offer several truly creative and tasty meatless options. The grilled vegetable pizza is an absolute delight!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Antoine Dupont",
    role: "Chef",
    testimonial: "As a chef, I'm very demanding about the quality of ingredients and craftsmanship. This pizzeria excels in both areas. Their 48-hour fermented dough has remarkable aromatic complexity. An establishment that honors Italian tradition.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Nathalie Laurent",
    role: "Occasional Customer",
    testimonial: "I'm not usually a big fan of pizza, but these are exceptional. The dough is light and digestible, quite different from industrial pizzas. The toppings are generous without being excessive. A wonderful discovery!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?fit=crop&w=300&h=300&q=80"
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Testimonials</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        Discover what our customers say about our pizzeria, our services, and of course, our artisanal pizzas.
      </p>
      
      {/* Featured Testimonials Carousel */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Testimonials</h2>
        <TestimonialDemo />
      </section>
      
      {/* All Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </section>
      
      {/* Leave a Review */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Share Your Experience</h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          Your opinion matters to us! Share your experience at our pizzeria on
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline mx-1"
          >
            Google
          </a>
          or
          <a 
            href="https://www.tripadvisor.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline mx-1"
          >
            TripAdvisor
          </a>
        </p>
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#4285F4"/>
              </svg>
            </a>
            <a 
              href="https://www.tripadvisor.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 8.5C13.38 8.5 14.5 9.62 14.5 11C14.5 12.38 13.38 13.5 12 13.5C10.62 13.5 9.5 12.38 9.5 11C9.5 9.62 10.62 8.5 12 8.5ZM17 17H7V15.87C7 14.93 7.93 14 8.87 14H15.13C16.07 14 17 14.93 17 15.87V17Z" fill="#00AF87"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 