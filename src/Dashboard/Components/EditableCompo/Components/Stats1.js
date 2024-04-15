import React from "react";
import "./Stats1.css";
import img1 from "..//../../../components/images/Group 6.png";
import img2 from "..//../../../components/images/Vector (4).png";
import img3 from "..//../../../components/images/Group 7.png";
import img4 from "..//../../../components/images/Group 8.png";
import img5 from "..//../../../components/images/image 1.png";
import img6 from "..//../../../components/images/image 2.png";

function Stats1() {
  return (
    <div className="Stats1">
      <div className="statnum">
        <div className="statnum1">
          <div>
            {" "}
            <img src={img1} alt="Description of the image" />
          </div>
          <div>
            <div>Total Visits</div>
            <div>10.8m</div>
          </div>
        </div>
        <div className="statnum1">
          <div>
            {" "}
            <img src={img2} alt="Description of the image" />
          </div>
          <div>
            <div>Total Sales </div>
            <div>100,345</div>
          </div>
        </div>
        <div className="statnum1">
          <div>
            {" "}
            <img src={img3} alt="Description of the image" />
          </div>
          <div>
            <div>Total Made </div>
            <div>$200k</div>
          </div>
        </div>
        <div className="statnum1">
          <div>
            {" "}
            <img src={img4} alt="Description of the image" />
          </div>
          <div>
            <div>Orders Completed</div>
            <div>98,771</div>
          </div>
        </div>
      </div>
      <div className="statnum2">
        Top Products
        <div className="statnum2_2">
            <div className="productimgstat">
        <img src={img5} alt="Description of the image" />
       
        Samsung S20 128 GB
      
        Pink - 50 orders
        </div>
        <div className="statdes">Inventory 700</div>
        <div className="statdes">Sale $1,000.60</div>
        <div className="statdes">Price $1,300.92</div>
        <div className="statdes"> Today $17,000.92</div>
        </div>
      </div>
      <div className="statnum2">
        
        <div className="statnum2_2">
            <div className="productimgstat">
        <img src={img6} alt="Description of the image" />
       
        Samsung S21 256 GB
      
        Black - 25 orders
        </div>
        <div className="statdes">Inventory 200</div>
        <div className="statdes">Sale $1,200.60</div>
        <div className="statdes">Price $1,500.92</div>
        <div className="statdes"> Today $12,000.82</div>
        </div>
      </div>
    </div>
  );
}

export default Stats1;
