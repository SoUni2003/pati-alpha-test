const TESTIMONIALS = [
  {
    image: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
    number: "01",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
    number: "02",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
    number: "03",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
    number: "04",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-sculptique-cream py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          See The Stories of Sculptique™ Women Firsthand
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <button
              key={testimonial.number}
              className="group relative h-64 w-full overflow-hidden rounded-2xl bg-sculptique-text shadow-lg transition-transform hover:scale-105 sm:h-72"
            >
              <img
                src={testimonial.image}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-16 w-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 text-sm font-semibold text-white">
                {testimonial.number}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button
              key={num}
              className={`h-2 rounded-full transition ${
                num === 2 ? "bg-sculptique-text" : "bg-sculptique-muted"
              }`}
              style={{ width: num === 2 ? "32px" : "8px" }}
              aria-label={`Go to slide ${num}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
