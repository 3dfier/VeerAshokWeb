import React from 'react';

interface SectionHeaderProps {
  subheading: string;
  heading: string;
  dark?: boolean;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ subheading, heading, dark = false, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">{subheading}</span>
    <h2 className={`text-3xl md:text-4xl font-extrabold ${dark ? 'text-white' : 'text-navy'}`}>{heading}</h2>
  </div>
);

interface PrimaryButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, href, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "px-8 py-4 rounded font-bold transition-all transform hover:scale-105 inline-block text-center";
  const variants = {
    primary: "bg-primary hover:bg-orange-700 text-white shadow-lg shadow-primary/20",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={combinedStyles}>{title}</a>;
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {title}
    </button>
  );
};
