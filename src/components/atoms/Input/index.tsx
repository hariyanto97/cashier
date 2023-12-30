import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-300 text-sm font-bold mb-2"
        htmlFor={props.htmlFor ?? props.label}
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};

export default Input;
