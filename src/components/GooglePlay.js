import { useMemo } from "react";
import "./GooglePlay.css";

const GooglePlay = ({ googlePlayIconPosition }) => {
  const googlePlayIconStyle = useMemo(() => {
    return {
      position: googlePlayIconPosition,
    };
  }, [googlePlayIconPosition]);

  return (
    <img
      className="googleplay-icon"
      alt=""
      src="/googleplay.svg"
      style={googlePlayIconStyle}
    />
  );
};

export default GooglePlay;
