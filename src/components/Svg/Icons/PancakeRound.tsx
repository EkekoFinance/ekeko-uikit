import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={ require('./png/2048.png')} style={{width: 30}}/>
  );
};

export default Icon;
