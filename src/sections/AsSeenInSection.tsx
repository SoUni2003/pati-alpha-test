const LOGOS = [
  'https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678',
  'https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678',
  'https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678',
  'https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678',
  'https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678',
  'https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678',
];

const AsSeenInSection = () => {
  return (
    <section className='border-y bg-sculptique-yellow py-2 overflow-hidden'>
      <div className='flex w-full flex-col items-center gap-6 text-center'>
        <h3 className='font-trirong font-medium text-2xl text-black px-4 mt-4'>As Seen In</h3>

        <div className='relative flex w-full overflow-hidden'>
          <div className='flex animate-infinite-scroll items-center gap-12 whitespace-nowrap pb-2 lg:gap-20 pr-12 lg:pr-20'>
            {LOGOS.map((src, index) => (
              <img
                key={`logo-1-${index}`}
                src={src}
                alt='Publication logo'
                className='h-[30px] w-auto opacity-90 grayscale transition-all hover:grayscale-0'
                loading='lazy'
              />
            ))}
            {LOGOS.map((src, index) => (
              <img
                key={`logo-2-${index}`}
                src={src}
                alt='Publication logo'
                className='h-[30px] w-auto opacity-90 grayscale transition-all hover:grayscale-0'
                loading='lazy'
              />
            ))}
            {LOGOS.map((src, index) => (
              <img
                key={`logo-3-${index}`}
                src={src}
                alt='Publication logo'
                className='h-[30px] w-auto opacity-90 grayscale transition-all hover:grayscale-0'
                loading='lazy'
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AsSeenInSection;
