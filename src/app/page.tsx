import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSnapshot from '@/components/sections/about-snapshot';
import SolutionsSection from '@/components/sections/solutions';
import IndustriesSection from '@/components/sections/industries';
import WhyChooseUs from '@/components/sections/why-choose-us';
import ShowcaseSection from '@/components/sections/showcase';
import CtaBanner from '@/components/sections/cta-banner';
import BlogPreview from '@/components/sections/blog-preview';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSnapshot />
        <SolutionsSection />
        <IndustriesSection />
        <WhyChooseUs />
        <ShowcaseSection />
        <CtaBanner />
        <BlogPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
