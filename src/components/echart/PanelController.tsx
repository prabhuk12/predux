import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { observer } from "mobx-react-lite"; 
import DIHelper from '../ts/DIHelper';
import LineChartController from './LineChartController';
import SheetController from './SheetController';
import InsightController from './InsightController';


class PanelController extends React.Component {

    sheetName = "sh"; // also sheet id
    insightId:string;
    panelId:string;
    mode:string;
    lcontroller: LineChartController;

    // it is almost like I need to convert the tt to an observable 
    // and then observe it to render
    
    public constructor(insightId:string, sheetName:string, panelNum: number)
    {
        super(insightId);
        makeObservable(this, {
            sheetName:observable,
            changeMode: action
        })
        this.sheetName = sheetName;
        this.insightId = insightId;
        this.panelId = insightId + "." + sheetName + "." +  panelNum;
        this.mode = "design";
        this.lcontroller = new LineChartController(true, this.panelId);
        // registers itself
        DIHelper.getInstance().put(this.panelId, this);

    }

    public removePanel()
    {
        const sheetId = this.insightId + "." + this.sheetName;
        const sc:SheetController = DIHelper.getInstance().get(sheetId);
        sc.removePanel(this.panelId);
        //const ic:InsightController = DIHelper.getInstance().get("insight");
        //console.log("sheets in insight" + ic.idControllerMap.size);

    }

    public changeMode(newMode:string)
    {
        this.mode = newMode;
    }
    
}


export default PanelController;