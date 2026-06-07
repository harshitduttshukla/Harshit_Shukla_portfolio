"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Harshit is an exceptional developer who consistently delivers high-quality code. His understanding of full-stack architecture is deeply impressive.",
    author: "Alex Jenkins",
    role: "Senior Engineering Manager",
    company: "TechFlow"
  },
  {
    quote: "Working with Harshit on our platform's redesign was a game-changer. The performance improvements and modern UI he implemented significantly boosted our engagement.",
    author: "Sarah Chen",
    role: "Product Owner",
    company: "Nexus Dynamics"
  },
  {
    quote: "A rare mix of strong backend fundamentals and an eye for beautiful frontends. Harshit's ability to seamlessly bridge both worlds makes him an invaluable asset.",
    author: "Michael Ross",
    role: "CTO",
    company: "Vanguard Systems"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-black/5 dark:bg-white/[0.02]">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white mb-6">
            CLIENT <span className="text-black/20 dark:text-white/20">VOICES.</span>
          </h2>
          <p className="text-black/60 dark:text-white/40 text-sm font-medium leading-relaxed uppercase tracking-widest max-w-xl">
            What industry leaders and collaborators say about my work and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/5 p-8 rounded-3xl relative group hover:border-black/20 dark:hover:border-white/20 transition-colors"
            >
              <Quote className="w-10 h-10 text-black/10 dark:text-white/10 mb-6 group-hover:text-black/20 dark:group-hover:text-white/20 transition-colors" />
              <p className="text-black/80 dark:text-white/80 text-lg font-medium leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-black text-black dark:text-white tracking-wide uppercase text-sm mb-1">{t.author}</h4>
                <p className="text-[10px] uppercase tracking-widest text-black/50 dark:text-white/50 font-bold">
                  {t.role} @ {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
