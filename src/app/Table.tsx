import { columns } from "./payments/columns";
import { deals } from "./payments/data";
import { DataTable } from "./payments/data-table";

const Table = () => {
  return (
    <main className="flex-1 flex flex-col rounded-tl-[20px] rounded-bl-[20px] p-6 border-border-[#DEDEE8] bg-white text-[#344054] min-h-full">
      <header className="mb-6 gap-3 flex flex-col">
        <h2 className="text-4xl font-semibold">Deals</h2>
      </header>
      <section className="flex-1 flex">
        <DataTable columns={columns} data={deals} />
      </section>
    </main>
  );
};

export default Table;
