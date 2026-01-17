import { useRef, useState, useEffect } from "react";
import MoneyBackGuarantee from "../../components/MoneyBackGuarantee";

const VIDEOS = [
  {
    id: 1,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
    src: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
  },
  {
    id: 2,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
    src: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
  },
  {
    id: 3,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
    src: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
  },
  {
    id: 4,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
    src: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
  },
  {
    id: 5,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
    src: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
  },
  {
    id: 6,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
    src: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
  },
  {
    id: 7,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
    src: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
  },
  {
    id: 8,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
    src: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
  },
  {
    id: 9,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
    src: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
  },
  {
    id: 10,
    poster: "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
    src: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
  },
];

const VideoCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(10);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollRatio = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const progress = 10 + (scrollRatio * 90);
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      requestAnimationFrame(() => handleScroll());
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex]?.pause();
      }
      video.play();
      setPlayingIndex(index);
    }
  };

  const scrollTo = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.5;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f3eee0] py-12 md:py-20 font-sans">
      <div className="mx-auto w-full max-w-[1200px]">
        
        <div className="mb-10 flex flex-col items-center justify-center text-center">
            <img 
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383" 
              className="mb-6 h-6 object-contain md:h-8" 
              alt="Trustpilot Reviews" 
            />
            <h2 className="text-3xl md:text-5xl font-serif text-[#1f2024] leading-tight">
              See The Stories of Sculptique™ Women Firsthand
            </h2>
        </div>

        <div className="relative mb-12">
            <div
                ref={scrollContainerRef}
                className="flex w-full  pl-4 snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide md:w-full md:mx-0 md:px-0 md:gap-6"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {VIDEOS.map((video, index) => (
                <div
                    key={video.id}
                    className="relative min-w-[78%] flex-shrink-0 snap-center md:min-w-[calc(25%-18px)]"
                >
                    <div 
                        className="relative h-[476px] w-full overflow-hidden rounded-lg bg-gray-200 cursor-pointer group shadow-sm transition-transform hover:scale-[1.01] md:h-auto md:aspect-[9/16] lg:aspect-auto lg:h-[489px]"
                        onClick={() => togglePlay(index)}
                    >
                        <video
                            ref={(el) => { videoRefs.current[index] = el; }}
                            src={video.src}
                            className="h-full w-full object-cover"
                            poster={video.poster}
                            playsInline
                            loop
                            muted={playingIndex !== index}
                        />
                        <div 
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                            playingIndex === index ? "opacity-0 hover:opacity-100" : "opacity-100"
                            }`}
                        >
                            <img 
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519" 
                            alt="Play"
                            className="h-8 w-8 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 md:mt-8 md:gap-10">
                <div className="relative h-[2px] w-full flex-1 overflow-hidden bg-[#e5e5e5]">
                    <div 
                        className="absolute top-0 bottom-0 left-0 bg-[#039869] transition-all duration-300 ease-out"
                        style={{ width: `${scrollProgress}%` }} 
                    />
                </div>

                <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                    <button
                        onClick={() => scrollTo("left")}
                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2024]/10 bg-white/50 hover:bg-white shadow-sm transition-all active:scale-95 disabled:opacity-50"
                        aria-label="Scroll left"
                    >
                        <img 
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" 
                            alt="Previous"
                            className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100"
                        />
                    </button>
                    <button
                        onClick={() => scrollTo("right")}
                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2024]/10 bg-white/50 hover:bg-white shadow-sm transition-all active:scale-95 disabled:opacity-50"
                        aria-label="Scroll right"
                    >
                        <img 
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" 
                            alt="Next"
                            className="h-5 w-5 rotate-180 opacity-70 transition-opacity group-hover:opacity-100"
                        />
                    </button>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-12">
            <a 
                href="https://pay.trysculptique.com/lymphatic/checkout" 
                className="bg-[#1f2024] text-white font-medium py-4 px-12 rounded-full text-lg md:text-xl transition-all hover:scale-105 hover:bg-opacity-90 shadow-lg text-center"
            >
                Try Lymphatic Drainage Risk-Free
            </a>
            
            <MoneyBackGuarantee 
                className="flex items-center gap-3 mt-6 text-[#1f2024]" 
                textClassName="text-base font-medium" 
            />
        </div>

      </div>
    </section>
  );
};

export default VideoCarousel;
