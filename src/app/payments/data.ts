import { create } from "zustand";
import { StripeIcon } from "@/assets/logo/StripeIcon";
import { GithubIcon } from "@/assets/logo/GithubIcon";
import { AmazonIcon } from "@/assets/logo/AmazonIcon";
import { SteamIcon } from "@/assets/logo/SteamIcon";
import { AdobeIcon } from "@/assets/logo/AdobeIcon";
import { ArcIcon } from "@/assets/logo/ArcIcon";
import { FigmaIcon } from "@/assets/logo/FigmaIcon";
import { SlackIcon } from "@/assets/logo/SlackIcon";
import { OpenSeaIcon } from "@/assets/logo/OpenSeaIcon";

export enum Statue {
  Pending = "pending",
  Cancelled = "cancelled",
  Ongoing = "ongoing",
  Waiting = "waiting",
  Completed = "completed",
  Success = "success",
}

export const objects = [
  { id: 1, title: "Product Design : Payment" },
  { id: 2, title: "App Redesign : Onboard" },
  // Ajoutez d'autres objets si nécessaire
];

export const companies = [
  { id: 0, name: "Stripe Inc.", logo: StripeIcon },
  { id: 1, name: "Github Corp.", logo: GithubIcon },
  { id: 2, name: "Amazon", logo: AmazonIcon },
  { id: 3, name: "Steam", logo: SteamIcon },
  { id: 4, name: "Adobe LLC.", logo: AdobeIcon },
  { id: 5, name: "The Browser Company", logo: ArcIcon },
  { id: 6, name: "Figma", logo: FigmaIcon },
  { id: 7, name: "Slack Inc.", logo: SlackIcon },
  { id: 8, name: "Opensea", logo: OpenSeaIcon },
];

export interface Company {
  id: number;
  name: string;
  logo?: () => JSX.Element; // logo is optional
}

export interface Deal {
  id: string;
  add: Date;
  amount: number;
  object: string;
  statue: Statue;
  company: string;
  date?: string;
  selected?: boolean;
}

import { Payment } from "./columns";

// Helper function to get the object title based on an identifier
function getObjectTitle(identifier: string) {
  const foundObject = objects.find((obj) => obj.title.includes(identifier));
  return foundObject ? foundObject.title : "Unknown";
}

// Function to generate the payment data
export async function generatePaymentsData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      statue: Statue.Pending,
      company: "Amazon",
      object: getObjectTitle("Product Design : Payment"),
      add: new Date(), // Remplacez par la date correcte si nécessaire
      date: "Dec.23",
    },
    {
      id: "729ed53f",
      amount: 200,
      statue: Statue.Success,
      company: "Adobe LLC.",
      object: getObjectTitle("App Redesign : Onboard"),
      add: new Date(), // Remplacez par la date correcte si nécessaire
      date: "Oct.23",
    },
    // Ajoutez plus d'entrées si nécessaire...
  ];
}

interface DealStore {
  deals: Deal[];
  addDeal: (newDeal: Deal) => void;
  removeDeals: (indexes: number[]) => void;
}

export const useDealStore = create<DealStore>()((set) => ({
  deals: [
    {
      id: "728ed52f",
      add: new Date("2024-01-24"),
      amount: 7800,
      object: "Product Design : Payme...",
      statue: Statue.Pending,
      company: companies[0].name,
    },
    {
      id: "489e1d42",
      add: new Date("2024-01-24"),
      amount: 12800,
      object: "App Redesign : Onboar...",
      statue: Statue.Cancelled,
      company: companies[1].name,
    },
    {
      id: "2f9e1d42",
      add: new Date("2023-12-23"),
      amount: 14000,
      object: "Pitch Deck B2B",
      statue: Statue.Ongoing,
      company: companies[2].name,
    },
    {
      id: "2fr6671d42",
      add: new Date("2023-10-23"),
      amount: 2000,
      object: "Mobile App, UX Audit",
      statue: Statue.Waiting,
      company: companies[3].name,
    },
    {
      id: "1fr2271d42",
      add: new Date("2023-10-23"),
      amount: 5500,
      object: "Splash Screen Illustrator",
      statue: Statue.Completed,
      company: companies[4].name,
    },
    {
      id: "99fr2271d42",
      add: new Date("2023-10-23"),
      amount: 14500,
      object: "Features Add",
      statue: Statue.Pending,
      company: companies[5].name,
    },
    {
      id: "6fr2zz1221d42",
      add: new Date("2023-09-23"),
      amount: 21500,
      object: "Brand Guidelines",
      statue: Statue.Completed,
      company: companies[6].name,
    },
    {
      id: "4er2444221d42",
      add: new Date("2023-09-23"),
      amount: 1900,
      object: "New messages UX",
      statue: Statue.Ongoing,
      company: companies[7].name,
    },
    {
      id: "77r2zaa21d42",
      add: new Date("2023-09-23"),
      amount: 2300,
      object: "Landing Page",
      statue: Statue.Pending,
      company: companies[8].name,
    },
  ],
  addDeal: (newDeal) => set((state) => ({ deals: [...state.deals, newDeal] })),
  removeDeals: (indexes) =>
    set((state) => ({
      deals: state.deals.filter((_, index) => !indexes.includes(index)),
    })),
}));
