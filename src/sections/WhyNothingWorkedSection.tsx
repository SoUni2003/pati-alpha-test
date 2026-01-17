const REASONS = [
  {
    title: "You cut out gluten, dairy, sugar. You ate clean for months.",
    reason: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
    image: "https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
  },
  {
    title: "You tried viral lymphatic drops from TikTok.",
    reason: "They're just pricey water with trace herbs. The \"active ingredients\" are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
    image: "https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
    icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
  },
  {
    title: "You got lymphatic massage or bought compression socks.",
    reason: "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
    image: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
    icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
  },
];

const WhyNothingWorkedSection = () => {
  return (
    <section className="bg-sculptique-cream py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6 relative">
        <h2 className="font-serif text-center text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[42px] mb-10 sm:mb-14">
          Why Nothing Has <span className="text-sculptique-green">Worked</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {REASONS.map((reason, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white rounded-2xl p-4 shadow-sm">
              <div className="w-full relative rounded-xl overflow-hidden mb-6">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
               
              </div>

              <div className="flex flex-col items-center text-center flex-grow">
                 <h3 className="font-serif text-xl sm:text-[22px] leading-tight text-sculptique-text mb-5 px-1 min-h-[3rem] flex items-center justify-center">
                    {reason.title}
                 </h3>

                 <div className="w-full bg-[#ffeceb] rounded-lg p-5 sm:p-6 flex flex-col items-center flex-grow relative group">
                     <div className="flex items-center gap-2.5 mb-2.5">
                         <span className="font-sans text-[15px] font-bold text-sculptique-text">Why it failed</span>
                         <img src={reason.icon} alt="x" className="w-[14px] h-[14px]" />
                     </div>
                     <p className="font-sans text-[15px] leading-relaxed text-sculptique-text font-medium">
                        {reason.reason}
                     </p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 hidden lg:flex justify-center">
            <img src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176" alt="The Missing Piece" className="w-full max-w-[800px]" />
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center mt-12 gap-5">
            <button className="bg-black text-white font-bold py-4 px-8 rounded-md text-lg hover:bg-gray-800 transition-colors w-full sm:w-auto min-w-[300px]">
                Try Lymphatic Drainage Risk-Free
            </button>
            <div className="flex items-center gap-2 text-sm font-medium text-sculptique-text">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>60 day money-back guarantee</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyNothingWorkedSection;
