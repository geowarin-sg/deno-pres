import { privateLog } from "./private-stuff.ts";

export function add(a: number, b: number): number {
    privateLog();
    return a + b;
}
