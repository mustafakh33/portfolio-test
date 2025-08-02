// // sanity/schemas/project.ts

// export default {
//   name: "project",
//   title: "Project",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Project Title",
//       type: "string",
//       description:
//         "Optional title for the project. If empty, only the video will be shown.",
//     },
//     {
//       name: "category",
//       title: "Main Category",
//       type: "reference",
//       to: [{ type: "portfolioCategory" }],
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: "subcategory",
//       title: "Video Editing Sub-Category",
//       type: "reference",
//       to: [{ type: "videoEditingSubCategory" }],
//       hidden: ({ document }: { document: any }) =>
//         !document?.category ||
//         document.category._ref !== "ce2492e3-9603-429f-a103-ac4c07bddf03", // استخدم الـ ID الصحيح لفئة Video Editing
//     },
//     {
//       name: "description",
//       title: "Project Description",
//       type: "text",
//     },

//     // --- حقول خاصة بـ Video Editing ---
//     {
//       name: "videoUrl",
//       title: "Video File",
//       type: "file", // استخدمنا file بدلاً من url ليتمكن العميل من الرفع
//       hidden: ({ document }: { document: any }) =>
//         !document?.category ||
//         document.category._ref !== "ce2492e3-9603-429f-a103-ac4c07bddf03",
//     },
//     {
//       name: "videoType",
//       title: "Video Type",
//       type: "string",
//       options: {
//         list: [
//           { title: "Widescreen (16:9)", value: "widescreen" },
//           { title: "Reel (9:16)", value: "reel" },
//         ],
//         layout: "radio",
//       },
//       hidden: ({ document }: { document: any }) =>
//         !document?.category ||
//         document.category._ref !== "ce2492e3-9603-429f-a103-ac4c07bddf03",

//     //   validation: (Rule: any) => Rule.required(),
//     },

//     // --- حقول خاصة بـ Color Grading ---
//     {
//       name: "videoBeforeUrl",
//       title: "Video (Before Grading)",
//       type: "file",
//       hidden: ({ document }: { document: any }) =>
//         !document?.category ||
//         document.category._ref === "ce2492e3-9603-429f-a103-ac4c07bddf03", // يظهر فقط إذا لم تكن الفئة Video Editing
//     },
//     {
//       name: "videoAfterUrl",
//       title: "Video (After Grading)",
//       type: "file",
//       hidden: ({ document }: { document: any }) =>
//         !document?.category ||
//         document.category._ref === "ce2492e3-9603-429f-a103-ac4c07bddf03",
//     },

//     // --- حقول مشتركة ---
//     {
//       name: "screenshots",
//       title: "Screenshots",
//       type: "array",
//       of: [{ type: "image", options: { hotspot: true } }],
//     },
//     // {
//     //   name: 'tools',
//     //   title: 'Tools Used',
//     //   type: 'array',
//     //   of: [{ type: 'string' }],
//     //   options: { layout: 'tags' },
//     // },
//     {
//       name: "links",
//       title: "External Links",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             { name: "label", title: "Label", type: "string" },
//             { name: "url", title: "URL", type: "url" },
//           ],
//         },
//       ],
//     },
//   ],
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "category.title",
//       media: "screenshots.0", // يعرض أول صورة كصورة مصغرة
//     },
//   },
// };




// sanity/schemas/project.ts

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Main Category',
      type: 'reference',
      to: [{ type: 'portfolioCategory' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subcategory',
      title: 'Video Editing Sub-Category',
      type: 'reference',
      to: [{ type: 'videoEditingSubCategory' }],
      // تم تبسيط الدالة هنا لتكون أكثر استقرارًا
      hidden: ({ parent }: { parent: any }) => 
        !parent?.category || parent.category._ref !== 'ce2492e3-9603-429f-a103-ac4c07bddf03', // استخدم الـ ID الصحيح
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    // --- حقول خاصة بـ Video Editing ---
    {
      name: 'videoUrl',
      title: 'Video File',
      type: 'file',
      hidden: ({ parent }: { parent: any }) => 
        parent?.category?._ref !== 'ce2492e3-9603-429f-a103-ac4c07bddf03',
    },
    {
      name: 'videoType',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'Widescreen (16:9)', value: 'widescreen' },
          { title: 'Reel (9:16)', value: 'reel' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
      hidden: ({ parent }: { parent: any }) => 
        parent?.category?._ref !== 'ce2492e3-9603-429f-a103-ac4c07bddf03',
    },
    // --- حقول خاصة بـ Color Grading ---
    {
      name: 'videoBeforeUrl',
      title: 'Video (Before Grading)',
      type: 'file',
      hidden: ({ parent }: { parent: any }) => 
        parent?.category?._ref === 'ce2492e3-9603-429f-a103-ac4c07bddf03',
    },
    {
      name: 'videoAfterUrl',
      title: 'Video (After Grading)',
      type: 'file',
      hidden: ({ parent }: { parent: any }) => 
        parent?.category?._ref === 'ce2492e3-9603-429f-a103-ac4c07bddf03',
    },
    // --- حقول مشتركة ---
    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'links',
      title: 'External Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'url', title: 'URL', type: 'url' },
        ],
      }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'screenshots.0',
    },
  },
};