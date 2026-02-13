import React from 'react';
import { motion } from 'framer-motion';



const Button= ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold tracking-wide uppercase rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warmSandstone';

  const variantClasses = {
    primary: 'bg-warmSandstone text-charcoalNoir hover:bg-urbanTaupe shadow-lg',
    secondary: 'bg-onyx text-sand hover:bg-charcoal shadow-lg hover:shadow-glow',
    outline: 'border-2 border-warmSandstone text-warmSandstone hover:bg-warmSandstone hover:text-charcoalNoir',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;