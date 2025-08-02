// app/portfolio/page.tsx

import Breadcrumbs from "@/app/components/Breadcrumbs";
import PortfolioCategoryList from "@/app/components/PortfolioCategoryList";
import { portfolioData } from "@/app/lib/data"; // استيراد البيانات المحلية

const PortfolioHomePage = () => {
  // تحويل كائن البيانات إلى مصفوفة لتمريرها
  const categories = Object.values(portfolioData);

  return (
    <main id="portfolio" className="min-h-screen bg-light-bg py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center gap-4 mb-12 bg-white p-6 rounded-lg shadow-sm md:flex-row md:justify-between md:items-center md:text-left md:p-8">
          <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
            Portfolio
          </h1>
          <Breadcrumbs />
        </div>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto text-center mb-16">
          Explore my work, categorized by my core specializations.
        </p>

        {/* استدعاء المكون الجديد وتمرير البيانات إليه */}
        <PortfolioCategoryList categories={categories} />
      </div>
    </main>
  );
};

export default PortfolioHomePage;
