//Quick and simple Icon interface, for increased usability we coud add an onClick or other functions
import React from "react";

interface Icon extends React.FC<{ className: string }> {}

export type { Icon };
