import Header from './components/Header'
import AsSeenInSection from './sections/AsSeenInSection'
import HeroSection from './sections/HeroSection'
import SymptomsSection from './sections/SymptomsSection'
import WhyNothingWorkedSection from './sections/WhyNothingWorkedSection'
import IngredientsSection from './sections/IngredientsSection'
import ReviewsSection from './sections/ReviewsSection'
import ExpertSection from './sections/ExpertSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import MissionSection from './sections/MissionSection'
import FinalCTASection from './sections/FinalCTASection'

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
        <ExpertSection />
        <TestimonialsSection />
        <FAQSection />
        <MissionSection />
        <FinalCTASection />
      </main>
    </div>
  )
}

export default App
