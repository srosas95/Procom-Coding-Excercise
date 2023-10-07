//Placed the data in a file to avoid having one long file

import { IPerson } from "./interface";

let rockyObj = {
  Name: "Rocky",
  "Favorite Food": "Sushi",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};
let miroslavObj = {
  Name: "Miroslav",
  "Favorite Food": "Sushi",
  "Favorite Movie": "American Psycho",
  Status: "Active",
};
let donnyObj = {
  Name: "Donny",
  "Favorite Food": "Singapore chow mei fun",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};
let mattObj = {
  Name: "Matt",
  "Favorite Food": "Brisket Tacos",
  "Favorite Movie": "The Princess Bride",
  Status: "Active",
};

let sebasObj = {
  Name: "Sebastian",
  "Favorite Food": "Ribs and Mashed Potatoes",
  "Favorite Movie": "The Lord of the Rings: The Two Towers",
  Status: "Active",
};

export const data: Array<IPerson> = [
  rockyObj,
  miroslavObj,
  donnyObj,
  mattObj,
  sebasObj,
];
