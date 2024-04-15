import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import HeaderContact from "./HeaderContact";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import "./ExclusiveContainer1.css";
import { Link } from 'react-router-dom'; 

const ExclusiveContainer1 = () => {
  return (
    <div className="header10">
      <div className="logo-parent2">
        <Logo exclusive="Exclusive" logoPosition="relative" exclusiveColor="#000" />
        <div className="header-parent1">
          <div className="header11">
            <div className="home2"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></div>
          </div>
          <HeaderContact contact="Contact" headerContactPosition="relative" />
          <HeaderHeaderContactHover contact="About" underLine="/underline.svg" underLineIconWidth="48px" />
          <div className="header12">
            <div className="home2"><Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link></div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent1">
        <Property1Active />
        <div className="wishlist-parent1">
          <img className="wishlist-icon3" alt="" src="/wishlist.svg" />
          <img className="cart1-with-buy3" alt="" src="/cart1-with-buy.svg" />
          <Link to="/account"><img className="wishlist-icon3" alt="" src="/user.svg" /></Link>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveContainer1;
