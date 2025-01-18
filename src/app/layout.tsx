import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BusinessPro | Innovative Business Solutions",
  description: "Transform your business with our innovative solutions. We offer digital transformation, analytics, and implementation services to help your company reach new heights.",
  keywords: "business solutions, digital transformation, analytics, consulting, business services",
  authors: [{ name: "BusinessPro" }],
  openGraph: {
    title: "BusinessPro | Innovative Business Solutions",
    description: "Transform your business with our innovative solutions",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BusinessPro | Innovative Business Solutions",
    description: "Transform your business with our innovative solutions"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}