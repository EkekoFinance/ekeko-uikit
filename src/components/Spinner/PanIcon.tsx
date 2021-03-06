import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src='/images/2048.png' style={{height: 100}} {...props}/>
  );
};

export default Icon;
