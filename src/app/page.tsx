import ListItem from "@/components/ui/ListItem";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
import Button from "@/components/ui/button";
import {
  NavigationMenuItem,
  NavigationMenu,
} from "@radix-ui/react-navigation-menu";

const object = [
  {
    title: "Product Design : Payment",
    href: "",
  },
  {
    title: "App Redesign : Onboard",
    href: "",
  },
  {
    title: "Pitch Deck B2B",
    href: "",
  },
  {
    title: "Mobil App, UX Audit",
    href: "",
  },
  {
    title: "Splash Screen Illustrator",
    href: "",
  },
  {
    title: "Features Add",
    href: "",
  },
  {
    title: "Brand Guidelines",
    href: "",
  },
  {
    title: "Landing page",
    href: "",
  },
];

const company = [
  {
    title: "Amazon",
    href: "",
  },
  {
    title: "Adobe LLC.",
    href: "",
  },
];
const statue = [
  {
    title: "Pending",
    href: "",
  },
  {
    title: "Cancelled",
    href: "",
  },
  {
    title: "Ongoing",
    href: "",
  },
  {
    title: "Waiting for Confirmation",
    href: "",
  },
  {
    title: "Completed",
    href: "",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100 shadow-inner pr-4 pb-4">
      <div className="flex justify-start border-2 border-blue-500 w-1/3 h-screen mt-8"></div>
      <div className="border-[1px] border-stone-400 bg-white rounded-2xl h-screen w-2/3 mt-8">
        <div className="border-2 border-red-500 h-[151px] mt-8 mr-10 ml-10">
          <h1 className="font-inter font-medium text-4xl text-slate-700">
            Deals
          </h1>
          <div className="flex gap-4 mt-4 text-sm text-stone-400 border-b-[1px] border-stone-400">
            <Button variant="primary">All Deals</Button>
            <Button variant="secondary">Completed</Button>
            <Button variant="secondary">Pending</Button>
            <Button variant="secondary">Ongoing</Button>
            <Button variant="link">Waiting for Confirmation</Button>
          </div>

          <NavigationMenu className="relative flex justify-start gap-4 list-none">
            <form className="">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-8 mt-4 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            <NavigationMenuItem className="relative mt-4">
              <NavigationMenuTrigger className="h-8 border-[1px] border-stone-400 px-4 py-2 text-slate-700">
                Object
              </NavigationMenuTrigger>
              <NavigationMenuContent className=" absolute left-0 top-full mt-2 w-full bg-white border border-stone-300 rounded shadow-lg">
                <ul className="w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] list-none">
                  {object.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative mt-4">
              <NavigationMenuTrigger className="h-8 border-[1px] border-stone-400 px-4 py-2 text-slate-700">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className=" absolute left-0 top-full mt-2 w-full bg-white border border-stone-300 rounded shadow-lg">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px] list-none">
                  {company.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative mt-4">
              <NavigationMenuTrigger className="h-8 border-[1px] border-stone-400 px-4 py-2 text-slate-700">
                Statue
              </NavigationMenuTrigger>
              <NavigationMenuContent className=" absolute left-0 top-full mt-2 w-full bg-white border border-stone-300 rounded shadow-lg">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px] list-none">
                  {statue.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </div>
    </main>
  );
}
