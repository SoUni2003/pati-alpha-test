import {
  Header,
  AsSeenInSection,
  HeroSection,
  SymptomsSection,
  WhyNothingWorkedSection,
  IngredientsSection,
  ReviewsSection,
  FeaturesSection,
  ExpertSection,
  FAQSection,
  MissionSection,
  FinalCTASection,
  VideoCarousel,
} from "./sections";

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
