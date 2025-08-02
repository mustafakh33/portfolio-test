// "use client";

// import Breadcrumbs from "@/app/components/Breadcrumbs";
// import { portfolioData } from "@/app/lib/data";
// import Image from "next/image";
// import Link from "next/link";
// import { HiOutlineExternalLink } from "react-icons/hi";
// import { motion, Variants } from "framer-motion";

// const ColorGradingPage = () => {
//   const { title, projects } = portfolioData.colorGrading;

//   // تعريف متغيرات الحركة لظهور كل مشروع عند التمرير
//   const projectVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <main className="min-h-screen bg-white py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col text-center gap-4 mb-16 bg-white rounded-lg shadow-sm md:flex-row md:justify-between md:items-center md:text-left">
//           <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
//             {title}
//           </h1>
//           <Breadcrumbs />
//         </div>

//         {/* حاوية المشاريع */}
//         <div className="space-y-12">
//           {projects.map((project, index) => (
//             <motion.section
//               key={project.id}
//               className="project-section"
//               variants={projectVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               {/* قسم فيديوهات المقارنة */}

//               {/* 1. أضف هذه الحاوية لتحديد العرض الأقصى والتوسيط */}
//               <div className="max-w-xl mx-auto">
//                 <div className="grid grid-cols-2 gap-8 mb-8">
//                   {/* الفيديو قبل التلوين */}
//                   <div>
//                     <h3 className="text-xl font-semibold text-text-secondary mb-3">
//                       Before
//                     </h3>
//                     <div className="aspect-[9/16] rounded-lg overflow-hidden border shadow-md">
//                       <video
//                         src={project.videoBeforeUrl}
//                         controls
//                         loop
//                         muted
//                         playsInline
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   {/* الفيديو بعد التلوين */}
//                   <div>
//                     <h3 className="text-xl font-semibold text-primary mb-3">
//                       After
//                     </h3>
//                     <div className="aspect-[9/16] rounded-lg overflow-hidden border shadow-md">
//                       <video
//                         src={project.videoAfterUrl}
//                         controls
//                         loop
//                         muted
//                         playsInline
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* قسم لقطات الشاشة */}
//               {project.screenshots && project.screenshots.length > 0 && (
//                 <div className="mb-8">
//                   {/* 1. تم تغيير grid إلى flexbox */}
//                   <div className="flex flex-col items-center gap-8">
//                     {project.screenshots.map((src: any, idx: number) => (
//                       <div
//                         key={idx}
//                         // 2. تم تحديد عرض أقصى للصورة
//                         className="relative aspect-video rounded-lg overflow-hidden border w-full max-w-4xl"
//                       >
//                         <Image src={src} alt="" fill className="object-cover" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <hr />
//             </motion.section>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ColorGradingPage;


// app/portfolio/color-grading/page.tsx

import Breadcrumbs from "@/app/components/Breadcrumbs";
import ColorGradingProjectList from "@/app/components/ColorGradingProjectList";
import { client } from "@/sanity/lib/client";

// دالة لجلب المشاريع الخاصة بـ Color Grading فقط
async function getColorGradingProjects() {
  const query = `*[_type == "project" && category->slug.current == "color-grading"] | order(_createdAt asc) {
    _id,
    title,
    "videoBeforeUrl": videoBeforeUrl.asset->url,
    "videoAfterUrl": videoAfterUrl.asset->url,
    "screenshots": screenshots[].asset->url
  }`;
  
  const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
  return data || [];
}

// الصفحة الآن هي Server Component
const ColorGradingPage = async () => {
  const projects = await getColorGradingProjects();
  const pageTitle = "Color Grading";

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center gap-4 mb-16 bg-white rounded-lg shadow-sm md:flex-row md:justify-between md:items-center md:text-left">
          <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
            {pageTitle}
          </h1>
          <Breadcrumbs />
        </div>

        {/* استدعاء المكون الجديد وتمرير البيانات إليه */}
        <ColorGradingProjectList projects={projects} />

      </div>
    </main>
  );
};

export default ColorGradingPage;