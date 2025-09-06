import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ResourcesHero from '@/components/sections/resources-hero';
import ResourcesContent from '@/components/sections/resources-content';
import ResourcesDownloads from '@/components/sections/resources-downloads';
import ResourcesNewsletter from '@/components/sections/resources-newsletter';
import CtaBanner from '@/components/sections/cta-banner';

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ResourcesHero />
        <ResourcesContent />
        <ResourcesDownloads />
        <ResourcesNewsletter />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
