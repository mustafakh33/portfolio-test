"use client";

import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, Variants } from "framer-motion";

// ده الكود الصحيح اللي بيستخدم تاج <video>
export default function VideoProjectList({ projects }: { projects: any[] }) {
  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          // استخدم project._id بدل project.id عشان تتجنب أخطاء الـ key
          key={project._id}
          className="project-section"
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* هنا بنتأكد إن فيه رابط فيديو موجود */}
          {project.videoUrl && (
            <div className="mb-8 flex justify-center">
              {project.videoType === "reel" ? (
                // كود عرض الريل (فيديو طولي)
                <div className="w-full max-w-md">
                  <div className="aspect-[9/16] rounded-lg overflow-hidden border shadow-lg">
                    <video
                      // هنا بنستخدم project.videoUrl مباشرة في الـ src
                      src={project.videoUrl}
                      preload="metadata"
                      controls
                      playsInline
                      className="w-full h-full object-cover bg-black"
                    />
                  </div>
                </div>
              ) : (
                // كود عرض الفيديو العادي (بالعرض)
                <div className="w-full aspect-video rounded-lg overflow-hidden border shadow-lg">
                  <video
                    // هنا بنستخدم project.videoUrl مباشرة في الـ src
                    src={project.videoUrl}
                    preload="metadata"
                    controls
                    playsInline
                    className="w-full h-full object-cover bg-black"
                  />
                </div>
              )}
            </div>
          )}

          {/* ... باقي الكود بتاعك كما هو ... */}
          <div className="grid grid-cols-1 gap-8">
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
              {project.links && project.links.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-text-secondary mb-4">
                    Project Links
                  </h3>
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