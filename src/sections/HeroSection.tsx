import HeroProductDetails from './components/HeroProductDetails';
import HeroImageGallery from './components/HeroImageGallery';

const HeroSection = () => {
  return (
    <section className='bg-white py-8'>
      <div className='page-container flex flex-col gap-x-16 sm:flex-row lg:items-start'>
        <HeroImageGallery />
        <HeroProductDetails />
      </div>
    </section>
  );
};

export default HeroSection;
