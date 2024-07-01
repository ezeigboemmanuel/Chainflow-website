import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { RainbowProvider } from "@/components/RainbowProvider";
import '@rainbow-me/rainbowkit/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chainflow",
  description: "STREAMLINE YOUR INVOICING WITH CROSS CHAIN TECHNOLOGY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <RainbowProvider>{children}</RainbowProvider>
        <Footer />
      </body>
    </html>
  );
}
