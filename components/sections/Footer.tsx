import { CONTACT_EMAIL, WHATSAPP_NUMBER, INSTAGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--background)] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--foreground)]">
                  <span className="text-xs font-bold text-[var(--background)]">S</span>
                </div>
                <span className="font-bold text-[var(--foreground)]">Solvix Studios</span>
              </div>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">A StixNVibes Creative Company</span>
            </div>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Enterprise-grade digital systems and AI automations. Built for modern growth.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500">
              <li><a href="#services" className="hover:text-purple-500 transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-purple-500 transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-purple-500 transition-colors">WhatsApp Funnels</a></li>
              <li><a href="#automation" className="hover:text-purple-500 transition-colors">n8n Automation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500">
              <li><a href="#hero" className="hover:text-purple-500 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-purple-500 transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-purple-500 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500">
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-purple-500 transition-colors"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-purple-500 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--glass-border)] pt-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Solvix Studios (A StixNVibes Creative Company). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}