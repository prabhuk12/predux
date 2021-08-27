import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { makeObservable, observable, computed, action, flow, autorun, reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { parse } from '@babel/parser';
import LineChartController from './LineChartController';
import Moveable from "react-moveable";


const LineChartView = observer(({ controller }) => (
  paintLineChart(controller)
));


function paintLineChart(controller) {
  //    console.log("Echart Observer invoked !!" + controller.name + " tooltip is set to " + controller.tt);

  //const ast = parse("({controller}) => (paintLineChart(controller))");
  //console.log("printing ast");
  //console.log(ast);


  return (
    <div>
    <div className="chart">
      <ReactEcharts
        option={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }],
          tooltip:
          {
            show: controller?.tt ? controller.tt : false
          }

        }}
        onEvents={{
          click: (e) => controller.toggleToolTip(e)
        }}
      />
    </div>

      <Moveable
            target={document.querySelector(".chart")}
            resizable={true}
            keepRatio={false}
            throttleResize={0}
            rotatable={true}
            renderDirections={["nw","n","ne","w","e","sw","s","se"]}
            edge={false}
            zoom={1}
            origin={true}
            originDraggable={true}
            originRelative={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            onResize={e => {
                const beforeTranslate = e.drag.beforeTranslate;
            
                //frame.translate = beforeTranslate;
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                //e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
            }}
            onRotate={ e => {
              e.target.style.transform = `rotate(${e.beforeRotate}deg)`;
          }} 

        />
    </div>
  );
}

export default LineChartView;