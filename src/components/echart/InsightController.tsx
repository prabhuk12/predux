import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { observer } from "mobx-react-lite"; 
import PanelController from './PanelController';
import DIHelper from '../ts/DIHelper';
import SheetController from './SheetController';
import { user2, user3 } from '../ts/User';


class InsightController extends React.Component {

    idControllerMap:Map<string, SheetController> = observable.map({}, {deep:true});
    idMap2:Map<string, SheetController> = new Map<string, SheetController>();

    insightId:string;
    curSheet:number = 0;
    sheetIds:Array<string> = [];

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
        // registers itself

        DIHelper.getInstance().put(this.insightId, this);
        DIHelper.getInstance().put("insight", this.idMap2);
        
    }

    public addSheet(sc:SheetController)
    {
        this.idControllerMap.set(sc.sheetId, sc);
        this.idMap2.set(sc.sheetId, sc);
        this.sheetIds.push(sc.sheetId);
        console.log("IDMap now has.. " + this.idMap2.size)

        DIHelper.getInstance().put(this.insightId, this);


        const ic:InsightController = DIHelper.getInstance().get(this.insightId);
        if(ic == this)
            console.log("Same insight");


    }

    public removeSheet(sheetId:string)
    {
        // code this guy later
        //console.log("Total number of sheets " + this.idControllerMap.size);
        //console.log(sheetId + " <> "+ this.idControllerMap.has(sheetId));
        console.log("Total items on DIHelper " + DIHelper.getInstance().masterMap.size);
        console.log("Items on this map " + this.idControllerMap.size);
        console.log(this.idControllerMap.keys());
        const success = this.idControllerMap.delete(sheetId);
        DIHelper.getInstance().put(this.insightId, this);
        const ic:InsightController = DIHelper.getInstance().get(this.insightId);
        if(ic.idControllerMap == this.idControllerMap)
            console.log("Same insight");
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

    public loadClassAsString()
    {
        /*
        const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
        const obj2 = JSON.parse('public class Mango { public yum() { console.log(\'say yum\');  } }');
        console.log(obj.name);
        console.log("Loaded object 2");
        console.log(obj2);
        */
       //await import('https://raw.githubusercontent.com/prabhuk12/predux/master/src/components/ts/Title.tsx');
      // System
      //const h = new HelloWorld();
      //console.log(h.sayHello());
      console.log("user");
      console.log(user2.getFullName());
      console.log(user3.getFullName());
    }
}

export default InsightController;