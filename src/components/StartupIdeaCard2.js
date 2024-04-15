import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import HeaderContact from "./HeaderContact";
import Property1Active from "./Property1Active";
import "./StartupIdeaCard2.css";
import { Link } from 'react-router-dom'; 

const StartupIdeaCard2 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header17">
      <div className="logo-parent4">
        <Logo
          exclusive="STARTUP IDEA"
          logoPosition="relative"
          exclusiveColor="#000"
          onLogoContainerClick={onLogoContainerClick}
        />
        <div className="header-parent3">
          <div className="header18">
            <div className="home4" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <HeaderContact contact="Services" headerContactPosition="relative" />
          <div className="header18">
            <div className="about6"><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></div>
          </div>
          <div className="header20">
            <div className="about6"><Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>SignUp</Link></div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent3">
        <Property1Active />
        <div className="wishlist-parent3">
          <img className="wishlist-icon5" alt="" src="/wishlist.svg" />
          <div className="cart1-with-buy5">
            <img className="cart1-icon2" alt="" src="/cart1.svg" />
            <div className="group-div">
              <div className="group-inner" />
              <div className="div45">2</div>
            </div>
          </div>
          <img className="user-icon5" alt="" src="/user.svg" />
        </div>
      </div>
    </div>
  );
};

export default StartupIdeaCard2;
