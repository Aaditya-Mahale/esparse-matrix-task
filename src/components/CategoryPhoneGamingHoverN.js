import { useMemo } from "react";
import CategoryGamepad from "./CategoryGamepad";
import "./CategoryPhoneGamingHoverN.css";

const CategoryPhoneGamingHoverN = ({
  gaming,
  categoryGamepad,
  categoryPhoneGamingHoverNPosition,
  categoryPhoneGamingHoverNBorder,
  categoryPhoneGamingHoverNBackgroundColor,
  categoryPhoneGamingHoverNBoxShadow,
  gamingLeft,
  gamingColor,
  categoryGamepadIconLeft,
}) => {
  const categoryPhoneGamingHoverNStyle = useMemo(() => {
    return {
      position: categoryPhoneGamingHoverNPosition,
      border: categoryPhoneGamingHoverNBorder,
      backgroundColor: categoryPhoneGamingHoverNBackgroundColor,
      boxShadow: categoryPhoneGamingHoverNBoxShadow,
    };
  }, [
    categoryPhoneGamingHoverNPosition,
    categoryPhoneGamingHoverNBorder,
    categoryPhoneGamingHoverNBackgroundColor,
    categoryPhoneGamingHoverNBoxShadow,
  ]);

  const gamingStyle = useMemo(() => {
    return {
      left: gamingLeft,
      color: gamingColor,
    };
  }, [gamingLeft, gamingColor]);

  const categoryGamepadIconStyle = useMemo(() => {
    return {
      left: categoryGamepadIconLeft,
    };
  }, [categoryGamepadIconLeft]);

  return (
    <div
      className="category-phonegaming-hovern"
      style={categoryPhoneGamingHoverNStyle}
    >
      <div className="gaming" style={gamingStyle}>
        {gaming}
      </div>
      <CategoryGamepad
        categoryGamepadIconPosition="absolute"
        categoryGamepadIconTop="25px"
        categoryGamepadIconLeft="calc(50% - 28px)"
      />
    </div>
  );
};

export default CategoryPhoneGamingHoverN;
