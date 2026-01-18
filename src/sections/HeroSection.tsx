import { useState } from "react";
import BundlesSection from "./components/BundlesSection";
import ProductInfoAccordion from "./components/ProductInfoAccordion";

const HERO_IMAGE =
  "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674";
const RATING_BADGE =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359";
const NYSALE_BADGE =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224";
const NUTRITION_ICON =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629";

const GRID_IMAGES_2COL = [
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
];

const GRID_IMAGES_3COL = [
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
];

const SELLING_POINTS = [
  {
    icon: "https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
    text: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
    text: "Restores your body's natural 24-hour lymphatic cycle",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
    text: "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
    text: "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
    text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
    text: "Boosts energy, mental clarity and emotional balance",
  },
];

const OTHER_IMAGES = [
  "https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216",
  "https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216",
];

const ALL_IMAGES = [
  HERO_IMAGE,
  ...GRID_IMAGES_2COL,
  ...GRID_IMAGES_3COL,
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % ALL_IMAGES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
  };

  return (
    <section className="bg-white py-8 px-1">
      <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-x-16 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col items-center lg:w-[50%] max-w-[588px] ">
          
          {/* Mobile Carousel */}
          <div className="flex lg:hidden w-full flex-col mb-4">
            <div className="relative w-full aspect-square bg-[#f7f7f7] rounded-lg overflow-hidden">
                <img 
                  src={ALL_IMAGES[activeSlide]} 
                  alt="Product slide" 
                  className="w-full h-full object-cover" 
                />
                
                {activeSlide === 0 && (
                   <>
                     <div className="absolute right-3 top-3">
                        <img
                          src={NYSALE_BADGE}
                          alt="New Years Sale"
                          className="h-20 w-20 object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <button className="inline-flex border border-black items-center rounded-full bg-white/98 px-4 py-1 backdrop-blur-lg transition bg-[#ffffffd9]/80 hover:opacity-85">
                          <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center mr-2">
                            <img
                              src={NUTRITION_ICON}
                              alt=""
                              className="h-4 w-4"
                              loading="lazy"
                            />
                          </span>
                          <span className="whitespace-nowrap font-serif text-sm text-sculptique-secondary">
                            Nutritional Information
                          </span>
                        </button>
                      </div>
                   </>
                )}

                 <button 
                    onClick={prevSlide} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center border border-gray-200 shadow-sm z-10"
                 > 
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                 </button>
                 <button 
                    onClick={nextSlide} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center border border-gray-200 shadow-sm z-10"
                 > 
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                 </button>
            </div>

            <div className="mt-4 flex gap-2 overflow-hidden px-1 no-scrollbar pb-2">
                {ALL_IMAGES.map((img, idx) => (
                    <button 
                       key={idx} 
                       onClick={() => setActiveSlide(idx)}
                       className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeSlide === idx ? 'border-[#0c7c00] opacity-100' : 'border-transparent opacity-70'}`}
                    >
                        <img src={img} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                ))}
            </div>
          </div>

          <div className="hidden lg:flex w-full flex-col items-center">
            <div className="relative w-full">
              <div className="relative w-full pb-[100%]">
                <img
                  src={HERO_IMAGE}
                  alt="Sculptique lymphatic drainage bottle"
                  className="absolute inset-0 h-auto lg:h-[588px] w-full object-cover rounded-lg"
                  loading="lazy"
                />

                <div className="absolute right-3 top-3 lg:right-4 lg:top-4">
                  <img
                    src={NYSALE_BADGE}
                    alt="New Years Sale"
                    className="h-20 w-20 lg:h-[120px] lg:w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 lg:bottom-7">
                  <button className="inline-flex border border-black items-center rounded-full bg-white/98 px-4 py-1 backdrop-blur-lg transition bg-[#ffffffd9]/80 hover:opacity-85 lg:gap-2 lg:text-lg lg:px-6 lg:py-2">
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center lg:h-7 lg:w-7">
                      <img
                        src={NUTRITION_ICON}
                        alt=""
                        className="h-4 w-4 lg:h-6 lg:w-6"
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

            <div className="lg:mt-5 grid w-full grid-cols-2 gap-4">
              {GRID_IMAGES_2COL.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-[286px] w-[286px] object-cover"
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
                    className="w-full lg:w-[185px] lg:h-[185px] object-cover "
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

        <div className="w-full lg:w-[50%] max-w-[588px]">
          <div className="flex items-center space-x-4">
            <img
              src={RATING_BADGE}
              alt="Rating badge"
              className="h-[18px] w-auto "
              loading="lazy"
            />
            <p className="text-xs font-nunito text-sculptique-text font-medium lg:text-base">
              4.8/5 Excellent | Based on 2381 Reviews
            </p>
          </div>

          <h1 className="mt-5 font-lora text-2xl leading-tight text-sculptique-text lg:text-3xl">
            New Maximum Potency Formula – Lymphatic Drainage Capsules by
            Sculptique™
          </h1>

          <ul className="mt-4 space-y-4">
            {SELLING_POINTS.map((point) => (
              <li key={point.text} className="flex items-center gap-3">
                <img
                  src={point.icon}
                  alt=""
                  className="mt-0.5 h-10 w-10 flex-shrink-0 lg:h-[49px] lg:w-[49px]"
                  loading="lazy"
                />
                <p className="text-sm leading-5 sm:text-base sm:leading-6 lg:text-base lg:leading-7">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
          <div id="maximized" className="relative mt-4 w-full bg-white">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start lg:gap-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
                <div className="flex items-center gap-2 text-sculptique-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="35"
                    viewBox="0 0 17 35"
                    fill="black"
                  >
                    <path
                      d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="font-lora text-base text-center font-medium leading-tight text-sculptique-text">
                    Clinicians'<br />Choice
                  </p>
                  <span className="hidden lg:inline-flex" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="35"
                      viewBox="0 0 17 35"
                      fill="black"
                    >
                      <path
                        d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z"
                        stroke="#000000"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="text-[13px] leading-6 text-sculptique-text lg:max-w-md lg:text-[13px]">
                  <span className="font-semibold">373 clinicians</span> share
                  this on
                  <span className="italic"> FrontrowMD </span> <br />
                  without compensation.
                  <button
                    type="button"
                    className="ml-2 inline-flex items-center text-sm underline text-sculptique-text hover:underline underline-offset-2 hover:opacity-80 lg:text-[13px]"
                    aria-label="Click to learn more about the clinicians sharing this product"
                  >
                    Learn more
                  </button>
                  <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-4">
                    <div className="flex items-center -space-x-0.5">
                      <img
                        src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0"
                        alt="Dr. Kimberly Rogers, MD"
                        className="h-5 w-5 rounded-full border-2 border-white object-cover shadow-[0px_3px_6px_rgba(0,0,0,0.15)]"
                      />
                      <img
                        src="https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4"
                        alt="Ageless Aesthetics &amp; Beauty Bar"
                        className="-ml-2 h-5 w-5 rounded-full border-2 border-white object-cover shadow-[0px_3px_6px_rgba(0,0,0,0.15)]"
                      />
                      <img
                        src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a"
                        alt="Dr. Green"
                        className="-ml-2 h-5 w-5 rounded-full border-2 border-white object-cover shadow-[0px_3px_6px_rgba(0,0,0,0.15)]"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center text-[13px] font-semibold text-sculptique-text hover:underline underline-offset-2 hover:opacity-80 lg:text-[13px]"
                      aria-label="Click to read reviews from clinicians sharing this product"
                    >
                      Read their reviews
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="absolute right-3 top-3 lg:static flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200/80 text-sculptique-text transition hover:bg-neutral-300"
                id="close-button"
                aria-label="Click to minimize banner"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 6 6"
                  fill="none"
                >
                  <path
                    d="M1 5.5L0.5 5L2.5 3L0.5 1L1 0.5L3 2.5L5 0.5L5.5 1L3.5 3L5.5 5L5 5.5L3 3.5L1 5.5Z"
                    fill="#212121"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <BundlesSection />
          <ProductInfoAccordion />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
