const links = ["About", "Contact", "Terms", "Privacy"];

const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <span className="font-heading text-lg font-bold">
        <span className="text-gradient">Nomad</span> School
      </span>
      <nav className="flex gap-6">
        {links.map((l) => (
          <a key={l} href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            {l}
          </a>
        ))}
      </nav>
      <span className="text-sm text-muted-foreground">© 2026 Nomad School. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
