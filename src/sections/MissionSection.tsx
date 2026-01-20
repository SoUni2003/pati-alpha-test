const MissionSection = () => {
  return (
    <section className='bg-white py-8 md:py-[56px]'>
      <div className='page-container'>
       <div className="px-4 md:px-0">
         <div className='grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-12 md:gap-y-4 md:gap-x-16 md:items-start'>
          <div className='flex flex-col md:col-span-7 text-center'>
            <h2 className='font-lora text-2xl text-center md:text-left leading-snug text-sculptique-text md:text-[32px] md:leading-[1.3] mb-4 font-medium mx-2 md:mx-0'>
              We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating...And Feel Like Themselves Again
            </h2>
            <p className='mb-2 leading-[1.3] font-nunito text-lg text-sculptique-text font-medium'>Here's where we're at right now:</p>
          </div>

          <div className='flex justify-center md:justify-end md:col-span-5 md:row-span-2 md:items-center md:flex'>
            <img
              src='https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777'
              alt='Lymphatic Drainage Results'
              className='h-auto w-full object-contain'
            />
          </div>

          <div className='md:col-span-7'>
            <picture>
              <source media='(min-width: 768px)' srcSet='https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458' />
              <img
                src='https://trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458'
                alt='87% of women reported less noticeable eye bags, 89% noticed firmer skin'
                className='w-full h-auto'
              />
            </picture>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default MissionSection;
