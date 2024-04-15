import TopHeader from "../components/TopHeader";
import ExclusiveContainer1 from "../components/ExclusiveContainer1";
import Line from "../components/Line";
import Roadmap from "../components/Roadmap";
import FullServices from "../components/FullServices";
import ServicesFastDelivery from "../components/ServicesFastDelivery";
import ServicesMoneyBack1 from "../components/ServicesMoneyBack1";
import ServicesCustomerService1 from "../components/ServicesCustomerService1";
import CardContainer1 from "../components/CardContainer1";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about3">
      
      <Line
        lineIconOverflow="unset"
        lineIconPosition="absolute"
        lineIconTop="142px"
        lineIconLeft="0px"
      />
      <Roadmap
        account="Home"
        nothing="About"
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
      <div className="our-story-parent">
        <div className="our-story">Our Story</div>
        <div className="launced-in-2015-exclusive-is-parent">
          <div className="launced-in-2015">{`Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. `}</div>
          <div className="exclusive-has-more">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
      </div>
      <img className="side-image-icon" alt="" src="/side-image@2x.png" />
      <FullServices
        showFrameDiv={false}
        frameDivVisible
        fullServicesPosition="absolute"
        fullServicesTop="2164px"
        fullServicesLeft="248px"
      />
      <div className="frame-parent10">
        <div className="instance-wrapper">
          <ServicesFastDelivery
            services="/services.svg"
            fREEANDFASTDELIVERY="10.5k "
            freeDeliveryForAllOrdersO="Sallers active our site"
            servicesFastDeliveryPosition="absolute"
            servicesFastDeliveryTop="30px"
            servicesFastDeliveryLeft="50px"
            frameDivGap="12px"
            fREEANDFASTFontSize="32px"
            fREEANDFASTFontWeight="bold"
            fREEANDFASTFontFamily="Inter"
            fREEANDFASTLetterSpacing="0.04em"
          />
        </div>
        <div className="instance-container">
          <ServicesMoneyBack1
            services="/services.svg"
            mONEYBACKGUARANTEE="33k"
            weReurnMoneyWithin30Days="Mopnthly Produduct Sale"
            servicesMoneyBackPosition="absolute"
            servicesMoneyBackTop="32px"
            servicesMoneyBackLeft="35px"
            frameDivGap="8px"
            mONEYBACKGUARANTEEFontSize="32px"
            mONEYBACKGUARANTEEFontWeight="bold"
            mONEYBACKGUARANTEEFontFamily="Inter"
            mONEYBACKGUARANTEEColor="#fff"
            mONEYBACKGUARANTEELetterSpacing="0.04em"
            weReurnMoneyColor="#fff"
          />
        </div>
        <div className="instance-wrapper">
          <ServicesCustomerService1
            services="/services.svg"
            cUSTOMERSERVICE="45.5k"
            friendly247CustomerSuppor="Customer active in our site"
            servicesCustomerServicePosition="absolute"
            servicesCustomerServiceTop="30px"
            servicesCustomerServiceLeft="4px"
            frameDivGap="12px"
            cUSTOMERSERVICEFontSize="32px"
            cUSTOMERSERVICEFontWeight="bold"
            cUSTOMERSERVICEFontFamily="Inter"
            cUSTOMERSERVICELetterSpacing="0.04em"
          />
        </div>
        <div className="instance-wrapper">
          <ServicesMoneyBack1
            services="/services.svg"
            mONEYBACKGUARANTEE="25k"
            weReurnMoneyWithin30Days="Anual gross sale in our site"
            servicesMoneyBackPosition="absolute"
            servicesMoneyBackTop="30px"
            servicesMoneyBackLeft="28px"
            frameDivGap="12px"
            mONEYBACKGUARANTEEFontSize="32px"
            mONEYBACKGUARANTEEFontWeight="bold"
            mONEYBACKGUARANTEEFontFamily="Inter"
            mONEYBACKGUARANTEEColor="#000"
            mONEYBACKGUARANTEELetterSpacing="0.04em"
            weReurnMoneyColor="#000"
          />
        </div>
      </div>
      <div className="frame-parent11">
        <CardContainer1
          imageDimensions="/image-46@2x.png"
          celebrityImageUrl="Tom Cruise"
          roleTitle={`Founder & Chairman`}
          propLeft="67px"
          propWidth="236px"
        />
        <div className="frame-parent12">
          <div className="image-51-wrapper">
            <img className="image-51-icon" alt="" src="/image-51@2x.png" />
          </div>
          <div className="frame-parent13">
            <div className="emma-watson-parent">
              <div className="emma-watson">Emma Watson</div>
              <div className="managing-director">Managing Director</div>
            </div>
            <div className="icon-twitter-parent">
              <img className="icon-twitter2" alt="" src="/icontwitter.svg" />
              <img className="icon-twitter2" alt="" src="/iconinstagram.svg" />
              <img className="icon-twitter2" alt="" src="/iconlinkedin.svg" />
            </div>
          </div>
        </div>
        <CardContainer1
          imageDimensions="/image-47@2x.png"
          celebrityImageUrl="Will Smith"
          roleTitle="Product Designer"
          propLeft="22px"
          propWidth="326px"
        />
      </div>
      <div className="ellipse-container">
        <div className="frame-child1" />
        <div className="frame-child1" />
        <img className="group-icon" alt="" src="/group-1000005940.svg" />
        <div className="frame-child1" />
        <div className="frame-child1" />
      </div>
      <Footer
        exclusive="Exclusive"
        footerPosition="relative"
        footerTop="2465px"
        footerLeft="0px"
      />
    </div>
  );
};

export default About;
