import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { observer } from "mobx-react-lite"; 
import PanelController from './PanelController';
import DIHelper from '../ts/DIHelper';
import SheetController from './SheetController';


class InsightController extends React.Component {

    idControllerMap:Map<string, SheetController>;
    insightId:string;
    curSheet:number = 0;

    // it is almost like I need to convert the tt to an observable 
    // and then observe it to render
    
    public constructor(insightId:string)
    {
        super(insightId);
        makeObservable(this, {
            idControllerMap:observable,
            addSheet: action,
            removeSheet: action
        })
        this.insightId = insightId;
        this.idControllerMap = new Map<string, SheetController>();
        // registers itself

        DIHelper.getInstance().put(this.insightId, this);
        DIHelper.getInstance().put("insight", this);
        
    }

    public addSheet(sc:SheetController)
    {
        this.idControllerMap.set(sc.sheetId, sc);
        DIHelper.getInstance().put(this.insightId, this);
    }

    public removeSheet(sheetId:string)
    {
        // code this guy later
        //console.log("Total number of sheets " + this.idControllerMap.size);
        //console.log(sheetId + " <> "+ this.idControllerMap.has(sheetId));
        console.log(this.idControllerMap.keys());
        const success = this.idControllerMap.delete(sheetId);
        DIHelper.getInstance().put(this.insightId, this);
    }

    // adds a panel on click
    public addSheetClick()
    {
        const ic = this;
        const sc = new SheetController(ic.insightId,  "Sheet" + this.curSheet);
        this.curSheet++;
        // would the panel view be added here ?
        ic.addSheet(sc);
    }
}


export default InsightController;