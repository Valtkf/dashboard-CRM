import React from "react";
import DefaultLogo from "@/assets/logo/DefaultLogo"; // Assurez-vous d'importer le logo par défaut
import { companyLogos } from "@/utils/companyLogos"; // Importez le dictionnaire des logos

// Fonction pour obtenir le logo d'une entreprise
function getCompanyLogo(companyName: string): React.ComponentType {
  console.log(`Fetching logo for: ${companyName}`);
  const logo = companyLogos[companyName] || DefaultLogo;
  console.log(`Logo found: ${logo}`);
  return logo;
}
