import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { observer } from "mobx-react-lite"; 
import PanelController from './PanelController';
import DIHelper from '../ts/DIHelper';
import InsightController from './InsightController';



class SheetController extends React.Component {

    idControllerMap:Map<string, PanelController> = new Map<string, PanelController>();

    sheetName = "sh"; // also sheet id
    sheetId = "";
    insightId:string;
    curPanel:number = 0;

    // it is almost like I need to convert the tt to an observable 
    // and then observe it to render
    
    public constructor(insightId:string, name:string)
    {
        super(name);
        makeObservable(this, {
            sheetName:observable,
            idControllerMap:observable,
            addPanel: action,
            removePanel: action
        })
        this.sheetName = name;
        this.insightId = insightId;
        this.sheetId = insightId + "." + this.sheetName;
        // registers itself
        DIHelper.getInstance().put(this.sheetId, this);
    }

    public addPanel(pc:PanelController)
    {
        this.idControllerMap.set(pc.panelId, pc);
        console.log(" Panel id added " + pc.panelId);
    }

    public removePanel(panelId:string)
    {
        // code this guy later
        //this.panels.re
        // use the sheet id to get to the sheet controller
        // and then remove easy
        const success = this.idControllerMap.delete(panelId);
        const ic:InsightController = DIHelper.getInstance().get(this.insightId);

        console.log("Total items on DIHelper " + DIHelper.getInstance().masterMap.size);
        console.log("Total items on insightcontroller " + DIHelper.getInstance().get("insight").size);
        //console.log("number of sheets " + ic.idControllerMap.size + "<>" + this.ic.idControllerMap.size);
        if(this.idControllerMap.size == 0)
        {
            console.log("Removing from insight now " + ic.sheetIds.length);
            ic.removeSheet(this.sheetId);
        }
    }

    // adds a panel on click
    public addPanelClick()
    {
        const pc = new PanelController(this.insightId, this.sheetName, this.curPanel);

        this.curPanel++;
        // would the panel view be added here ?
        this.addPanel(pc);
    }

}


export default SheetController;