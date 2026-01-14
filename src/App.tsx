import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { TherapyCommunity } from "./components/TherapyCommunity";
import { VirtualSessions } from "./components/VirtualSessions";
import { UnderstandingCare } from "./components/UnderstandingCare";
import { Stats } from "./components/Stats";
import { AppPreview } from "./components/AppPreview";
import { HowItWorks } from "./components/HowItWorks";
import { YourPath } from "./components/YourPath";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { NotAlone } from "./components/NotAlone";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-purple-50">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Stats />
      <Testimonials />
      <TherapyCommunity />
      <VirtualSessions />
      <UnderstandingCare />
      {/* <AppPreview /> */}
      <HowItWorks />
      <Features />
      <YourPath />

      <NotAlone />
      <About />
      <FAQ />
      {/* <CTA /> */}
      <FinalCTA />
      <Footer />
    </div>
  );
}