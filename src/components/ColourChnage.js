import { useMemo } from "react";
import "./ColourChnage.css";

const ColourChnage = ({ group1000005935, ellipseDivBackgroundColor }) => {
  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  return (
    <div className="colour-chnage">
      <img className="colour-chnage-child" alt="" src={group1000005935} />
      <div className="colour-chnage-item" style={ellipseDivStyle} />
    </div>
  );
};

export default ColourChnage;
