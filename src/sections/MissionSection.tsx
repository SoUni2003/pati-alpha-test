const MissionSection = () => {
  return (
    <section className="bg-white py-8 lg:py-[56px]">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-y-4 lg:gap-x-16 lg:items-start">
          <div className="flex flex-col lg:col-span-7">
            <h2 className="font-lora text-2xl leading-snug text-sculptique-text lg:text-[32px] lg:leading-[1.3] text-left mb-4">
              We’re On A Mission To Help 100,000,000 Women Visibly, Naturally
              Get Rid Of Bloating...And Feel Like Themselves Again
            </h2>
            <p className="mb-2 leading-[1.3] font-nunito text-lg text-sculptique-text font-medium">
              Here's where we're at right now:
            </p>
          </div>

          <div className="flex justify-center lg:justify-end lg:col-span-5 lg:row-span-2 lg:items-center lg:flex">
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
              alt="Lymphatic Drainage Results"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="lg:col-span-7">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
              />
              <img
                src="https://trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
                alt="87% of women reported less noticeable eye bags, 89% noticed firmer skin"
                className="w-full h-auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
