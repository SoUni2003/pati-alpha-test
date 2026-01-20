import BundlesSection from './BundlesSection';
import ProductInfoAccordion from './ProductInfoAccordion';

const SELLING_POINTS = [
  {
    icon: 'https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413',
    text: 'Join over 93 Thousand who say - it WORKS!',
  },
  {
    icon: 'https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910',
    text: "Restores your body's natural 24-hour lymphatic cycle",
  },
  {
    icon: 'https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413',
    text: 'Helps reduce fluid retention and the appearance of puffiness and bloating',
  },
  {
    icon: 'https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414',
    text: 'Helps fall asleep faster, stay asleep longer and wake up energized',
  },
  {
    icon: 'https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414',
    text: 'Eliminates joint stiffness, pain, morning creakiness and feel more grounded',
  },
  {
    icon: 'https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413',
    text: 'Boosts energy, mental clarity and emotional balance',
  },
];

const HeroProductDetails = () => {
  return (
    <div className='w-full md:w-[50%] md:min-w-[437px] mb-4 tracking-[0.06rem]'>
      <div className='flex items-center space-x-4'>
        <img src='https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359' alt='Rating badge' className='h-[18px] w-auto ' loading='lazy' />
        <p className='text-xs font-nunito text-sculptique-text font-medium md:text-base'>4.8/5 Excellent | Based on 2381 Reviews</p>
      </div>

      <div className='flex flex-col gap-2 md:block mt-4'>
        <h1 className='font-lora text-2xl leading-[1.4] text-sculptique-text md:text-[28px] font-medium'>New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™</h1>
      </div>

      <ul className='mt-4 space-y-4'>
        {SELLING_POINTS.map((point) => (
          <li key={point.text} className='flex items-center gap-3'>
            <img src={point.icon} alt='' className='object-contain w-[30px] h-[30px] flex-shrink-0 md:w-[49px] md:h-[49px] lg:w-[52px] lg:h-[52px]' loading='lazy' />
            <p className='leading-[1.3] text-base md:leading-6'>{point.text}</p>
          </li>
        ))}
      </ul>
      <div id='maximized' className='relative mt-4 w-full bg-white mb-10'>
        <div className='flex flex-row md:items-start md:justify-start md:gap-4'>
          <div className='flex flex-row md:items-center gap-2 md:gap-4'>
            <div className='flex items-center gap-2 text-sculptique-text'>
              <svg xmlns='http://www.w3.org/2000/svg' width='13' height='25' viewBox='0 0 17 35' fill='black' className='sm:w-[17px] sm:h-10'>
                <path
                  d='M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z'
                  stroke='#000000'
                  strokeLinecap='round'></path>
              </svg>
              <p className='font-lora text-[10px] lg:text-base text-center font-medium leading-tight text-sculptique-text'>
                Clinicians'
                <br />
                Choice
              </p>
              <span className='inline-flex' aria-hidden='true'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-[25px] w-[13px] sm:h-10 sm:w-[17px]' viewBox='0 0 17 35' fill='black'>
                  <path
                    d='M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z'
                    stroke='#000000'
                    strokeLinecap='round'></path>
                </svg>
              </span>
            </div>
            <div className='text-[10px] sm:leading-[1.3] text-sculptique-text sm:max-w-md sm:text-[13px]'>
              <span className='font-semibold'>381 clinicians </span> share this on
              <span className='italic'> FrontrowMD </span> <br />
              without compensation.
              <a href='#learn-more' className='ml-2 inline-flex items-center text-[10px] lg:text-sm underline text-sculptique-text hover:underline underline-offset-2 hover:opacity-80 sm:text-[13px]' aria-label='Click to learn more about the clinicians sharing this product'>
                Learn more
              </a>
              <div className='flex gap-1 lg:gap-3 flex-row items-center sm:gap-4'>
                <div className='flex items-center -space-x-0.5'>
                  <img src='https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0' alt='Dr. Kimberly Rogers, MD' className='h-4 lg:h-5 w-4 lg:w-5 rounded-full border-2 border-white object-cover shadow-[0px_3px_6px_rgba(0,0,0,0.15)]' />
                  <img src='https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4' alt='Ageless Aesthetics &amp; Beauty Bar' className='-ml-2 h-4 lg:h-5 w-4 lg:w-5 rounded-full border-2 border-white object-cover shadow-[0px_3px_6px_rgba(0,0,0,0.15)]' />
                  <img src='https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a' alt='Dr. Green' className='-ml-2 h-4 lg:h-5 w-4 lg:w-5 rounded-full border-2 border-white object-cover shadow-[0px_3px_6px_rgba(0,0,0,0.15)]' />
                </div>
                <a href='#reviews' className='inline-flex items-center text-[10px] font-semibold text-sculptique-text hover:underline underline-offset-2 hover:opacity-80 sm:text-[13px]' aria-label='Click to read reviews from clinicians sharing this product'>
                  Read their reviews
                </a>
              </div>
            </div>
          </div>
          <button type='button' className='absolute sm:right-2 right-8 -top-0.5 sm:top-3 sm:static flex h-3 sm:h-4 w-3 sm:w-4 items-center justify-center rounded-2xl bg-neutral-200/80 text-sculptique-text transition hover:bg-neutral-300 shadow-sm border border-neutral-300' id='close-button' aria-label='Click to minimize banner'>
            <svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 0 6 6' fill='none'>
              <path d='M1 5.5L0.5 5L2.5 3L0.5 1L1 0.5L3 2.5L5 0.5L5.5 1L3.5 3L5.5 5L5 5.5L3 3.5L1 5.5Z' fill='#212121'></path>
            </svg>
          </button>
        </div>
      </div>

      <BundlesSection />
      <ProductInfoAccordion />
    </div>
  );
};

export default HeroProductDetails;
