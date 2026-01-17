import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-sculptique-yellow py-12">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 flex items-center justify-center">
              <img 
                src="https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222" 
                alt="Free Shipping" 
                width={40} 
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 leading-tight">Free Shipping from USA</h3>
            <p className="text-gray-700 text-sm">On all orders</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
             <div className="mb-4 h-12 flex items-center justify-center">
              <img 
                src="https://trysculptique.com/cdn/shop/files/support-min.png?v=1758713216" 
                alt="Naturally Supports Your Body" 
                width={40} 
                height={40}
                className="w-10 h-10 object-contain"
              />
             </div>
             <h3 className="font-semibold text-lg mb-2 leading-tight">Naturally Supports Your Body</h3>
             <p className="text-gray-700 text-sm">Promotes healthy immune cell functions</p>
          </div>

           {/* Feature 3 */}
           <div className="flex flex-col items-center text-center">
             <div className="mb-4 h-12 flex items-center justify-center">
              <img 
                src="https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216" 
                alt="100% Natural Ingredients" 
                width={40} 
                height={40}
                className="w-10 h-10 object-contain"
              />
             </div>
             <h3 className="font-semibold text-lg mb-2 leading-tight">100% Natural Ingredients</h3>
             <p className="text-gray-700 text-sm">8 active, natural ingredients</p>
           </div>


          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 flex items-center justify-center">
              <img 
                src="https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216" 
                alt="Try it Risk Free for 60 Days" 
                width={40} 
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 leading-tight">Try it Risk Free for 60 Days</h3>
            <p className="text-gray-700 text-sm">60-day money-back guarantee</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
