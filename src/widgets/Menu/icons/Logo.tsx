import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <div>
      {isDark && 
        <img src='/images/logolight.png' style={{height: 47, width: 167}} {...props}/>
      }
      {!isDark &&
        <img src='/images/logodark.png' style={{height: 47, width: 167}} {...props}/>
      }
    </div>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
