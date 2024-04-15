import { useMemo } from "react";
import ServicesFastDelivery from "./ServicesFastDelivery";
import ServicesCustomerService1 from "./ServicesCustomerService1";
import ServicesMoneyBack1 from "./ServicesMoneyBack1";
import "./FullServices.css";

const FullServices = ({
  showFrameDiv,
  frameDivVisible,
  fullServicesPosition,
  fullServicesTop,
  fullServicesLeft,
}) => {
  const fullServicesStyle = useMemo(() => {
    return {
      position: fullServicesPosition,
      top: fullServicesTop,
      left: fullServicesLeft,
    };
  }, [fullServicesPosition, fullServicesTop, fullServicesLeft]);

  return (
    <div className="full-services" style={fullServicesStyle}>
      <ServicesFastDelivery
        services="/services.svg"
        fREEANDFASTDELIVERY="FREE AND FAST DELIVERY"
        freeDeliveryForAllOrdersO="Free delivery for all orders over $140"
        servicesFastDeliveryPosition="unset"
        servicesFastDeliveryTop="unset"
        servicesFastDeliveryLeft="unset"
        frameDivGap="8px"
        fREEANDFASTFontSize="20px"
        fREEANDFASTFontWeight="600"
        fREEANDFASTFontFamily="Poppins"
        fREEANDFASTLetterSpacing="unset"
      />
      <ServicesCustomerService1
        services="/services.svg"
        cUSTOMERSERVICE="24/7 CUSTOMER SERVICE"
        friendly247CustomerSuppor="Friendly 24/7 customer support"
        servicesCustomerServicePosition="unset"
        servicesCustomerServiceTop="unset"
        servicesCustomerServiceLeft="unset"
        frameDivGap="8px"
        cUSTOMERSERVICEFontSize="20px"
        cUSTOMERSERVICEFontWeight="600"
        cUSTOMERSERVICEFontFamily="Poppins"
        cUSTOMERSERVICELetterSpacing="unset"
      />
      <ServicesMoneyBack1
        services="/services.svg"
        mONEYBACKGUARANTEE="MONEY BACK GUARANTEE"
        weReurnMoneyWithin30Days="We reurn money within 30 days"
        servicesMoneyBackPosition="unset"
        servicesMoneyBackTop="unset"
        servicesMoneyBackLeft="unset"
        frameDivGap="8px"
        mONEYBACKGUARANTEEFontSize="20px"
        mONEYBACKGUARANTEEFontWeight="600"
        mONEYBACKGUARANTEEFontFamily="Poppins"
        mONEYBACKGUARANTEEColor="#000"
        mONEYBACKGUARANTEELetterSpacing="unset"
        weReurnMoneyColor="#000"
      />
      <ServicesMoneyBack1
        services="/services.svg"
        mONEYBACKGUARANTEE="MONEY BACK GUARANTEE"
        weReurnMoneyWithin30Days="We reurn money within 30 days"
        servicesMoneyBackPosition="unset"
        servicesMoneyBackTop="unset"
        servicesMoneyBackLeft="unset"
        frameDivGap="8px"
        mONEYBACKGUARANTEEFontSize="20px"
        mONEYBACKGUARANTEEFontWeight="600"
        mONEYBACKGUARANTEEFontFamily="Poppins"
        mONEYBACKGUARANTEEColor="#000"
        mONEYBACKGUARANTEELetterSpacing="unset"
        weReurnMoneyColor="#000"
      />
    </div>
  );
};

export default FullServices;
