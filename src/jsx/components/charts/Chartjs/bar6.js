import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
         labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
         datasets: [
            {
               label: "Red",
               backgroundColor: "rgba(221, 47, 110, 1)",
               hoverBackgroundColor: "rgba(221, 47, 110, 0.5)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
            {
               label: "Green",
               backgroundColor: "rgba(43, 193, 85, 1)",
               hoverBackgroundColor: "rgba(43, 193, 85, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
            {
               label: "Blue",
               backgroundColor: "rgba(243, 87, 87, 1)",
               hoverBackgroundColor: "rgba(243, 87, 87, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
         ],
      };
      const options = {
         legend: {
            display: false,
         },
         title: {
            display: false,
         },
         tooltips: {
            mode: "index",
            intersect: false,
         },
         responsive: true,
         scales: {
            xAxes: [
               {
                  stacked: true,
               },
            ],
            yAxes: [
               {
                  stacked: true,
               },
            ],
         },
      };

      return (
         <>
            <Bar data={data} height={150} options={options} />
         </>
      );
   }
}

export default BarChart6;
