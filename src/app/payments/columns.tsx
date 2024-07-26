import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  amount: number;
  statue: "pending" | "processing" | "success" | "failed";
  company: string;
  object: string;
  add: boolean;
  date: string;
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const createColumns = (
  handleAddChange: (id: string, value: boolean) => void
): ColumnDef<Payment>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => {
          console.log("Select all:", value);
          table.toggleAllPageRowsSelected(!!value);
        }}
        aria-label="Select all"
        className="flex justify-center border-[1px] rounded-sm border-slate-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 w-4 h-4"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          console.log("Select all:", value);
          row.toggleSelected(!!value);
        }}
        id="default-checkbox"
        aria-label="Select row"
        className="flex justify-center border-[1px] rounded-sm border-slate-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 w-4 h-4"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "add",
    header: "Add",
    cell: ({ row }) => (
      <div className="flex items-center ">
        <Checkbox
          checked={row.getValue("add")}
          onCheckedChange={(value) =>
            handleAddChange(row.original.id, value === true)
          }
          aria-label="Add row"
        />
        <span className="">{row.original.date}</span>
      </div>
    ),
  },
  {
    accessorKey: "object",
    header: "Object",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "statue",
    header: "Statue",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <span>{formatCurrency(row.getValue("amount"))}</span>,
  },
];
