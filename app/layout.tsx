import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased selection:bg-purple-500/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
