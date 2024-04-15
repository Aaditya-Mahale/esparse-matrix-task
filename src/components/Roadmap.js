import { useMemo } from "react";
import "./Roadmap.css";

const Roadmap = ({
  account,
  nothing,
  showLineIcon,
  showNothing,
  lineIconVisible,
  nothingVisible,
  lineIconVisible1,
  nothingVisible1,
  roadmapPosition,
  roadmapTop,
  roadmapLeft,
  nothingWidth,
  nothingWidth1,
  nothingWidth2,
}) => {
  const roadmapStyle = useMemo(() => {
    return {
      position: roadmapPosition,
      top: roadmapTop,
      left: roadmapLeft,
    };
  }, [roadmapPosition, roadmapTop, roadmapLeft]);

  const nothingStyle = useMemo(() => {
    return {
      width: nothingWidth,
    };
  }, [nothingWidth]);

  const nothing1Style = useMemo(() => {
    return {
      width: nothingWidth1,
    };
  }, [nothingWidth1]);

  const nothing2Style = useMemo(() => {
    return {
      width: nothingWidth2,
    };
  }, [nothingWidth2]);

  return (
    <div className="roadmap" style={roadmapStyle}>
      <div className="account">{account}</div>
      <img className="roadmap-child" alt="" />
      <div className="nothing">{nothing}</div>
      {showLineIcon && <img className="roadmap-child" alt="" />}
      {showNothing && (
        <div className="nothing" style={nothingStyle}>
          Nothing
        </div>
      )}
      {lineIconVisible && <img className="roadmap-child" alt="" />}
      {nothingVisible && (
        <div className="nothing" style={nothing1Style}>
          Nothing
        </div>
      )}
      {lineIconVisible1 && <img className="roadmap-child" alt="" />}
      {nothingVisible1 && (
        <div className="nothing" style={nothing2Style}>
          Nothing
        </div>
      )}
    </div>
  );
};

export default Roadmap;
