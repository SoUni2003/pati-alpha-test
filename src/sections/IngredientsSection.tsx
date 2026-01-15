const INGREDIENTS = [
  {
    name: "Cleavers Extract",
    dosage: "100mg",
    benefit: "Flush Excess Fluid",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
  },
  {
    name: "Dandelion Extract",
    dosage: "250mg",
    benefit: "Break Down Protein Clogs",
    image: "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
  },
  {
    name: "Bromelain Powder",
    dosage: "100mg",
    benefit: "Strengthen Vessel Walls",
    image: "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
  },
  {
    name: "Rutin",
    dosage: "100mg",
    benefit: "Reduce Inflammation",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
  },
  {
    name: "Burdock Root Powder",
    dosage: "200mg",
    benefit: "Boost Immune Clearance",
    image: "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
  },
  {
    name: "Echinacea Purpurea Extract",
    dosage: "500mg",
    benefit: "Support Metabolism",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
  },
  {
    name: "Kelp Extract",
    dosage: "30mg",
    benefit: "Antioxidant Protection",
    image: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
  },
];

const ARROW_ICON = "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626";
const CHECK_MARK = "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419";

const IngredientsSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          The 8-Ingredient System That Restores What Hormones Once Maintained
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-7 text-sculptique-muted sm:text-lg">
          Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research. Not just moving fluid temporarily. Not just reducing inflammation. Complete restoration.
        </p>

        <div className="mt-12 space-y-8">
          {INGREDIENTS.map((ingredient) => (
            <div
              key={ingredient.name}
              className="flex flex-col gap-6 border-b border-sculptique-cream pb-8 last:border-b-0 sm:flex-row sm:items-center lg:gap-10"
            >
              <div className="w-full sm:w-6/12">
                <h3 className="font-serif text-2xl font-semibold text-sculptique-text sm:text-2xl">
                  {ingredient.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-sculptique-muted sm:text-base">
                  {ingredient.dosage}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <img src={ARROW_ICON} alt="" className="h-5 w-5" loading="lazy" />
                  <span className="text-base font-medium text-sculptique-text">{ingredient.benefit}</span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <img src={CHECK_MARK} alt="" className="h-5 w-5" loading="lazy" />
                  <span className="text-sm text-sculptique-muted">{ingredient.benefit}</span>
                </div>
              </div>

              <div className="h-48 w-full overflow-hidden rounded-2xl bg-sculptique-cream sm:h-56 sm:w-6/12">
                <img
                  src={ingredient.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-sculptique-cream p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <img src={CHECK_MARK} alt="" className="mt-1 h-6 w-6 flex-shrink-0" loading="lazy" />
            <div>
              <h3 className="font-serif text-xl font-semibold text-sculptique-text sm:text-2xl">
                Reactivate Lymphatic Pumps
              </h3>
              <p className="mt-2 text-base leading-7 text-sculptique-muted sm:text-lg">
                Complete lymphatic restoration that works at the cellular level to restore what hormonal decline took away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
