import { useMemo } from "react";
import "./DiscountPercent.css";

const DiscountPercent = ({
  prop,
  discountPercentPosition,
  discountPercentTop,
  discountPercentLeft,
}) => {
  const discountPercentStyle = useMemo(() => {
    return {
      position: discountPercentPosition,
      top: discountPercentTop,
      left: discountPercentLeft,
    };
  }, [discountPercentPosition, discountPercentTop, discountPercentLeft]);

  return (
    <div className="discount-percent" style={discountPercentStyle}>
      <div className="div28">{prop}</div>
    </div>
  );
};

export default DiscountPercent;
