import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Contact - Pizzeria",
  description: "Contact us to reserve a table, order takeout, or share your feedback.",
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
    title: "Address",
    content: "123 Pizza Street, 75001 Paris, France",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
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
    title: "Hours",
    content: "Tue-Sun: 11:30-2:30, 6:30-10:30 PM | Closed on Mondays",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We would be delighted to welcome you to our pizzeria or answer your questions.
            Feel free to contact us by phone, email, or through the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.smith@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Reservation, Question, etc." required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" isDecorative={true}>Send Message</Button>
            </form>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
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
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/map-placeholder.jpg"
                  alt="Map location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs text-center">
                    <h3 className="font-bold mb-2">Artisanal Pizzeria</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      123 Pizza Street
                      <br />
                      Paris, 75001
                    </p>
                    <Button size="sm" className="mt-3" isDecorative={true}>Get Directions</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Do you take reservations?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we accept reservations for dinner. For lunch we operate on a first-come, first-served basis. 
                Please call us or use our online form to make a dinner reservation.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Do you offer vegetarian options?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! We have several delicious vegetarian pizzas on our menu, and we&apos;re also happy to customize any pizza according to your preferences.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">What areas do you deliver to?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We deliver within a 5 km radius of our restaurant. Delivery is available from 6:30 PM to 10:00 PM, Tuesday through Sunday.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Do you cater for events?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we offer catering services for events of all sizes. Please contact us at least 48 hours in advance to discuss your needs and place your order.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience Authentic Pizza?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Whether you&apos;re planning a visit to our restaurant or want to order for delivery, we&apos;re here to provide you with the best pizza experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" isDecorative={true}>Make a Reservation</Button>
            <Button variant="outline" size="lg" isDecorative={true}>Order Online</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 