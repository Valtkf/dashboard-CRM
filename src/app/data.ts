export const object = [
  { title: "Product Design : Payment", href: "" },
  { title: "App Redesign : Onboard", href: "" },
  { title: "Pitch Deck B2B", href: "" },
  { title: "Mobil App, UX Audit", href: "" },
  { title: "Splash Screen Illustrator", href: "" },
  { title: "Features Add", href: "" },
  { title: "Brand Guidelines", href: "" },
  { title: "Landing page", href: "" },
];

export const company = [
  { title: "Amazon", href: "" },
  { title: "Adobe LLC.", href: "" },
];

export const statue = [
  { title: "Pending", href: "" },
  { title: "Cancelled", href: "" },
  { title: "Ongoing", href: "" },
  { title: "Waiting for Confirmation", href: "" },
  { title: "Completed", href: "" },
];

// data of DataTable

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];
