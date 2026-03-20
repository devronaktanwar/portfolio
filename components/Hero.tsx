"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) => {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="text-center md:text-left p-6 rounded-2xl glass-dark border-white/5 hover:border-white/10 transition-all hover:translate-y-[-5px]"
    >
      <h4 className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {count}
        {suffix}
      </h4>
      <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
};

export default function Hero() {
  const highlights = [
    { label: "APIs Migrated", value: 300, suffix: "+" },
    { label: "Active Users", value: 10, suffix: "K+" },
    { label: "Performance Boost", value: 35, suffix: "%" },
    { label: "Manual Work Reduction", value: 70, suffix: "%" },
  ];

  const techStack = [
    "React",
    "Node.js",
    "NestJS",
    "Express",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS",
    "Next.js",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full glass border-white/10 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Crafting Digital <br />
              <span className="gradient-text">Experiences & Systems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              I&apos;m{" "}
              <span className="text-foreground font-semibold">Ronak Saini</span>
              , a Software Developer with 1+ year of experience building
              scalable backend systems and full-stack applications. Expert in
              NestJS, React, and MongoDB.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="#projects"
                className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center transition-all hover:scale-105 premium-shadow"
              >
                View My Projects
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full glass border-white/10 font-semibold hover:bg-white/5 transition-all hover:scale-105"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-80 h-80 md:w-[450px] md:h-[450px]"
            >
              {/* Abstract Illustration / Gradient Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-pink-500 rounded-full blur-[40px] opacity-20 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full glass rounded-[40px] flex items-center justify-center p-8 border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-80 transition-opacity" />

                  {/* Floating Elements (Visual representation of backend/frontend) */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-10 right-10 p-4 rounded-2xl glass border-white/20 shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <code className="text-primary font-bold">{"{}"}</code>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-12 left-10 p-4 rounded-2xl glass border-white/20 shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-purple-500 rounded-md rotate-45" />
                    </div>
                  </motion.div>

                  <div className="text-center relative z-10">
                    <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-bold">RS</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Software Developer
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-[200px] mx-auto">
                      Building high-performance backend systems & modern
                      interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {highlights.map((item, index) => (
            <StatItem key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
