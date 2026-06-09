import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const RESDB_URL_RE = /resdb:\/\/\/([^.]+)/;

export function resolveResdbUrl(url: string | undefined) {
  if (!url) return undefined;
  const match = url.match(RESDB_URL_RE);
  if (!match || match.length < 2) return undefined;

  return `https://assets.resonite.com/${match[1]}`;
}
