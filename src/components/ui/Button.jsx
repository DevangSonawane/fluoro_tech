import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Magnetic from './Magnetic';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className, 
  icon: Icon,
  ...rest
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full overflow-hidden transition-all duration-300 group";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
    secondary: "bg-white text-blue-600 hover:bg-slate-50 shadow-md",
    outline: "border-2 border-white text-white hover:bg-white/10",
    dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </span>
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
    </>
  );

  const Component = to ? Link : motion.button;
  const motionProps = to ? { to } : { onClick, whileTap: { scale: 0.98 } };

  return (
    <Magnetic>
      <Component
        {...motionProps}
        {...rest}
        className={twMerge(baseStyles, variants[variant], className)}
      >
        {content}
      </Component>
    </Magnetic>
  );
};

export default Button;
