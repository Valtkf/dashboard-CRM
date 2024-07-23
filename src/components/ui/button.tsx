// src/components/ui/button.tsx
import React from "react";

// Définir une interface pour les props du composant Button
interface ButtonProps {
  variant: string; // Par exemple: "link", "primary", "secondary"
  children: React.ReactNode; // Contenu du bouton
}

// Définir le composant Button
const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  // Définir les classes CSS en fonction de la variante
  const classNames = `btn ${variant}`; // Assurez-vous que `btn` est une classe de base et `variant` ajoute des classes spécifiques

  return <button className={classNames}>{children}</button>;
};

export default Button;
