import React from "react";
import "./Servenq.css";
import img1 from "./images/Rectangle 20.png";
import img2 from "./images/Place Marker.png";
import img3 from "./images/Star.png";
import img4 from "./images/Rectangle 20.png";
import img5 from "./images/image 74.png";
import img6 from "./images/image 75.png";
import img7 from "./images/image 76.png";
import img8 from "./images/Vector (2).png";
import img9 from "./images/Star (1).png";
import img10 from "./images/Facebook Like.png";
import img11 from "./images/Comments.png";
import img12 from "./images/Share.png";

import Form from "react-bootstrap/Form";

const Servenq = () => {
  return (
    <div className="Servenq">
      <div className="blockdivs1">
        <div className="rectanglepicdiv">
          <img src={img1} alt="pic" />
        </div>
        <div className="desrect1">
          <div className="desrectittle1">
            Southern Express Packers And Movers
          </div>
          <div className="desrectittle11">
            <img src={img2} alt="pic" />
            Nigadi, Pune
          </div>
          <div className="ratingser">
            <img src={img3} alt="pic" />
            <img src={img3} alt="pic" />
            <img src={img3} alt="pic" />
            <img src={img3} alt="pic" />
            <img src={img3} alt="pic" />
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              (195 Rating)
            </span>
          </div>
          <div className="descretbuttonse">
            <button className="descretbuttons">Show Number</button>
            <button className="descretbuttons1">Send Enquiry</button>
          </div>
        </div>
      </div>

      <div className="rectservenq">
        <div className="imgenq">
          <img src={img4} alt="pic" />
          <img src={img5} alt="pic" />
          <img src={img6} alt="pic" />
          <img src={img7} alt="pic" />
        </div>
        <div className="rowmiddleerev">
          <div className="goodenq1">
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              {" "}
              Services
            </span>
            <br></br>

            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
                marginLeft: "20px",
              }}
            ></span>
            <br></br>
            <span>
              <Form>
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      style={{ marginRight: "10px" }} // Adjust margin as needed for the checkbox
                    />
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Household Goods
                    </span>
                  </div>
                ))}
              </Form>
            </span>
            <span>
              <Form>
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      style={{ marginRight: "10px" }} // Adjust margin as needed for the checkbox
                    />
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      All India
                    </span>
                  </div>
                ))}
              </Form>
            </span>
            <span>
              <Form>
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      style={{ marginRight: "10px" }} // Adjust margin as needed for the checkbox
                    />
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Within City
                    </span>
                  </div>
                ))}
              </Form>
            </span>
          </div>
          <div className="goodenq2">
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              {" "}
              Goods Type
            </span>
            <br></br>

            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
                marginLeft: "20px",
              }}
            ></span>
            <br></br>
            <span>
              <Form>
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      style={{ marginRight: "10px" }} // Adjust margin as needed for the checkbox
                    />
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Commercial Goods
                    </span>
                  </div>
                ))}
              </Form>
            </span>
            <span>
              <Form>
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      style={{ marginRight: "10px" }} // Adjust margin as needed for the checkbox
                    />
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Household Goods
                    </span>
                  </div>
                ))}
              </Form>
            </span>
            <span>
              <Form>
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      style={{ marginRight: "10px" }} // Adjust margin as needed for the checkbox
                    />
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Industrial Goods
                    </span>
                  </div>
                ))}
              </Form>
            </span>
          </div>
          <div className="goodenq">
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              {" "}
              Status
            </span>
            <br></br>

            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
                marginLeft: "20px",
              }}
            ></span>
            <br></br>
            <span>
              <Form>
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className="mb-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      style={{ marginRight: "10px" }} // Adjust margin as needed for the checkbox
                    />
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      IBA Approved
                    </span>
                  </div>
                ))}
              </Form>
            </span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="quickinfoss" style={{ margin: "25px 25px 25px 10px" }}>
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "21px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Quick Information
          </span>
          <div className="bullet-points-container">
            <ul>
              <li className="bullet-point">
                Mode of Payment: Cash ,Debit Card
              </li>
              <li className="bullet-point">Year of Establishment : 2009</li>
              <li className="bullet-point">
                Timings : Mon - Sun (Open 24 Hrs)
              </li>
            </ul>
          </div>
        </div>
        <div className="reviewserv">
          <span className="ratesqrt1">Rating & Reviews</span>
          <div className="firsqrtb">
            <span className="ratingsqr1">
              <div className="ratingtex1">4.6</div>
            </span>
            <span className="ratesqrt1_1">195 Ratings</span>
            <br></br>
            <br></br> <br></br> <br></br> <br></br> <br></br>
          </div>
          <span className="ratesqrt2">Rate your Review</span>
          <div className="ratestarpicn">
            <img src={img8} alt="star" />
            <img src={img8} alt="star" />
            <img src={img8} alt="star" />
            <img src={img8} alt="star" />
            <img src={img8} alt="star" />
          </div>
          <br></br>
          <span className="ratesqrt3">User Reviews</span>
          <div className="secqrtb">
            <span className="ratingsqr2">
              <div className="ratingtex2">VR</div>
            </span>
            <br></br>
            <br></br>

            <span className="ratesqrt2_1">Vishal Rajput</span>
          </div>
          <div className="ratestarpicn1">
            <img src={img9} alt="star" />
            <img src={img9} alt="star" />
            <img src={img9} alt="star" />
            <img src={img9} alt="star" />
            <img src={img9} alt="star" />
          </div>
          <span className="comen1">
            The furniture was the right fit for our venue, excellent quality,
            sturdy and durable. The customer service was exceptional in all
            aspects, especially when helping to decide on the correct furniture
            and specific measurements for the unique spaces within a brand new
            venue. We were very pleased with the speed of delivery.
          </span>
          <div className="sharehelplogor">
            <div>
              <img src={img10} alt="star" />
              Helpful
            </div>
            <div>
              <img src={img11} alt="star" />
              Comment
            </div>
            <div>
              <img src={img12} alt="star" />
              Share
            </div>
          </div>
          <div className="aboutrr">
            <br></br>
            <span className="aboutrr1">About Us</span>
            <br></br>
            <br></br>
            <span className="aboutrr2">
              Placing India in the league league of developed nations, with
              world class quality & cutting edge technology, Rawat is evolving
              as flag bearers in furniture manufacturing for the innovative
              architects, interior designers, commercial and residential
              projects and the aspiring & experimental young Indians. With the
              capacity to manufacture 20000sq.ft. furniture daily and
              integration of technology with online customized design software,
              brand Rawat truly embodies ‘Furniture Engineering’. They are the
              first and only engineered furniture company in India to integrate
              advanced Manufacturing technology with user friendly, online and
              customized design software for customer to make and buy his own
              furniture. What makes them different from others is our online
              furniture planning, presentation, pricing and production system
              which provides unlimited customisation, which is need of the hour.
              They have named the software ‘Freedom’. It is the first of its
              kind in India and gives furniture buying a new dimension. Through
              technology, we can provide perfectly engineered products with
              beauty, larger variety & better affordability!! Rawat offers
              single-source solution for all your furniture needs with
              customization for all as our strength
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servenq;
