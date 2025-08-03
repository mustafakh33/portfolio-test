import Breadcrumbs from "@/app/components/Breadcrumbs";
import VideoProjectList from "@/app/components/VideoProjectList";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

async function getSubCategoryData(slug: string) {
  const query = `*[_type == "videoEditingSubCategory" && slug.current == $slug][0]{
    title,
    description,
    "projects": *[_type == "project" && references(^._id)] | order(_createdAt asc) {
      _id,
      title,
      description,
      "videoUrl": videoUrl,
      videoType,
      "screenshots": screenshots[].asset->url,
      tools,
      links
    }
  }`;
  const data = await client.fetch(query, { slug }, { next: { revalidate: 0 } });
  return data;
}

const SubCategoryProjectsPage = async ({
  params,
}: {
  params: { subcategory: string };
}) => {
  const subCategory = await getSubCategoryData(params.subcategory);

  if (!subCategory) {
    notFound();
  }
  console.log(subCategory.projects)

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center gap-4 mb-16 bg-white rounded-lg shadow-sm md:flex-row md:justify-between md:items-center md:text-left">
          <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
            {subCategory.title}
          </h1>
          <Breadcrumbs />
        </div>

        <VideoProjectList projects={subCategory.projects} />
      </div>
    </main>
  );
};

export default SubCategoryProjectsPage;
