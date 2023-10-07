import UpArrowIcon from "../../icons/UpArrow";
import { PERSON_CONSTANTS as constants } from "./person.constants.js";
import DownArrowIcon from "../../icons/DownArrow";
import "./personTable.css";

interface HeaderProps {
  title: string;
  sortConfig: { order: string; property: string };
  onClick: () => void;
}

const PersonTableHeader = ({ title, sortConfig, onClick }: HeaderProps) => {
  return (
    <th className="table-person-header" onClick={onClick}>
      {title}
      <span>
        {/* Here's the logic to see which icon is displayed*/}
        {sortConfig.order === constants.asc && sortConfig.property === title ? (
          <UpArrowIcon className={"arrow-header"} />
        ) : sortConfig.order === constants.desc &&
          sortConfig.property === title ? (
          <DownArrowIcon className={"arrow-header"} />
        ) : null}
      </span>
    </th>
  );
};

export default PersonTableHeader;
