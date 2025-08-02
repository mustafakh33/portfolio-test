"use client"; // هذا المكون يستخدم framer-motion لذا يجب أن يكون client component

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { portfolioData } from "../lib/data"; // 1. استيراد هيكل البيانات الجديد

const PortfolioHomePage = () => {
  // 2. تحويل كائن البيانات إلى مصفوفة يمكننا المرور عليها
  const categories = Object.values(portfolioData);

  // 3. دالة لإنشاء الروابط من العناوين
  const generateSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main
      id="portfolio"
      className="min-h-screen bg-light-bg py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Portfolio
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <p className="text-text-secondary leading-relaxed mb-12 text-lg text-center max-w-3xl">
            Explore my work, categorized by my core specializations.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* 4. المرور على مصفوفة الفئات الجديدة */}
          {categories.map((category) => (
            <motion.div key={category.title} variants={cardVariant}>
              <Link href={`/portfolio/${generateSlug(category.title)}`}>
                <div className="group relative block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="relative w-full h-80">
                    <Image
                      src={category.imageUrl}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <span className="font-semibold text-primary group-hover:underline">
                      View Projects &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default PortfolioHomePage;