// app/components/VideoProjectList.tsx
"use client";

import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, Variants } from "framer-motion";

// يستقبل المكون مصفوفة المشاريع كـ prop
export default function VideoProjectList({ projects }: { projects: any[] }) {
  // تعريف حركة لظهور كل قسم مشروع عند التمرير
  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // رسالة في حالة عدم وجود مشاريع
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-text-secondary">
          No projects have been added to this category yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {projects.map((project) => (
        <motion.section
          key={project.id}
          className="project-section"
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            {project.title}
          </h2> */}

          {/* قسم الفيديو الرئيسي */}
          {project.videoUrl && (
            <div className="mb-8 flex justify-center">
              {/* 1. استخدام العرض الشرطي هنا */}
              {project.videoType === "reel" ? (
                // في حالة الريلز: اعرض الفيديو داخل حاوية بعرض محدد
                <div className="w-full max-w-md">
                  <div className="aspect-[9/16] rounded-lg overflow-hidden border shadow-lg">
                    <video
                      src={project.videoUrl}
                      controls
                      loop
                    
                      playsInline
                      className="w-full h-full object-cover bg-black"
                    />
                  </div>
                </div>
              ) : (
                // في حالة الفيديو العادي: اعرضه ليأخذ العرض الكامل
                <div className="w-full aspect-video rounded-lg overflow-hidden border shadow-lg">
                  <video
                    src={project.videoUrl}
                    controls
                    loop
                  
                    playsInline
                    className="w-full h-full object-cover bg-black"
                  />
                </div>
              )}
            </div>
          )}

          {/* قسم التفاصيل والروابط  */}
          <div className="grid grid-cols-1 gap-8">
            {/* 1. إضافة الشرط هنا */}
            {project.description && (
              <div>
                <h3 className="text-xl font-semibold text-text-secondary mb-4">
                  About The Project
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}
            <div>
              {/* {project.links && project.links.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-text-secondary mb-4">
                    Project Links
                  </h3>
                  <div className="flex  items-start gap-3">
                    {project.links.map((link: any) => (
                      <Link
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                      >
                        <HiOutlineExternalLink className="h-5 w-5" />
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}
              {project.links && project.links.length > 0 && (
  <div>
    <h3 className="text-xl font-semibold text-text-secondary mb-4">
      Project Links
    </h3>
    {/* تم تعديل هذا السطر */}
    <div className="flex flex-col items-start gap-3 md:flex-row md:flex-wrap">
      {project.links.map((link: any) => (
        <Link
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
        >
          <HiOutlineExternalLink className="h-5 w-5" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  </div>
)}
            </div>
          </div>

          <hr />
        </motion.section>
      ))}
    </div>
  );
}
