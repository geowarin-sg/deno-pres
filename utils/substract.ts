import { privateLog } from "./private-stuff.ts";

export function substract(a: number, b: number): number {
  privateLog();
  return a - b;
}
