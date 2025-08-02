// app/components/PortfolioCategoryList.tsx

"use client"; // هذا المكون يستخدم الحركة والتصميم في المتصفح

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

// تعريف نوع البيانات التي سيستقبلها المكون
interface Category {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
}

// يستقبل المكون البيانات كـ prop
export default function PortfolioCategoryList({ categories }: { categories: Category[] }) {
  
  // دالة لإنشاء الروابط من العناوين
  const generateSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, "-");
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
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
                <h2 className="text-3xl font-bold mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                <span className="font-semibold text-primary group-hover:underline">
                  View Projects &rarr;
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}