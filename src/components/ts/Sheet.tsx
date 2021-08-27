export enum SEvent
{
    CREATED = "created",
    RENAMED = "renamed",
    DESTROYED = "destroyed",
    FILTER_VISUALIZE = "Filter_Visualize",
    ALL = "all"
}

class Sheet 
{
    subscriberMap: Map<SEvent, Array<any>> = new Map<SEvent, Array<any>>();

    public events()
    {
        return SEvent;
    }

    
    public subscribe(eventName: SEvent, callbackFunction:any)
    {
        let subscribers: Array<any>  = Array<any>();
        if(this.subscriberMap.has(eventName))
            subscribers = this.subscriberMap.get(eventName)!;
        subscribers.push(callbackFunction);
        this.subscriberMap.set(eventName, subscribers);
    }

    public  trigger(eventName: SEvent)
    {
        let subscribers: Array<any>  = Array<any>();
        if(this.subscriberMap.has(eventName))
        {
            let subscribers = this.subscriberMap.get(eventName)!;
            for(var subscriberIndex = 0;subscriberIndex < subscribers.length;subscriberIndex++)
            {
                //console.log("Current subs >> " + subscribers[subscriberIndex]);
                let doh = new Promise(() =>
                {
                    setTimeout(subscribers[subscriberIndex], 3000);
                }
                );
            }
        }
        console.log("Indeed it is asynchronous");
    }


}

export default Sheet;
