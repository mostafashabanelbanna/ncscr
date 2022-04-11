import { useLayoutEffect, useRef, useEffect } from "react";
import { OrgChart } from "d3-org-chart";
import * as d3 from "d3";

import { path } from "../../Path/media-path";

import defImg from "../../public/default-org-chart.png";

export const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  let chart = null;
  console.log(props.data);
  function addNode(node) {
    chart.addNode(node);
  }

  //   props.setClick(addNode);
  //   console.log(props.data)

  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      // console.log(d3)
      if (!chart) {
        chart = new OrgChart();
      }

      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 200)
        .nodeHeight((d) => 120)
        .onNodeClick((d, i, arr) => {
          //   props.onNodeClick(d);
        })
        .rootMargin(100)
        .nodeWidth((d) => 380)
        .nodeHeight((d) => 160)
        .childrenMargin((d) => 130)
        .compactMarginBetween((d) => 75)
        .compactMarginPair((d) => 80)
        .linkUpdate(function (d, i, arr) {
          d3.select(this)
            .attr("stroke", (d) =>
              d.data._upToTheRootHighlighted ? "#152785" : "lightgray"
            )
            .attr("stroke-width", (d) =>
              d.data._upToTheRootHighlighted ? 5 : 1.5
            );
          // .attr("stroke-dasharray", "4,4");

          if (d.data._upToTheRootHighlighted) {
            d3.select(this).raise();
          }
        })

        .nodeContent(function (d, i, arr, state) {
          const colors = [
            "#6E6B6F",
            "#18A8B6",
            "#F45754",
            "#96C62C",
            "#BD7E16",
            "#802F74",
          ];

          const imgSrc = () => {
            return d.data.photoPath
              ? `${path.OrgChart}/${d.data.photoPath}`
              : defImg;
            //   : null;
          };
          return `
                  <div class="outer-wrapper" style="padding-left:70px;padding-top:0px;background-color:none;width:${
                    d.width - 70
                  }px;height:${d.height}px">
                    <img style="border: 4px solid #295891;border-radius:50%;margin-right:-50px;margin-top:-60px" width=100 height=100 src=" ${imgSrc()}"/>

                    <div  style="border: 4px solid #295891;margin-left:-70px;margin-top:-40px;border-radius:5px;color:white;background-color:rgb(52, 52, 60);width:${
                      d.width
                    }px;  height:${d.height}px">
                      <div style="margin-right: 70px;padding-top:2px; margin-bottom: 8px; font-size: 22px;"> ${
                        d.data.name_AR
                      } </div>
                      <div style="margin-right: 70px;padding-top:2px; font-size: 22px;"> ${
                        d.data.managerName_AR
                      } </div>
                    </div>
                  </div>
                `;
        })
        .initialZoom(0.435275281648062)
        .render();

      if (chart.getChartState().allNodes) {
        chart.expandAll();

        console.log(chart.getChartState());
        // 0.435275281648062
      }
    }
  }, [props.data, d3Container.current]);

  return (
    <div>
      <div ref={d3Container} />
    </div>
  );
};
