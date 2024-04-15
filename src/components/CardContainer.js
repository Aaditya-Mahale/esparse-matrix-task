import { useMemo } from "react";
import FiveStar from "./FiveStar";
import ColourChnage from "./ColourChnage";
import "./CardContainer.css";

const CardContainer = ({
  productTitle,
  productPrice,
  productDescription,
  productQuantity,
  productImageId,
  propBorderRadius,
  propOverflow,
}) => {
  const vectorIcon1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      overflow: propOverflow,
    };
  }, [propBorderRadius, propOverflow]);

  return (
    <div className="jr-zoom-soccer-cleats-parent">
      <div className="jr-zoom-soccer">{productTitle}</div>
      <div className="frame-parent30">
        <div className="wrapper5">
          <div className="jr-zoom-soccer">{productPrice}</div>
        </div>
        <div className="five-star-parent4">
          <FiveStar />
          <div className="div44">{productQuantity}</div>
        </div>
      </div>
      <ColourChnage
        group1000005935="/group-1000005935.svg"
        ellipseDivBackgroundColor="#db4444"
      />
    </div>
  );
};

export default CardContainer;
