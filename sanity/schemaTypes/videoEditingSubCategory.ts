// // studio/schemas/videoEditingSubCategory.ts
// export default {
//     name: 'videoEditingSubCategory',
//     title: 'Video Editing Sub-Category',
//     type: 'document',
//     fields: [
//       {
//         name: 'title',
//         title: 'Title',
//         type: 'string',
//       },
//       {
//         name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//         options: {
//           source: 'title',
//         },
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//       {
//         name: 'imageUrl',
//         title: 'Image URL',
//         type: 'image',
//         options: {
//           hotspot: true,
//         },
//       },
//     ],
//   };


// sanity/schemas/videoEditingSubCategory.ts

export default {
  name: 'videoEditingSubCategory',
  title: 'Video Editing Sub-Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'imageUrl',
      title: 'Sub-Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}