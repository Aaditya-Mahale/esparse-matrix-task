import { useMemo } from "react";
import "./ButtonPrimaryHoverNo.css";

const ButtonPrimaryHoverNo = ({
  viewAllProducts,
  buttonPrimaryHoverNoPosition,
  buttonPrimaryHoverNoTop,
  buttonPrimaryHoverNoLeft,
  buttonPrimaryHoverNoBackgroundColor,
  buttonPrimaryHoverNoPadding,
}) => {
  const buttonPrimaryHoverNoStyle = useMemo(() => {
    return {
      position: buttonPrimaryHoverNoPosition,
      top: buttonPrimaryHoverNoTop,
      left: buttonPrimaryHoverNoLeft,
      backgroundColor: buttonPrimaryHoverNoBackgroundColor,
      padding: buttonPrimaryHoverNoPadding,
    };
  }, [
    buttonPrimaryHoverNoPosition,
    buttonPrimaryHoverNoTop,
    buttonPrimaryHoverNoLeft,
    buttonPrimaryHoverNoBackgroundColor,
    buttonPrimaryHoverNoPadding,
  ]);

  return (
    <button className="buttonprimary-hoverno" style={buttonPrimaryHoverNoStyle}>
  <div className="view-all-products">{viewAllProducts}</div>
</button>

  );
};

export default ButtonPrimaryHoverNo;
