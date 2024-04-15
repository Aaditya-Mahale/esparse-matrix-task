import { useMemo } from "react";
import "./CategoryCellPhone.css";
import logo2 from './images/logo1.png';
const CategoryCellPhone = ({
  categoryCellPhoneIconPosition,
  categoryCellPhoneIconTop,
  categoryCellPhoneIconLeft,
}) => {
  const categoryCellPhoneIconStyle = useMemo(() => {
    return {
      position: categoryCellPhoneIconPosition,
      top: categoryCellPhoneIconTop,
      left: categoryCellPhoneIconLeft,
    };
  }, [
    categoryCellPhoneIconPosition,
    categoryCellPhoneIconTop,
    categoryCellPhoneIconLeft,
  ]);

  return (
    <img
      className="category-cellphone-icon"
      alt=""
      src={"./categorycamera.svg"}
      style={logo2}
    />
  );
};

export default CategoryCellPhone;
