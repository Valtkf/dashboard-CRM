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
  { id: 0, title: "Product Design : Payment" },
  { id: 1, title: "App Redesign : Onboard" },
  { id: 2, title: "Pitch Deck B2B" },
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

console.log("Companies Data:", companies);

export interface Company {
  id: number;
  name: string;
  logo: React.ComponentType; // logo is optional
}

export interface Deal {
  id: number;
  object: string;
  company: string;
  date: string;
  status:
    | "Pending"
    | "Cancelled"
    | "Ongoing"
    | "Wainting for Confirmation"
    | "Completed";
  amount: string;
}

// Helper function to get the object title based on an identifier
function getObjectTitle(identifier: string) {
  const foundObject = objects.find((obj) => obj.title.includes(identifier));
  return foundObject ? foundObject.title : "Unknown";
}

// Function to generate the payment data
export async function generatePaymentsData(): Promise<Deal[]> {
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

export const deals: Deal[] = [
  {
    id: 1,
    date: "Jan. 24",
    object: "Product Design : Payment",
    amount: "7.800 $USD",
    status: "Pending",
    company: "Stripe Icon.",
    companyIcon: "/logo/StripeIcon",
  },
  {
    id: 2,
    date: "Jan. 24",
    object: "App Redesign : Onboarding",
    amount: "12.800 $USD",
    status: "Cancelled",
    company: "Github Corp.",
    companyIcon: "/logo/GithubIcon",
  },
  {
    id: 3,
    date: "Dec. 23",
    object: "Piych Deck B2B",
    amount: "14.000 $USD",
    status: "Ongoing",
    company: "Amazon",
    companyIcon: "/logo/AmazonIcon",
  },
  {
    id: 4,
    date: "Oct. 23",
    object: "Mobile App, UX Audit",
    amount: "2.000 $USD",
    status: "Waiting for Confirmation",
    company: "Steam",
    companyIcon: "/logo/SteamIcon",
  },
  {
    id: 5,
    date: "Oct. 23",
    object: "Splash Screen Illustrator",
    amount: "5.500 $USD",
    status: "Completed",
    company: "Adobe Icon.",
    companyIcon: "/logo/AdobeIcon",
  },
  {
    id: 6,
    date: "Oct. 23",
    object: "Features Add",
    amount: "14.500 $USD",
    status: "Pending",
    company: "The Browser Company",
    companyIcon: "/logo/ArcIcon",
  },
  {
    id: 7,
    date: "Sept. 23",
    object: "Brand Guidelines",
    amount: "21.500 $USD",
    status: "Completed",
    company: "Figma",
    companyIcon: "/logo/FigmaIcon",
  },
  {
    id: 8,
    date: "Sept. 23",
    object: "New messages UX",
    amount: "1.900 $USD",
    status: "Ongoing",
    company: "Slack",
    companyIcon: "/logo/SlackIcon",
  },
  {
    id: 9,
    date: "Sept. 23",
    object: "Landing page",
    amount: "2.300 $USD",
    status: "Pending",
    company: "OpenSea",
    companyIcon: "/logo/OpenSeaIcon",
  },
];
