"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Solutions", href: "#services" },
  { name: "Case Studies", href: "#portfolio" },
  { name: "Methodology", href: "#automation" },
  { name: "Pricing", href: "#pricing" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
        ? "border-b border-[var(--glass-border)] bg-[var(--background)]/80 backdrop-blur-md py-4" 
        : "bg-transparent py-8"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-4 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--foreground)] transition-transform group-hover:scale-105">
            <span className="text-xl font-bold text-[var(--background)]">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-extrabold tracking-tight text-[var(--foreground)] leading-none">Solvix</span>
            <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-1">StixNVibes Studio</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-purple-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-zinc-400 hover:text-purple-500 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button asChild className="h-12 px-6 rounded-lg text-[0.65rem] font-black uppercase tracking-[0.2em] shadow-none">
            <a href="#contact">
              Initiate Audit
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-6 lg:hidden">
           <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-zinc-400"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 h-screen w-full bg-[var(--background)] lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-12 p-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-extrabold uppercase tracking-widest text-[var(--foreground)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <Button className="w-full max-w-xs h-16 text-xs font-black uppercase tracking-widest" asChild onClick={() => setMobileMenuOpen(false)}>
                <a href="#contact">Get Free Audit</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
