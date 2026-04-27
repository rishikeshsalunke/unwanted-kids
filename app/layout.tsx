import type { Metadata } from "next";
import Link from 'next/link';

import { Bodoni_Moda, Bebas_Neue, Montserrat, Playfair_Display } from "next/font/google"; // Import exactly these
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-bodoni",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: "italic",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Henny+Penny&family=Pinyon+Script&family=Ranchers&family=Spicy+Rice&family=Squada+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${bebas.variable} ${montserrat.variable} ${bodoni.variable} antialiased bg-[#0a0a0a]`}>
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full p-8 flex justify-end gap-10 text-[10px] font-bold uppercase tracking-[0.2em] z-[100] bg-gradient-to-b from-black/50 to-transparent">
          <Link href="/" className="text-white hover:text-red-600 transition">Home</Link>
          {/* <Link href="/about" className="text-white hover:text-red-600 transition border-b border-red-600 pb-1">About</Link> */}
          <Link href="/cinematography" className="text-white hover:text-red-600 transition">
            Cinema
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}