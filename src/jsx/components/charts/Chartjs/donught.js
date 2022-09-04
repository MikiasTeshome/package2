import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
   labels: ["Red", "Blue", "Other"],
   weight: 5,
   defaultFontFamily: "Poppins",
   datasets: [
      {
         data: [45, 25, 20],
         borderWidth: 3,
         borderColor: "rgba(255,255,255,1)",
         backgroundColor: [
            "rgba(221, 47, 110, 1)",
            "rgba(43, 193, 85, 1)",
            "rgba(243, 87, 87, 1)",
         ],
         hoverBackgroundColor: [
            "rgba(221, 47, 110, 0.9)",
            "rgba(43, 193, 85, .9)",
            "rgba(243, 87, 87, .9)",
         ],
      },
   ],
};

const options = {
   weight: 1,
   cutoutPercentage: 70,
   responsive: true,
   maintainAspectRatio: false,
};

class ChartDoughnut extends Component {
   render() {
      return <Doughnut data={data} options={options} height={150} />;
   }
}

export default ChartDoughnut;
