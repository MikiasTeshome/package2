import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine4 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
		  render: false, //Set render state to false
         series: [
            {
               name: "Yoga",
               data: [65, 65, 65, 120, 120, 80, 120, 100, 100, 120, 120, 120],
            },
            {
               name: "Cycling",
               data: [50, 100, 35, 35, 0, 0, 80, 20, 40, 40, 40, 40],
            },
            {
               name: "Running",
               data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110, 60],
            },
         ],
         options: {
            chart: {
               height: 350,
               type: "line",
               toolbar: {
                  show: false,
               },
            },
            dataLabels: {
               enabled: false,
            },

            stroke: {
               width: [4, 4, 4],
               colors: ["#DD2F6E", "#1EA7C5", "#FF9432"],
               curve: "straight",
            },
            legend: {
               show: false,
            },
            xaxis: {
               type: "text",
               categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
               ],
            },
            colors: ["##DD2F6E", "#1EA7C5", "#FF9432"],

            markers: {
               size: [8, 8, 6],
               strokeWidth: [0, 0, 4],
               strokeColors: ["#DD2F6E", "#1EA7C5", "#FF9432"],
               border: 0,
               colors: ["#DD2F6E", "#1EA7C5", "#fff"],
               hover: {
                  size: 10,
               },
            },
            yaxis: {
               title: {
                  text: "",
               },
            },
         },
      };
   }

	componentDidMount() {
	  setTimeout(function() { //Start the timer
		  this.setState({render: true}) //After 1 second, set render to true
	  }.bind(this), 1000)
	}

   render() {
	   let renderContainer = false;
	   
	   if(this.state.render) {
			renderContainer =  <div id="chart">
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="line"
               height={350}
            />
         </div>;
		}
	   
	   return (
		  renderContainer //Render the dom elements, or, when this.state == false, nothing.
		);
   }
}
export default ApexLine4;
