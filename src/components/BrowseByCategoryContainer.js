import { useMemo } from "react";
import "./BrowseByCategoryContainer.css";

const BrowseByCategoryContainer = ({
  sectionTitle,
  sectionSubtitle,
  propGap,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="frame-parent25" style={frameDiv6Style}>
      <div className="frame-parent26">
        <div className="instance-group">
          <div className="rectangle-container">
            <div className="instance-item" />
          </div>
          <div className="categories1">{sectionTitle}</div>
        </div>
        <div className="browse-by-category">{sectionSubtitle}</div>
      </div>
      <div className="fill-with-left-arrow-group">
        <img
          className="fill-with-left-arrow2"
          alt=""
          src="/fill-with-left-arrow.svg"
        />
        <img
          className="fill-with-left-arrow2"
          alt=""
          src="/fill-with-right-arrow.svg"
        />
      </div>
    </div>
  );
};

export default BrowseByCategoryContainer;
