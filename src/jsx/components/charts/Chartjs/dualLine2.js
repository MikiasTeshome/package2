import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
    type: 'line',
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
   datasets: [
      {
         label: "My First dataset",
         data: [25, 20, 60, 41, 66, 45, 80],
         borderColor: "rgba(221, 47, 110, 1)",
         borderWidth: "2",
         pointHoverRadius: 10,
		 pointBorderWidth: 5,
         backgroundColor: "transparent",
		 pointBorderColor: "rgba(221, 47, 110, 1)",
         pointBackgroundColor: "rgba(221, 47, 110, 1)",
      },
      {
         label: "My First dataset ",
         data: [5, 20, 15, 41, 35, 65, 80],
         borderColor: "rgba(255, 184, 0, 1)",
         borderWidth: "2",
         backgroundColor: "transparent",
         pointHoverRadius: 10,
         pointBorderWidth: 5,
         pointBorderColor: "rgba(254, 176, 25, 1)",
         pointBackgroundColor: "rgba(254, 176, 25, 1)",
      },
   ],
};

const options = {
   legend: false,
   tooltips: {
      intersect: false,
   },
   hover: {
      // mode: "nearest",
      intersect: true,
   },
   scales: {
      yAxes: [{
			ticks: {
				beginAtZero: true, 
				max: 100, 
				min: 0, 
				stepSize: 20, 
				padding: 10
			}
		}],
		xAxes: [{ 
			ticks: {
				padding: 5
			}
		}]
	},
   elements: {
      point: {
         radius: 2,
      },
   },
};
class DualLine2 extends Component {
   render() {
      return (
         <>
            <Line data={data} options={options} height={150} />
         </>
      );
   }
}

export default DualLine2;
