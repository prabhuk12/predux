import Title from "./Title";
import {IProps} from "./Title";

interface IState {
    name:string;
  }
  

enum Size { 
    H1 = 0,
    H2 = 1,
    H3 = 2
}

class Subtitle extends Title 
{
    private mySize:Size;

    constructor(props:IProps)
    {
        super(props);
        console.log("Props >>>>> " + props);
        super.setTitle("Default");
        this.mySize = Size.H2;
    }

    public render():any {
        // need to get the type of the render method
        return (
            <div>Yo baby yo
                {super.render()}
                <div onClick={this.clickIt}>Click</div>
                    {this.props.title};
                {this.mySize}
                </div>
            );
    };

    public clickIt()
    {
        console.log("Click it on ticket");
    }

    public sayHello():string
    {
        return "subclass method implementation";
    }

    public shouldComponentUpdate(nextProps:{}, nextState:IState):boolean
    {
        console.log("Component update called");
        //return super.shouldComponentUpdate(nextProps,nextState);
        return true;
    }
}

export default Subtitle;