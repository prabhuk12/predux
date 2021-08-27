import * as React from "react";

export interface IProps {
  title: string;
  content: string;
  cancelCaption: string;
  okCaption?: string;
  newClick(): () => void;
}

export interface IState {
  name:string;
}

abstract class Title extends React.Component<IProps, IState> {

    public  render():any {
        return (
          <div className="confirm-wrapper confirm-visible">
            <div className="confirm-container">
              <div className="confirm-title-container">
       <span>This is where our title should go</span>
       </div>
              <div className="confirm-content-container">
                <p>{this.props.title}</p>
                <p>=={this.props.cancelCaption}==</p>
              </div>
              <div className="confirm-buttons-container">
                <button className="confirm-cancel">Cancel</button>
                <button className="confirm-ok">Okay</button>
              </div>
            </div>
          </div>
        );
}

public static defaultProps = {
  cancelCaption: "Cancel",
  okCaption: "Okay",
  title: "Default Title"
}

abstract sayHello(): String;

public setTitle(inTitle:string)
{
}

}

export default Title;