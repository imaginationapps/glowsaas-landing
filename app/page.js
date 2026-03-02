import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScalabilitySection from './components/ScalabilitySection';
import AISection from './components/AISection';
import InvoicingSection from './components/InvoicingSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-col">
          <HeroSection />
          <ScalabilitySection />
          <AISection />
          <InvoicingSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
