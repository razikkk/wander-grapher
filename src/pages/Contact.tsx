import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Get in Touch</p>
            <h1 className="font-display italic text-5xl md:text-6xl">Contact Us</h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <Label htmlFor="name" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Name *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 bg-transparent border-border/50 focus:border-foreground/50 rounded-none"
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 bg-transparent border-border/50 focus:border-foreground/50 rounded-none"
                    maxLength={255}
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Subject</Label>
                  <Input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-2 bg-transparent border-border/50 focus:border-foreground/50 rounded-none"
                    maxLength={200}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 bg-transparent border-border/50 focus:border-foreground/50 rounded-none min-h-[150px]"
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  className="border border-foreground/30 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500 self-start"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-display text-xl mb-4">Direct Contact</h3>
                  <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <a href="mailto:hello@wander.ae" className="flex items-center gap-3 hover:text-foreground transition-colors">
                      <Mail className="w-4 h-4" /> hello@wander.ae
                    </a>
                    <span className="flex items-center gap-3">
                      <Phone className="w-4 h-4" /> +971 4 123 4567
                    </span>
                    <span className="flex items-center gap-3">
                      <MapPin className="w-4 h-4" /> Business Bay, Dubai, UAE
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-4">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Sunday — Thursday: 9:00 AM – 6:00 PM
                    <br />
                    Friday — Saturday: By appointment
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
