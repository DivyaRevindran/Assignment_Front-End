//to make the data passed to the function in the color passed to the function
function colorConerter(color, data) {
    const red = "\x1b[31m";
    const black = "\x1b[30m";
    const green = "\x1b[32m";
    const yellow = "\x1b[33m";
    const blue = "\x1b[34m";
    const magenta = "\x1b[35m";
    const cyan = "\x1b[36m";
    const white = "\x1b[37m";
    const arr = [];
    /* array to store the color codes */
    arr[0] = black;
    arr[1] = red;
    arr[2] = green;
    arr[3] = blue;
    arr[4] = yellow;
    arr[5] = magenta;
    arr[6] = cyan;
    arr[7] = white;
    console.log(arr[color] + data);
}
/* color and data passed to the function */
colorConerter(1, "Red Color");
colorConerter(2, "Green Color");
colorConerter(3, "Blue Color");
