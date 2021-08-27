import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { makeObservable, observable, computed, action, flow,autorun,reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { parse } from '@babel/parser';
import LineChartController from './LineChartController';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SheetController from './SheetController';
import PanelView from './PanelView';
import DIHelper from '../ts/DIHelper';



const SheetView = observer(({controller}) => (
    paintSheet(controller)
  ));
  
  function paintSheet(controller)
  {
    if(typeof(controller) != "undefined")
    {
    //console.log("Echart Observer invoked !!" + controller.sheetName);

    //const ast = parse("({controller}) => (paintLineChart(controller))");
    //console.log("printing ast");
    //console.log(ast);

    // paint all the panels
    const titles = [];
    const content = [];

    const panelIdArray = Array.from(controller.idControllerMap.keys());

    for (let index = 0; index < panelIdArray.length; index++) 
    {
      const thisId = panelIdArray[index];
      const thisPanelController = DIHelper.getInstance().get(thisId);

      const thisTab = <Tab>Panel {index}</Tab>;
      titles.push(thisTab);

      const panelId = thisId;
      const props = {"controller":thisPanelController};

      content.push(<TabPanel><PanelView {...props}/></TabPanel>);
    }

    // paint the view and return it
      // lay the tabs
        return (
        <div>
          <button onClick={() => {controller.addPanelClick()}}>Add Panel</button>
                <Tabs>
        <TabList>
            {titles}
        </TabList>
            {content};
      </Tabs>
      </div>);
}
  }

  



  
export default SheetView;