import React from "react";
import "./Orders.css";
import img1 from "../components/images/image 77.png";
import img2 from "../components/images/image 83.png";
import img3 from "../components/images/image 84.png";
import img4 from "../components/images/image 82.png";
import img5 from "../components/images/image 85.png";
import img6 from "../components/images/oui_arrow-up.png";

const Orders = () => {
  return (
    <>
      <div className="ordpro">
        <div className="imgord">
          {" "}
          <img id="img1" src={img1} alt="Your image description" />
        </div>
        <div className="textconord">
          <div className="textord"> icasso Compatible with MacBook</div>
          <div className="text1ord">Delivered 21 February</div>
        </div>
        <div className="img1ord">
          <img id="img6" src={img6} alt="Your image description" />
        </div>
      </div>
      <br></br>
      <div className="ordpro">
        <div className="imgord">
          {" "}
          <img src={img2} alt="Your image description" />
        </div>
        <div className="textconord">
          <div className="textord"> Women Printed Viscose Rayon Flared Kurta  (Multicolor)</div>
          <div className="text1ord"> Delivered 1 February</div>
        </div>
        <div className="img1ord">
          <img id="img6" src={img6} alt="Your image description" />
        </div>
      </div>
      <br></br>
      <div className="ordpro">
        <div className="imgord">
          {" "}
          <img src={img3} alt="Your image description" />
        </div>
        <div className="textconord">
          <div className="textord"> Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB Storage) </div>
          <div className="text1ord"> Delivered 31 January</div>
        </div>
        <div className="img1ord">
          <img id="img6" src={img6} alt="Your image description" />
        </div>
      </div>
      <br></br>
      <div className="ordpro">
        <div className="imgord">
          {" "}
          <img src={img4} alt="Your image description" />
        </div>
        <div className="textconord">
          <div className="textord"> Fire-boltt Ninja Call Pro Max</div>
          <div className="text1ord"> Delivered 26 December</div>
        </div>
        <div className="img1ord">
          <img id="img6" src={img6} alt="Your image description" />
        </div>
      </div>
      <br></br>
      <div className="ordpro">
        <div className="imgord">
          {" "}
          <img src={img5} alt="Your image description" />
        </div>
        <div className="textconord">
          <div className="textord"> intern INT-38C-BK Acoustic Guitar Linden Wood Rosewood Right Hand Orientation  (Black)</div>
          <div className="text1ord">Delivered 28 November</div>
        </div>
        <br></br>
        <div className="img1ord">
          <img id="img6" src={img6} alt="Your image description" />
        </div>
      </div>
    </>
  );
};

export default Orders;
