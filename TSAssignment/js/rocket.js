class Rocket {
    //constructor
    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        //array of cargo object
        this.cargoItems = [];
        //array of astronaunt object
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //sum of all items using each item's massKg property
    sumMass(items) {
        var sum = 0;
        items.forEach(function (ipayload) {
            sum = sum + ipayload.massKg;
        });
        return sum;
    }
    //return the combined mass of astranauts and cargos
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    //returns true if total mass is less than total capacity
    canAdd(item) {
        var totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    //to add the cargo object to the array
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    //to add the astronaut object to the array
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
export { Rocket };
