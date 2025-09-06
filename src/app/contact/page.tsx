import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactHero from '@/components/sections/contact-hero';
import ContactDetails from '@/components/sections/contact-details';
import ContactFormSection from '@/components/sections/contact-form-section';
import ContactFaq from '@/components/sections/contact-faq';
import ContactCta from '@/components/sections/contact-cta';
import ContactMap from '@/components/sections/contact-map';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactDetails />
        <ContactFormSection />
        <ContactCta />
        <ContactMap />
        <ContactFaq />
      </main>
      <Footer />
    </div>
  );
}
