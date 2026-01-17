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
    image: "https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799",
  },
  {
    title: "You wake up stiff and achy, like your body aged overnight.",
    image: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
  },
];

const ROOT_CAUSES = [
  {
    symptom: "Bloating & puffiness",
    cause: "3-4 liters of lymphatic fluid backing up in tissues daily",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    symptom: "Swollen legs",
    cause: "Gravity pulling backed-up lymph into lower extremities",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    symptom: "Cellulite appearance",
    cause: "Fluid and toxins trapped between fat cells, creating dimpling",
    icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    )
  },
  {
    symptom: "Brain fog & exhaustion",
    cause: "Glymphatic system can't clear metabolic waste from brain",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    )
  },
  {
    symptom: "Morning stiffness",
    cause: "Overnight lymph accumulation in joints and tissues",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  }
];

const SymptomsSection = () => {
  return (
    <section className="bg-[#FFFFF0] py-10 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Why Your <span className="text-sculptique-green">Bloating, Brain Fog & Swollen Legs</span> Are Actually Connected
          </h2>
          <p className="mt-6 text-base leading-relaxed text-sculptique-muted sm:text-lg">
            If you're experiencing more than one of these symptoms, your body is trying to tell you something:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-4 lg:gap-6 items-stretch">
          {SYMPTOMS.map((symptom, idx) => (
            <div key={idx} className="flex flex-row sm:flex-col items-center sm:items-stretch gap-4 p-4 sm:p-0 bg-white sm:bg-transparent rounded-xl sm:rounded-none shadow-sm sm:shadow-none">
              <div className="w-24 h-24 sm:w-full sm:h-48 lg:h-56 shrink-0 overflow-hidden rounded-lg sm:rounded-xl bg-sculptique-cream">
                <img
                  src={symptom.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1 text-left sm:text-center sm:bg-[#FAFAFA] sm:rounded-xl sm:px-4 sm:py-6 flex items-start sm:items-center justify-center">
                <p className="text-sm sm:text-base font-medium leading-normal text-sculptique-text text-pretty">
                  {symptom.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-8 sm:mt-12 max-w-page mx-auto">
             <div className="hidden sm:block w-full px-4 mb-[-20px] relative z-20 pointer-events-none">
                 <img 
                    src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771" 
                    alt="" 
                    className="w-full h-auto"
                 />
            </div>

           
            <div className="flex justify-center mt-8">
                 <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
        </div>


        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
             <div className="text-center mb-10">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-sculptique-text">
                  The Connection <span className="text-sculptique-green">You've Been Missing</span>
                </h2>
             </div>

             <div className="border border-sculptique-green rounded-2xl overflow-hidden bg-[#f9f8f4]">
                 <div className="hidden sm:grid grid-cols-[35%_65%] border-b border-gray-200 bg-[#f4f1e8] px-8 py-4">
                     <div className="font-serif text-xl text-sculptique-text">Your Symptom</div>
                     <div className="font-serif text-xl text-sculptique-text">The Real Cause</div>
                 </div>

                 {ROOT_CAUSES.map((item, idx) => (
                     <div key={idx} className={`flex flex-col sm:grid sm:grid-cols-[35%_65%] px-6 sm:px-8 py-5 sm:py-6 gap-4 sm:gap-0 border-b border-gray-100 last:border-0 items-center sm:items-center ${idx % 2 === 0 ? 'bg-opacity-50' : ''}`}>
                         <div className="flex items-center gap-3 w-full">
                             <div className="w-10 h-10 rounded-full bg-sculptique-green/10 flex items-center justify-center text-sculptique-green shrink-0">
                                 {item.icon}
                             </div>
                             <span className="font-semibold text-lg text-sculptique-text">{item.symptom}</span>
                         </div>
                         
                         <div className="text-base sm:text-lg text-sculptique-muted w-full pl-13 sm:pl-0 mt-2 sm:mt-0">
                            {item.cause}
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-32">
             <div className="text-center mb-12">
                 <svg className="w-8 h-8 text-black mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                 <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-sculptique-text">
                    Your <span className="text-sculptique-green">Hidden Drainage System</span>
                 </h2>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                 <div className="space-y-6">
                     <p className="text-lg text-sculptique-text leading-relaxed">
                        Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes <span className="font-bold">3-4 liters of cellular waste and excess fluid every single day.</span>
                     </p>
                     
                     <p className="text-lg text-sculptique-muted font-medium">
                        When it's working properly, you don't even know it exists.
                     </p>

                     <ul className="space-y-3">
                         {['Waste gets drained away', 'Fluid stays balanced.', 'Your body feels light and energized.'].map(txt => (
                             <li key={txt} className="flex items-center gap-3 text-sculptique-green font-semibold">
                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                 {txt}
                             </li>
                         ))}
                     </ul>

                     <div className="bg-[#ffecec] rounded-xl p-6 border-l-4 border-sculptique-accent">
                         <p className="text-lg font-medium text-black">
                            But after age 35, declining estrogen hijacks this system's ability to function.
                         </p>
                     </div>

                     <ul className="space-y-3 pt-2">
                         {['Vessel pumping weakens.', 'One-way valves fail.', 'Protein clogs form.', 'Vessel walls become leaky.'].map(txt => (
                             <li key={txt} className="flex items-center gap-3 text-sculptique-accent font-medium">
                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                 {txt}
                             </li>
                         ))}
                     </ul>

                     <p className="text-lg text-sculptique-text">
                        Instead of processing and removing waste, it backs up in your tissues.
                     </p>
                 </div>

                 <div className="relative">
                      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
                          <img 
                            src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546" 
                            alt="Lymphatic function chart vs Age" 
                            className="w-full h-auto"
                          />
                      </div>
                 </div>
             </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 lg:mt-20">
             <div className="relative order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white">
                      <img 
                        src="https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096" 
                        alt="Lymphatic fluid buildup illustration" 
                        className="w-full h-auto"
                      />
                  </div>
             </div>

             <div className="space-y-6 order-1 lg:order-2">
                 <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sculptique-text">
                    And it accumulates. Day after day. Week after week.
                 </h3>
                 
                 <p className="text-lg text-sculptique-text leading-relaxed">
                    That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your legs, your face—anywhere gravity and tissue structure allow it to settle.
                 </p>

                 <div className="bg-[#ffecec] rounded-xl p-6 border-l-4 border-sculptique-accent space-y-4">
                     <p className="text-base sm:text-lg font-medium text-black">
                        The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While you're trying to fall asleep.
                     </p>
                     
                     <ul className="space-y-2">
                         {[
                             "That's why you're bloated.",
                             "That's why your ankles swell.",
                             "That's why you see cellulite.",
                             "That's why you feel exhausted and foggy."
                         ].map((txt) => (
                             <li key={txt} className="flex items-center gap-3 text-sculptique-accent font-semibold">
                                 <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                 {txt}
                             </li>
                         ))}
                     </ul>
                 </div>

                 <p className="text-lg font-bold text-sculptique-text">
                    Your cells are literally sitting in their own waste—and your body can't flush it out.
                 </p>
                 
                 <p className="text-lg text-sculptique-muted">
                    The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an already compromised system.
                 </p>
             </div>
        </div>

      </div>
    </section>
  );
};

export default SymptomsSection;
