import { useMemo } from "react";
import "./NewButton.css";

const NewButton = ({ newButtonPosition, newButtonTop, newButtonLeft }) => {
  const newButtonStyle = useMemo(() => {
    return {
      position: newButtonPosition,
      top: newButtonTop,
      left: newButtonLeft,
    };
  }, [newButtonPosition, newButtonTop, newButtonLeft]);

  return (
    <div className="new-button" style={newButtonStyle}>
      <div className="new">NEW</div>
    </div>
  );
};

export default NewButton;
