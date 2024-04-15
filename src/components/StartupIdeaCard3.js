import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import HeaderContact from "./HeaderContact";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import "./StartupIdeaCard3.css";
import { Link } from 'react-router-dom';

const StartupIdeaCard3 = () => {
  const navigate = useNavigate();

  const onExclusiveTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header21">
      <div className="logo-parent5">
        <Logo
          exclusive="STARTUP IDEA"
          logoPosition="relative"
          exclusiveColor="#000"
          onExclusiveTextClick={onExclusiveTextClick}
        />
        <div className="header-parent4">
          <div className="header22">
            <div className="home5" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <HeaderContact contact="Services" headerContactPosition="relative" />
          <div className="header22">
            <div className="about7"><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></div>
          </div>
          <HeaderHeaderContactHover
            contact="SignUp"
            underLine="/underline.svg"
            underLineIconWidth="61px"
          />
        </div>
      </div>
      <div className="search-component-set-parent4">
        <Property1Active />
        <div className="wishlist-parent4">
          <img className="wishlist-icon6" alt="" src="/wishlist.svg" />
          <div className="cart1-with-buy6">
            <img className="cart1-icon3" alt="" src="/cart1.svg" />
            <div className="ellipse-parent3">
              <div className="group-child1" />
              <div className="div46">2</div>
            </div>
          </div>
          <img className="user-icon6" alt="" src="/user.svg" />
        </div>
      </div>
    </div>
  );
};

export default StartupIdeaCard3;
