import { useMemo } from "react";
import "./TopHeader.css";
import { Link } from "react-router-dom";

const TopHeader = ({ topHeaderPosition, topHeaderTop, topHeaderLeft }) => {
  const topHeaderStyle = useMemo(() => {
    return {
      position: topHeaderPosition,
      top: topHeaderTop,
      left: topHeaderLeft,
    };
  }, [topHeaderPosition, topHeaderTop, topHeaderLeft]);

  return (
    <div className="top-header" style={topHeaderStyle}>
      <div className="frame-container">
        <div className="summer-sale-for-all-swim-suits-parent">
          <div className="summer-sale-for">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="shop-now"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>ShopNow</Link></span>
            
          </div>
          
        </div>
        <div className="english-parent">
          <div className="english">English</div>
          <img className="dropdown-icon" alt="" src="/dropdown.svg" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
