import { useMemo } from "react";
import "./Today1.css";

const Today1 = ({ timePeriodLabel, promotionLabel, propHeight, propGap }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  return (
    <div className="frame-parent22" style={frameDiv5Style}>
      <div className="instance-parent">
        <div className="rectangle-wrapper">
          <div className="instance-child" />
        </div>
        <div className="todays">{timePeriodLabel}</div>
      </div>
      <div className="flash-sales">{promotionLabel}</div>
    </div>
  );
};

export default Today1;
