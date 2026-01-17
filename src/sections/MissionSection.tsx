import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Content & Stats */}
          <div className="flex flex-col flex-1">
            <h2 className="mb-4 font-serif text-3xl leading-tight text-sculptique-text sm:text-4xl lg:text-5xl">
              We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating...And Feel Like Themselves Again
            </h2>
            <p className="mb-8 font-sans text-lg text-sculptique-text sm:mb-12 sm:text-xl">
              Here's where we're at right now:
            </p>
            <img 
              src="https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458" 
              alt="87% of women reported less noticeable eye bags, 89% noticed firmer skin"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right: Bottle + Chart */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
              alt="Lymphatic Drainage Results"
              className="h-auto w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
