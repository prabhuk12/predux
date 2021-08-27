import Sheet, {SEvent} from "./Sheet";
import DIHelper, {Component_keys} from "./DIHelper";

class Insight
{
    public pubsub()
    {
        let s1:Sheet = new Sheet();
        DIHelper.getInstance().put("s1", s1);
        s1.subscribe(SEvent.CREATED, this.subs);
        s1.trigger(SEvent.CREATED);
    }

    public subs()
    {
        console.log("Subscription complete !!");
    }

    // filter and visualize

}

export default Insight;