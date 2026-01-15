const REVIEWS = [
  {
    date: "12/08/2025",
    author: "Anonymous",
    rating: 5,
    text: "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working.",
  },
  {
    date: "12/01/2025",
    author: "Anonymous",
    rating: 5,
    text: "One month and I've already seen a difference!",
  },
  {
    date: "11/23/2025",
    author: "Donabeth Houx",
    rating: 5,
    text: "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
  },
  {
    date: "11/17/2025",
    author: "Dawn Camacho",
    rating: 5,
    text: "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
  },
];

const BENEFITS = [
  {
    icon: "https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
    title: "Free Shipping from USA",
    subtitle: "On all orders",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
    title: "Naturally Supports Your Body",
    subtitle: "Promotes healthy immune cell functions",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
    title: "100% Natural Ingredients",
    subtitle: "8 active, natural ingredients",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
    title: "Try it Risk Free for 60 Days",
    subtitle: "60-day money-back guarantee",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-sculptique-cream py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          Real Women, Real Results: 93,000+ Transformations
        </h2>

        <p className="mt-4 text-base text-sculptique-muted sm:text-lg">
          All reviews verified from actual paying customers
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={`${review.date}-${review.author}`}
              className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-base leading-7 text-sculptique-muted sm:text-lg">
                {review.text}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-sculptique-cream pt-4">
                <p className="text-sm font-medium text-sculptique-text">{review.author}</p>
                <p className="text-sm text-sculptique-muted">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center">
              <img
                src={benefit.icon}
                alt=""
                className="h-16 w-16 object-contain"
                loading="lazy"
              />
              <h3 className="mt-4 font-serif text-lg font-semibold text-sculptique-text sm:text-xl">
                {benefit.title}
              </h3>
              <p className="mt-1 text-sm text-sculptique-muted sm:text-base">
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
