import React from 'react';

interface MoneyBackGuaranteeProps {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
}

const MoneyBackGuarantee: React.FC<MoneyBackGuaranteeProps> = ({ 
  className = "flex items-center gap-2", 
  textClassName = "text-sm font-medium text-sculptique-text",
  iconClassName = "h-8 w-8 object-contain"
}) => {
  return (
    <div className={className}>
      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
        alt="60-day guarantee icon"
        className={iconClassName}
        loading="lazy"
      />
      <span className={textClassName}>60-Day Money-Back Guarantee</span>
    </div>
  );
};

export default MoneyBackGuarantee;
