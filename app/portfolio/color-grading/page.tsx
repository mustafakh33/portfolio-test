import Breadcrumbs from "@/app/components/Breadcrumbs";
import ColorGradingProjectList from "@/app/components/ColorGradingProjectList";
import { client } from "@/sanity/lib/client";

async function getColorGradingProjects() {
  const query = `*[_type == "project" && category->slug.current == "color-grading"] | order(_createdAt asc) {
    _id,
    title,
"videoBeforeUrl": videoBeforeUrl,
"videoAfterUrl": videoAfterUrl,
    "screenshots": screenshots[].asset->url
  }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
  return data || [];
}

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

        <ColorGradingProjectList projects={projects} />
      </div>
    </main>
  );
};

export default ColorGradingPage;
