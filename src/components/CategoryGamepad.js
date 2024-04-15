import { useMemo } from "react";
import "./CategoryGamepad.css";

const CategoryGamepad = ({
  categoryGamepadIconPosition,
  categoryGamepadIconTop,
  categoryGamepadIconLeft,
}) => {
  const categoryGamepadIconStyle = useMemo(() => {
    return {
      position: categoryGamepadIconPosition,
      top: categoryGamepadIconTop,
      left: categoryGamepadIconLeft,
    };
  }, [
    categoryGamepadIconPosition,
    categoryGamepadIconTop,
    categoryGamepadIconLeft,
  ]);

  return (
    <img
      className="category-gamepad-icon"
      alt=""
      src="/categorycamera.svg"
      style={categoryGamepadIconStyle}
    />
  );
};

export default CategoryGamepad;
