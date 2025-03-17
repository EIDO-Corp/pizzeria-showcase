"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Pizza } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-800",
        className
      )}
      {...props}
    >
      <div className="container flex h-16 items-center justify-center mx-auto">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Pizza className="h-6 w-6 text-red-600" />
            <span className="sr-only sm:not-sr-only">Napoli in Paris</span>
          </Link>
        </div>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-red-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end">
          <Link href="/order" className="hidden md:inline-flex">
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Order Now
            </Button>
          </Link>
          
          <button
            className="flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-16 z-50 mt-px bg-white dark:bg-gray-950 shadow-lg md:hidden">
            <div className="container space-y-3 py-4 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium transition-colors hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/order" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 