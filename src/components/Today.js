import Today1 from "./Today1";
import FlashSaleTimer from "./FlashSaleTimer";
import "./Today.css";

const Today = () => {
  return (
    <div className="frame-parent23">
      <div className="frame-parent24">
        <Today1
          timePeriodLabel="Today’s"
          promotionLabel="Flash Sales"
          propHeight="103px"
          propGap="24px"
        />
        <FlashSaleTimer flashSaleTimerPosition="relative" />
      </div>
      <div className="fill-with-left-arrow-parent">
        <img
          className="fill-with-left-arrow1"
          alt=""
          src="/fill-with-left-arrow.svg"
        />
        <img
          className="fill-with-left-arrow1"
          alt=""
          src="/fill-with-right-arrow.svg"
        />
      </div>
    </div>
  );
};

export default Today;
