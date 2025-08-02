// app/components/SubCategoryGrid.tsx

"use client"; // <-- مكون للمتصفح بسبب استخدام framer-motion

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

// يستقبل المكون البيانات كـ prop
export default function SubCategoryGrid({ subCategories }: { subCategories: any[] }) {
  
  // تعريف متغيرات الحركة
  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // تأخير ظهور كل كرت عن الآخر
      },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {subCategories.map((subCategory: any) => (
        // تطبيق الحركة على كل عنصر
        <motion.div key={subCategory.title} variants={cardVariant}>
          <Link href={`/portfolio/video-editing/${subCategory.slug}`}>
            <div className="group bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={subCategory.imageUrl}
                  alt={subCategory.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  {subCategory.title}
                </h2>
                <p className="text-text-secondary flex-grow">
                  {subCategory.description}
                </p>
                <span className="mt-6 font-semibold text-primary group-hover:text-primary-dark inline-flex items-center self-start">
                  View Projects
                  <HiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}