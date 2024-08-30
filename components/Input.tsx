import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="block 
        rounded-xl 
        px-7
        pt-4 
        pb-1
        w-full 
        text-base 
        text-white
        bg-neutral-600 
        focus:outline-none 
        focus:right-0 
        peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute 
        text-base
        text-zinc-50 
        top-3
        z-10 
        left-7
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 
        peer-focus:-translate-y-2
        duration-150
        transform
        origin-[0]
        "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
