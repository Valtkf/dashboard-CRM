// src/pages/index.tsx
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100 shadow-inner pr-4 pb-4">
      <div className="flex justify-start border-2 border-blue-500 w-1/3 h-screen mt-8 "></div>
      <div className="border-[1px] border-stone-400 bg-white rounded-2xl h-screen w-2/3 mt-8">
        <div className="border-2 border-red-500 h-[151px] mt-8 mr-10 ml-10">
          <h1 className="font-inter font-medium text-4xl text-slate-700">
            Deals
          </h1>
          <div className="flex gap-4 mt-4 hover:underline-offset-1">
            <Button variant="primary">All Deals</Button>
            <Button variant="secondary">Completed</Button>
            <Button variant="secondary">Pending</Button>
            <Button variant="secondary">Ongoing</Button>
            <Button variant="link">Waiting for Confirmation</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
