// // import Image from 'next/image';
// // import { HiOutlineExternalLink, HiX } from 'react-icons/hi';
// // import type { PortfolioItem } from '../lib/types';
// // import Link from 'next/link';

// // interface Props {
// //   item: PortfolioItem | null;
// //   onClose: () => void;
// // }

// // const PortfolioModal = ({ item, onClose }: Props) => {
// //   if (!item) return null;

// //   return (
// //     <div
// //       className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
// //       onClick={onClose}
// //     >
// //       {/* 1. تطبيق النمط الزجاجي على الـ Modal */}
// //       <div
// //         className="relative bg-white/80 backdrop-blur-lg w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-xl overflow-y-auto border border-white/20"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <button
// //           onClick={onClose}
// //           className="sticky top-4 right-4 float-right bg-white/50 hover:bg-white/80 text-text-secondary hover:text-text-primary rounded-full p-2 transition-colors z-20"
// //         >
// //           <HiX size={24} />
// //         </button>

// //         <div className="p-6 sm:p-8">
// //           {/* 2. تحسين عرض العنوان والفئات */}
// //           <div className="mb-6">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">{item.title}</h2>
// //             <div className="flex items-center text-sm text-text-muted uppercase tracking-wide">
// //               <span>{item.category}</span>
// //               {item.subcategory && ( // عرض الفئة الفرعية فقط إذا كانت موجودة
// //                 <>
// //                   <span className="mx-2">&bull;</span>
// //                   <span>{item.subcategory}</span>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //           <hr className="my-6 border-white/20" />

// //           {/* قسم الفيديو */}
// //           {item.videoUrl && (
// //             <div className="mb-8">
// //               <h3 className="text-xl font-semibold text-text-primary mb-4">Project Video</h3>
// //               <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/20 shadow-md">
// //                 <iframe
// //                   src={item.videoUrl}
// //                   title={item.title}
// //                   frameBorder="0"
// //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                   allowFullScreen
// //                   className="absolute top-0 left-0 w-full h-full"
// //                 ></iframe>
// //               </div>
// //             </div>
// //           )}

// //           {/* قسم الصور */}
// //           {item.screenshots && item.screenshots.length > 0 && (
// //             <div className="mb-8">
// //               <h3 className="text-xl font-semibold text-text-primary mb-4">Screenshots</h3>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 {item.screenshots.map((src, index) => (
// //                   <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-white/20">
// //                     <Image src={src} alt={`${item.title} screenshot ${index + 1}`} fill className="object-cover" />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* قسم "عن المشروع" والروابط */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
// //             <div className="md:col-span-2">
// //               <h3 className="text-xl font-semibold text-text-primary mb-4">About The Project</h3>
// //               <p className="text-text-secondary leading-relaxed">{item.description}</p>
// //             </div>
// //             {item.links && item.links.length > 0 && (
// //               <div>
// //                 <h3 className="text-xl font-semibold text-text-primary mb-4">Project Links</h3>
// //                 <div className="flex flex-col items-start gap-3">
// //                   {item.links.map((link) => (
// //                     <Link
// //                       key={link.label}
// //                       href={link.url}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
// //                     >
// //                       <HiOutlineExternalLink className="h-5 w-5" />
// //                       <span>{link.label}</span>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* قسم الأدوات المستخدمة */}
// //           <h3 className="text-xl font-semibold text-text-primary mb-4">Tools Used</h3>
// //           <div className="flex flex-wrap gap-2">
// //             {item.tools.map(tool => (
// //               <span key={tool} className="bg-primary-light-bg text-primary-text-dark text-sm font-medium px-3 py-1 rounded-full">
// //                 {tool}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PortfolioModal;

// import Image from "next/image";
// import { HiOutlineExternalLink, HiX } from "react-icons/hi";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import type { PortfolioItem } from "../lib/types";
// import Link from "next/link";

// interface Props {
//   item: PortfolioItem | null;
//   onClose: () => void;
// }

// const PortfolioModal = ({ item, onClose }: Props) => {
//   if (!item) return null;

//   const overlayVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       backdropFilter: "blur(0px)",
//     },
//     visible: {
//       opacity: 1,
//       backdropFilter: "blur(8px)",
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//     exit: {
//       opacity: 0,
//       backdropFilter: "blur(0px)",
//       transition: {
//         duration: 0.2,
//         ease: "easeIn",
//       },
//     },
//   };

//   const modalVariants: Variants = {
//     hidden: {
//       scale: 0.8,
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 20,
//         stiffness: 300,
//         duration: 0.4,
//       },
//     },
//     exit: {
//       scale: 0.8,
//       opacity: 0,
//       y: 50,
//       transition: {
//         duration: 0.2,
//         ease: "easeIn",
//       },
//     },
//   };

//   const contentVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   const closeButtonVariants: Variants = {
//     hover: {
//       scale: 1.1,
//       rotate: 90,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   const linkVariants: Variants = {
//     hover: {
//       x: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const tagVariants: Variants = {
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//         onClick={onClose}
//         variants={overlayVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
//         <motion.div
//           className="relative bg-white/80 backdrop-blur-lg w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-xl overflow-y-auto border border-white/20"
//           onClick={(e) => e.stopPropagation()}
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <motion.button
//             onClick={onClose}
//             className="sticky top-4 right-4 float-right bg-white/50 hover:bg-white/80 text-text-secondary hover:text-text-primary rounded-full p-2 transition-colors z-20"
//             variants={closeButtonVariants}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <HiX size={24} />
//           </motion.button>

//           <motion.div
//             className="p-6 sm:p-8"
//             variants={contentVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {/* Header Section */}
//             <motion.div className="mb-6" variants={itemVariants}>
//               <motion.h2
//                 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//               >
//                 {item.title}
//               </motion.h2>
//               <motion.div
//                 className="flex items-center text-sm text-text-muted uppercase tracking-wide"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 <span>{item.category}</span>
//                 {item.subcategory && (
//                   <>
//                     <span className="mx-2">&bull;</span>
//                     <span>{item.subcategory}</span>
//                   </>
//                 )}
//               </motion.div>
//             </motion.div>

//             <motion.hr
//               className="my-6 border-white/20"
//               variants={itemVariants}
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//             />

//             {/* Video Section */}
//             {item.videoUrl && (
//               <motion.div className="mb-8" variants={itemVariants}>
//                 <motion.h3
//                   className="text-xl font-semibold text-text-primary mb-4"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.6 }}
//                 >
//                   Project Video
//                 </motion.h3>
//                 <motion.div
//                   className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/20 shadow-md"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 0.7 }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <iframe
//                     src={item.videoUrl}
//                     title={item.title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="absolute top-0 left-0 w-full h-full"
//                   ></iframe>
//                 </motion.div>
//               </motion.div>
//             )}

//             {/* Screenshots Section */}
//             {item.screenshots && item.screenshots.length > 0 && (
//               <motion.div className="mb-8" variants={itemVariants}>
//                 <motion.h3
//                   className="text-xl font-semibold text-text-primary mb-4"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.8 }}
//                 >
//                   Screenshots
//                 </motion.h3>
//                 <motion.div
//                   className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 0.9 }}
//                 >
//                   {item.screenshots.map((src, index) => (
//                     <motion.div
//                       key={index}
//                       className="relative aspect-video rounded-lg overflow-hidden border border-white/20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{
//                         duration: 0.5,
//                         delay: 1 + index * 0.1,
//                       }}
//                       whileHover={{
//                         scale: 1.05,
//                         transition: { duration: 0.3 },
//                       }}
//                     >
//                       <Image
//                         src={src}
//                         alt={`${item.title} screenshot ${index + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}

//             {/* About and Links Section */}
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
//               variants={itemVariants}
//             >
//               <motion.div
//                 className="md:col-span-2"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 1.2 }}
//               >
//                 <h3 className="text-xl font-semibold text-text-primary mb-4">
//                   About The Project
//                 </h3>
//                 <p className="text-text-secondary leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>

//               {item.links && item.links.length > 0 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 1.3 }}
//                 >
//                   <h3 className="text-xl font-semibold text-text-primary mb-4">
//                     Project Links
//                   </h3>
//                   <div className="flex flex-col items-start gap-3">
//                     {item.links.map((link, index) => (
//                       <motion.div
//                         key={link.label}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 1.4 + index * 0.1,
//                         }}
//                       >
//                         <Link
//                           href={link.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
//                         >
//                           <motion.div
//                             variants={linkVariants}
//                             whileHover="hover"
//                             className="inline-flex items-center gap-2"
//                           >
//                             <HiOutlineExternalLink className="h-5 w-5" />
//                             <span>{link.label}</span>
//                           </motion.div>
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//             {/* Tools Section */}
//             {item.tools && item.tools.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.5 }}
//               >
//                 <h3 className="text-xl font-semibold text-text-primary mb-4">
//                   Tools Used
//                 </h3>
//                 <motion.div
//                   className="flex flex-wrap gap-2"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 1.6 }}
//                 >
//                   {item.tools.map((tool, index) => (
//                     <motion.span
//                       key={tool}
//                       className="bg-primary-light-bg text-primary-text-dark text-sm font-medium px-3 py-1 rounded-full"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{
//                         duration: 0.4,
//                         delay: 1.7 + index * 0.05,
//                         type: "spring",
//                         stiffness: 200,
//                       }}
//                       variants={tagVariants}
//                       whileHover="hover"
//                     >
//                       {tool}
//                     </motion.span>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default PortfolioModal;


import Image from 'next/image';
import { HiOutlineExternalLink, HiX } from 'react-icons/hi';
import { motion, Variants } from 'framer-motion'; // تم حذف AnimatePresence
import type { PortfolioItem } from '../lib/types';
import Link from 'next/link';

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

const PortfolioModal = ({ item, onClose }: Props) => {
  if (!item) return null;

  // تعريف متغيرات الحركة المحسّنة
  const overlayVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0, y: 40 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300, delay: 0.1 },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      y: 40,
      transition: { duration: 0.2 },
    },
  };
  
  // حاوية لتنظيم حركة ظهور المحتوى بالداخل
  const contentContainerVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.08, // تأخير ظهور كل قسم عن الآخر
        delayChildren: 0.2,
      },
    },
  };

  // حركة موحدة لكل قسم
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };


  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-white/80 backdrop-blur-lg w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-xl overflow-y-auto border border-white/20"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        // initial, animate, exit يتم التحكم بها من AnimatePresence في المكون الأب
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right bg-white/50 hover:bg-white/80 text-text-secondary hover:text-text-primary rounded-full p-2 transition-colors z-20"
        >
          <HiX size={24} />
        </button>

        <motion.div
          className="p-6 sm:p-8"
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div className="mb-6" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">{item.title}</h2>
            <div className="flex items-center text-sm text-text-muted uppercase tracking-wide">
              <span>{item.category}</span>
              {item.subcategory && (
                <>
                  <span className="mx-2">&bull;</span>
                  <span>{item.subcategory}</span>
                </>
              )}
            </div>
          </motion.div>
          <motion.hr className="my-6 border-white/20" variants={itemVariants} />

          {/* Video Section */}
          {item.videoUrl && (
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Project Video</h3>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/20 shadow-md">
                <iframe src={item.videoUrl} title={item.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
              </div>
            </motion.div>
          )}

          {/* Screenshots Section */}
          {item.screenshots && item.screenshots.length > 0 && (
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.screenshots.map((src, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-white/20">
                    <Image src={src} alt={`${item.title} screenshot ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* About and Links Section */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" variants={itemVariants}>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-text-primary mb-4">About The Project</h3>
              <p className="text-text-secondary leading-relaxed">{item.description}</p>
            </div>
            {item.links && item.links.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Project Links</h3>
                <div className="flex flex-col items-start gap-3">
                  {item.links.map((link) => (
                    <Link key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors">
                      <HiOutlineExternalLink className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
          
          {/* Tools Section */}
          {item.tools && item.tools.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {item.tools.map(tool => (
                  <span key={tool} className="bg-primary-light-bg text-primary-text-dark text-sm font-medium px-3 py-1 rounded-full">{tool}</span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioModal;