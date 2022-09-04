import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
   datasets: [
      {
         label: "My First dataset",
         data: [25, 20, 60, 41, 66, 45, 80],
         borderColor: "rgb(221, 47, 110)",
         borderWidth: "1",
         backgroundColor: "rgba(221, 47, 110, .5)",
      },
      {
         label: "My First dataset",
         data: [5, 25, 20, 41, 36, 75, 70],
         borderColor: "rgb(255, 184, 0)",
         borderWidth: "1",
         backgroundColor: "rgba(255, 184, 0, .5)",
      },
   ],
};

const options = {
   legend: false,
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: true,
               max: 100,
               min: 0,
               stepSize: 20,
               padding: 10,
            },
         },
      ],
      xAxes: [
         {
            ticks: {
               padding: 5,
            },
         },
      ],
   },
};
class DualArea extends Component {
   render() {
      return <Line data={data} options={options} height={150} />;
   }
}

export default DualArea;
