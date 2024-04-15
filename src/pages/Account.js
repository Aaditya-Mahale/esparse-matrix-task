import TopHeader from "../components/TopHeader";
import StartupIdeaCard1 from "../components/StartupIdeaCard1";
import Line from "../components/Line";
import Roadmap from "../components/Roadmap";
import EditProfileFormContainer from "../components/EditProfileFormContainer";
import Footer from "../components/Footer";
import "./Account.css";

const Account = () => {
  return (
    <div className="account2"style={{ touchAction: 'manipulation', overflowX: 'hidden' }}>
      
      <Line
        lineIconOverflow="unset"
        lineIconPosition="absolute"
        lineIconTop="142px"
        lineIconLeft="0px"
      />
      <Roadmap
        account="Home"
        nothing="My Account"
        showLineIcon={false}
        showNothing={false}
        lineIconVisible={false}
        nothingVisible={false}
        lineIconVisible1={false}
        nothingVisible1={false}
        roadmapPosition="absolute"
        roadmapTop="222px"
        roadmapLeft="135px"
        nothingWidth="55px"
        nothingWidth1="55px"
        nothingWidth2="55px"
      />
      <div className="welcome-md-rimel-container">
        <span>{`Welcome! `}</span>
        <span className="md-rimel">Md Rimel</span>
      </div>
      <div className="manage-my-account">Manage My Account</div>
      <div className="my-orders">My Orders</div>
      <div className="my-wishlist">My WishList</div>
      <div className="my-profile-parent">
        <div className="my-profile">My Profile</div>
        <div className="address-book">Address Book</div>
        <div className="address-book">My Payment Options</div>
      </div>
      <div className="my-returns-parent">
        <div className="address-book">My Returns</div>
        <div className="address-book">My Cancellations</div>
      </div>
      <EditProfileFormContainer />
      <Footer
        exclusive="STARTUP IDEA"
        footerPosition="absolute"
        footerTop="1093px"
        footerLeft="0px"
      />
    </div>
  );
};

export default Account;
