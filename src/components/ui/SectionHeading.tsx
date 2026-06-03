import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  centered = false,
  action,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${
        centered ? 'text-center md:text-center md:items-center' : ''
      } ${className}`}
    >
      <div className={`max-w-3xl ${centered ? 'mx-auto' : ''}`}>
        {subtitle && (
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest block mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-lg text-gray-500 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className={`flex-shrink-0 ${centered ? 'mt-2' : ''}`}>
          {action}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
