import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Napoli in Paris - Découvrez nos délicieuses pizzas",
  description: "Napoli in Paris propose des pizzas authentiques préparées avec passion et des ingrédients frais. Livraison et à emporter disponibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
