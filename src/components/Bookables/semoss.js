import InsightView from '../echart/InsightView';
import InsightController from '../echart/InsightController';
import DIHelper from '../ts/DIHelper';
import { createContext, useContext } from 'react';



export default function Semoss () {


  const ic = new InsightController("abc123");
  DIHelper.getInstance().put("abc123", ic);

    return (
      <div>
      <h1>Moss... semoss</h1>
      <InsightView controller={ic}/>
      </div>
);
  }

  const diHelper = DIHelper.getInstance();
