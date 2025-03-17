import { Metadata } from "next";
import { TestimonialDemo } from "@/components/testimonial-demo";
import { Testimonial } from "@/components/ui/testimonial";

export const metadata: Metadata = {
  title: "Témoignages - Napoli in Paris",
  description: "Découvrez ce que nos clients disent de notre Napoli in Paris, de notre service et de nos délicieuses pizzas.",
};

const testimonials = [
  {
    name: "Marie Durand",
    role: "Cliente régulière",
    testimonial: "Je viens ici tous les vendredis soir depuis 2 ans. La pizza Margherita est tout simplement parfaite - la véritable recette napolitaine ! Le personnel est toujours souriant et l'atmosphère est chaleureuse. Mon restaurant italien préféré à Paris.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Thomas Martin",
    role: "Critique gastronomique",
    testimonial: "En tant que critique gastronomique, j'ai goûté des pizzas dans toute l'Europe. Cette pizzeria propose l'une des meilleures pâtes à pizza que j'ai jamais essayées - croustillante à l'extérieur, moelleuse à l'intérieur, avec des ingrédients d'une fraîcheur exemplaire.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Camille Dubois",
    role: "Résidente du quartier",
    testimonial: "J'habite juste au coin de cette pizzeria et je m'arrête souvent pour emporter une pizza. Le service est rapide, les pizzas sont toujours excellentes et le rapport qualité-prix est imbattable pour une pizza aussi authentique.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Lucas Petit",
    role: "Étudiant",
    testimonial: "Leurs offres pour étudiants sont géniales ! Une pizza copieuse, une boisson et un dessert à prix réduit. Parfait pour mon budget serré. La qualité n'a rien à voir avec celle des chaînes de fast-food, c'est vraiment fait maison.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Sophie Legrand",
    role: "Mère",
    testimonial: "Nous venons souvent en famille le dimanche après-midi. Les enfants adorent regarder le pizzaiolo préparer les pizzas devant le four à bois. Le menu pour enfants est vraiment adapté et l'accueil pour les plus jeunes est toujours chaleureux.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Jean Moreau",
    role: "Entrepreneur",
    testimonial: "J'organise régulièrement des déjeuners d'affaires ici. L'atmosphère est détendue mais professionnelle, et la nourriture impressionne toujours mes clients. Leur cave à vin est particulièrement remarquable avec d'excellents vins italiens.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Émilie Bertrand",
    role: "Végétarienne",
    testimonial: "En tant que végétarienne, je suis souvent limitée dans les pizzerias. Ici, ils proposent plusieurs options sans viande vraiment créatives et savoureuses. La pizza aux légumes grillés est un véritable délice !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Antoine Dupont",
    role: "Chef",
    testimonial: "En tant que chef, je suis très exigeant sur la qualité des ingrédients et le savoir-faire. Cette pizzeria excelle dans les deux domaines. Leur pâte fermentée pendant 48 heures a une complexité aromatique remarquable. Un établissement qui honore la tradition italienne.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300&q=80"
  },
  {
    name: "Nathalie Laurent",
    role: "Cliente occasionnelle",
    testimonial: "Je ne suis généralement pas une grande fan de pizza, mais celles-ci sont exceptionnelles. La pâte est légère et digestible, très différente des pizzas industrielles. Les garnitures sont généreuses sans être excessives. Une merveilleuse découverte !",
    rating: 4,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?fit=crop&w=300&h=300&q=80"
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Témoignages</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        Découvrez ce que nos clients disent de notre pizzeria, de nos services et bien sûr, de nos pizzas artisanales.
      </p>
      
      {/* Carousel des témoignages en vedette */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Témoignages en vedette</h2>
        <TestimonialDemo />
      </section>
      
      {/* Tous les témoignages */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Ce que nos clients disent</h2>
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
      
      {/* Laissez un avis */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Partagez votre expérience</h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          Votre avis compte pour nous ! Partagez votre expérience dans notre pizzeria sur
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline mx-1"
          >
            Google
          </a>
          ou
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