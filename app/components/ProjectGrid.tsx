// app/components/ProjectGrid.tsx

"use client"; // <-- مكون للمتصفح بسبب الحركة والـ state

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineEye, HiOutlineFilm } from "react-icons/hi";
import { PortfolioItem } from "../lib/types";
import PortfolioModal from "./PortfolioModal";

// يستقبل المكون المشاريع وعنوان الصفحة كـ props
interface Props {
  projects: PortfolioItem[];
  pageTitle: string;
}

export default function ProjectGrid({ projects, pageTitle }: Props) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      {projects.length === 0 ? (
        // في حالة عدم وجود مشاريع
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="mb-8 p-6 bg-light-bg rounded-full">
            <HiOutlineFilm className="w-16 h-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            No {pageTitle} Projects Yet
          </h2>
          <p className="text-gray-600 max-w-md leading-relaxed">
            We're constantly working on adding new and exciting projects. Stay
            tuned for our latest {pageTitle.toLowerCase()} work coming soon.
          </p>
        </motion.div>
      ) : (
        // في حالة وجود مشاريع، اعرض الشبكة
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {projects.map((item) => (
              <motion.div
                key={item.id} // استخدم _id القادم من Sanity
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-white text-3xl p-4 bg-primary/80 rounded-full hover:bg-primary"
                  >
                    <HiOutlineEye />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-text-primary">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      {/* Modal يبقى كما هو */}
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}