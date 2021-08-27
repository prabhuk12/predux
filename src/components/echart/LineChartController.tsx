import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { observer } from "mobx-react-lite"; 


interface UIModel
{
    tooltip:Boolean;
}

class LineChartController extends React.Component {

    tt = true;
    name = "stupid";
    // it is almost like I need to convert the tt to an observable 
    // and then observe it to render
    
    public constructor(tooltip:boolean, name:string)
    {
        super(tooltip);
        makeObservable(this, {
            tt: observable,
            name:observable,
            toggleToolTip: action
        })
        this.tt = tooltip;
        this.name = name;

    }

    public handleClick(this:any, e:any)
    {
        console.log(e);
        console.log(this);
        this.toggleToolTip();
    }

    public toggleToolTip(this:any, e:any)
    {
        this.tt = !this.tt;
        this.name = this.tt?"true":"false";
        console.log("tooltip show is now " + this.tt);
    }

    public subscribe()
    {
        console.log("Changed the tooltip");
        return   <div> Observer is observed</div>;
    }

}


export default LineChartController;