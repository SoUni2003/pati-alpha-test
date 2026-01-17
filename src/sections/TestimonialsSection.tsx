import VideoCarousel from "./components/VideoCarousel";

const TestimonialsSection = () => {
  return (
    <section className="bg-sculptique-cream py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1248px] px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2] text-center mb-12">
          See The Stories of Sculptique™ Women Firsthand
        </h2>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
