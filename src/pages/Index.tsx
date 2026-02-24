import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Video, Aperture, Image, Star, Building } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Camera, title: "Portraits", desc: "Studio & editorial portraiture" },
  { icon: Video, title: "Events", desc: "Weddings, galas & conferences" },
  { icon: Aperture, title: "Automotive", desc: "Luxury car photography" },
  { icon: Image, title: "Product", desc: "Commercial product shoots" },
  { icon: Star, title: "Lifestyle", desc: "Brand & lifestyle content" },
  { icon: Building, title: "Real Estate", desc: "Architecture & interiors" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai skyline"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Capturing Moments
          <br />
          <span className="text-muted-foreground">in Dubai</span>
        </h1>
        <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground mb-10">
          Luxury Photography & Videography
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
        >
          View Portfolio <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>

    {/* About Teaser */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554844453-7ea2a562f8be?w=800&q=80"
                alt="Photographer at work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">About Us</p>
            <h2 className="font-display italic text-4xl md:text-5xl mb-6 leading-tight">
              The Art of
              <br />
              Visual Storytelling
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wander is a luxury photography studio based in the heart of Dubai. 
              We craft cinematic visual narratives for brands, individuals, and events — 
              blending artistry with precision to create images that transcend the ordinary.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
            >
              Learn More <ArrowRight className="w-3 h-3" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Do</p>
          <h2 className="font-display italic text-4xl md:text-5xl">Our Services</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="border border-border/50 p-8 hover:border-foreground/30 transition-colors group">
                <service.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="font-display text-xl mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
