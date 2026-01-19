import { useState } from "react";

const INGREDIENTS = [
  {
    name: "Cleavers Extract (100mg)",
    benefit: "Reactivate Lymphatic Pumps",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
    description: "Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that \"wake up\" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance. [Study: Enhanced NK cell activity in immunosuppressed models]",
  },
  {
    name: "Dandelion Extract (250mg)",
    benefit: "Flush Excess Fluid",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
    description: "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001). [Study: First human pilot study on diuretic effects]",
  },
  {
    name: "Bromelain Powder (100mg)",
    benefit: "Break Down Protein Clogs",
    image: "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909", 
    description: "Enzymatically breaks down the protein complexes that clog lymphatic vessels, allowing fluid to flow freely again. Acts as a biologicalèa pipe cleaner for your lymphatic system.",
  },
  {
    name: "Rutin (100mg)",
    benefit: "Strengthen Vessel Walls",
    image: "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909", 
    description: "A powerful bioflavonoid that reinforces the structural integrity of lymphatic capillaries, reducing permeability and preventing fluid from leaking back into tissues.",
  },
  {
    name: "Burdock Root Powder (200mg)",
    benefit: "Reduce Inflammation",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
    description: "Potent anti-inflammatory that calms swollen tissues, reducing pressure on lymphatic vessels and facilitating easier drainage.",
  },
  {
    name: "Echinacea Purpurea Extract (500mg)",
    benefit: "Boost Immune Clearance",
    image: "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909", 
    description: "Enhances macrophage activity to engulf and clear cellular waste products and toxins that stagnate in a sluggish lymphatic system.",
  },
  {
    name: "Kelp Extract (30mg)",
    benefit: "Support Metabolism",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
    description: "Rich in iodine to support thyroid function and metabolic rate, ensuring your body has the energy required to drive lymphatic circulation.",
  },
  {
    name: "Lemon Powder (50mg)",
    benefit: "Antioxidant Protection",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
    description: "Provides high levels of Vitamin C and flavonoids to protect lymphatic vessels from oxidative stress and free radical damage.",
  },
];

const IngredientsSection = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-8">
     <div className="bg-[#f3eee0] py-16 overflow-hidden">
       <div className="page-container">
        
        <div className="text-center max-w-[800px] mx-auto mb-14">
            <h2 className="font-lora text-2xl leading-snug text-sculptique-text lg:text-[32px] lg:leading-[1.3] text-center mb-4">
                <span className="text-sculptique-green">The 8-Ingredient System</span> That Restores What Hormones Once Maintained
            </h2>
            <p className="font-nunito text-base lg:text-lg text-sculptique-text font-medium leading-relaxed mx-auto">
                Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research.
                <br className="hidden md:block"/>
                Not just moving fluid temporarily. Not just reducing inflammation. <span className="font-bold">Complete restoration.</span>
            </p>
        </div>

        <div className="bg-black border border-black rounded-lg lg:rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
                {INGREDIENTS.map((ingredient, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white p-3 lg:p-6 flex flex-col items-center text-center h-full cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleAccordion(idx)}
                    >
                        <div className="flex items-center gap-2 mb-4 w-full justify-center">
                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" alt="" className="w-4 h-4" />
                            <span className="text-base font-nunito text-[#0c7c00]">{ingredient.benefit}</span>
                        </div>

                        <div className="w-full flex flex-row lg:flex-col items-center gap-3 lg:gap-0">
                             <div className="shrink-0 lg:w-full lg:flex lg:items-center lg:justify-center">
                                <img src={ingredient.image} alt={ingredient.name} className="w-[60px] h-10 lg:w-auto lg:h-20 lg:min-h-20 object-cover" />
                             </div>
    
                            <div className="flex-1 w-full flex items-center justify-between lg:pt-2 pl-3 md:pl-0">
                                 <div className="text-left">
                                     <h3 className="font-trirong text-base font-semibold text-sculptique-text leading-[1.3]">{ingredient.name}</h3>
                                 </div>
                                 <svg 
                                    className={`w-5 h-5 shrink-0 transform transition-transform duration-300 ${expandedIndices.includes(idx) ? 'rotate-180' : ''}`} 
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                 >
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                 </svg>
                            </div>
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out w-full text-left ${expandedIndices.includes(idx) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                             <div className="overflow-hidden">
                                <p className="text-sm font-nunito font-medium leading-[1.3] pt-3">
                                    {ingredient.description}
                                </p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-8 md:mt-12 max-w-[580px] mx-auto">
             <img 
                 src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_3.png?v=1760697982" 
                 alt="The Synergistic Effect"
                 className="w-full h-auto md:hidden"
             />
             <img 
                 src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982" 
                 alt="The Synergistic Effect"
                 className="w-full h-auto hidden md:block"
             />
        </div>

      </div>
     </div>
    </section>
  );
};

export default IngredientsSection;
