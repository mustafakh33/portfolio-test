// studio/schemas/portfolioCategory.ts
export default {
  name: 'portfolioCategory',
  title: 'Portfolio Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // سيقوم بإنشاء الـ slug تلقائيًا من العنوان
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true, // يتيح للعميل تحديد الجزء المهم من الصورة
      },
    },
  ],
};