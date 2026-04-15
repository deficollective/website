import type { Metadata } from "next";
import { Red_Hat_Display, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-primary",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeFi Collective",
  description:
    "The DeFi Collective is a non-profit organization dedicated to supporting decentralized finance.",
  keywords: ["DeFi", "Decentralized Finance", "Unstoppable DeFi", "Non-profit"],
  icons: {
    icon: "/symbol_tdc_color.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${fredoka.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gradient-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
