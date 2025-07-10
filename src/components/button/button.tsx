import React from 'react';
import styles from './button.module.sass';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
}) => {
  return (
    <button
      className={`${styles.button} ${className} button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
