import { useCallback } from "react";
import Logo from "./Logo";
import HeaderContact from "./HeaderContact";
import { useNavigate } from "react-router-dom";
import Property1Active from "./Property1Active";
import "./StartupIdeaCard1.css";
import { Link } from 'react-router-dom'; 

const StartupIdeaCard1 = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="header13">
      <div className="logo-parent3">
        <Logo
          exclusive="STARTUP IDEA"
          logoPosition="relative"
          exclusiveColor="#000"
        />
        <div className="header-parent2">
          <div className="header14">
            <div className="home3"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></div>
          </div>
          <HeaderContact contact="Services" headerContactPosition="relative" />
          <div className="header14">
            <div className="about5" onClick={onAboutTextClick}>
              About
            </div>
          </div>
          <div className="header16">
            <div className="home3"><Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>SignUp</Link></div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent2">
        <Property1Active />
        <div className="wishlist-parent2">
          <img className="wishlist-icon4" alt="" src="/wishlist.svg" />
          <img className="cart1-with-buy4" alt="" src="/cart1-with-buy.svg" />
          <img className="user-icon4" alt="" src="/user.svg" />
        </div>
      </div>
    </div>
  );
};

export default StartupIdeaCard1;
