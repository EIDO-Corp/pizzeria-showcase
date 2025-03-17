import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Contact - Pizzeria",
  description: "Contactez-nous pour réserver une table, commander à emporter ou partager vos commentaires.",
};

// Contact information
const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Adresse",
    content: "123 Pizza Street, 75001 Paris, France",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Téléphone",
    content: "+33 1 23 45 67 89",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    content: "contact@pizzeria.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Horaires",
    content: "Mar-Dim: 11h30-14h30, 18h30-22h30 | Fermé le lundi",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Nous serions ravis de vous accueillir dans notre pizzeria ou de répondre à vos questions.
            N&apos;hésitez pas à nous contacter par téléphone, email ou via le formulaire ci-dessous.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom de famille</Label>
                  <Input id="lastName" placeholder="Smith" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.smith@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Objet</Label>
                <Input id="subject" placeholder="Réservation, Question, etc." required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Écrivez votre message ici..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" isDecorative={true}>Envoyer le message</Button>
            </form>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mr-4 text-red-600 dark:text-red-500">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{info.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Trouvez-nous</h2>
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/map-placeholder.jpg"
                  alt="Emplacement sur la carte"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs text-center">
                    <h3 className="font-bold mb-2">Napoli in Paris</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      123 Pizza Street
                      <br />
                      Paris, 75001
                    </p>
                    <Button size="sm" className="mt-3" isDecorative={true}>Obtenir des directions</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions Fréquemment Posées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Prenez-vous des réservations ?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Oui, nous acceptons les réservations pour le dîner. Pour le déjeuner, nous fonctionnons sur la base du premier arrivé, premier servi. 
                Veuillez nous appeler ou utiliser notre formulaire en ligne pour faire une réservation pour le dîner.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Proposez-vous des options végétariennes ?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolument ! Nous avons plusieurs délicieuses pizzas végétariennes sur notre menu, et nous sommes également heureux de personnaliser n&apos;importe quelle pizza selon vos préférences.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Dans quelles zones livrez-vous ?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous livrons dans un rayon de 5 km autour de notre restaurant. La livraison est disponible de 18h30 à 22h00, du mardi au dimanche.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Faites-vous des services de traiteur pour des événements ?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Oui, nous proposons des services de traiteur pour des événements de toutes tailles. Veuillez nous contacter au moins 48 heures à l&apos;avance pour discuter de vos besoins et passer votre commande.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à vivre une pizza authentique ?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Que vous prévoyiez de visiter notre restaurant ou que vous souhaitiez commander pour livraison, nous sommes là pour vous offrir la meilleure expérience pizza.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" isDecorative={true}>Faire une réservation</Button>
            <Button variant="outline" size="lg" isDecorative={true}>Commander en ligne</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 