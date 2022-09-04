import React, { Component } from "react";
import { Polar } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   datasets: [
      {
         data: [15, 18, 9, 6, 19],
         borderWidth: 0,
         backgroundColor: [
            "rgba(221, 47, 110, 1)",
            "rgba(43, 193, 85, 1)",
            "rgba(243, 87, 87, 1)",
            "rgba(47, 76, 221, 1)",
            "rgba(255, 184, 0, 1)",
         ],
      },
   ],
};

const options = {
   responsive: true,
   maintainAspectRatio: false,
};
class PolarChart extends Component {
   render() {
      return <Polar data={data} options={options} height={150} />;
   }
}

export default PolarChart;
