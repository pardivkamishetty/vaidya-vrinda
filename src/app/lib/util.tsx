import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | boolean)[]) {
  return twMerge(clsx(inputs));
}