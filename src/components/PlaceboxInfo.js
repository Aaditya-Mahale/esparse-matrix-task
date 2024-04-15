import { useMemo } from "react";
import PlaceToInfoBox from "./PlaceToInfoBox";
import "./PlaceboxInfo.css";

const PlaceboxInfo = ({
  md,
  placeboxInfoPosition,
  placeboxInfoWidth,
  placeboxInfoHeight,
  mdColor,
}) => {
  const placeboxInfoStyle = useMemo(() => {
    return {
      position: placeboxInfoPosition,
      width: placeboxInfoWidth,
      height: placeboxInfoHeight,
    };
  }, [placeboxInfoPosition, placeboxInfoWidth, placeboxInfoHeight]);

  const mdStyle = useMemo(() => {
    return {
      color: mdColor,
    };
  }, [mdColor]);

  return (
    <div className="placebox-info" style={placeboxInfoStyle}>
      <PlaceToInfoBox
        placeToInfoBoxWidth="100%"
        placeToInfoBoxHeight="100%"
        placeToInfoBoxPosition="absolute"
        placeToInfoBoxTop="0%"
        placeToInfoBoxRight="0%"
        placeToInfoBoxBottom="0%"
        placeToInfoBoxLeft="0%"
      />
      <div className="md" style={mdStyle}>
        {md}
      </div>
    </div>
  );
};

export default PlaceboxInfo;
