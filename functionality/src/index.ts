/* Sebastian Rosas Rosas 10/6/2023
This is a solution to the Coding Exercise found on 
https://gist.github.com/rrborg/5451127a7ae5cde6935b279ea509d2d8´
 */
import { IPerson } from "./interface";
import { data } from "./data";

/*
  main() is the solution to 'adding the date' of the script and
  console logging the values if the record was active.
*/
const main = () => {
  let print: number = 0;
  data.forEach((person) => {
    person.Date = new Date();
    if (person.Status === "Active") {
      printValues(person);
      print++;
    }
  });

  if (print === 0) console.log("No Active records found");
};

/*
  printValues() logs the records, I kept it a separate function
  as the ´View´ usually is required to do more than logging.
*/
const printValues = (person: IPerson): void => {
  console.log(
    `${person.Name}'s Favourite Movie is: ${person["Favorite Movie"]} - on ${person.Date}`
  );
  console.log("-----------------------\n");
};

/*
  sortByProperty() is the solution to sorting 
  the array based on a property. We also have the option to 
  solve it in an ascending or descending order.
*/
const sortByProperty = (
  props: string,
  arr: IPerson[],
  asc: boolean = true
): IPerson[] => {
  console.log("-------SORT-------\n");
  const temp = arr;

  if (!temp[0].hasOwnProperty(props))
    console.log(`Property: ${props} is not a valid key to sort the array`);
  temp.sort((a, b) => (a[props] > b[props] ? 1 : b[props] > a[props] ? -1 : 0));

  if (asc) return temp;
  else return temp.reverse();
};

/* 
The question I had while doing this exercise was:

Do we need to add the sorting functionality on the main script or create the function and leave it available for future use?
*/

main();
console.log(sortByProperty(`Name`, data));
