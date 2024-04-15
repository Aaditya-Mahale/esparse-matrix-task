import React from "react";
import SimpleBarChart from "./Components/Graph";
import GaugeValueRangeNoSnap from "./Components/Gauge";
import "./EditDashboard.css";
import Stats1 from "./Components/Stats1";
import ColorSlider from "./Components/Stats2";
const EditDashboard = () => {
  return (
    <div className="EditDashboard">
      <div className="graphcompo">
        <div className="graphchart">
          <SimpleBarChart />
        </div>
        <div>
          <GaugeValueRangeNoSnap />
          
        </div>
      </div>
      <div className="statsdashboard">
        <div><Stats1/></div>
        <div><ColorSlider/></div>
      </div>
    </div>
  );
};

export default EditDashboard;
