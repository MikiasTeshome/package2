import React from "react";

import { Row, Col, Card } from "react-bootstrap";
import {
   Sparklines,
   SparklinesLine,
   SparklinesCurve,
   SparklinesBars,
   SparklinesSpots,
} from "react-sparklines";

import PageTitle from "../../../layouts/PageTitle";

import SparkNagetivePositive from "./NagetivePositive";

const sampleData = [64, 24, 40, 76, 19,0,2,46, 65, 12, 10,6, 15, 57, 35, 81, 86, 12, 12, 
					21, 53, 44, 2, 1, 58, 9, 61, 64, 42, 92, 58, 9, 34, 47, 89,  52, 3,
					69, 33,  2,   60,  71,  71,  22,  65,  70, 31,  81,  36,  89,  ];
					
const sampleData1 = [73, 53, 50, 67, 3, 56, 19, 59, 37, 32, 40, 26, 71, 19, ];

function ChartSparkline() {
   return (
      <>
         <PageTitle headingPara="sparkline" motherMenu="Charts" activeMenu="Sparkline" />
         <Row>
            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Simple</Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData}>
                        <SparklinesLine color="#ffbc0e"/>
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Simple Curve</Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData}>
                        <SparklinesCurve color="#DD2F6E "/>
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Customizable</Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData}>
                        <SparklinesLine color="#f00" />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                 <Card.Body >
                     <Sparklines data={sampleData}>
                        <SparklinesLine style={{ fill: "none" }} />
                        <SparklinesSpots  />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData}>
                        <SparklinesLine color="#56b45d" />
                        <SparklinesSpots style={{ fill: "#56b45d" }} />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData} margin={6}>
                        <SparklinesLine 
                           style={{
                              strokeWidth: 3,
                              stroke: "#DD2F6E",
                              fill: "none",
                           }}
                        />
                        <SparklinesSpots
                           size={4}
                           style={{
                              stroke: "#DD2F6E",
                              strokeWidth: 3,
                              fill: "white",
                           }}
                        />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bars</Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData}>
                        <SparklinesBars style={{ fill: "#41c3f9" }} />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Real world </Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData}>
                        <SparklinesLine
                           style={{
                              strokeWidth: 3,
                              stroke: "#ee96b6",
                              fill: "none",
                           }}
                        />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col> 
			<Col xl={4}>
               <Card>
                  <Card.Header>
                     <Card.Title>Real world </Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <Sparklines data={sampleData1}>
						<SparklinesBars style={{ fill: "#2bc155"}} />
					</Sparklines>
					
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Nagetive Positive</Card.Title>
                  </Card.Header>
                  <Card.Body >
                     <SparkNagetivePositive   />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   );
}

export default ChartSparkline;
