/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateStr: Date) => {
  const d = new Date(dateStr);
  const dRes = format(d, "eee, dd MMM yyyy");
  return dRes;
};
