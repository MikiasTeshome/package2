import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexBar2 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
		   render: false, //Set render state to false
         series: [
            {
               data: [44, 55, 41, 64, 22, 43, 21],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 230,
               toolbar: {
                  show: false,
               },
            },
            plotOptions: {
               bar: {
                  horizontal: false,
                  dataLabels: {
                     position: "top",
                  },
               },
            },
			
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
            },
            dataLabels: {
               enabled: false,
               offsetX: -6,
               style: {
                  fontSize: "12px",
                  colors: ["#fff"],
               },
            },
            stroke: {
               show: false,
            },
            yaxis: {
               lines: {
                  show: false,
               },
            },
            xaxis: {
               show: false,
               categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
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
				   type="bar"
				   height={350}

				/>
			 </div>;
		}
	   
	   return (
		  renderContainer //Render the dom elements, or, when this.state == false, nothing.
		);
   }
}
export default ApexBar2;
