"use client"; 

import { servicesData } from "../lib/data";
import { motion, Variants } from "framer-motion"; // <-- 1. استيراد المكتبة

const ServicesSection = () => {
  const { intro, serviceList } = servicesData;

  // 2. تعريف متغيرات الحركة
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // تأخير ظهور كل كارت عن الآخر
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="services"
      className="min-h-screen bg-white py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* 3. تطبيق الحركة على العنوان والوصف */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Services
          </h2>
          <div className="w-16 h-1 bg-primary mb-5"></div>
          <p className="text-text-secondary max-w-4xl text-lg leading-relaxed">
            {intro}
          </p>
        </motion.div>
        
        {/* 4. تطبيق الحركة على حاوية الكروت (للتأثير المتتابع) */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {serviceList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white relative rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-text-white rounded-full p-4 mr-4 group-hover:bg-primary-dark transition-colors duration-300">
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesSection;