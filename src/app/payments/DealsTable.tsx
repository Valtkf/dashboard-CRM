import { useState, useEffect } from "react";
import { createColumns, Payment } from "./columns";
import { DataTable } from "./data-table";

interface DealsTableProps {
  deals: Payment[];
}

export const DealsTable = ({ deals }: DealsTableProps) => {
  const handleAddChange = (id: string, value: boolean) => {
    // Implémentez la fonction handleAddChange ici
  };

  // Créez les colonnes avec la fonction handleAddChange
  const columns = createColumns(handleAddChange);

  return <DataTable columns={columns} data={deals} />;
};
