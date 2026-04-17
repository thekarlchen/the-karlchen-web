import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t(translations.nav.home, lang), href: "#home" },
    { label: t(translations.nav.stay, lang), href: "#rooms" },
    { label: t(translations.nav.contact, lang), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center h-20 px-4 relative">
        
        {/* 1. Left Side (ALL SCREENS): Language Switcher */}
        {/* Removed 'hidden md:flex' so it always stays on the left */}
        <div className="flex flex-1">
          <div className="flex items-center border border-border rounded-sm overflow-hidden text-xs">
            <button
              onClick={() => setLang("de")}
              className={`px-2.5 py-1 transition-colors font-body ${lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 transition-colors font-body ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* 2. The Brand / Logo (Centered Mathematically) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
          <a href="#home" className="text-center group" onClick={() => setOpen(false)}>
            <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase group-hover:text-foreground transition-colors">
              The
            </p>
            <p className="font-heading text-2xl font-semibold tracking-[0.15em] text-foreground">
              KARLCHEN
            </p>
          </a>
        </div>

        {/* 3. Right Side: Links (Desktop) & Hamburger (Mobile) */}
        <div className="flex flex-1 justify-end items-center">
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden text-foreground p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background pb-4 px-4 absolute w-full shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 font-body text-sm uppercase tracking-[0.15em] text-center text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;