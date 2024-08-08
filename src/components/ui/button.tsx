// src/components/ui/button.tsx
import React from "react";

// Définir les variantes disponibles pour le bouton
export type ButtonVariant = "link" | "primary" | "secondary";

// Étendre ButtonProps pour inclure toutes les propriétés HTML d'un bouton
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

// Composant bouton
const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  const baseClasses = "px-4 py-2 transition-colors duration-200";
  const variantClasses = {
    link: "text-stone-400 hover:text-slate-700 focus:text-black focus:underline focus:underline-offset-[14px] active:underline active:underline-offset-[14px]",
    primary:
      "text-stone-400 hover:text-slate-700 focus:text-black focus:underline focus:underline-offset-[14px] active:underline active:underline-offset-[14px]",
    secondary:
      "text-stone-400 hover:text-slate-700 focus:text-black focus:underline focus:underline-offset-[14px] active:underline active:underline-offset-[14px]",
  };

  const classNames = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
