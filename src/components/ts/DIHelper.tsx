import { Context } from "react";
import { useContext } from "react";
import { createContext } from "react";

export enum Component_keys { 
    INSIGHT = "insight",
    SHEET = "sheet",
    PANEL = "panel"
}

class DIHelper
{
    private static instance: DIHelper = new DIHelper();
    masterMap:Map<string, any> = new Map<string, any>();

    private constructor()
    {
        
    }

    public static getInstance(): DIHelper
    {
        //return useContext(this.ctx);
        //return useContext(ctx);
        return this.instance;
    }

    public put(key:string, value:any)
    {
        this.masterMap.set(key, value);
    }

    public keys()
    {
        return this.masterMap.keys;
    }

    public get(key:string)
    {
        let retValue = this.masterMap.get(key);
        return retValue;
    }

    public remove(key:string)
    {
        this.masterMap.delete(key);
    }

    // switchboard
    // get a new insight
    // get a panel etc. 

}
export default DIHelper;
