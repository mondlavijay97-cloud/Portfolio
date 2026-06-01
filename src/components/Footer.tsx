import { Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#modules" },
  { label: "Pipeline", href: "#process" },
  { label: "Work", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/message/Y6FCCAQDYXJCL1",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-muted-foreground transition-colors group-hover:fill-[#25D366]">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.378 3.469 2.237 2.235 3.469 5.207 3.469 8.371 0 6.533-5.322 11.86-11.859 11.86-2.007-.002-3.98-.51-5.733-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.277 0 9.584-4.302 9.587-9.589.002-2.561-.996-4.97-2.809-6.784-1.812-1.812-4.22-2.812-6.78-2.814-5.282 0-9.588 4.301-9.59 9.588-.001 1.644.43 3.243 1.25 4.683l-.999 3.646 3.732-.979zm12.181-4.704c-.33-.165-1.951-.963-2.282-1.084-.33-.121-.57-.182-.81.182-.24.364-.93 1.182-1.14 1.422-.21.24-.42.27-.75.105-.33-.165-1.393-.513-2.653-1.638-.98-.874-1.641-1.953-1.833-2.282-.19-.33-.02-.508.145-.671.148-.147.33-.383.495-.575.165-.19.22-.325.33-.54.11-.215.055-.405-.027-.57-.082-.165-.81-1.951-1.11-2.673-.292-.705-.59-.609-.81-.62-.21-.01-.45-.01-.69-.01-.24 0-.63.09-1.02.51-.39.42-1.485 1.45-1.485 3.535 0 2.085 1.515 4.095 1.725 4.38.21.285 2.98 4.55 7.22 6.38 1.01.43 1.8.69 2.41.88.85.27 1.62.23 2.23.14.68-.1 1.951-.8 2.225-1.57.275-.77.275-1.43.195-1.57-.08-.14-.3-.22-.63-.385z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mundla_vijay_146?igsh=MTVrOWQzdWZ3aW9iNA==",
    icon: <Instagram size={20} className="text-muted-foreground transition-colors group-hover:text-[#E1306C]" />
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1PC92uinuZ/?mibextid=wwXIfr",
    icon: <Facebook size={20} className="text-muted-foreground transition-colors group-hover:text-[#1877F2] fill-transparent group-hover:fill-[#1877F2]/10" />
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vijay-kumar-405866172?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: <Linkedin size={20} className="text-muted-foreground transition-colors group-hover:text-[#0077B5] fill-transparent group-hover:fill-[#0077B5]/10" />
  }
];

const Footer = () => (
  <footer className="border-t border-border/50 py-12 bg-background/50 relative overflow-hidden">
    <div className="container px-4 sm:px-6 lg:px-8">
      {/* 
          Desktop (sm and up): horizontal row, justify-between items-center
          Mobile (<sm): vertical stacked column, centered items, gap-6
      */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        
        {/* Logo (Centered on mobile) */}
        <a href="#" className="font-heading text-2xl font-bold tracking-tight text-center sm:text-left">
          <span className="text-gradient">Vijay</span> Kumar
        </a>

        {/* Navigation links (Centered) */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <a 
              key={l.label} 
              href={l.href} 
              className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-white transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Social Icons - touch friendly min 44x44px target! */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Vijay Kumar on ${s.name}`}
              className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/5 transition-all hover:bg-white/10 hover:border-white/15 hover:scale-[1.05]"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright (Centered on mobile) */}
        <span className="text-xs text-muted-foreground text-center sm:text-right sm:order-none order-last">
          © 2026 Vijay Kumar. All rights reserved.
        </span>

      </div>
    </div>
  </footer>
);

export default Footer;
