import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border/30 py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl tracking-[0.3em] mb-4">WANDER</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Luxury photography studio based in Dubai, capturing cinematic moments that tell your story.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-muted-foreground">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-muted-foreground">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="mailto:hello@wander.ae" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" /> hello@wander.ae
            </a>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +971 4 123 4567
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Dubai, UAE
            </span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 pt-8 text-center text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} WANDER. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
