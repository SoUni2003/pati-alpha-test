const SYMPTOMS = [
  {
    title: 'Your stomach is flat in the morning, but by evening you look six months pregnant.',
    image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800',
  },
  {
    title: "Your ankles disappear into 'kankles' by the end of the day.",
    image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799',
  },
  {
    title: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
    image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801',
  },
  {
    title: "You feel foggy and exhausted even after a full night's sleep.",
    image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799',
  },
  {
    title: 'You wake up stiff and achy, like your body aged overnight.',
    image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799',
  },
];

const SymptomsSection = () => {
  return (
    <section className='py-10 md:py-16'>
      <div className='page-container'>
        <div className='text-center md:max-w-3xl mx-auto mb-12'>
          <h2 className='font-lora text-2xl leading-snug text-sculptique-text md:text-[32px] md:leading-[1.1]'>
            Why Your <span className='text-sculptique-green'>Bloating, Brain Fog & Swollen Legs</span> Are Actually Connected
          </h2>
          <p className='my-4 text-base text-center leading-[1.3] md:text-lg'>If you're experiencing more than one of these symptoms, your body is trying to tell you something:</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 items-stretch'>
          {SYMPTOMS.map((symptom, idx) => (
            <div
              key={idx}
              className='grid grid-cols-2 md:flex md:flex-col lg:items-stretch md:gap-4 md:p-0 bg-white md:bg-transparent rounded-lg md:rounded-none'
            >
              <div className='w-full aspect-[1/1] md:w-full md:aspect-[200/171] shrink-0 overflow-hidden rounded-l-lg md:rounded-t-lg bg-sculptique-cream'>
                <img src={symptom.image} alt='' className='w-full h-full object-cover' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center bg-[#f7f7f7] p-4 text-center min-h-[150px] md:h-auto'>
                <p className='font-nunito text-base font-medium leading-normal text-sculptique-text text-pretty'>{symptom.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='relative w-full md:max-w-[920px] mx-auto'>
          <div className='hidden md:block w-full mb-[-20px] relative z-20 pointer-events-none'>
            <img src='https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771' alt='' className='w-full h-auto' />
          </div>
          <div className='block md:hidden w-full mt-4 mb-[-20px] relative z-20 pointer-events-none'>
            <img src='https://trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769' alt='' className='w-full h-auto' />
          </div>

          <div className='flex justify-center mt-8'>
            <img src='https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549' alt='' className='w-[34px] md:w-[46px] h-[46px] md:h-[65px] object-cover' />
          </div>
        </div>

        <div className='mt-2 md:mt-4 md:max-w-[920px] mx-auto'>
          <div className='text-center mb-4 md:mb-10'>
            <h2 className='font-lora text-2xl md:text-[42px] text-sculptique-text md:leading-[1.3] font-medium'>
              The Connection <span className='text-sculptique-green'>You've Been Missing</span>
            </h2>
          </div>

          <div className='rounded-2xl overflow-hidden'>
            <img src='https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771' alt='Symptoms vs Root Causes' className='hidden md:block w-full h-auto' />
            <img src='https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770' alt='Symptoms vs Root Causes' className='block md:hidden w-full h-auto' />
          </div>
        </div>

        <div className='mt-4'>
          <div className='text-center mb-8'>
            <img src='https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549' alt='' className='w-[34px] md:w-[46px] h-[46px] md:h-[65px] object-cover mx-auto' />
            <h2 className='font-lora text-2xl md:text-[42px] text-sculptique-text md:leading-[1.3] font-medium px-4 md:px-0'>
              Your <span className='text-sculptique-green'>Hidden Drainage System</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[100px] items-center'>
            <div className='space-y-1.5'>
              <p className='font-nunito text-base md:text-lg text-sculptique-text leading-[1.3]'>
                Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes <span className='font-bold'>3-4 liters of cellular waste and excess fluid every single day.</span>
              </p>

              <p className='font-nunito text-base md:text-lg'>When it's working properly, you don't even know it exists.</p>

              <ul className='space-y-2'>
                {['Waste gets drained away', 'Fluid stays balanced.', 'Your body feels light and energized.'].map((txt) => (
                  <li key={txt} className='flex items-center gap-x-2'>
                    <img src='https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838' alt='' className='w-5 h-5' />
                    <span className='text-base md:text-lg font-nunito text-[#0c7c00] font-semibold line-[1.3]'>{txt}</span>
                  </li>
                ))}
              </ul>

              <div className='bg-[#ffe3e3] rounded-xl px-4 py-2 !my-4'>
                <p className='font-nunito text-base md:text-lg font-medium text-black'>But after age 35, declining estrogen hijacks this system's ability to function.</p>
              </div>

              <ul className='space-y-2'>
                {['Vessel pumping weakens.', 'One-way valves fail.', 'Protein clogs form.', 'Vessel walls become leaky.'].map((txt) => (
                  <li key={txt} className='flex items-center gap-x-2 font-medium'>
                    <img src='https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839' alt='' className='w-5 h-5' />
                    <span className='text-base md:text-lg font-nunito text-[#a60003] font-semibold line-[1.3]'>{txt}</span>
                  </li>
                ))}
              </ul>

              <p className='font-nunito text-base md:text-lg font-semibold'>Instead of processing and removing waste, it backs up in your tissues.</p>
            </div>

            <div className='relative'>
              <img src='https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546' alt='Lymphatic function chart vs Age' className='w-auto md:h-[478px]' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[100px] items-center mt-12 md:mt-20'>
          <div className='relative order-2 md:order-1'>
            <img src='https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096' alt='Lymphatic fluid buildup illustration' className='w-auto md:h-[380px]' />
          </div>

          <div className='space-y-2 order-1 md:order-2'>
            <h3 className='font-nunito text-base md:text-lg font-bold text-sculptique-text'>And it accumulates. Day after day. Week after week.</h3>

            <p className='text-lg text-sculptique-text leading-relaxed'>That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your legs, your face—anywhere gravity and tissue structure allow it to settle.</p>

            <div className='bg-[#ffe3e3] rounded-xl px-4 py-2 !my-4'>
              <p className='text-base md:text-lg  text-black'>The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While you're trying to fall asleep.</p>

              <ul className='space-y-2 mt-1'>
                {["That's why you're bloated.", "That's why your ankles swell.", "That's why you see cellulite.", "That's why you feel exhausted and foggy."].map((txt) => (
                  <li key={txt} className='flex items-center gap-x-2 font-medium'>
                    <img src='https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839' alt='' className='w-5 h-5 shrink-0' />
                    <span className='text-base md:text-lg font-nunito text-[#a60003] font-bold line-[1.3]'>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className='font-nunito text-base md:text-lg font-bold text-sculptique-text'>Your cells are literally sitting in their own waste—and your body can't flush it out.</p>

            <p className='font-nunito text-base md:text-lg font-semibold'>The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an already compromised system.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
