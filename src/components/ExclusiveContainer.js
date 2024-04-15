import { useCallback } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import HeaderHeaderContactHover from "./HeaderHeaderContactHover";
import Property1Active from "./Property1Active";
import "./ExclusiveContainer.css";
import { Link } from 'react-router-dom';
const ExclusiveContainer = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header6">
      <div className="logo-parent1">
        <Logo
          exclusive="Exclusive"
          logoPosition="relative"
          exclusiveColor="#000"
        />
        <div className="header-container">
          <div className="header7">
            <div className="home1" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <HeaderHeaderContactHover
            contact="Contact"
            underLine="/underline.svg"
            underLineIconWidth="66px"
          />
          <div className="header7">
            <div className="about4"><Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link>
</div>
          </div>
          <div className="header9">
            <div className="about4"><Link to="/signup" style={{ color: 'black', textDecoration: 'none' }}>SignUp</Link>
</div>
          </div>
        </div>
      </div>
      <div className="search-component-set-container">
        <Property1Active />
        <div className="wishlist-container">
          <img className="wishlist-icon2" alt="" src="/wishlist.svg" />
          <img className="cart1-with-buy2" alt="" src="/cart1-with-buy.svg" />
          <img className="wishlist-icon2" alt="" src="/user.svg" />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveContainer;
