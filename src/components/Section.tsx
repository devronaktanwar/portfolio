"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function Section({
  id,
  className,
  children,
  title,
  subtitle,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 overflow-hidden", className)}>
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
