"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  amount: number;
  statue: "pending" | "processing" | "success" | "failed";
  company: string;
  object: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "add",
    header: "Add",
  },
  {
    accessorKey: "object",
    header: "Object",
  },
  {
    accessorKey: "statue",
    header: "Statue",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
