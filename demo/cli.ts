import { Checkbox } from "@cliffy/prompt/checkbox";
import { colors } from "@cliffy/ansi/colors";

// const pickedColors: number[] = await Checkbox.prompt({
//   message: "Pick a color",
//   options: [
//     { name: "Red", value: 0xff0000, checked: true },
//     { name: "Green", value: 0x00ff00, disabled: true },
//     { name: "Blue", value: 0x0000ff },
//     Checkbox.separator("--------"),
//     { name: "White", value: 0xffffff },
//     { name: "Black", value: 0x000000 },
//   ],
// });
//
// for (const color of pickedColors) {
//   console.log(colors.rgb24(`You picked ${color}`, color));
// }

const title = await Checkbox.prompt({
  message: "Pick some books",
  search: true,
  groupIcon: "󰉋",
  groupOpenIcon: "󰝰",
  confirmSubmit: false,
  options: [
    {
      name: "Harry Potter",
      options: [
        { checked: true, name: "Harry Potter and the Great Wall of China" },
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Order of the Phoenix",
        "Harry Potter and the Half-Blood Prince",
        "Harry Potter and the Deathly Hallows",
      ],
    },
    {
      name: "Middle-Earth",
      options: [
        "The Hobbit",
        {
          name: "The Lord of the Rings",
          options: [
            "The Fellowship of the Ring",
            "The Two Towers",
            "The Return of the King",
          ],
        },
        "Silmarillion",
      ],
    },
  ],
});
