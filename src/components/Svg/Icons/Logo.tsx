import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src='/images/2048.png' style={{}} {...props}/>
  );
};

export default Icon;
