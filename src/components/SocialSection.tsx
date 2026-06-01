import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/message/Y6FCCAQDYXJCL1",
    color: "#25D366",
    delay: 0,
    // High-quality custom SVG path for WhatsApp
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white/80 transition-colors duration-300 group-hover:fill-[#25D366]">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.378 3.469 2.237 2.235 3.469 5.207 3.469 8.371 0 6.533-5.322 11.86-11.859 11.86-2.007-.002-3.98-.51-5.733-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.277 0 9.584-4.302 9.587-9.589.002-2.561-.996-4.97-2.809-6.784-1.812-1.812-4.22-2.812-6.78-2.814-5.282 0-9.588 4.301-9.59 9.588-.001 1.644.43 3.243 1.25 4.683l-.999 3.646 3.732-.979zm12.181-4.704c-.33-.165-1.951-.963-2.282-1.084-.33-.121-.57-.182-.81.182-.24.364-.93 1.182-1.14 1.422-.21.24-.42.27-.75.105-.33-.165-1.393-.513-2.653-1.638-.98-.874-1.641-1.953-1.833-2.282-.19-.33-.02-.508.145-.671.148-.147.33-.383.495-.575.165-.19.22-.325.33-.54.11-.215.055-.405-.027-.57-.082-.165-.81-1.951-1.11-2.673-.292-.705-.59-.609-.81-.62-.21-.01-.45-.01-.69-.01-.24 0-.63.09-1.02.51-.39.42-1.485 1.45-1.485 3.535 0 2.085 1.515 4.095 1.725 4.38.21.285 2.98 4.55 7.22 6.38 1.01.43 1.8.69 2.41.88.85.27 1.62.23 2.23.14.68-.1 1.951-.8 2.225-1.57.275-.77.275-1.43.195-1.57-.08-.14-.3-.22-.63-.385z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mundla_vijay_146?igsh=MTVrOWQzdWZ3aW9iNA==",
    color: "#E1306C",
    delay: 0.15,
    icon: <Instagram size={28} className="text-white/80 transition-colors duration-300 group-hover:text-[#E1306C]" />
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1PC92uinuZ/?mibextid=wwXIfr",
    color: "#1877F2",
    delay: 0.3,
    icon: <Facebook size={28} className="text-white/80 transition-colors duration-300 group-hover:text-[#1877F2] fill-transparent group-hover:fill-[#1877F2]/10" />
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vijay-kumar-405866172?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    color: "#0077B5",
    delay: 0.45,
    icon: <Linkedin size={28} className="text-white/80 transition-colors duration-300 group-hover:text-[#0077B5] fill-transparent group-hover:fill-[#0077B5]/10" />
  }
];

const SocialSection = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-background">
      {/* Glow highlight */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      <div className="container max-w-4xl relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Connect with Vijay Kumar across social platforms and discuss your next creative project.
          </p>
        </div>

        {/* Horizontal Suite Container */}
        <div className="relative flex justify-center items-center py-6">
          
          {/* OPTIONAL PREMIUM EFFECT: Futuristic Animated Glow Line behind the icons */}
          <div className="absolute left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none hidden md:block">
            <motion.div 
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"
              style={{
                boxShadow: "0 0 12px rgba(124, 58, 237, 0.6)",
              }}
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Icons Layout: Horizontal Desktop/Tablet, 2x2 Grid on Mobile */}
          <div className="grid grid-cols-2 md:flex md:flex-row md:items-center justify-center gap-10 md:gap-14 relative z-10 w-full max-w-[500px] md:max-w-none px-4">
            {socialLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: link.delay }}
                className="flex flex-col items-center gap-3.5"
              >
                {/* Clickable circular glassmorphism container */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Vijay Kumar on ${link.name}`}
                  className="group relative flex items-center justify-center w-[72px] h-[72px] rounded-full transition-all duration-300 cursor-pointer shadow-lg bg-[#0F0A1C]/50 backdrop-blur-md border border-white/5 hover:scale-[1.05]"
                  style={{
                    boxShadow: "0 0 15px rgba(124, 58, 237, 0.12)",
                  }}
                  // Enforce custom premium glowing border styling on hover programmatically
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(124, 58, 237, 0.5)";
                    el.style.boxShadow = `0 0 25px rgba(124, 58, 237, 0.25), 0 0 15px ${link.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255, 255, 255, 0.05)";
                    el.style.boxShadow = "0 0 15px rgba(124, 58, 237, 0.12)";
                  }}
                >
                  {/* Subtle float effect inside container */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: link.delay }}
                    className="flex items-center justify-center"
                  >
                    {link.icon}
                  </motion.div>
                </a>

                {/* Low-opacity text labels */}
                <span className="text-xs font-semibold tracking-wider text-white/50 group-hover:text-white transition-colors duration-300 select-none uppercase">
                  {link.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center pt-8 border-t border-border/20 space-y-6"
        >
          <p className="text-muted-foreground text-sm tracking-wider uppercase font-semibold">
            Ready to create something exceptional?
          </p>
          <Button
            variant="gradient"
            size="xl"
            className="group transition-all duration-300 hover:-translate-y-0.5"
            asChild
          >
            <a 
              href="https://calendly.com/mondlavijay97/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Book a consultation call with Vijay Kumar"
            >
              Let's Discuss Your Project{" "}
              <ArrowRight size={18} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialSection;
