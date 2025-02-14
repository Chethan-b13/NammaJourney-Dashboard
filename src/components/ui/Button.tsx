import { tree } from 'next/dist/build/templates/app-page';
import React from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  disabled?: boolean;
};

const Button = ({ className, disabled = false, ...props }: ButtonProps) => {
  return (
    <button {...props} disabled={disabled} className={`${className}`}></button>
  );
};

export default Button;
