const SYMPTOMS = [
  {
    title: "Your stomach is flat in the morning, but by evening you look six months pregnant.",
    image: "https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800",
  },
  {
    title: "Your ankles disappear into 'kankles' by the end of the day.",
    image: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799",
  },
  {
    title: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
    image: "https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801",
  },
  {
    title: "You feel foggy and exhausted even after a full night's sleep.",
    image: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
  },
  {
    title: "You wake up stiff and achy, like your body aged overnight.",
    image: "https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771",
  },
];

const SymptomsSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          Why Your Bloating, Brain Fog & Swollen Legs Are Actually Connected
        </h2>

        <p className="mt-6 text-base leading-7 text-sculptique-muted sm:text-lg">
          If you're experiencing more than one of these symptoms, your body is trying to tell you something:
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {SYMPTOMS.map((symptom, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="h-48 w-full overflow-hidden rounded-2xl bg-sculptique-cream sm:h-56 lg:h-64">
                <img
                  src={symptom.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-base font-medium text-sculptique-text sm:text-lg">
                {symptom.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
