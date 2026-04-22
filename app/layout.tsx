import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Solvix Studios | Websites & AI Systems for Growth",
  description: "We help clinics, gyms, and local businesses grow with high-converting websites and smart automation.",
  openGraph: {
    title: "Solvix Studios",
    description: "The growth partner for modern local businesses.",
    type: "website",
    url: "https://solvixstudios.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050507] text-white antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
