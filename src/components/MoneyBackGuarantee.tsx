import React from 'react';

interface MoneyBackGuaranteeProps {
  bold?: boolean;
}

const MoneyBackGuarantee: React.FC<MoneyBackGuaranteeProps> = ({ bold = false }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
        alt="60-day guarantee icon"
        className="h-8 w-8 object-contain"
        loading="lazy"
      />
      <span className={`text-base font-nunito text-sculptique-text ${bold ? 'font-bold' : 'font-medium'}`}>60-Day Money-Back Guarantee</span>
    </div>
  );
};

export default MoneyBackGuarantee;
