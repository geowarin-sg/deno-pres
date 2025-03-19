// import { delay } from "@std/async";
// import { ProgressBar } from "@std/cli/unstable-progress-bar";

// const gen = async function* () {
//   for (let i = 0; i < 100; ++i) {
//     yield new Uint8Array(1000).fill(97);
//     await delay(Math.random() * 200 | 0);
//   }
// }();
// const writer = (await Deno.create("./_output.txt")).writable.getWriter();

// const bar = new ProgressBar(Deno.stdout.writable, { max: 100_000 });

// for await (const buffer of gen) {
//   bar.add(buffer.length);
//   await writer.write(buffer);
// }

// await bar.end();
// await writer.close();
import { promptMultipleSelect } from "@std/cli/unstable-prompt-multiple-select";
import { promptSelect } from "@std/cli/unstable-prompt-select";
import { Spinner } from "@std/cli/unstable-spinner";

const spinner = new Spinner({ message: "Loading...", color: "yellow" });
spinner.start();

setTimeout(() => {
  spinner.stop();
  console.log("Finished loading!");
}, 3_000);

// const browsers = promptMultipleSelect("Please select browsers:", [
//   "safari",
//   "chrome",
//   "firefox",
// ], { clear: true });

// const browser = promptSelect("Please select a browser:", [
//   "safari",
//   "chrome",
//   "firefox",
// ], { clear: true });

// console.log(browser);
