var wins = 0;
var guessesLeft = 12;
var myGuesses = [];
var revealLetters = [];
var countryNames = ['CANADA', 'UNITED STATES', 'BRAZIL', 'PERU', 'SUDAN', 'MORROCO', 'INDIA', 'JAPAN', 'ITALY', 'GERMANY'];
var computerPick = "";
var letterCount = 0;


//function to restart the game
function StartGame()
{

//computer randomly picks a word
//dashes are then created based off of the number of characters in the country name
    computerPick = alphabet[Math.floor(Math.random() * countryNames.length)];
    letterCount = computerPick.length;

//Then create an array that can story all the right guesses of the user to formulate their word 
    var guessesLeft = 12;
    var myGuesses = [];
    var revealLetters = [];

//record the win
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = wins;

    for(var i = 0; i < computerPick.length; i++)
	{
		revealLetters.push("_");
	}

	document.querySelector("#words").innerHTML = revealLetters.join(", ");

}



function compareLetter(val)
{

    myGuesses.push(val);
    document.querySelector("sofar").innerHTML = myGuesses.join(", ");
    guessedCorrectly = false;

    for(var i=0;i<computerPick.length; i++)
    {
        if(val == computerPick[i])
        {
            guessedCorrectly = true;
            revealLetters[i] = val;
             document.querySelector("#words").innerHTML = revealLetters.join(", ");
            LetterCount--;
        }
    }

}
//Check that user has not previously provided input
//If user has guessed letter prior, provide alert message prompting another guess

//if user picks the correct letter
//win column goes up
    if(guessedCorrectly = false)
    {
        guessesLeft--;
    }

    if(guessesLeft == 0)
    {
        document.querySelector("#losses").innerHTML = losses;
    }
    
    if(rightLetterCount == 0)
    {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
    }
  

StartGame();

    document.onkeyup = function(event){

    if(event.keyCode >= 65 && event.keyCode <= 90)
    {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        //console.log(letter);
        CompareLetter(letter);
    }
}