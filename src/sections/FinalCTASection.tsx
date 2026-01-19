import MainButton from "../components/MainButton";
import MoneyBackGuarantee from "../components/MoneyBackGuarantee";

const FinalCTASection = () => {
  return (
    <section className="bg-sculptique-yellow py-8 lg:py-[56px]">
      <div className="page-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="mb-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
                alt="Trustpilot Reviews"
                className="h-[21px] w-auto object-contain"
              />
            </div>

            <h2 className="font-lora text-3xl font-medium leading-tight text-sculptique-text lg:text-[32px] mb-4">
              Stop Masking Symptoms. Start Restoring Root Cause.
            </h2>

            <p className="text-base lg:text-xl font-nunito leading-[1.3] text-sculptique-text mb-4 font-medium">
              You deserve to feel like yourself again. To wake up without
              puffiness. To see your ankles. To look in the mirror and recognize
              the vibrant woman staring back. To have energy for the people you
              love.
            </p>

            <p className="text-base lg:text-xl font-nunito leading-[1.3] text-sculptique-text mb-4 font-medium">
              You deserve a solution that actually works. Not temporary relief.
              Not symptom masking. Complete lymphatic restoration.
            </p>

            <MainButton
              title="Try Lymphatic Drainage Risk-Free"
              to="https://pay.trysculptique.com/lymphatic/checkout"
            />
            <div className="w-full flex justify-center mt-4">
              <MoneyBackGuarantee size="h-6 w-6" />
            </div>
          </div>

          <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
              alt="Before and after results"
              className="w-full h-auto object-contain rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
