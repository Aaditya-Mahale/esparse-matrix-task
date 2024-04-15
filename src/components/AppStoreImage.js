import { useMemo } from "react";
import "./AppStoreImage.css";

const AppStoreImage = ({ appStoreIconPosition }) => {
  const appStoreIconStyle = useMemo(() => {
    return {
      position: appStoreIconPosition,
    };
  }, [appStoreIconPosition]);

  return (
    <img
      className="appstore-icon"
      alt=""
      src="/appstore@2x.png"
      style={appStoreIconStyle}
    />
  );
};

export default AppStoreImage;
