import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Rupali | Cinematic Beauty Portfolio",
  description: "Makeup artist portfolio in Ahilyanagar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable, montserrat.variable)}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <header className="w-full border-b py-4 px-6 text-center">
          <p className="text-muted-foreground">Navbar Placeholder</p>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="w-full border-t py-8 px-6 text-center mt-auto">
          <p className="text-muted-foreground">Footer Placeholder</p>
        </footer>
      </body>
    </html>
  );
}