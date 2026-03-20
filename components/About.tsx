"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import { Briefcase, GraduationCap, Code2, Database, Layout, Settings } from "lucide-react";

export default function About() {
  const skills = [
    { category: "Frontend", icon: <Layout size={20} />, items: ["React.js", "Tailwind CSS", "shadcn/ui", "Next.js", "TypeScript"] },
    { category: "Backend", icon: <Database size={20} />, items: ["Node.js", "Express.js", "NestJS", "MongoDB", "PostgreSQL"] },
    { category: "Languages", icon: <Code2 size={20} />, items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { category: "Tools", icon: <Settings size={20} />, items: ["Git", "Postman", "VS Code", "Chrome DevTools", "Cypress"] },
  ];

  return (
    <Section id="about" title="About Me" subtitle="My Journey">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary"><Briefcase size={24} /></span>
            Professional Experience
          </h3>
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                <p className="text-muted-foreground font-medium mb-4">{exp.company} • {exp.location}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-20 mb-8 flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary"><GraduationCap size={24} /></span>
            Education
          </h3>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-dark border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span className="font-bold text-foreground">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary"><Code2 size={24} /></span>
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl glass-dark border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-4">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, iIndex) => (
                    <span
                      key={iIndex}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-muted-foreground group-hover:border-primary/20 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Briefcase size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4">A bit more about me</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 1 year of experience in building scalable backend systems and full-stack applications, I thrive on solving complex technical challenges. My expertise lies in <span className="text-foreground font-semibold">Node.js, NestJS, and MongoDB</span>, where I have successfully migrated hundreds of APIs and optimized system performance by up to 35%.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I am passionate about clean code, architecture, and building user-centric products that drive real business impact.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
