import { useMemo } from "react";
import "./Line.css";

const Line = ({
  lineIconOverflow,
  lineIconPosition,
  lineIconTop,
  lineIconLeft,
}) => {
  const lineIconStyle = useMemo(() => {
    return {
      overflow: lineIconOverflow,
      position: lineIconPosition,
      top: lineIconTop,
      left: lineIconLeft,
    };
  }, [lineIconOverflow, lineIconPosition, lineIconTop, lineIconLeft]);

  return (
    <img
      className="line-icon1"
      alt=""
      src="/line-3.svg"
      style={lineIconStyle}
    />
  );
};

export default Line;
