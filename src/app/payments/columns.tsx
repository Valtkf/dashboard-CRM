"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/button";
import DefaultLogo from "@/assets/logo/DefaultLogo";
import Image from "next/image";

export type Deal = {
  id: number;
  date: string;
  object: string;
  company: string;
  companyIcon: string;
  status:
    | "Pending"
    | "Cancelled"
    | "Ongoing"
    | "Waiting for Confirmation"
    | "Completed";
  amount: string;
};

// Fonction pour créer des colonnes dynamiquement
export const columns: ColumnDef<Deal, unknown>[] = [
  {
    id: "select-col",
    accessorKey: "date",
    header: ({ table }) => (
      <div className="flex items gap-1 items-center">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onChange={() => table.toggleAllRowsSelected()}
        />
        <span className="ml-1">Add</span>
        <ArrowDown className="ml-1 inline-flex size-4" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center">
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={() => row.toggleSelected()}
        />
        <span className="ml-2">{row.original.date}</span>
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
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Image
          src={row.original.companyIcon}
          alt={row.original.company}
          width={28}
          height={28}
          className="rounded-full"
        />
        <span className="ml-2">{row.original.company}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusColor = {
        Pending: "bg-yellow-500",
        Cancelled: "bg-red-500",
        Ongoing: "bg-green-500",
        "Waiting for Confirmation": "bg-purple-500",
        Completed: "bg-blue-500",
      }[row.original.status];

      return (
        <div className="flex items-center gap-2">
          <div className={`rounded-full w-1 h-1 ${statusColor}`}></div>
          <span>{row.original.status}</span>
        </div>
      );
    },
    filterFn: "equalsString",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  //   handleAddChange: (id: string, value: boolean) => void
  // ): ColumnDef<Payment>[] {
  //   return [
  //     {
  //       id: "select",
  //       header: ({ table }) => (
  //         <div className="hidden lg:flex gap-[12px] lg:px-[24px] py-[12px]">
  //           <Checkbox
  //             checked={
  //               table.getIsAllPageRowsSelected() ||
  //               (table.getIsSomePageRowsSelected() && "indeterminate")
  //             }
  //             onCheckedChange={(value) =>
  //               table.toggleAllPageRowsSelected(!!value)
  //             }
  //             aria-label="Select all"
  //           />
  //         </div>
  //       ),
  //       cell: ({ row }) => (
  //         <div className="hidden lg:flex gap-[12px] lg:px-[24px] py-[12px]">
  //           <Checkbox
  //             checked={row.getIsSelected()}
  //             onCheckedChange={(value) => {
  //               row.toggleSelected(!!value);
  //               handleAddChange(row.original.id, !!value);
  //             }}
  //             aria-label="Select row"
  //           />
  //         </div>
  //       ),
  //       enableSorting: false,
  //       enableHiding: false,
  //     },
  //     {
  //       accessorKey: "add",
  //       header: ({ column }) => (
  //         <Button
  //           variant="primary"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //           className="hidden xl:flex text-[#344054] font-medium text-[12px] leading-[18px] gap-[12px] lg:px-[24px] py-[12px] items-center"
  //         >
  //           Add
  //           <ArrowDown className="h-4 w-4" />
  //         </Button>
  //       ),
  //       cell: ({ row }) => {
  //         const date = row.original.add;
  //         const formattedDate = date.toLocaleDateString("en-EN", {
  //           month: "short",
  //           year: "2-digit",
  //         });
  //         return (
  //           <div className="hidden xl:flex text-[#344054] font-medium text-[14px] gap-[12px] lg:px-[24px] py-[12px] items-center">
  //             <span>{`${formattedDate.split(" ")[0]}. ${
  //               formattedDate.split(" ")[1]
  //             }`}</span>
  //           </div>
  //         );
  //       },
  //     },
  //     {
  //       accessorKey: "object",
  //       header: () => (
  //         <div className="hidden md:flex lg:px-[24px] py-[12px]">Object</div>
  //       ),
  //       cell: ({ row }) => {
  //         const object = row.original.object;
  //         return (
  //           <div className="hidden md:flex text-[#344054] font-medium text-[12px] leading-[18px] gap-[12px] lg:px-[24px] py-[12px] items-center">
  //             <span>{object}</span>
  //           </div>
  //         );
  //       },
  //     },
  //     {
  //       accessorKey: "company",
  //       header: () => (
  //         <div className="font-medium text-[12px] leading-[18px] lg:px-[24px] py-[12px]">
  //           Company
  //         </div>
  //       ),
  //       cell: ({ row }) => {
  //         const companyName = row.original.company;
  //         console.log(`Fetching logo for: ${companyName}`);
  //         const CompanyLogo = getCompanyLogo(companyName);

  //         return (
  //           <div className="flex text-[#344054] font-medium text-[14px] gap-[12px] lg:px-[24px] py-[12px] items-center">
  //             {CompanyLogo && <CompanyLogo />} <span>{companyName}</span>
  //           </div>
  //         );
  //       },
  //     },
  //     {
  //       accessorKey: "statue",
  //       header: () => (
  //         <div className="font-medium text-[12px] leading-[18px] lg:px-[24px] py-[12px]">
  //           Statue
  //         </div>
  //       ),
  //       cell: ({ row }) => {
  //         const statue: Statue = row.original.status;

  //         let colorClass = "";
  //         let statueFormatted = "";
  //         switch (statue) {
  //           case Statue.Pending:
  //             colorClass = "bg-[#ECB30A]";
  //             statueFormatted = "Pending";
  //             break;
  //           case Statue.Cancelled:
  //             colorClass = "bg-[#EC0A0A]";
  //             statueFormatted = "Cancelled";
  //             break;
  //           case Statue.Ongoing:
  //             colorClass = "bg-[#2AD730]";
  //             statueFormatted = "Ongoing";
  //             break;
  //           case Statue.Waiting:
  //             colorClass = "bg-[#960AEC]";
  //             statueFormatted = "Waiting for confirmation";
  //             break;
  //           default:
  //             colorClass = "bg-[#0085FF]";
  //             statueFormatted = "Completed";
  //         }

  //         return (
  //           <div className="flex text-[#344054] font-medium text-[14px] gap-[12px] lg:px-[24px] py-[12px] items-center">
  //             <span
  //               className={cn(colorClass, "h-[6px] rounded-full w-[6px]")}
  //             ></span>
  //             <span>{statueFormatted}</span>
  //           </div>
  //         );
  //       },
  //     },
  //     {
  //       accessorKey: "amount",
  //       header: () => (
  //         <div className="font-medium text-[12px] leading-[18px] lg:px-[24px] py-[12px]">
  //           Amount
  //         </div>
  //       ),
  //       cell: ({ row }) => {
  //         const amount = parseFloat(row.getValue("amount"));
  //         function addThousandsSeparator(amount: number) {
  //           // Convertir le montant en chaîne de caractères
  //           const amountStr = amount.toString();

  //           // Vérifier si le montant contient plus de trois chiffres
  //           if (amountStr.length > 3) {
  //             // Séparer les chiffres avant et après le point
  //             const beforePoint = amountStr.slice(0, -3);
  //             const afterPoint = amountStr.slice(-3);

  //             // Ajouter le point et concaténer les chiffres
  //             return beforePoint + "." + afterPoint;
  //           } else {
  //             return amountStr;
  //           }
  //         }

  //         const formattedAmount = addThousandsSeparator(amount);
  //         const formatted = formattedAmount + " $USD";

  //         return (
  //           <div className="lg:px-[24px] py-[12px] text-[#344054] font-medium">
  //             {formatted}
  //           </div>
  //         );
  //       },
  //     },
  //   ];
  // }
];
