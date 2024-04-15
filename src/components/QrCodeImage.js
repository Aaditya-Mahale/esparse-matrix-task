import { useMemo } from "react";
import "./QrCodeImage.css";

const QrCodeImage = ({ qrCodeIconPosition }) => {
  const qrCodeIconStyle = useMemo(() => {
    return {
      position: qrCodeIconPosition,
    };
  }, [qrCodeIconPosition]);

  return (
    <img
      className="qr-code-icon"
      alt=""
      src="/qr-code@2x.png"
      style={qrCodeIconStyle}
    />
  );
};

export default QrCodeImage;
