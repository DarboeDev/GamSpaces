import { Token } from "../types";
import { jwtDecode } from "jwt-decode";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function parseJwt(token: string): Token | null {
  try {
    const jsonPayload = jwtDecode<Token>(token);
    return jsonPayload;
  } catch (error) {
    console.error("Invalid token specified:", error);
    return null;
  }
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
