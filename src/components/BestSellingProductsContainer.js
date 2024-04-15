import Today1 from "./Today1";
import ButtonPrimaryHoverNo from "./ButtonPrimaryHoverNo";
import "./BestSellingProductsContainer.css";

const BestSellingProductsContainer = () => {
  return (
    <div className="frame-parent28">
      <Today1
        timePeriodLabel="This Month"
        promotionLabel="Best Selling Products"
        propHeight="unset"
        propGap="20px"
      />
      <ButtonPrimaryHoverNo
        viewAllProducts="View All"
        buttonPrimaryHoverNoPosition="unset"
        buttonPrimaryHoverNoTop="unset"
        buttonPrimaryHoverNoLeft="unset"
        buttonPrimaryHoverNoBackgroundColor="#db4444"
        buttonPrimaryHoverNoPadding="var(--padding-base) var(--padding-29xl)"
      />
    </div>
  );
};

export default BestSellingProductsContainer;
