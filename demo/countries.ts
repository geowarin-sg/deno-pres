import countries from "./countries.json" with { type: "json" };

console.log(
  countries
    .filter((country) => country.languages.includes("French"))
    .map((country) => country.name),
);

await Deno.writeTextFile("output.txt", JSON.stringify(countries, null, 2));
