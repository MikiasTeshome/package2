import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexRedialBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
		   render: false,
         series: [81],
         options: {
            chart: {
               height: 300,
               type: "radialBar",
               offsetY: -10,
            },
            plotOptions: {
               radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                     name: {
                        fontSize: "16px",
                        color: undefined,
                        offsetY: 120,
                     },
                     value: {
                        offsetY: 0,
                        fontSize: "34px",
                        color: "black",
                        formatter: function (val) {
                           return val + "%";
                        },
                     },
                  },
               },
            },
            fill: {
               type: "gradient",
               colors: "#6EC51E",
               gradient: {
                  shade: "dark",
                  shadeIntensity: 0.15,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 65, 91],
               },
            },
            stroke: {
               dashArray: 4,
               colors: "#6EC51E",
            },
            labels: [""],
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
               type="radialBar"
               height={350}
            />
         </div>;
		}
			
        return (
				
			renderContainer //Render the dom elements, or, when this.state == false, nothing.
		);
	}
}
export default ApexRedialBar;
