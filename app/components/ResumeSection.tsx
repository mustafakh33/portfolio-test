"use client"; 

import TimelineItem from './TimelineItem'
import { resumeData } from '../lib/data'
import { motion, Variants } from 'framer-motion'; 

const ResumeSection = () => {
  const { summary, education, experience } = resumeData;

  // 2. تعريف متغيرات الحركة
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // تأخير ظهور كل عنصر ابن
      },
    },
  };

  const timelineItemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id='resume' className="min-h-screen bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Resume
          </h2>
          <div className="w-16 h-1 bg-primary"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
          {/* Left Column */}
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-8">Summary</h3>
              <motion.div variants={timelineItemVariant}>
                <TimelineItem title={summary.name} isLast={true}>
                    <p className="italic">{summary.text}</p>
                </TimelineItem>
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-8">Education</h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-0"
              >
                {education.map((edu, index) => (
                  <motion.div key={index} variants={timelineItemVariant}>
                    <TimelineItem
                      title={edu.title}
                      date={edu.date}
                      subtitle={edu.subtitle}
                      isLast={index === education.length - 1}
                    >
                      <p>{edu.description}</p>
                    </TimelineItem>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">Professional Experience</h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-0"
            >
              {experience.map((exp, index) => (
                <motion.div key={index} variants={timelineItemVariant}>
                  <TimelineItem
                    title={exp.title}
                    date={exp.date}
                    subtitle={exp.subtitle}
                    isLast={index === experience.length - 1}
                  >
                    <ul className="space-y-3">
                      {exp.responsibilities && exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </TimelineItem>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default ResumeSection