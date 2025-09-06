import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SolutionsHero from '@/components/sections/solutions-hero';
import SolutionsOverview from '@/components/sections/solutions-overview';
import SolutionsGrid from '@/components/sections/solutions-grid';
import SolutionsIndustries from '@/components/sections/solutions-industries';
import SolutionsCaseStudyHighlight from '@/components/sections/solutions-case-study-highlight';
import SolutionsWhyChoose from '@/components/sections/solutions-why-choose';
import CtaBanner from '@/components/sections/cta-banner';

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <SolutionsHero />
        <SolutionsOverview />
        <SolutionsGrid />
        <SolutionsIndustries />
        <SolutionsCaseStudyHighlight />
        <SolutionsWhyChoose />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
