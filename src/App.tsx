import Header from './components/Header'
import AsSeenInSection from './sections/AsSeenInSection'
import HeroSection from './sections/HeroSection'
import SymptomsSection from './sections/SymptomsSection'
import WhyNothingWorkedSection from './sections/WhyNothingWorkedSection'
import IngredientsSection from './sections/IngredientsSection'
import ReviewsSection from './sections/ReviewsSection'
import FeaturesSection from './sections/FeaturesSection'
import ExpertSection from './sections/ExpertSection'
import FAQSection from './sections/FAQSection'
import MissionSection from './sections/MissionSection'
import FinalCTASection from './sections/FinalCTASection'
import VideoCarousel from './sections/components/VideoCarousel'

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
  )
}

export default App
