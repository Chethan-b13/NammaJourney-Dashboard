import React from "react";

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full h-[72px]">
      <label
        className="font-roboto font-normal text-[16px] leading-[16px] tracking-[0.01em]"
        htmlFor={label}
      >
        {label}
      </label>

      <div className="relative w-full h-[48px]">
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="absolute inset-0 w-full h-full bg-[#F7FBFF] border border-[#D4D7E3] rounded-[12px] px-4 py-2 text-regular leading-[16px] tracking-[0.01em] placeholder:text-[#8897AD] focus:outline-none focus:ring-2"
        />
      </div>
    </div>
  );
};

export default InputField;
