import { object, company, statue } from "../app/data";
import { Payment } from "../app/payments/columns";

// Helper function to get the object title based on an identifier
function getObjectTitle(identifier: string) {
  const foundObject = object.find((obj) => obj.title.includes(identifier));
  return foundObject ? foundObject.title : "Unknown";
}

// Function to generate the payment data
export async function generatePaymentsData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      statue: "pending",
      company: "Amazon",
      object: getObjectTitle("Product Design : Payment"),
    },
    {
      id: "729ed53f",
      amount: 200,
      statue: "success",
      company: "Adobe LLC.",
      object: getObjectTitle("App Redesign : Onboard"),
    },
    // Add more entries as needed...
  ];
}
