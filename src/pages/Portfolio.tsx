import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { categories } from "@/lib/portfolio-data";

const Portfolio = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Work</p>
          <h1 className="font-display italic text-5xl md:text-6xl">Portfolio</h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.slug} delay={i * 0.08}>
              <Link to={`/portfolio/${cat.slug}`} className="group block relative overflow-hidden aspect-[4/3]">
                <motion.img
                  src={cat.coverImage}
                  alt={cat.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500 flex items-end p-8">
                  <div>
                    <h3 className="font-display italic text-3xl mb-1">{cat.name}</h3>
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground/70">{cat.description}</p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
