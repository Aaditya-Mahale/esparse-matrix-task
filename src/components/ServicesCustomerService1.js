import { useMemo } from "react";
import ServicesMoneyBack from "./ServicesMoneyBack";
import "./ServicesCustomerService1.css";

const ServicesCustomerService1 = ({
  services,
  cUSTOMERSERVICE,
  friendly247CustomerSuppor,
  servicesCustomerServicePosition,
  servicesCustomerServiceTop,
  servicesCustomerServiceLeft,
  frameDivGap,
  cUSTOMERSERVICEFontSize,
  cUSTOMERSERVICEFontWeight,
  cUSTOMERSERVICEFontFamily,
  cUSTOMERSERVICELetterSpacing,
}) => {
  const servicesCustomerServiceStyle = useMemo(() => {
    return {
      position: servicesCustomerServicePosition,
      top: servicesCustomerServiceTop,
      left: servicesCustomerServiceLeft,
    };
  }, [
    servicesCustomerServicePosition,
    servicesCustomerServiceTop,
    servicesCustomerServiceLeft,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const cUSTOMERSERVICEStyle = useMemo(() => {
    return {
      fontSize: cUSTOMERSERVICEFontSize,
      fontWeight: cUSTOMERSERVICEFontWeight,
      fontFamily: cUSTOMERSERVICEFontFamily,
      letterSpacing: cUSTOMERSERVICELetterSpacing,
    };
  }, [
    cUSTOMERSERVICEFontSize,
    cUSTOMERSERVICEFontWeight,
    cUSTOMERSERVICEFontFamily,
    cUSTOMERSERVICELetterSpacing,
  ]);

  return (
    <div
      className="services-customer-service"
      style={servicesCustomerServiceStyle}
    >
      <ServicesMoneyBack
        servicesMoneyBackServices="/servicescustomer-service.svg"
        servicesMoneyBackIconOverflow="unset"
        servicesMoneyBackIconPosition="relative"
      />
      <div className="customer-service-parent" style={frameDiv1Style}>
        <div className="customer-service" style={cUSTOMERSERVICEStyle}>
          {cUSTOMERSERVICE}
        </div>
        <div className="friendly-247-customer">{friendly247CustomerSuppor}</div>
      </div>
    </div>
  );
};

export default ServicesCustomerService1;
