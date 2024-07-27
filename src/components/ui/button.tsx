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
  const baseClasses = "px-4 py-2 rounded transition-colors duration-200";
  const variantClasses = {
    link: "text-stone-400 hover:text-slate-700 focus:text-slate-700 focus:underline focus:underline-offset-[14px] active:underline active:underline-offset-[14px]",
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:bg-gray-600",
  };

  const classNames = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
