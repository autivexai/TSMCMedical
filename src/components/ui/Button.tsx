import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

interface ButtonLinkProps extends ButtonBaseProps {
  to: string;
  href?: never;
  type?: never;
  onClick?: () => void;
}

interface ButtonAnchorProps extends ButtonBaseProps {
  href: string;
  to?: never;
  type?: never;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

interface ButtonNormalProps extends ButtonBaseProps {
  type?: 'button' | 'submit' | 'reset';
  to?: never;
  href?: never;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  'aria-busy'?: boolean;
}

type ButtonProps = ButtonLinkProps | ButtonAnchorProps | ButtonNormalProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  to,
  href,
  type = 'button',
  onClick,
  ...rest
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 shadow-sm hover:shadow active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
    secondary: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-brand-500 shadow-sm active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-sm hover:shadow active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
    ghost: 'text-brand-600 hover:bg-brand-50 focus:ring-brand-500 active:bg-brand-100 disabled:opacity-50 disabled:pointer-events-none',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm min-h-[38px]',
    md: 'px-5 py-2.5 text-base min-h-[44px]',
    lg: 'px-8 py-3.5 text-lg min-h-[50px]',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} onClick={onClick} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} onClick={onClick} {...(rest as any)}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedStyles} onClick={onClick as any} {...(rest as any)}>
      {children}
    </button>
  );
};

export default Button;
