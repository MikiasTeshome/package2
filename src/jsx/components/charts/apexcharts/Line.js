import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
		   render: false, //Set render state to false
         series: [
            {
               name: "Cycling",
               data: [50, 100, 35, 35, 0, 0, 80, 20, 40, 40, 40, 40],
            },
         ],
         options: {
            chart: {
               height: 350,
               type: "area",
               toolbar: {
                  show: false,
               },
            },
            dataLabels: {
               enabled: false,
            },

            stroke: {
               width: [4],
               colors: ["#1EA7C5"],
               curve: "straight",
            },
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
            },
            colors: ["#1EA7C5"],
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
            markers: {
               size: [8],
               strokeWidth: [0],
               strokeColors: ["#1EA7C5"],
               border: 0,
               colors: ["#1EA7C5"],
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
			renderContainer = <div id="chart">
				<ReactApexChart
				   options={this.state.options}
				   series={this.state.series}
				   type="area"
				   height={350}
				/>
			 </div>;
		}
	   
	   return (
		  renderContainer //Render the dom elements, or, when this.state == false, nothing.
		);
   }
}
   

export default ApexLine;
