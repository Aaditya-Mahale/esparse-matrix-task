import { useMemo } from "react";
import UnderLineIcon from "./UnderLineIcon";
import "./HeaderHeaderContactHover.css";

const HeaderHeaderContactHover = ({
  contact,
  underLine,
  underLineIconWidth,
}) => {
  const underLineIconStyle = useMemo(() => {
    return {
      width: underLineIconWidth,
    };
  }, [underLineIconWidth]);

  return (
    <div className="headerheader-contact-hover">
      <div className="contact">{contact}</div>
      <UnderLineIcon
        underLineIconUnderLine="/underline.svg"
        underLineIconWidth="66px"
        underLineIconOverflow="unset"
        underLineIconPosition="relative"
      />
    </div>
  );
};

export default HeaderHeaderContactHover;
