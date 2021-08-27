import InsightView from '../echart/InsightView';
import InsightController from '../echart/InsightController';
import DIHelper from '../ts/DIHelper';


export default function Semoss () {

  const ic = new InsightController("abc123");

    return (
      <div>
      <h1>Moss... semoss</h1>
      <InsightView controller={ic}/>
      </div>
);
  }