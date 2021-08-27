import { useState } from "react";
import { users } from "../../static.json";
import { days } from "../../static.json";
import { makeObservable, observable, computed, action, flow,autorun,reaction } from "mobx";
import { observer } from "mobx-react-lite";
import {React} from 'react';
import {createContext, useContext} from 'react';
import {coffee,cart} from '../observable/SampleState';
import { RemoteComponent } from "@paciolan/remote-component";
import {RemoteComponent2} from "../remoter/HelloWorld";
import FileReader from "../ts/FileReader";
import Greeting from "../ts/Greetings";
import LineChartController from "../echart/LineChartController";
import LineChartView  from "../echart/LineChartView";

export default function UserList(props) 
{
  const group = "user";
  const usersInGroup = users.filter(b => b.group === group);

  const selectedUserArray = useState(0);
  const selectedUser = selectedUserArray[0];
  const setSelectedUser = selectedUserArray[1];

  // remote component
console.log(props.children);
const DaView = observer(({todo}) => (
  
  <div>{todo.description}</div>
  ))

  const DaView2 = observer(({todo}) => {
    console.log("yo baby");
    return '';
    })
  

function todoReaction()
{
  console.log("todo");
}



  function changeUser(selectedIndex) 
  {
    //bookableIndex = selectedIndex;              
    setSelectedUser(selectedIndex);
    coffee.toggle();
    console.log("set the value " + coffee.finished);
    cart.itemCount++;

  }


autorun(() => {
    console.log(`The Cart contains ${cart.itemCount} item(s).`);
});



const FView = new FileReader();

const ec = new LineChartController(true, "startup");

/*
const LineChartView = observer(({controller}) => (
  paintLineChart(controller)
));

function paintLineChart(controller)
{
  console.log("Echart Observer invoked !!" + controller.name);
  return <LineChart controller={controller}/>;
}
*/


  return (
    <div>
    <ul className="users items-list-nav">
      {usersInGroup.map((b, i) => (
        <li
          key={b.id}
          className={i === selectedUser ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => changeUser(i)}
          >
            {b.name}
          </button>
        </li>
      ))}
    </ul>
    <DaView todo={coffee}/>
    <DaView2 todo={coffee}/>
    <RemoteComponent2 />
    <FileReader />
    <Greeting name="Prabhu" age="20" />
    <LineChartView controller={ec}  />
    </div>
  );
}