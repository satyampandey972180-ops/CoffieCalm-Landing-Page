import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { TherapyCommunity } from "./components/TherapyCommunity";
import { VirtualSessions } from "./components/VirtualSessions";
import { UnderstandingCare } from "./components/UnderstandingCare";
import { Stats } from "./components/Stats";
import { HowItWorks } from "./components/HowItWorks";
import { YourPath } from "./components/YourPath";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { NotAlone } from "./components/NotAlone";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { SEOHead, AllSchemas } from "./seo/components";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-purple-50">
      <SEOHead />
      <AllSchemas />
      <ScrollProgress />
      
      {/* Header with Navigation */}
      <header>
        <Navigation />
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <section>
          <Stats />
        </section>

        {/* Testimonials Section */}
        <section>
          <Testimonials />
        </section>

        {/* Therapy Community Section */}
        <section>
          <TherapyCommunity />
        </section>

        {/* Virtual Sessions Section */}
        <section>
          <VirtualSessions />
        </section>

        {/* Understanding Care Section */}
        <section>
          <UnderstandingCare />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* Your Path Section */}
        <section>
          <YourPath />
        </section>

        {/* Not Alone Section */}
        <section>
          <NotAlone />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Final CTA Section */}
        <section>
          <FinalCTA />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}