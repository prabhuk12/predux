import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { makeObservable, observable, computed, action, flow,autorun,reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { parse } from '@babel/parser';
import LineChartController from './LineChartController';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LineChartView from './LineChartView';
import Moveable from "react-moveable";

const PanelView = observer(({controller}) => (
    paintPanel(controller)
  ));
  
  function paintPanel(controller)
  {

    if(typeof(controller) != "undefined")
    {
      
      // need a better way to align the line chart controller
      // this is why the shit keeps getting added
      console.log(controller.mode);

      return (
        <div>
          <h1>{controller.panelId}</h1>
          <button onClick={()=> {controller.removePanel();}}>X</button>
          <LineChartView controller={controller.lcontroller}/> 
        </div>
      )
      }
      else return(<div>No Panels yet</div>)
  }
  
export default PanelView;