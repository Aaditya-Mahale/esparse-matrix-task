import React from "react";
import "./BuyAgain.css";
import img1 from "../components/images/curology-j7pKVQrTUsM-unsplash 1.png";
import img2 from "../components/images/image 78.png";
import img3 from "../components/images/image 79.png";
import img4 from "../components/images/image 80.png";
import img5 from "../components/images/image 81.png";
const BuyAgain = () => {
  return (
    <>
      <div className="textbuyag">
        <div className="textbuy">Buy Again</div>
        <div>
          <button className="buyagainbutton">View All</button>
        </div>
      </div>
      <div className="buyagainimgs">
        <img id="imgbuyagord1" src={img1} alt="Your image description" />
        <img  src={img2} alt="Your image description" />
        <img  src={img3} alt="Your image description" />
        <img  src={img4} alt="Your image description" />
        <img  src={img5} alt="Your image description" />
      </div>
    </>
  );
};

export default BuyAgain;
