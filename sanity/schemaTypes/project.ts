export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "category",
      title: "Main Category",
      type: "reference",
      to: [{ type: "portfolioCategory" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subcategory",
      title: "Video Editing Sub-Category",
      type: "reference",
      to: [{ type: "videoEditingSubCategory" }],
      // تم تبسيط الدالة هنا لتكون أكثر استقرارًا
      hidden: ({ parent }: { parent: any }) =>
        !parent?.category ||
        parent.category._ref !== "ce2492e3-9603-429f-a103-ac4c07bddf03", // استخدم الـ ID الصحيح
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
    },
    // --- حقول خاصة بـ Video Editing ---
    {
      name: "videoUrl",
      title: "Video url",
      type: "url",
      hidden: ({ parent }: { parent: any }) =>
        parent?.category?._ref !== "ce2492e3-9603-429f-a103-ac4c07bddf03",
    },

    {
      name: "videoType",
      title: "Video Type",
      type: "string",
      options: {
        list: [
          { title: "Widescreen (16:9)", value: "widescreen" },
          { title: "Reel (9:16)", value: "reel" },
        ],
        layout: "radio",
      },
      // The new, corrected validation logic
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          // Check if the selected category is "Video Editing" using its ID
          const isVideoEditing =
            context.parent?.category?._ref ===
            "ce2492e3-9603-429f-a103-ac4c07bddf03";

          // If the category is Video Editing, then a value for this field is required
          if (isVideoEditing && !value) {
            return "Video Type is required for this category.";
          }

          // For all other categories, this validation passes
          return true;
        }),
      hidden: ({ parent }: { parent: any }) =>
        parent?.category?._ref !== "ce2492e3-9603-429f-a103-ac4c07bddf03",
    },
    // --- حقول خاصة بـ Color Grading ---
    {
      name: "videoBeforeUrl",
      title: "Video (Before Grading)",
      type: "url",
      hidden: ({ parent }: { parent: any }) =>
        parent?.category?._ref === "ce2492e3-9603-429f-a103-ac4c07bddf03",
    },
    {
      name: "videoAfterUrl",
      title: "Video (After Grading)",
      type: "url",
      hidden: ({ parent }: { parent: any }) =>
        parent?.category?._ref === "ce2492e3-9603-429f-a103-ac4c07bddf03",
    },
    // --- حقول مشتركة ---
    {
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },

    {
      name: "links",
      title: "External Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "screenshots.0",
    },
  },
};
