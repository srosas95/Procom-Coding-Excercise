// There are many ways to handle icons and svg on React, personally I like to treat them as components
// to increase the possibilities of what we can do with them
import { Icon } from "./iconInterface";

const UpArrowIcon: Icon = (props) => {
  return (
    <svg
      className={props.className}
      fill="#000000"
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
    >
      <path
        id="XMLID_224_"
        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      />
    </svg>
  );
};

export default UpArrowIcon;
