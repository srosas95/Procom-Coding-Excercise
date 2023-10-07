import React, { useEffect, useMemo, useState } from "react";
import { IPerson } from "./person.type";
import { PERSON_CONSTANTS as constants } from "./person.constants.js";
import "./personTable.css";
import PersonTableHeader from "./PersonTableHeader";

const PersonsTable = (props: { data: IPerson[] }) => {
  const [sortConfig, setSortConfig] = useState({
    property: "",
    order: constants.neutral,
  });

  // Using useMemo hook to avoid unnecesary re-rendering if arr hasn´t changed
  const sortedData = useMemo(() => {
    const temp = [...props.data];
    if (sortConfig.order !== constants.neutral) {
      temp.sort((a: IPerson, b: IPerson): number => {
        if (a[sortConfig.property] < b[sortConfig.property]) {
          return sortConfig.order === constants.asc ? -1 : 1;
        }
        if (a[sortConfig.property] > b[sortConfig.property]) {
          return sortConfig.order === constants.asc ? 1 : -1;
        }
        return 0;
      });
    }
    return temp;
  }, [props.data, sortConfig]);

  const headerHandler = (p: string) => {
    console.log(p);
    setSortConfig((prev) => {
      let order: string = "";
      // There are 3  available orders for sorting: ascending, descending and original(neutral), this can be found on the constants file

      //The prev state is compared to see if we are cycling to the orders of one of the headers or if a new header has been selected to be the new sorting order
      if (prev.property === p) {
        if (sortConfig.order === constants.neutral) order = constants.asc;
        else if (sortConfig.order === constants.asc) order = constants.desc;
        else if (sortConfig.order === constants.desc) order = constants.neutral;
      } else {
        order = constants.asc;
      }
      return { property: p, order: order };
    });
  };

  return (
    <div>
      {/* Title of the company I'm exited to join :) */}
      <table>
        <thead>
          <tr>
            {/* Depending on how the data is handled, I prefer to keep a HEADERS constant at the top of any Table component
                and loop through it to crate the <th>, this way we can quickly see what the component is displaying and can be
                easily modified. Due to the short amount of data I kept it in this rudimentary way.
            */}

            <PersonTableHeader
              title="Name"
              sortConfig={sortConfig}
              onClick={() => headerHandler("Name")}
            />
            <PersonTableHeader
              title="Favorite Food"
              sortConfig={sortConfig}
              onClick={() => headerHandler("Favorite Food")}
            />
            <PersonTableHeader
              title="Favorite Movie"
              sortConfig={sortConfig}
              onClick={() => headerHandler("Favorite Movie")}
            />
          </tr>
        </thead>

        <tbody>
          {sortedData.map((person, index) => (
            //In a real world scenario, data would come from a DB with unique id,
            //which we should use for the key values, here I used name and index as a substitute
            <tr key={`${index}_${person.Name}`}>
              <td>{person.Name}</td>
              <td>{person["Favorite Food"]}</td>
              <td>{person["Favorite Movie"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsTable;
