const FeaturesSection = () => {
  const features = [
    {
      imgSrc: "https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
      alt: "Free Shipping",
      title: "Free Shipping from USA",
      description: "On all orders"
    },
    {
      imgSrc: "https://trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
      alt: "Naturally Supports Your Body",
      title: "Naturally Supports Your Body",
      description: "Promotes healthy immune cell functions"
    },
    {
      imgSrc: "https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
      alt: "100% Natural Ingredients",
      title: "100% Natural Ingredients",
      description: "8 active, natural ingredients"
    },
    {
      imgSrc: "https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
      alt: "Try it Risk Free for 60 Days",
      title: "Try it Risk Free for 60 Days",
      description: "60-day money-back guarantee"
    }
  ];

  return (
    <section className="bg-sculptique-yellow py-8">
      <div className="container mx-auto px-4 max-w-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-4 lg:gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2 h-12 flex items-center justify-center">
                <img 
                  src={feature.imgSrc} 
                  alt={feature.alt} 
                  width={40} 
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-semibold font-nunito text-base mb-2 leading-[1.3rem]">{feature.title}</h3>
              <p className="font-nunito font-medium text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
