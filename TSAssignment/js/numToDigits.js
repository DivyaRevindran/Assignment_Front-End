//function to covert number to array of digits
function numberToDigitsArray(num) {
    const numString = num.toString();
    const digitArray = [];
    for (let i = 0; i < numString.length; i++) {
        const digit = parseInt(numString.charAt(i));
        digitArray.push(digit);
    }
    return digitArray;
}
const digits = numberToDigitsArray(12547);
console.log(digits);
