import { useMemo } from "react";
import "./Logo.css";

const Logo = ({
  exclusive,
  logoPosition,
  exclusiveColor,
  onLogoContainerClick,
  onExclusiveTextClick,
}) => {
  const logoStyle = useMemo(() => {
    return {
      position: logoPosition,
    };
  }, [logoPosition]);

  const exclusiveStyle = useMemo(() => {
    return {
      color: exclusiveColor,
    };
  }, [exclusiveColor]);

  return (
    <div className="logo" style={logoStyle} onClick={onLogoContainerClick}>
      <b
        className="exclusive"
        style={exclusiveStyle}
        onClick={onExclusiveTextClick}
      >
        {exclusive}
      </b>
    </div>
  );
};

export default Logo;
