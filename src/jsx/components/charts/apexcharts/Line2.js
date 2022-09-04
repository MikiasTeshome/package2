import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine2 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
		  render: false, //Set render state to false
         series: [
            {
               name: "Yoga",
               data: [65, 65, 65, 120, 120, 80, 120, 100, 100, 120, 120, 120],
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
               colors: ["#00E396"],
               curve: "straight",
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
            colors: ["#00E396"],
            markers: {
               size: [8],
               strokeWidth: [0],
               strokeColors: ["#00E396"],
               border: 0,
               colors: ["#00E396"],
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


export default ApexLine2;
