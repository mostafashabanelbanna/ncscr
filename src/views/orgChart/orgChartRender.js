import { useState, useEffect } from "react";
// import "./style.css";
import { OrgChartComponent } from "./orgChart";
import * as d3 from "d3";
import { Container } from "react-bootstrap";

import { fetchOrgChart } from "../../api";

const OrgChartRender = (props) => {
  const [data, setData] = useState(null);

  const [orgChart, setOrgChart] = useState([]);

  const getOrgChart = async () => {
    //fetch data
    const response = await fetchOrgChart().catch((err) => ("Error", err)); //handle errors
    if (response && response.data) {
      setOrgChart(response.data.result);
    }
  };

  useEffect(() => {
    getOrgChart();
  }, []);

  const noOrgChart = !orgChart || (orgChart && orgChart.length === 0); //check if no org Chart

  //   let addNodeChildFunc = null;

  //   function addNode() {
  //     const node = {
  //       nodeId: "new Node",
  //       parentNodeId: "O-6066",
  //     };

  //     addNodeChildFunc(node);
  //   }

  //   function onNodeClick(nodeId) {
  //     alert("clicked " + nodeId);
  //   }

  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv"
    ).then((data) => {
      setData(data);
    });
  }, [true]);
  //   if(!noOrgChart){

  //   } else {
  //       return <p>جاري التحميل</p>
  //   }

  return (
    <Container className="" fluid>
      <div className="col-12 my-3 px-3 container">
        <h2>الهيكل التنظيمي للمركز</h2>
        <div className="page_title"></div>
      </div>
      <div className=" bg-light">
        {/* Click node to trigger action in parent or &nbsp; */}
        {/* <button onClick={() => addNode()}>add node as root's child</button> */}
        <OrgChartComponent
          // setClick={(click) => (addNodeChildFunc = click)}
          // onNodeClick={onNodeClick}
          data={orgChart}
        />
      </div>
    </Container>
  );
};

export default OrgChartRender;
