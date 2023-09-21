import { Cargo } from "./cargo.js";
import { Astronaunt } from "./astronaut.js";
import { IPayload } from "./payload.js";
class Rocket {

    //array of cargo object
    cargoItems: Cargo[] = [];
    //array of astronaunt object
    astronauts: Astronaunt[] = [];

    //constructor
    constructor(public name: string,
        public totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //sum of all items using each item's massKg property
    sumMass(items: IPayload[]): number {
        var sum = 0
        items.forEach(function (ipayload) {
            sum = sum + ipayload.massKg;

        })
        return sum;
    }
    //return the combined mass of astranauts and cargos
    currentMassKg(): number {
        return this.sumMass(this.astronauts)+ this.sumMass(this.cargoItems)

    }
    //returns true if total mass is less than total capacity
    canAdd(item: IPayload): boolean{
       var totalMass=this.currentMassKg()+item.massKg
       if(totalMass<=this.totalCapacityKg){
            return true;
       }
       else
       {
        return false;
       }
    }

    //to add the cargo object to the array
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;

        }
        else{
            return false;
        }
    }
    //to add the astronaut object to the array
    addAstronaut(astronaut: Astronaunt): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            
            return true;
        }
        else {
            return false;
        }
    }
    
    
}


export{Rocket}