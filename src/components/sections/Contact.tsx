import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { portfolioData } from "@/data/portfolioData";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  }

  return (
    <section id="contact" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 border border-primary/20"
        >
          Contact
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Let's work <span className="gradient-text">together</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Have a project in mind or want to explore an opportunity? I'd love to hear from you.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <a href={`mailto:${portfolioData.personal.email}`} className="group flex items-center gap-5 p-6 rounded-3xl bg-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
              <p className="text-foreground font-semibold">{portfolioData.personal.email}</p>
            </div>
          </a>

          <div className="group flex items-center gap-5 p-6 rounded-3xl bg-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
              <p className="text-foreground font-semibold">Remote / Worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-card/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-border shadow-xl relative overflow-hidden"
        >
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-card/95 backdrop-blur-md"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium ml-1">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-background/50 border-border h-14 rounded-2xl px-5 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium ml-1">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" className="bg-background/50 border-border h-14 rounded-2xl px-5 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium ml-1">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="bg-background/50 border-border min-h-[160px] resize-none rounded-2xl p-5 focus-visible:ring-primary" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-medium rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all group">
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>

      </div>
    </section>
  );
}
