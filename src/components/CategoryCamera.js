import { useMemo } from "react";
import "./CategoryCamera.css";
import logo1 from './images/logo1.png';
const CategoryCamera = ({
  categoryCameraCategoryCam,
  categoryCameraIconPosition,
  categoryCameraIconTop,
  categoryCameraIconLeft,
}) => {
  const categoryCameraIconStyle = useMemo(() => {
    return {
      position: categoryCameraIconPosition,
      top: categoryCameraIconTop,
      left: categoryCameraIconLeft,
    };
  }, [
    categoryCameraIconPosition,
    categoryCameraIconTop,
    categoryCameraIconLeft,
  ]);

  return (
    <img
      className="category-camera-icon"
      alt=""
      src={logo1}
      style={categoryCameraIconStyle}
    />
  );
};

export default CategoryCamera;
