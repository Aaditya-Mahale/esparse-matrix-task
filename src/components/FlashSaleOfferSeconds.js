import { useMemo } from "react";
import "./FlashSaleOfferSeconds.css";

const FlashSaleOfferSeconds = ({
  prop,
  seconds,
  flashSaleOfferSecondsPosition,
  ellipseDivBackgroundColor,
  frameDivWidth,
  frameDivRight,
  frameDivLeft,
  divColor,
  secondsWidth,
  secondsColor,
}) => {
  const flashSaleOfferSecondsStyle = useMemo(() => {
    return {
      position: flashSaleOfferSecondsPosition,
    };
  }, [flashSaleOfferSecondsPosition]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: frameDivWidth,
      right: frameDivRight,
      left: frameDivLeft,
    };
  }, [frameDivWidth, frameDivRight, frameDivLeft]);

  const div1Style = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const secondsStyle = useMemo(() => {
    return {
      width: secondsWidth,
      color: secondsColor,
    };
  }, [secondsWidth, secondsColor]);

  return (
    <div className="flash-sale-offerseconds" style={flashSaleOfferSecondsStyle}>
      <div className="flash-sale-offerseconds-child" style={ellipseDiv1Style} />
      <div className="parent5" style={frameDiv4Style}>
        <div className="div32" style={div1Style}>
          {prop}
        </div>
        <div className="seconds1" style={secondsStyle}>
          {seconds}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleOfferSeconds;
