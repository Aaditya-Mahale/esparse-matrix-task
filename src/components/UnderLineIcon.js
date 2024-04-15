import { useMemo } from "react";
import "./UnderLineIcon.css";

const UnderLineIcon = ({
  underLineIconUnderLine,
  underLineIconWidth,
  underLineIconOverflow,
  underLineIconPosition,
}) => {
  const underLineIconStyle = useMemo(() => {
    return {
      width: underLineIconWidth,
      overflow: underLineIconOverflow,
      position: underLineIconPosition,
    };
  }, [underLineIconWidth, underLineIconOverflow, underLineIconPosition]);

  return (
    <img
      className="underline-icon2"
      alt=""
      src={underLineIconUnderLine}
      style={underLineIconStyle}
    />
  );
};

export default UnderLineIcon;
