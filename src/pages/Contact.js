import TopHeader from "../components/TopHeader";
import ExclusiveContainer from "../components/ExclusiveContainer";
import Line from "../components/Line";
import Roadmap from "../components/Roadmap";
import PlaceboxInfo from "../components/PlaceboxInfo";
import ButtonPrimaryHoverNo from "../components/ButtonPrimaryHoverNo";
import CallToUsFormContainer from "../components/CallToUsFormContainer";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact3">
     
      <Line
        lineIconOverflow="unset"
        lineIconPosition="absolute"
        lineIconTop="142px"
        lineIconLeft="0px"
      />
      <Roadmap
        account="Home"
        nothing="Cantact"
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
      <div className="contact-inner">
        <div className="frame-parent9">
          <div className="placebox-info-parent">
            <PlaceboxInfo md="Name"
              placeboxInfoPosition="relative"
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
            <PlaceboxInfo md="Mobile"
              placeboxInfoPosition="relative"
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
            <PlaceboxInfo md="Email"
              placeboxInfoPosition="relative"
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
          </div>
          <PlaceboxInfo
            md="Your Massage"
            placeboxInfoPosition="relative"
            placeboxInfoWidth="737px"
            placeboxInfoHeight="207px"
            mdColor="#000"
          />
          <ButtonPrimaryHoverNo
            viewAllProducts="Send Massage"
            buttonPrimaryHoverNoPosition="unset"
            buttonPrimaryHoverNoTop="unset"
            buttonPrimaryHoverNoLeft="unset"
            buttonPrimaryHoverNoBackgroundColor="#db4444"
            buttonPrimaryHoverNoPadding="var(--padding-base) var(--padding-29xl)"
          />
        </div>
      </div>
      <div className="contact-child">
        <CallToUsFormContainer />
      </div>
      <Footer
        exclusive="Exclusive"
        footerPosition="absolute"
        footerTop="920px"
        footerLeft="0px"
      />
    </div>
  );
};

export default Contact;
