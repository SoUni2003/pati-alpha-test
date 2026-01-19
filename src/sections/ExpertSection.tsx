import { MainButton, MoneyBackGuarantee } from '../components';

const ExpertSection = () => {
  return (
    <section className='bg-white py-8 lg:py-16'>
      <div className='page-container'>
        <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg bg-[#F8F8F8]'>
          <div className='flex w-full flex-col justify-center p-4  lg:p-8 order-2 md:order-1'>
            <span className='mb-4 text-base font-nunito font-medium text-sculptique-muted leading-[1.3]'>July 4th, 2025</span>

            <h2 className='mb-4 font-lora text-3xl font-medium leading-tight text-sculptique-text lg:text-[32px]'>
              Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
            </h2>

            <div className='space-y-2 font-nunito text-base leading-[1.3] lg:text-lg'>
              <p>
                “Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and nutrients, it can’t
                process fat and upkeep healthy connective tissue, which is why unprocessed fat flows up and starts pushing up against your
                skin, forming bumps you know as cellulite.
              </p>
              <p>
                SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance microcirculation, boost lymphatic
                drainage, and reduce inflammation, which restores your tissue and breaks down the fat cells in your skin.”
              </p>
            </div>

            <div className='mt-4 flex flex-col items-start gap-4'>
              <MainButton title='Try Lymphatic Drainage Risk-Free' to='https://pay.trysculptique.com/lymphatic/checkout' />

              <div className='w-full flex items-center justify-center'>
                <MoneyBackGuarantee />
              </div>
            </div>
          </div>

          <div className='relative w-full lg:w-full bg-[#F3EEE0] min-h-[345px] lg:min-h-[400px] h-full order-1 md:order-2 rounded-lg overflow-hidden'>
            <img
              src='https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213'
              alt='Dr. Emily Chen'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
