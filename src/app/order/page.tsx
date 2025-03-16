import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Order Online - Pizzeria",
  description: "Order your favorite pizzas online for delivery or takeaway. Fast, easy and delicious!",
};

// Products available for online ordering
const products = [
  {
    id: 1,
    name: "Margherita",
    description: "The classic pizza with tomato sauce, mozzarella and fresh basil",
    price: 12.99,
    image: "/images/margherita.jpg",
    category: "Classics",
    options: ["Standard size", "Large (+$3)", "Extra large (+$5)"]
  },
  {
    id: 2,
    name: "Four Cheese",
    description: "Mozzarella, gorgonzola, goat cheese and parmesan",
    price: 15.99,
    image: "/images/margherita.jpg",
    category: "Classics",
    options: ["Standard size", "Large (+$3)", "Extra large (+$5)"]
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Tomato, mozzarella and grilled seasonal vegetables",
    price: 14.99,
    image: "/images/vegetarian.jpg",
    category: "Vegetarian",
    options: ["Standard size", "Large (+$3)", "Extra large (+$5)"]
  },
  {
    id: 4,
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella and pepperoni",
    price: 14.99,
    image: "/images/pepperoni.jpg",
    category: "Meat",
    options: ["Standard size", "Large (+$3)", "Extra large (+$5)"]
  },
  {
    id: 5,
    name: "Supreme",
    description: "Tomato sauce, mozzarella, pepperoni, bell peppers, mushrooms, onions and olives",
    price: 16.99,
    image: "/images/supreme.jpg",
    category: "Meat",
    options: ["Standard size", "Large (+$3)", "Extra large (+$5)"]
  },
  {
    id: 6,
    name: "Hawaiian",
    description: "Tomato sauce, mozzarella, ham and pineapple",
    price: 15.99,
    image: "/images/hawaiian.jpg",
    category: "Specialties",
    options: ["Standard size", "Large (+$3)", "Extra large (+$5)"]
  },
];

// Additional options
const extras = [
  { id: 1, name: "Extra cheese", price: 1.5 },
  { id: 2, name: "Extra mushrooms", price: 1.0 },
  { id: 3, name: "Extra pepperoni", price: 1.5 },
  { id: 4, name: "Extra olives", price: 1.0 },
  { id: 5, name: "Fresh arugula", price: 1.0 },
  { id: 6, name: "Truffle cream", price: 3.0 },
];

// Available drinks
const drinks = [
  { id: 1, name: "Coca-Cola (33cl)", price: 2.5 },
  { id: 2, name: "Sprite (33cl)", price: 2.5 },
  { id: 3, name: "Mineral water (50cl)", price: 1.5 },
  { id: 4, name: "San Pellegrino (50cl)", price: 2.0 },
  { id: 5, name: "Red wine (37.5cl)", price: 9.0 },
  { id: 6, name: "Craft beer (33cl)", price: 4.5 },
];

export default function OrderPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Order Online</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose your favorite pizzas and order for delivery or pickup in just a few clicks.
          </p>
        </div>

        {/* Order Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Pizza Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Pizzas</h2>
              
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
                        <Label htmlFor={`size-${product.id}`} className="text-sm">Select size</Label>
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
                          <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-not-allowed" title="Not available in the preview">-</button>
                          <span className="mx-3">0</span>
                          <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center cursor-not-allowed" title="Not available in the preview">+</button>
                        </div>
                        <Button variant="outline" className="text-sm" isDecorative={true}>Add to Order</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Extras Section */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Extra Toppings</h2>
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
              
              {/* Drinks Section */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Drinks</h2>
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
          
          {/* Right Column - Order Summary and Customer Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="border-t border-b py-4 mb-4">
                <div className="text-gray-500 dark:text-gray-400 italic mb-2">Your cart is empty</div>
                
                {/* This would be populated with selected items */}
                {/*
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium">Margherita x1</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Standard size</p>
                  </div>
                  <span>$12.99</span>
                </div>
                */}
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>$2.99</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>$2.99</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-4">Delivery Method</h3>
                <div className="flex space-x-4 mb-4">
                  <div className="flex items-center">
                    <input type="radio" id="delivery" name="deliveryMethod" className="mr-2" checked />
                    <Label htmlFor="delivery">Delivery</Label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="pickup" name="deliveryMethod" className="mr-2" />
                    <Label htmlFor="pickup">Pickup</Label>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input id="address" placeholder="Street address" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" placeholder="Postal code" className="mt-1" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-4">Your Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="For delivery contact" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="For order confirmation" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Textarea id="notes" placeholder="Any special requests or delivery instructions" className="mt-1" />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold mb-4">Payment Method</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="cash" name="paymentMethod" className="mr-2" checked />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="card" name="paymentMethod" className="mr-2" />
                    <Label htmlFor="card">Credit Card on Delivery</Label>
                  </div>
                </div>
              </div>
              
              <Button className="w-full py-3 text-lg" isDecorative={true}>Place Order</Button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                By placing your order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 