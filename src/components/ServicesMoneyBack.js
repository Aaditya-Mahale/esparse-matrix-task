import { useMemo } from "react";
import "./ServicesMoneyBack.css";

const ServicesMoneyBack = ({
  servicesMoneyBackServices,
  servicesMoneyBackIconOverflow,
  servicesMoneyBackIconPosition,
}) => {
  const servicesMoneyBackIconStyle = useMemo(() => {
    return {
      overflow: servicesMoneyBackIconOverflow,
      position: servicesMoneyBackIconPosition,
    };
  }, [servicesMoneyBackIconOverflow, servicesMoneyBackIconPosition]);

  return (
    <img
      className="servicesmoney-back-icon"
      alt=""
      src={servicesMoneyBackServices}
      style={servicesMoneyBackIconStyle}
    />
  );
};

export default ServicesMoneyBack;
