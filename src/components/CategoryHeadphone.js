import { useMemo } from "react";
import "./CategoryHeadphone.css";

const CategoryHeadphone = ({
  categoryHeadphoneCategory,
  categoryHeadphoneIconPosition,
  categoryHeadphoneIconTop,
  categoryHeadphoneIconLeft,
}) => {
  const categoryHeadphoneIconStyle = useMemo(() => {
    return {
      position: categoryHeadphoneIconPosition,
      top: categoryHeadphoneIconTop,
      left: categoryHeadphoneIconLeft,
    };
  }, [
    categoryHeadphoneIconPosition,
    categoryHeadphoneIconTop,
    categoryHeadphoneIconLeft,
  ]);

  return (
    <img
      className="category-headphone-icon"
      alt=""
      src={categoryHeadphoneCategory}
      style={categoryHeadphoneIconStyle}
    />
  );
};

export default CategoryHeadphone;
