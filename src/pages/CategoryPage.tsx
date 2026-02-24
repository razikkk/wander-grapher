import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { categories } from "@/lib/portfolio-data";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Category not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img
          src={category.coverImage}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <h1 className="font-display italic text-5xl md:text-7xl">{category.name}</h1>
          <p className="text-muted-foreground mt-2 text-sm tracking-wide">{category.description}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {category.layout === "masonry" ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {category.images.map((img, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <motion.div
                    className="break-inside-avoid overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={img}
                      alt={`${category.name} ${i + 1}`}
                      className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {category.images.map((img, i) => (
                  <AnimatedSection key={i} delay={i * 0.05}>
                    <motion.div
                      className="aspect-[4/3] overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={img}
                        alt={`${category.name} ${i + 1}`}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Video Placeholder */}
              <AnimatedSection>
                <div className="aspect-video bg-card border border-border/50 flex items-center justify-center group cursor-pointer hover:border-foreground/30 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border border-foreground/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {category.name} Showreel
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
