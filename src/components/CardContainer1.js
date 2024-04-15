import { useMemo } from "react";
import "./CardContainer1.css";

const CardContainer1 = ({
  imageDimensions,
  celebrityImageUrl,
  roleTitle,
  propLeft,
  propWidth,
}) => {
  const image46IconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className="frame-parent45">
      <div className="image-46-wrapper">
        <img
          className="image-46-icon"
          alt=""
          src={imageDimensions}
          style={image46IconStyle}
        />
      </div>
      <div className="frame-parent46">
        <div className="tom-cruise-parent">
          <div className="tom-cruise">{celebrityImageUrl}</div>
          <div className="founder-chairman">{roleTitle}</div>
        </div>
        <div className="icon-twitter-group">
          <img className="icon-twitter3" alt="" src="/icontwitter.svg" />
          <img className="icon-twitter3" alt="" src="/iconinstagram.svg" />
          <img className="icon-twitter3" alt="" src="/iconlinkedin.svg" />
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
