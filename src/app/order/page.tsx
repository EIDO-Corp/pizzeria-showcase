import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Commander en ligne - Pizzeria",
  description: "Commandez vos pizzas préférées en ligne pour livraison ou à emporter. Rapide, facile et délicieux !",
};

// Produits disponibles pour commande en ligne
const products = [
  {
    id: 1,
    name: "Margherita",
    description: "La pizza classique avec sauce tomate, mozzarella et basilic frais",
    price: 12.99,
    image: "/images/margherita.jpg",
    category: "Classiques",
    options: ["Taille standard", "Grande (+3 $)", "Très grande (+5 $)"]
  },
  {
    id: 2,
    name: "Quatre Fromages",
    description: "Mozzarella, gorgonzola, fromage de chèvre et parmesan",
    price: 15.99,
    image: "/images/margherita.jpg",
    category: "Classiques",
    options: ["Taille standard", "Grande (+3 $)", "Très grande (+5 $)"]
  },
  {
    id: 3,
    name: "Végétarienne",
    description: "Tomate, mozzarella et légumes de saison grillés",
    price: 14.99,
    image: "/images/vegetarian.jpg",
    category: "Végétarien",
    options: ["Taille standard", "Grande (+3 $)", "Très grande (+5 $)"]
  },
  {
    id: 4,
    name: "Pepperoni",
    description: "Sauce tomate, mozzarella et pepperoni",
    price: 14.99,
    image: "/images/pepperoni.jpg",
    category: "Viande",
    options: ["Taille standard", "Grande (+3 $)", "Très grande (+5 $)"]
  },
  {
    id: 5,
    name: "Suprême",
    description: "Sauce tomate, mozzarella, pepperoni, poivrons, champignons, oignons et olives",
    price: 16.99,
    image: "/images/supreme.jpg",
    category: "Viande",
    options: ["Taille standard", "Grande (+3 $)", "Très grande (+5 $)"]
  },
  {
    id: 6,
    name: "Hawaïenne",
    description: "Sauce tomate, mozzarella, jambon et ananas",
    price: 15.99,
    image: "/images/hawaiian.jpg",
    category: "Spécialités",
    options: ["Taille standard", "Grande (+3 $)", "Très grande (+5 $)"]
  },
];

// Options supplémentaires
const extras = [
  { id: 1, name: "Fromage supplémentaire", price: 1.5 },
  { id: 2, name: "Champignons supplémentaires", price: 1.0 },
  { id: 3, name: "Pepperoni supplémentaire", price: 1.5 },
  { id: 4, name: "Olives supplémentaires", price: 1.0 },
  { id: 5, name: "Roquette fraîche", price: 1.0 },
  { id: 6, name: "Crème de truffe", price: 3.0 },
];

// Boissons disponibles
const drinks = [
  { id: 1, name: "Coca-Cola (33cl)", price: 2.5 },
  { id: 2, name: "Sprite (33cl)", price: 2.5 },
  { id: 3, name: "Eau minérale (50cl)", price: 1.5 },
  { id: 4, name: "San Pellegrino (50cl)", price: 2.0 },
  { id: 5, name: "Vin rouge (37.5cl)", price: 9.0 },
  { id: 6, name: "Bière artisanale (33cl)", price: 4.5 },
];

export default function OrderPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Héros */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Commander en ligne</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choisissez vos pizzas préférées et commandez pour livraison ou à emporter en quelques clics.
          </p>
        </div>

        {/* Formulaire de commande */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Sélection de pizza */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Nos Pizzas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-bold">{product.name}</h3>
                        <span className="font-bold text-red-500">${product.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{product.description}</p>
                      
                      <div className="mb-4">
                        <Label htmlFor={`size-${product.id}`} className="text-sm">Sélectionnez la taille</Label>
                        <select 
                          id={`size-${product.id}`} 
                          className="w-full mt-1 p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-sm"
                        >
                          {product.options.map((option, idx) => (
                            <option key={idx}>{option}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-not-allowed" title="Non disponible dans l'aperçu">-</button>
                          <span className="mx-3">0</span>
                          <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center cursor-not-allowed" title="Non disponible dans l'aperçu">+</button>
                        </div>
                        <Button variant="outline" className="text-sm" isDecorative={true}>Ajouter à la commande</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Section Extras */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Garnitures supplémentaires</h2>
                <div className="space-y-4">
                  {extras.map((extra) => (
                    <div key={extra.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <input type="checkbox" id={`extra-${extra.id}`} className="mr-3" />
                        <Label htmlFor={`extra-${extra.id}`}>{extra.name}</Label>
                      </div>
                      <span className="text-red-500 font-medium">${extra.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Section Boissons */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Boissons</h2>
                <div className="space-y-4">
                  {drinks.map((drink) => (
                    <div key={drink.id} className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <select 
                          id={`drink-qty-${drink.id}`} 
                          className="w-16 p-1 border rounded-md bg-gray-50 dark:bg-gray-700 text-sm"
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <Label htmlFor={`drink-qty-${drink.id}`}>{drink.name}</Label>
                      </div>
                      <span className="text-red-500 font-medium">${drink.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Colonne de droite - Résumé de commande et informations client */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Résumé de la commande</h2>
              
              <div className="border-t border-b py-4 mb-4">
                <div className="text-gray-500 dark:text-gray-400 italic mb-2">Votre panier est vide</div>
                
                {/* Ceci serait peuplé avec les articles sélectionnés */}
                {/*
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium">Margherita x1</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Taille standard</p>
                  </div>
                  <span>$12.99</span>
                </div>
                */}
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>$2.99</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>$2.99</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-4">Méthode de livraison</h3>
                <div className="flex space-x-4 mb-4">
                  <div className="flex items-center">
                    <input type="radio" id="delivery" name="deliveryMethod" className="mr-2" checked />
                    <Label htmlFor="delivery">Livraison</Label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="pickup" name="deliveryMethod" className="mr-2" />
                    <Label htmlFor="pickup">À emporter</Label>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Adresse de livraison</Label>
                    <Input id="address" placeholder="Adresse" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Ville" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="postal">Code postal</Label>
                      <Input id="postal" placeholder="Code postal" className="mt-1" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-4">Vos informations</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" placeholder="Votre nom complet" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Numéro de téléphone</Label>
                    <Input id="phone" placeholder="Pour contact de livraison" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Pour confirmation de commande" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Instructions spéciales</Label>
                    <Textarea id="notes" placeholder="Toute demande spéciale ou instructions de livraison" className="mt-1" />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold mb-4">Méthode de paiement</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="cash" name="paymentMethod" className="mr-2" checked />
                    <Label htmlFor="cash">Paiement à la livraison</Label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="card" name="paymentMethod" className="mr-2" />
                    <Label htmlFor="card">Carte de crédit à la livraison</Label>
                  </div>
                </div>
              </div>
              
              <Button className="w-full py-3 text-lg" isDecorative={true}>Passer la commande</Button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                En passant votre commande, vous acceptez nos Conditions de service et notre Politique de confidentialité
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 