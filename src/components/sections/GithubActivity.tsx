"use client";

import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export const GithubActivity = () => {
  const { theme, systemTheme } = useTheme();
  
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  // Custom theme colors for the calendar
  const explicitTheme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section id="github-activity" className="section-padding overflow-hidden">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white">
              CODE <span className="text-black/20 dark:text-white/20">ACTIVITY.</span>
            </h2>
          </div>
          <p className="text-black/60 dark:text-white/40 text-sm font-medium leading-relaxed uppercase tracking-widest max-w-xl">
            A visual representation of my daily contributions and coding activity across repositories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/5 p-8 md:p-12 rounded-[40px] flex justify-center w-full overflow-x-auto overflow-y-hidden"
        >
          <GitHubCalendar 
            username="harshitduttshukla" 
            blockSize={14}
            blockMargin={6}
            colorScheme={currentTheme as "light" | "dark"}
            fontSize={12}
            theme={explicitTheme}
            style={{
              color: currentTheme === "dark" ? "white" : "black"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
