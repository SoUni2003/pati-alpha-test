import { useState } from "react";

const INGREDIENTS = [
  {
    name: "Cleavers Extract",
    dosage: "100mg",
    benefit: "Reactivate Lymphatic Pumps",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
    description: "Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that \"wake up\" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance. [Study: Enhanced NK cell activity in immunosuppressed models]",
  },
  {
    name: "Dandelion Extract",
    dosage: "250mg",
    benefit: "Flush Excess Fluid",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
    description: "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001). [Study: First human pilot study on diuretic effects]",
  },
  {
    name: "Bromelain Powder",
    dosage: "100mg",
    benefit: "Break Down Protein Clogs",
    image: "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909", 
    description: "Enzymatically breaks down the protein complexes that clog lymphatic vessels, allowing fluid to flow freely again. Acts as a biologicalèa pipe cleaner for your lymphatic system.",
  },
  {
    name: "Rutin",
    dosage: "100mg",
    benefit: "Strengthen Vessel Walls",
    image: "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909", 
    description: "A powerful bioflavonoid that reinforces the structural integrity of lymphatic capillaries, reducing permeability and preventing fluid from leaking back into tissues.",
  },
  {
    name: "Burdock Root Powder",
    dosage: "200mg",
    benefit: "Reduce Inflammation",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
    description: "Potent anti-inflammatory that calms swollen tissues, reducing pressure on lymphatic vessels and facilitating easier drainage.",
  },
  {
    name: "Echinacea Purpurea Extract",
    dosage: "500mg",
    benefit: "Boost Immune Clearance",
    image: "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909", 
    description: "Enhances macrophage activity to engulf and clear cellular waste products and toxins that stagnate in a sluggish lymphatic system.",
  },
  {
    name: "Kelp Extract",
    dosage: "30mg",
    benefit: "Support Metabolism",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
    description: "Rich in iodine to support thyroid function and metabolic rate, ensuring your body has the energy required to drive lymphatic circulation.",
  },
  {
    name: "Lemon Powder",
    dosage: "50mg",
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
    <section className="bg-[#f3eee0] py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-[1300px] px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-tight text-sculptique-text mb-6">
                <span className="text-sculptique-green">The 8-Ingredient System</span> That Restores What Hormones Once Maintained
            </h2>
            <p className="font-sans text-base sm:text-lg text-sculptique-text leading-relaxed max-w-3xl mx-auto">
                Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research.
                <br className="hidden md:block"/>
                Not just moving fluid temporarily. Not just reducing inflammation. <span className="font-bold">Complete restoration.</span>
            </p>
        </div>

        {/* Ingredients Grid */}
        <div className="bg-black border border-black rounded-lg sm:rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
                {INGREDIENTS.map((ingredient, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white p-6 md:p-8 flex flex-col items-center text-center h-full cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleAccordion(idx)}
                    >
                        {/* Benefit + Checkmark */}
                        <div className="flex items-center gap-2 mb-4 w-full justify-center">
                            <svg className="w-4 h-4 text-sculptique-green flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M13.4854 4.09348C13.7915 4.36555 13.8207 4.83592 13.551 5.14476L7.40816 12.1804C7.12909 12.5 6.6432 12.5323 6.32356 12.2532L2.44856 8.8682C2.15839 8.61476 2.12921 8.1746 2.38265 7.88443C2.63609 7.59427 3.07625 7.56509 3.36642 7.81853L6.72659 10.7533L12.4341 4.15908C12.7038 3.85024 13.1793 3.8214 13.4854 4.09348Z" />
                            </svg>
                            <span className="text-[13px] font-bold text-sculptique-green uppercase tracking-wide leading-none">{ingredient.benefit}</span>
                        </div>

                        {/* Image */}
                        <div className="w-full h-32 md:h-36 mb-4 flex items-center justify-center">
                             <img src={ingredient.image} alt={ingredient.name} className="w-auto h-full max-h-full object-contain" />
                        </div>

                        {/* Name + Dosage + Chevron */}
                        <div className="w-full flex items-center justify-between pt-2">
                             <div className="text-left">
                                 <h3 className="font-serif text-lg text-sculptique-text leading-tight">{ingredient.name}</h3>
                                 <p className="font-sans text-sm text-gray-500">({ingredient.dosage})</p>
                             </div>
                             <svg 
                                className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${expandedIndices.includes(idx) ? 'rotate-180' : ''}`} 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             >
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                             </svg>
                        </div>

                        {/* Expanded Content */}
                        <div className={`grid transition-all duration-500 ease-in-out w-full text-left ${expandedIndices.includes(idx) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                             <div className="overflow-hidden">
                                <p className="text-[13px] leading-relaxed text-gray-700 pt-4">
                                    {ingredient.description}
                                </p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Synergistic Effect Section */}
        <div className="mt-8 md:mt-12 max-w-[800px] mx-auto">
             <img 
                 src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982" 
                 alt="The Synergistic Effect"
                 className="w-full h-auto"
             />
        </div>

      </div>
    </section>
  );
};

export default IngredientsSection;
