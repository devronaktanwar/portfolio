"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import servicesData from "@/data/services.json";
import * as LucideIcons from "lucide-react";

export default function Services() {
  return (
    <Section id="services" title="What I Do" subtitle="Services">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          // Dynamically get the icon from Lucide
          const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Code;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl glass-dark border-white/5 hover:border-primary/20 transition-all duration-500 premium-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-8 p-4 rounded-2xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform duration-500">
                <IconComponent size={28} />
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-8 flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Explore More <LucideIcons.ArrowRight size={14} className="ml-2" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
