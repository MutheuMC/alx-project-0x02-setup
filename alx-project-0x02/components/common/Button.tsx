import React from 'react';
import { type ButtonProps } from '@/interfaces'
// import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size = 'medium', shape = 'rounded-md', label, onClick }) => {
  // Define size classes
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
