import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100 shadow-inner pr-4 pb-4">
      <div className="flex justify-start border-2 border-blue-500 w-1/3 h-screen mt-8 "></div>
      <div className="border-[1px] border-stone-400 bg-white rounded-2xl h-screen w-2/3 mt-8"></div>
    </main>
  );
}
