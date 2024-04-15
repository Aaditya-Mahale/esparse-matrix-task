import { useMemo } from "react";
import "./PlaceToInfoBox.css";

const PlaceToInfoBox = ({
  placeToInfoBoxWidth,
  placeToInfoBoxHeight,
  placeToInfoBoxPosition,
  placeToInfoBoxTop,
  placeToInfoBoxRight,
  placeToInfoBoxBottom,
  placeToInfoBoxLeft,
}) => {
  const placeToInfoBoxStyle = useMemo(() => {
    return {
      width: placeToInfoBoxWidth,
      height: placeToInfoBoxHeight,
      position: placeToInfoBoxPosition,
      top: placeToInfoBoxTop,
      right: placeToInfoBoxRight,
      bottom: placeToInfoBoxBottom,
      left: placeToInfoBoxLeft,
    };
  }, [
    placeToInfoBoxWidth,
    placeToInfoBoxHeight,
    placeToInfoBoxPosition,
    placeToInfoBoxTop,
    placeToInfoBoxRight,
    placeToInfoBoxBottom,
    placeToInfoBoxLeft,
  ]);

  return <div className="place-to-info-box" style={placeToInfoBoxStyle} />;
};

export default PlaceToInfoBox;
