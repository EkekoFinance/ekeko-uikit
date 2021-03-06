import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={ require('./png/2048.png')} style={{width: 40}}/>
  );
};

export default Icon;
