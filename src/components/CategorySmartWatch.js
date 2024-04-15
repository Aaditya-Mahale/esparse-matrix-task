import { useMemo } from "react";
import "./CategorySmartWatch.css";

const CategorySmartWatch = ({
  vector,
  categorySmartWatchPosition,
  categorySmartWatchTop,
  categorySmartWatchLeft,
}) => {
  const categorySmartWatchStyle = useMemo(() => {
    return {
      position: categorySmartWatchPosition,
      top: categorySmartWatchTop,
      left: categorySmartWatchLeft,
    };
  }, [
    categorySmartWatchPosition,
    categorySmartWatchTop,
    categorySmartWatchLeft,
  ]);

  return (
    <div className="category-smartwatch" style={categorySmartWatchStyle}>
      <img className="vector-icon5" alt="" src={vector} />
      <img className="vector-icon6" alt="" src="/vector.svg" />
      <img className="vector-icon7" alt="" src="/vector.svg" />
      <img className="vector-icon8" alt="" src="/vector.svg" />
      <div className="line-parent">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-inner" />
      </div>
    </div>
  );
};

export default CategorySmartWatch;
