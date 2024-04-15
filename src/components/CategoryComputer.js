import { useMemo } from "react";
import "./CategoryComputer.css";

const CategoryComputer = ({
  categoryComputerIconPosition,
  categoryComputerIconTop,
  categoryComputerIconLeft,
}) => {
  const categoryComputerIconStyle = useMemo(() => {
    return {
      position: categoryComputerIconPosition,
      top: categoryComputerIconTop,
      left: categoryComputerIconLeft,
    };
  }, [
    categoryComputerIconPosition,
    categoryComputerIconTop,
    categoryComputerIconLeft,
  ]);

  return (
    <img
      className="category-computer-icon"
      alt=""
      src="/categorycomputer.svg"
      style={categoryComputerIconStyle}
    />
  );
};

export default CategoryComputer;
