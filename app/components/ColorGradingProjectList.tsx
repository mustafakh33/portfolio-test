// app/components/ColorGradingProjectList.tsx

"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function ColorGradingProjectList({ projects }: { projects: any[] }) {
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
          key={project._id} // استخدم _id من Sanity
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
              {project.videoBeforeUrl && (
                <div>
                  <h3 className="text-xl font-semibold text-text-secondary mb-3">Before</h3>
                  <div className="aspect-[9/16] rounded-lg overflow-hidden border shadow-md">
                    <video src={project.videoBeforeUrl} controls   playsInline className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
              {project.videoAfterUrl && (
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">After</h3>
                  <div className="aspect-[9/16] rounded-lg overflow-hidden border shadow-md">
                    <video src={project.videoAfterUrl} controls loop  playsInline className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-secondary mb-4 text-center">Screenshots</h3>
              <div className="flex flex-col items-center gap-8 mt-4">
                {project.screenshots.map((src: any, idx: number) => (
                  <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border w-full max-w-4xl">
                    <Image src={src} alt={`${project.title || 'Screenshot'} ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
          <hr className="my-12"/>
        </motion.section>
      ))}
    </div>
  );
}