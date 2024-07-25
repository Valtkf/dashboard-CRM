// src/components/ui/ButtonLink.tsx
import React from "react";
import Button, { ButtonProps } from "@/components/ui/button";

interface ButtonLinkProps extends Partial<ButtonProps> {}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = "link", // Valeur par défaut pour variant
  children = "Link", // Valeur par défaut pour children
}) => {
  return <Button variant={variant}>{children}</Button>;
};

export default ButtonLink;
