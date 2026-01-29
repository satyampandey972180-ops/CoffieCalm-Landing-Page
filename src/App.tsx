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
import { WhatIsCoffieCalm } from "./components/WhatIsCoffieCalm";
import { ConversationalQA } from "./components/ConversationalQA";
import { Comparison } from "./components/Comparison";
import { WhyPeerSupport } from "./components/WhyPeerSupport";
import { SnippetOptimized } from "./components/SnippetOptimized";
import { TopicalAuthority } from "./components/TopicalAuthority";
import { VoiceOptimizedFAQ } from "./components/VoiceOptimizedFAQ";
import { SafetyAndPrivacy } from "./components/SafetyAndPrivacy";
import { AEOAccordion, AEOAccordionGroup } from "./components/AEOAccordion";
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

        {/* AEO-Optimized Content - Collapsible for Better UX */}
        <AEOAccordionGroup 
          title="Learn More" 
          subtitle="Explore detailed information about CoffieCalm and mental wellness support"
        >
          <AEOAccordion 
            title="What is CoffieCalm?" 
            description="Learn about our platform and how we support mental wellness"
          >
            <WhatIsCoffieCalm />
          </AEOAccordion>

          <AEOAccordion 
            title="Why Peer Support Works" 
            description="Discover the science and benefits behind peer-to-peer support"
          >
            <WhyPeerSupport />
          </AEOAccordion>

          <AEOAccordion 
            title="Compare Your Options" 
            description="See how CoffieCalm compares to traditional therapy"
          >
            <Comparison />
          </AEOAccordion>

          <AEOAccordion 
            title="Common Questions" 
            description="Get answers to frequently asked questions about mental health support"
          >
            <ConversationalQA />
          </AEOAccordion>

          <AEOAccordion 
            title="Mental Health Resources" 
            description="In-depth information about peer support and mental wellness"
          >
            <TopicalAuthority />
          </AEOAccordion>

          <AEOAccordion 
            title="Quick Answers" 
            description="Fast, voice-friendly answers to your questions"
          >
            <VoiceOptimizedFAQ />
          </AEOAccordion>

          <AEOAccordion 
            title="Privacy & Safety" 
            description="Learn about our commitment to your safety and anonymity"
          >
            <SafetyAndPrivacy />
          </AEOAccordion>

          <AEOAccordion 
            title="Key Information" 
            description="Essential details about CoffieCalm's features and benefits"
          >
            <SnippetOptimized />
          </AEOAccordion>
        </AEOAccordionGroup>

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