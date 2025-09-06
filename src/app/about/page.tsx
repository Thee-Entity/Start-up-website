import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutHero from '@/components/sections/about-hero';
import WhoWeAre from '@/components/sections/who-we-are';
import MissionVisionValues from '@/components/sections/mission-vision-values';
import FoundersHighlight from '@/components/sections/founders-highlight';
import WhatMakesUsDifferent from '@/components/sections/what-makes-us-different';
import TeamSection from '@/components/sections/team-section';
import CulturePhilosophy from '@/components/sections/culture-philosophy';
import CtaBanner from '@/components/sections/cta-banner';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <WhoWeAre />
        <MissionVisionValues />
        <FoundersHighlight />
        <WhatMakesUsDifferent />
        <TeamSection />
        <CulturePhilosophy />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
