import { instantiate } from "../wasm/lib/rs_lib.generated.js";

const { hello } = await instantiate();

console.log("toto");

hello();
