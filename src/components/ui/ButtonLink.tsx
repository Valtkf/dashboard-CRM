// src/components/ui/ButtonLink.tsx
import React from "react";
import Button from "@/components/ui/button";

interface ButtonLinkProps {
  variant?: string; // Rendre variant optionnel
  children?: React.ReactNode; // Rendre children optionnel
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = "link", // Valeur par défaut pour variant
  children = "Link", // Valeur par défaut pour children
}) => {
  return <Button variant={variant}>{children}</Button>;
};

export default ButtonLink;
