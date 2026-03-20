"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email", value: "dev.ronaktanwar@gmail.com", href: "mailto:dev.ronaktanwar@gmail.com" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", value: "linkedin.com/in/ronaksaini", href: "https://www.linkedin.com/in/ronaksaini/" },
    { icon: <Github size={24} />, label: "GitHub", value: "github.com/ronaksaini", href: "#" },
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h3 className="text-2xl font-bold mb-6">Let&apos;s build something great together.</h3>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I&apos;ll do my best to get back to you as soon as possible.
          </p>

          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-3xl glass-dark border-white/5 hover:border-primary/20 transition-all group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent border border-white/5">
            <h4 className="text-lg font-bold mb-2">Location</h4>
            <p className="text-muted-foreground">Jaipur, Rajasthan, India (Open to Remote)</p>
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 rounded-[40px] glass-dark border-white/10 premium-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-20" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-muted-foreground uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-muted-foreground uppercase tracking-widest ml-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-0 outline-none transition-all resize-none placeholder:text-muted-foreground/30"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 premium-shadow"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={20} />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
