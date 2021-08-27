import React, { FC, useState, useEffect, useReducer } from 'react'; 
import { Component_keys } from './DIHelper';
import DIHelper from "./DIHelper";
import Sheet, {SEvent} from "./Sheet";
import Insight from "./Insight";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LineChartView from "../echart/LineChartView";
import LineChartController from '../echart/LineChartController';

interface  GreetingProps {

    name?: string,
    age?: number

}

const Greeting: FC<GreetingProps> = (props:GreetingProps) => {

    const myMap = new Map<string, any>();
    DIHelper.getInstance().put(Component_keys.INSIGHT, "<Insight ID / INsight object>");

    type  GreetingProps = {

        name?: string,
        age?: number
    
    }
    const initState: GreetingProps = {
        name: "Init state",
        age: 10
    };
    
    const [message, setMessage] = useState("");

    //props = reducer(props, "sum");
    function sayHelloState()
    {
        console.log("Hello ");
        //dispatch("random message for dispatch");
        //setMessage(reducer(initState, "prop it").name);
        setMessage("Prop it");

    }

    
    let action:string = "action";


    const[state, dispatch] = useReducer(reducer, initState);

    function reducer(state2: GreetingProps, action:string): GreetingProps
    {
        console.log("state..  " + state2.name +  " with action " + action + "called");
        
        return {...state2, name: action};
        //dispatch(action);
        //return action;

    };

    function sayHelloReducer()
    {
        console.log("Hello ");
        console.log(" >> >> " + DIHelper.getInstance().get(Component_keys.INSIGHT));

        let output = reducer(initState, "mango");
        dispatch("random message for dispatch");
        console.log("Output is now " + output.name);
        //setMessage(reducer(initState, "prop it").name);
        setMessage("Prop it");
        console.log("Set message name is " + setMessage.name);

        // try insight subscribe logic
        let i1:Insight = new Insight();
        i1.pubsub();

    }



    useEffect(() => {

        if(props) {

            setMessage(`Hello from, ${props.name} >> ${props.age}`);
        }

    }, [props]);

    useEffect(() => {
        console.log("Just some render called");
    })

    if(!props) {

        return <div>no name given</div>;

    }

    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    const titles = [];
    const content = [];
    for (let index = 0; index < tabs.length; index++) {
        const thisTab = <Tab>{tabs[index]}</Tab>;
        const tabPanel = <TabPanel>content + {index}</TabPanel>
        titles.push(thisTab);

        //const contr:LineChartController = new (LineChartController as any)(true, "panel" + {index});
        const keyName = "controller";
        const panelName = "panel" + index;
        const contr = new (LineChartController as any)(true, panelName);
        const props = {"controller":contr};

        content.push(<TabPanel><LineChartView {...props}/></TabPanel>);
    }


    return <div onClick={sayHelloReducer}>

        {state.name} 
        {message}

        <Tabs>
    <TabList>
        {titles}
    </TabList>
        {content};
  </Tabs>

    </div>;



}

export default Greeting;