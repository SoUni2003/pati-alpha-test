import MoneyBackGuarantee from "../components/MoneyBackGuarantee";
import MainButton from "../components/MainButton";

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
  },
  {
    title: "You got lymphatic massage or bought compression socks.",
    reason: "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
    image: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
  },
];

const WhyNothingWorkedSection = () => {
  return (
    <section className="bg-sculptique-yellow py-1 overflow-hidden">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6 relative">
        <h2 className="font-lora text-2xl leading-snug text-sculptique-text lg:text-[32px] lg:leading-[1.3] text-center mb-4 lg:mb-10">
          Why Nothing Has <span className="text-sculptique-green">Worked</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {REASONS.map((reason, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white shadow-sm rounded-xl overflow-hidden">
              <div className="w-full relative">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
               
              </div>

              <div className="flex flex-col items-center text-center flex-grow p-6">
                 <h3 className="font-trirong text-xl leading-[1.3] font-medium text-sculptique-text mb-5 px-1 min-h-[3rem] flex items-center justify-center">
                    {reason.title}
                 </h3>

                 <div className="w-full bg-[#ffe3e3] rounded-lg px-2 py-4 flex flex-col items-center flex-grow relative group">
                     <div className="flex items-center mb-3">
                         <span className="font-nunito text-base font-semibold text-sculptique-text">Why it failed</span>
                         <img src='https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853' alt="x" className="w-[24px] h-[25px]" />
                     </div>
                     <p className="font-nunito text-base leading-relaxed text-sculptique-text font-bold px-2">
                        {reason.reason}
                     </p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 hidden lg:flex justify-center">
            <img src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176" alt="The Missing Piece" className="w-full max-w-[920px]" />
        </div>

        <div className="flex flex-col items-center mt-4 lg:mt-6 gap-5 mb-16">
            <MainButton title="Try Lymphatic Drainage Risk-Free" to="https://pay.trysculptique.com/lymphatic/checkout" />
            <MoneyBackGuarantee  />
        </div>
      </div>
    </section>
  );
};

export default WhyNothingWorkedSection;
