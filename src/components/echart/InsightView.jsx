import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { makeObservable, observable, computed, action, flow,autorun,reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { parse } from '@babel/parser';
import LineChartController from './LineChartController';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SheetController from './SheetController';
import SheetView from './SheetView';
import DIHelper from '../ts/DIHelper';



const InsightView = observer(({controller}) => (
    paintInsight(controller)
  ));
  
  function paintInsight(controller)
  {
    if(typeof(controller) != "undefined")
    {
      console.log("Echart Observer invoked Insight !!" + controller.insightId);

      //const ast = parse("({controller}) => (paintLineChart(controller))");
      //console.log("printing ast");
      //console.log(ast);

      // paint all the panels
      const titles = [];
      const content = [];

      const sheetIdArray = Array.from(controller.idControllerMap.keys());
      for (let index = 0; index < sheetIdArray.length; index++) 
      {
        console.log("inside the  forloop" );
        const thisId = sheetIdArray[index].toString();
        console.log(thisId);
        const thisSheetController = DIHelper.getInstance().get(thisId);

        const thisTab = <Tab>Sheet - {index} <button onClick={() => {console.log("Sheet gone !!" );console.log(thisId); controller.removeSheet(thisId);}}>X</button></Tab>;
        titles.push(thisTab);

        //const contr:LineChartController = new (LineChartController as any)(true, "panel" + {index});
        const sheetId = thisId;
        const props = {"controller":thisSheetController};

        content.push(<TabPanel><SheetView {...props}/></TabPanel>);
      }

      // paint the view and return it
        // lay the tabs
          return (
          <div>
            <button onClick={() => {controller.addSheetClick();}}>Add Sheet</button>
            <button onClick={() => {controller.loadClassAsString();}}>Load Class</button>
                  <Tabs>
          <TabList>
              {titles}
          </TabList>
              {content};
        </Tabs>
        </div>);
    }
    else
    {
      return <h2>Nothing to see please move on</h2>
    }

  }

  



  
export default InsightView;