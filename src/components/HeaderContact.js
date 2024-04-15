import { useMemo } from "react";
import "./HeaderContact.css";

const HeaderContact = ({
  contact,
  headerContactPosition,
  onHeaderContainer1Click,
}) => {
  const headerContactStyle = useMemo(() => {
    return {
      position: headerContactPosition,
    };
  }, [headerContactPosition]);

  return (
    <div
      className="headercontact"
      style={headerContactStyle}
      onClick={onHeaderContainer1Click}
    >
      <div className="contact1">{contact}</div>
    </div>
  );
};

export default HeaderContact;
