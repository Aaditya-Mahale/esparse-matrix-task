import { useMemo } from "react";
import CategorySmartWatch from "./CategorySmartWatch";
import "./CategoryPhoneSmartWatchHov.css";

const CategoryPhoneSmartWatchHov = ({
  vector,
  categoryPhoneSmartWatchHoPosition,
}) => {
  const categoryPhoneSmartWatchHovStyle = useMemo(() => {
    return {
      position: categoryPhoneSmartWatchHoPosition,
    };
  }, [categoryPhoneSmartWatchHoPosition]);

  return (
    <div
      className="category-phonesmartwatch-hov"
      style={categoryPhoneSmartWatchHovStyle}
    >
      <div className="smartwatch">SmartWatch</div>
      <CategorySmartWatch
        vector="/vector.svg"
        categorySmartWatchPosition="absolute"
        categorySmartWatchTop="25px"
        categorySmartWatchLeft="calc(50% - 28px)"
      />
    </div>
  );
};

export default CategoryPhoneSmartWatchHov;
