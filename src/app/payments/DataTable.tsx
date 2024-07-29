// columnsConfig.ts
import { ColumnDef } from "@tanstack/react-table";
import { companies } from "./data";
import { Deal } from "./data";

export const columns: ColumnDef<Deal, any>[] = [
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      const company = companies.find((c) => c.name === row.original.company);
      return (
        <div className="flex items-center space-x-2">
          {company?.logo && <company.logo />}
          <span>{company?.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "object",
    header: "Object",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "statue",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
