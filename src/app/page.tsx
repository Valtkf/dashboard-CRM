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
            <NavigationMenuItem className="relative mt-4">
              <NavigationMenuTrigger className="border-[1px] border-stone-400 px-4 py-2">
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
              <NavigationMenuTrigger className="border-[1px] border-stone-400 px-4 py-2">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full mt-2 w-full bg-white border border-stone-300 rounded shadow-lg">
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
          </NavigationMenu>
        </div>
      </div>
    </main>
  );
}
