

// Creates an array that lists out all of ABC's. 
// Initializes variables.
var letters   = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins      = 0;
var guesses = 10;
var losses    = 0;
var cpuChoice;
var bucket =[]; //Stores guesses.


// This function is run whenever the user presses a key.
document.onkeyup = function(event){

 // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();
    
    if( guesses == 10){     //Can only select a letter when guesses are @ 10.
        cpuChoice = letters[Math.floor(Math.random() *26)];    // Computer randomly chooses a letter from the letter array.
        console.log(cpuChoice);
        }


          if(userGuess === cpuChoice){     //If player guesses right, player wins. Guesses reset to 10.
            wins++;
            alert("You Win!! The letter was:  "+cpuChoice);
            guesses = 10;
            bucket =[];
          }  

          if(userGuess !== cpuChoice){    //If player quesses wrong, player loses guess.
            guesses--;
            bucket.push(userGuess);
           

            }

          if(guesses == 0){                     //If player run out of guesses, player loses. Guesses reset to 10.
            losses++;
            bucket =[];
            alert("You Lose!!");
            guesses = 10;
          }

          
var html =
    //   The Score Board!!
   
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses Left: " + guesses + "</p>" +
      "<p>Letters guessed so far: " + bucket + "</p>";
      document.querySelector("#game").innerHTML = html;
}


 

