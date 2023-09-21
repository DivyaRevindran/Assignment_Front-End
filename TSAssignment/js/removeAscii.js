//function to remove ascii characters
function removeAsciiCharacters(str) {
    str = str.replace(/[^\x00-\x7F]/g, "");
    console.log(str);
}
//input string
let str = "Hai©!©Ho©w are you??removed ©©®®®ASCII Charac££ter";
removeAsciiCharacters(str);
