import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solvix Studios | High-Converting Growth Websites",
  description:
    "Solvix Studios helps clinics, gyms, coaches, and local businesses get more customers with conversion-focused websites and digital systems.",
  openGraph: {
    title: "Solvix Studios",
    description: "Websites and digital systems designed to drive bookings, leads, and revenue.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#050507] text-zinc-100">{children}</body>
    </html>
  );
}
