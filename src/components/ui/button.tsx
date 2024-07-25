// src/components/ui/button.tsx
import React from "react";

export type ButtonProps = {
  variant: "link" | "primary" | "secondary";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const baseClasses = "px-4 py-2 rounded transition-colors duration-200";
  const variantClasses = {
    link: " px-4 py-2 rounded transition-colors duration-200 text-stone-400 hover:text-slate-700 focus:text-slate-700 focus:underline focus:underline-offset-[14px] active:underline active:underline-offset-[14px]	",
    primary:
      " px-4 py-2 rounded transition-colors duration-200 text-stone-400 hover:text-slate-700 focus:text-slate-700 focus:underline focus:underline-offset-[14px] active:underline active:underline-offset-[14px]	",
    secondary:
      " px-4 py-2 rounded transition-colors duration-200 text-stone-400 hover:text-slate-700 focus:text-slate-700 focus:underline focus:underline-offset-[14px] active:underline active:underline-offset-[14px]	",
  };

  const classNames = `${baseClasses} ${variantClasses[variant]}`;

  return <button className={classNames}>{children}</button>;
};

export default Button;
