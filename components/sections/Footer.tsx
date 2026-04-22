import { CONTACT_EMAIL, WHATSAPP_NUMBER, INSTAGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-purple-600">
                <span className="text-xs font-bold text-white">S</span>
              </div>
              <span className="font-bold text-white">Solvix Studios</span>
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              Websites & AI systems that bring you customers. Built for modern local businesses.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><a href="#services" className="hover:text-white">Web Design</a></li>
              <li><a href="#services" className="hover:text-white">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-white">WhatsApp Funnels</a></li>
              <li><a href="#automation" className="hover:text-white">n8n Automation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><a href="#hero" className="hover:text-white">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Solvix Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
