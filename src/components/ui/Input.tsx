import React from 'react';
import { PiOrangeBold } from 'react-icons/pi';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelStyles?: string;
  inputStyles?: string;
  label?: string;
  id?: string;
};

const Input = ({
  labelStyles,
  inputStyles,
  label,
  id,
  ...props
}: InputProps) => {
  return (
    <div>
      {label && (
        <div>
          <label
            className="font-roboto p-1 text-[16px] font-normal leading-[16px] tracking-[0.01em]"
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      )}

      <input
        id={id}
        {...props}
        className="h-12 w-full rounded-xl border border-[#D4D7E3] bg-[#F7FBFF] px-4 py-2 text-regular leading-4 tracking-[0.01em] placeholder:text-[#8897AD] focus:outline-none focus:ring-2"
      />
    </div>
  );
};

export default Input;
