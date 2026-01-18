import React from 'react';

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const MainButton: React.FC<MainButtonProps> = ({ to, className = "", children, title, ...props }) => {
  const baseClasses = `bg-black text-white font-bold font-nunito py-4 px-4 lg:px-8 rounded-md text-base lg:text-lg hover:bg-gray-800 transition-colors w-full lg:w-auto lg:min-w-[460px] flex justify-center items-center text-center ${className}`;

  if (to) {
    return (
      <a href={to} className={baseClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {title || children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {title || children}
    </button>
  );
};

export default MainButton;
