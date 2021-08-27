import { makeObservable, observable, computed, action, flow, reaction  } from "mobx";
import { observer } from "mobx-react-lite"; 
import {render} from 'react-dom';



class Todo {
    id = Math.random();
    title = "";
    finished = false;
    age = 20;
  
    constructor(title) {
      makeObservable(this, {
        finished:observable,
        title: observable,
        toggle: action
      }); // filter
      // another observable - visualize
      // another observal - filter and visualize 

      // observer - this is where the complexity
      // filter : yes
      // visualize: yes

      this.title = title;
      console.log("const");
    }
  
    toggle() {
        console.log("came here");
        /*
        if(!this.finished)
            this.title = "Finished Coffee";
        else
            this.title = "Getting Coffee";
            */
        this.finished = !this.finished;
    }

    toggle2() {
      console.log("came here Toggle2");
      if(!this.finished)
          this.title = "Finished Coffee2";
      else
          this.title = "Getting Coffee2";
      this.finished = !this.finished;
  }

    // you get this by doing todo.description - works like a inverse javabeans
    get description() {
        return this.title;
    }

  }
  const coffee= new Todo("coffee");

  const TodoView = observer(({ todo }) => (
    
    <div>
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={() => todo.toggle()}
      />
      {todo.title}
    </li>
    </div>
  ));

const CoffeeView = observer(({cof}) => (
  paintCoffee(cof)
));

function paintCoffee(cof)
{
  console.log("Hello");
  return   <div> Observer is observed {cof.title}</div>;
}

const MangoView = observer(({ todo }) => (<div>{todo.title}</div>));

let cart = observable({
    itemCount: 0,
    modified: new Date()
  });

// reactions
const reactor = reaction(
    () =>
    {
      console.log("in the tracker for reaction" + coffee.finished);
      return coffee.finished;
    },
    (finished) =>
    {
      console.log("Woo hoo.. going to react to this now");
    }
  )
  
  reactor(coffee);

render(<div>
    <TodoView todo={coffee}/>
    <MangoView todo={coffee}/>
    <CoffeeView cof={coffee.title}/>
    </div>, document.getElementById("todo"));  

export {coffee, cart};
