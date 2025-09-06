import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CaseStudiesHero from '@/components/sections/case-studies-hero';
import CaseStudiesOverview from '@/components/sections/case-studies-overview';
import CaseStudiesGrid from '@/components/sections/case-studies-grid';
import CaseStudiesFeaturedProject from '@/components/sections/case-studies-featured-project';
import CaseStudiesTestimonials from '@/components/sections/case-studies-testimonials';
import CaseStudiesApproach from '@/components/sections/case-studies-approach';
import CtaBanner from '@/components/sections/cta-banner';

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CaseStudiesHero />
        <CaseStudiesOverview />
        <CaseStudiesGrid />
        <CaseStudiesFeaturedProject />
        <CaseStudiesTestimonials />
        <CaseStudiesApproach />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
