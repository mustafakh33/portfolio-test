"use client"; 

import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { aboutData } from '../lib/data';
import { motion, Variants } from 'framer-motion'; // <-- 1. استيراد Variants

const AboutSection = () => {
  const { title, intro, bio, personalDetails, image } = aboutData;

  // 2. تطبيق النوع على كل متغير
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
// 
  return (
    <section id='about' className="min-h-screen bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">About</h2>
          <div className="w-16 h-1 bg-primary"></div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-text-secondary leading-relaxed mb-12 text-lg"
        >
          {intro}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <Image src={image} alt="Ahmed Diaa" width={400} height={500} className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{title}</h3>
              <p className="text-text-secondary leading-relaxed text-lg italic">{bio}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalDetails.map((detail, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <IoIosArrowForward className="text-primary text-lg flex-shrink-0" />
                  <span className="text-text-secondary">
                    <strong className="font-semibold text-text-primary">{detail.label}:</strong>{' '}
                    <span>{detail.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-text-secondary leading-relaxed text-lg"
        >
          Always eager to take on new creative challenges and collaborate on projects that push the boundaries of visual storytelling.
        </motion.p>
      </div>
    </section>
  );
};
export default AboutSection;