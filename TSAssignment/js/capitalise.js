//function to capitalise first letter
function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//string
const helloString = "hai I am here!";
console.log(capitaliseFirstLetter(helloString));
