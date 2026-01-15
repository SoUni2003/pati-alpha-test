const LOGOS = [
  "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
  "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
];

const AsSeenInSection = () => {
  return (
    <section className="border-y border-[#e0dacd] bg-white py-10 sm:py-12">
      <div className="mx-auto flex w-full max-w-page flex-col items-center gap-6 px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sculptique-muted">
          As Seen In
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12">
          {LOGOS.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt="Publication logo"
              className="h-10 w-auto opacity-90 sm:h-12"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenInSection;
