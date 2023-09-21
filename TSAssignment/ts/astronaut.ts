import { IPayload } from "./payload.js";
class Astronaunt implements IPayload{

    //constructor
    constructor(public massKg:number,public name:string){
        this.massKg=massKg
        this.name=name;
    }
}

export{Astronaunt}