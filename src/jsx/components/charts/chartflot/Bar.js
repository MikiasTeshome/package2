import React, { Component } from "react";
import { Bar} from "react-chartjs-2";

class BarChart extends Component {
   render() {
      const data = {
         labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "Sepetember",
            "October",
            "November",
         ],
         datasets: [
            {
               label: "My First dataset",
               data: [30,33, 30, 40, 42, 28, 27, 40, 40, 28, 27, 10, 12],
               borderColor: "rgba(52, 57, 87, 1)",
               borderWidth: "0",
               backgroundColor: this.props.color ? this.props.color : "#40189D",
            },
         ],
      };

      const options = {
         maintainAspectRatio: false,
         tooltips: {
            enabled: false,
         },
         legend: {
            display: false,
            labels: {
               usePointStyle: false,
            },
         },
         scales: this.props.label
            ? {
                 yAxes: [
                    {
                       ticks: {
                          beginAtZero: true,
                          min: 0,
                       },
                       gridLines: {
                          display: false,
                          drawBorder: false,
                       },
                    },
                 ],
                 xAxes: [
                    {
                       barPercentage: 0.7,
                       gridLines: {
                          display: false,
                          drawBorder: false,
                       },
                    },
                    { barPercentage: 0.1 },
                 ],
              }
            : {
                 xAxes: [{ display: false }],
                 yAxes: [{ display: false }],
              },
      };

      return (
         <>
            <Bar
               data={data}
               width={this.props.width ? this.props.width : 433}
               height={this.props.height ? this.props.height : 340}
               options={options}
            />
         </>
      );
   }
}

export default BarChart;
