import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What types of photography do you specialize in?", a: "We specialize in automotive, events, sports, portraits, lifestyle, product, and real estate photography — all delivered with a cinematic, editorial approach." },
  { q: "Do you offer videography services?", a: "Yes, we provide full videography packages including promotional films, event coverage, and branded content creation." },
  { q: "What is your booking process?", a: "Simply reach out via our contact form or email. We'll discuss your vision, create a tailored proposal, and schedule your session at a time that works for you." },
  { q: "Do you travel for shoots?", a: "Absolutely. While we're based in Dubai, we regularly work across the UAE and internationally for destination projects." },
  { q: "How long until I receive my photos?", a: "Turnaround time is typically 5–10 business days for edited galleries. Rush delivery is available upon request." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
            <h1 className="font-display italic text-5xl md:text-6xl mb-6 leading-tight">
              Born from a
              <br />
              Love of Light
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wander was founded in Dubai with a singular vision: to elevate photography into an art form 
              that resonates. We believe every frame should carry weight — every shadow should tell a story.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team blends years of international experience with an intimate knowledge of Dubai's 
              dynamic landscape, delivering visual narratives that are as bold as the city itself.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
                alt="Cinematic portrait"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">FAQ</p>
          <h2 className="font-display italic text-4xl md:text-5xl">Common Questions</h2>
        </AnimatedSection>
        <AnimatedSection>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-body text-sm tracking-wide hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32">
      <AnimatedSection className="container mx-auto px-6 text-center">
        <h2 className="font-display italic text-4xl md:text-6xl mb-6">Ready to Create?</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Let's craft something extraordinary together. Get in touch to discuss your next project.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Book a Session <ArrowRight className="w-4 h-4" />
        </Link>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;
