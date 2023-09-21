import { Rocket } from "./rocket.js";
import { Astronaunt } from "./astronaut.js";
import { Cargo } from "./cargo.js";
let choice;
let astronaunt = new Astronaunt(50, 'miya');
//create object of cargo
let cargo = new Cargo(30, 'mat');
let rocketName = window.prompt("Enter the name of the rocket");
let totalCapacity = window.prompt("Enter the total capacity of the rocket");
//create object of rocket class
let rocket = new Rocket(rocketName, parseInt(totalCapacity));
do {
    choice = window.prompt("1.Add astronaut\n2.Add Cargo\n3.Exit");
    if (choice == "1") {
        let name = window.prompt("Enter name of astronaunt");
        let mass = window.prompt("Enter the mass of astronaunt");
        //create object of astronaunt
        let astronaunt = new Astronaunt(parseInt(mass), name);
        rocket.addAstronaut(astronaunt);
    }
    if (choice == "2") {
        let name = window.prompt("Enter the material name");
        let mass = window.prompt("Enter the mass of material");
        //create object of astronaunt
        let caegot = new Astronaunt(parseInt(mass), name);
        rocket.addCargo(cargo);
    }
} while (choice != "3");
console.log(rocket.cargoItems);
console.log(rocket.astronauts);
