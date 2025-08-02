"use client";

import { skillsData } from "../lib/data";
import { motion, Variants } from "framer-motion";

const SkillsSection = () => {
  const { intro, skillList } = skillsData;
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const progressVariants: Variants = {
    hidden: { width: "0%" },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    }),
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-light-bg py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Skills
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <p className="text-text-secondary leading-relaxed mb-12 text-lg">
            {intro}
          </p>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          {skillList.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-item"
            >
              <div className="flex justify-between mb-1">
                <span className="text-text-secondary font-medium text-sm uppercase tracking-wide">
                  {skill.name}
                </span>
                <span className="text-text-secondary text-sm font-medium">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-light-accent rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  variants={progressVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={skill.percentage}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default SkillsSection;
