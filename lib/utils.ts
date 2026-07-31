import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



const MONTHS = [
  "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatDate(date: string): string {
  if (!date) return "";

  const [year, month] = date.split("-");
  const monthIndex = Number(month) - 1;

  if (!year || Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    return date;
  }

  return `${year} ${MONTHS[monthIndex]}`;
}