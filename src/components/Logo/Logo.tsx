// src/components/Logo/Logo.tsx
import React from "react";
import {
  AdobeIcon,
  AmazonIcon,
  ArcIcon,
  FigmaIcon,
  GithubIcon,
  OpenSeaIcon,
  SlackIcon,
  SteamIcon,
  StripeIcon,
} from "@/assets/logo"; // Importez les icônes depuis index.ts

const icons = {
  adobe: <AdobeIcon />,
  amazon: <AmazonIcon />,
  arc: <ArcIcon />,
  figma: <FigmaIcon />,
  github: <GithubIcon />,
  opensea: <OpenSeaIcon />,
  slack: <SlackIcon />,
  steam: <SteamIcon />,
  stripe: <StripeIcon />,
};

type IconType = keyof typeof icons;

interface LogoProps {
  type: IconType; // Utiliser les types de clés valides de l'objet icons
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  return <div>{icons[type]}</div>;
};

export default Logo;
