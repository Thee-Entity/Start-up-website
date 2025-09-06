import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import IndustriesHero from '@/components/sections/industries-hero';
import IndustriesOverview from '@/components/sections/industries-overview';
import IndustriesGrid from '@/components/sections/industries-grid';
import IndustriesCaseStudies from '@/components/sections/industries-case-studies';
import IndustriesWhyFocus from '@/components/sections/industries-why-focus';
import CtaBanner from '@/components/sections/cta-banner';

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <IndustriesHero />
        <IndustriesOverview />
        <IndustriesGrid />
        <IndustriesCaseStudies />
        <IndustriesWhyFocus />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
