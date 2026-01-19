import { useState, useRef, useEffect } from "react";

const HERO_IMAGE =
  "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674";

const GRID_IMAGES_2COL = [
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
];

const GRID_IMAGES_3COL = [
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
];

const OTHER_IMAGES = [
  "https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216",
  "https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216",
];

const ALL_IMAGES = [HERO_IMAGE, ...GRID_IMAGES_2COL, ...GRID_IMAGES_3COL];

const HeroImageGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % ALL_IMAGES.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + ALL_IMAGES.length) % ALL_IMAGES.length,
    );
  };

  useEffect(() => {
    if (scrollRef.current) {
      const activeThumb = scrollRef.current.children[
        activeSlide
      ] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }
  }, [activeSlide]);

  return (
    <div className="flex w-full flex-col items-center sm:w-[50%] max-w-[588px] ">
      <div className="flex sm:hidden w-full flex-col mb-4">
        <div className="relative w-full aspect-square bg-[#f7f7f7] rounded-lg overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {ALL_IMAGES.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product slide ${index + 1}`}
                className="w-full h-full object-cover shrink-0"
              />
            ))}
          </div>

          {activeSlide === 0 && (
            <>
              <div className="absolute right-4 top-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                  alt="New Years Sale"
                  className="h-20 w-20 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <button
                  type="button"
                  className="inline-flex border px-6 py-2 border-black items-center rounded-full transition bg-white/85 hover:opacity-70"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center mr-2">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                      alt=""
                      className="h-6 w-6"
                      loading="lazy"
                    />
                  </span>
                  <span className="whitespace-nowrap font-montserrat text-sm text-sculptique-text leading-[1.2]">
                    Nutritional Information
                  </span>
                </button>
              </div>
            </>
          )}

          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 h-8 w-8 z-10"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"
              className="w-8 h-8 text-black"
              alt=""
            />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-8 w-8 z-10"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"
              className="w-8 h-8 text-black"
              alt=""
            />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="mt-2 flex gap-2 overflow-x-auto px-1 no-scrollbar pb-2"
        >
          {ALL_IMAGES.map((img, idx) => (
            <button
              type="button"
              aria-label={`View slide ${idx + 1}`}
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`relative w-[calc(25%-6px)] aspect-square shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeSlide === idx ? "border-[#0c7c00]" : "border-transparent"}`}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Slide ${idx + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex w-full flex-col items-center">
        <div className="relative w-full">
          <div className="relative w-full sm:pb-[100%]">
            <img
              src={HERO_IMAGE}
              alt="Sculptique lymphatic drainage bottle"
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
              loading="lazy"
            />

            <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                alt="New Years Sale"
                className="h-20 w-20 sm:h-[120px] sm:w-[120px] object-contain"
                loading="lazy"
              />
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-7">
              <button
                type="button"
                className="inline-flex border border-black items-center rounded-full bg-white/98 px-4 py-1 backdrop-blur-lg transition bg-[#ffffffd9]/80 hover:opacity-85 sm:gap-2 sm:text-lg sm:px-6 sm:py-2"
              >
                <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center sm:h-7 sm:w-7">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                    alt=""
                    className="h-6 w-6"
                    loading="lazy"
                  />
                </span>
                <span className="whitespace-nowrap font-serif text-sm text-sculptique-secondary">
                  Nutritional Information
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="sm:mt-5 grid w-full grid-cols-2 gap-4">
          {GRID_IMAGES_2COL.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <img
                src={img}
                alt=""
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 grid w-full grid-cols-3 gap-4">
          {GRID_IMAGES_3COL.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <img
                src={img}
                alt=""
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          {OTHER_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <img
                src={img}
                alt="Customer results statistics"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroImageGallery;
