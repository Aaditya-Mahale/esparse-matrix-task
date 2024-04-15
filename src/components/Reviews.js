import React, { useState } from "react";

import "./Reviews.css";
import img1 from "../components/images/image 77.png";
import img2 from "../components/images/image 83.png";
import img3 from "../components/images/image 82.png";
import img4 from "../components/images/image 84.png";
import img5 from "../components/images/image 78.png";
import img6 from "../components/images/image 85.png";
import img7 from "../components/images/Vector (3).png";
import BasicRating from "./RatingStar";

const Reviews = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <>
      <div className="reviewrow">
        <div className="reviewprouser">
          <div>
            <img id="imgreview"  src={img1} alt="Review" />
          </div>
          <div className="reviewprotitle">icasso Compatible with MacBook</div>
          <div className="reviewprorating">
            <BasicRating />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Write Reviews"
              className="userreviewtxt"
            />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Upload Video"
              className="userreviewtxt1"
              disabled={isDisabled}
            />
            <img id="pininmg" src={img7} alt="Pin" />
          </div>
        </div>

        <div className="reviewprouser">
          <div className="img2review0">
            <img id="imgreview" src={img2} alt="Review1" />
          </div>
          <div className="reviewprotitle">
            Women Printed Viscose Rayon Flared Kurta  (Multicolor)
          </div>
          <div className="reviewprorating">
            <BasicRating />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Write Reviews"
              className="userreviewtxt"
            />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Upload Video"
              className="userreviewtxt1"
              disabled={isDisabled}
            />
            <img id="pininmg" src={img7} alt="Pin" />
          </div>
        </div>
        <div className="reviewprouser">
          <div>
            <img id="imgreview" src={img3} alt="Review1" />
          </div>
          <div className="reviewprotitle">Fire-boltt Ninja Call Pro Max</div>
          <div className="reviewprorating">
            <BasicRating />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Write Reviews"
              className="userreviewtxt"
            />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Upload Video"
              className="userreviewtxt1"
              disabled={isDisabled}
            />
            <img id="pininmg" src={img7} alt="Pin" />
          </div>
        </div>
      </div>




      <div className="reviewrow">
        <div className="reviewprouser">
          <div>
            <img id="imgreview"  src={img4} alt="Review" />
          </div>
          <div className="reviewprotitle">Lava Blaze 5G (Glass Green, 4GB RAM......</div>
          <div className="reviewprorating">
            <BasicRating />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Write Reviews"
              className="userreviewtxt"
            />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Upload Video"
              className="userreviewtxt1"
              disabled={isDisabled}
            />
            <img id="pininmg" src={img7} alt="Pin" />
          </div>
        </div>

        <div className="reviewprouser">
          <div className="img2review0">
            <img id="imgreview1" src={img5} alt="Review1" />
          </div>
          <div className="reviewprotitle">
          Pentagon Troll Bag
          </div>
          <div className="reviewprorating">
            <BasicRating />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Write Reviews"
              className="userreviewtxt"
            />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Upload Video"
              className="userreviewtxt1"
              disabled={isDisabled}
            />
            <img id="pininmg" src={img7} alt="Pin" />
          </div>
        </div>
        <div className="reviewprouser">
          <div>
            <img id="imgreview" src={img6} alt="Review1" />
          </div>
          <div className="reviewprotitle">intern INT-38C-BK Acoustic Guitar Linden..</div>
          <div className="reviewprorating">
            <BasicRating />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Write Reviews"
              className="userreviewtxt"
            />
          </div>
          <div className="userreviewtx">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Upload Video"
              className="userreviewtxt1"
              disabled={isDisabled}
            />
            <img id="pininmg" src={img7} alt="Pin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
