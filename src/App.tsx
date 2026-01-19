import { Header, AsSeenInSection, ExpertSection, FAQSection, FeaturesSection, FinalCTASection, HeroSection, IngredientsSection, MissionSection, ReviewsSection, SymptomsSection, VideoCarousel, WhyNothingWorkedSection } from "./sections";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AsSeenInSection />
        <SymptomsSection />
        <WhyNothingWorkedSection />
        <IngredientsSection />
        <ReviewsSection />
        <FeaturesSection />
        <ExpertSection />
        <VideoCarousel />
        <FAQSection />
        <MissionSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default App;
