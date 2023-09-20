 // Generate a Random Number
 let y = Math.floor(Math.random() * 100 + 1);
 var guesses = ""
 // Counting the number of guesses
 // made for correct Guess
 let guess = 1;

 let guessedNum;
 //do while works until user guess the correct number
 do
  {   
  guessedNum = window.prompt("You can guess now!")
  //if guess and random number becomes same
  if(guessedNum==y){
     guesses=guesses.concat("   ")
     guesses =guesses.concat(guessedNum)
     document.getElementById('textField').innerHTML="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
             + guess + " GUESS "
     document.getElementById('guesses').innerHTML=guesses;
  }
 
  //if guess greater than random number
 else if (guessedNum > y) {
     guess++;
     guesses=guesses.concat("   ")
     guesses =guesses.concat(guessedNum)
     alert("OOPS SORRY!! TRY A SMALLER NUMBER");

 }

 //if guess lesser than random number
 else {
     guess++;
   guesses=guesses.concat("   ")
     guesses =  guesses.concat(guessedNum)
     alert("OOPS SORRY!! TRY A GREATER NUMBER")
 }
}while(guessedNum!=y);