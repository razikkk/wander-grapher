import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { name: "Automotive", slug: "automotive" },
  { name: "Events", slug: "events" },
  { name: "Sports", slug: "sports" },
  { name: "Portraits", slug: "portraits" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Product", slug: "product" },
  { name: "Real Estate", slug: "real-estate" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          <Link to="/" className="font-display text-2xl tracking-[0.3em] font-semibold text-foreground">
            WANDER
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase font-body">
            <Link to="/" className={`transition-opacity hover:opacity-100 ${isActive("/") ? "opacity-100" : "opacity-60"}`}>
              Home
            </Link>
            <Link to="/about" className={`transition-opacity hover:opacity-100 ${isActive("/about") ? "opacity-100" : "opacity-60"}`}>
              About
            </Link>

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPortfolioOpen(true)}
              onMouseLeave={() => setPortfolioOpen(false)}
            >
              <Link
                to="/portfolio"
                className={`flex items-center gap-1 transition-opacity hover:opacity-100 ${
                  location.pathname.includes("/portfolio") ? "opacity-100" : "opacity-60"
                }`}
              >
                Portfolio <ChevronDown className="w-3 h-3" />
              </Link>
              <AnimatePresence>
                {portfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-card border border-border/50 min-w-[200px] py-3"
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/portfolio/${cat.slug}`}
                        className="block px-5 py-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={`transition-opacity hover:opacity-100 ${isActive("/contact") ? "opacity-100" : "opacity-60"}`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl italic tracking-wider text-foreground hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col items-center gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/portfolio/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
