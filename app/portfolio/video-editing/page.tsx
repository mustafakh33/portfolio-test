import Breadcrumbs from "@/app/components/Breadcrumbs";
import SubCategoryGrid from "@/app/components/SubCategoryGrid";
import { portfolioData } from "@/app/lib/data"; 

const VideoEditingSubCategoriesPage = () => {
  const subCategories = portfolioData.videoEditing.subCategories;
  const pageTitle = portfolioData.videoEditing.title;

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center gap-4 mb-16 bg-white py-6 rounded-lg shadow-sm md:flex-row md:justify-between md:items-center md:text-left md:py-8">
          <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
            {pageTitle}
          </h1>
          <Breadcrumbs />
        </div>

        <SubCategoryGrid subCategories={subCategories} />
        
      </div>
    </main>
  );
};

export default VideoEditingSubCategoriesPage;