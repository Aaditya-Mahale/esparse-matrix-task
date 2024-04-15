import FiveStar from "./FiveStar";
import "./BookshelfContainer.css";

const BookshelfContainer = () => {
  return (
    <div className="small-bookself-parent">
      <div className="small-bookself">Small BookSelf</div>
      <div className="wrapper3">
        <div className="small-bookself">$360</div>
      </div>
      <div className="five-star-parent3">
        <FiveStar />
        <div className="div40">(65)</div>
      </div>
    </div>
  );
};

export default BookshelfContainer;
