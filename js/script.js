//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
//GLOBAL VARIABLES
var userChoice;
var computerChoice;
var winner;
var choices = ["ronk","papes","snips"];
var randomNumber;
//FUNCTIONS
function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
// DOCUMENT READY FUNCTION
$(document).ready(function() {
        $("#begin").click(function(){
                userChoice = $("#pick").val();
                userChoice = userChoice.toLowerCase();
                console.log(userChoice);
                //userChoice.toLowerCase() != "ronk" || userChoice.toLowerCase() != "papes" || userChoice.toLowerCase() != "snips"
                randomNumber = getRandomIntInclusive(0,2);
                console.log(randomNumber);
                computerChoice = choices[randomNumber];
                console.log(computerChoice);
                if (userChoice != "ronk" && userChoice != "papes" && userChoice != "snips") {
                        $("#player").html("");
                        $("#computer").html("");
                        $("#result").html("<div class=\"col-lg-12\"><h2>Did you type that correctly?</h2><h2>Your options are</h2><h2>\"Ronk\",</h2><h2>\"Papes\",</h2><h2>and \"Snips\".</h2></div>");
                } else if (userChoice == "ronk" && computerChoice == "snips" || userChoice == "papes" && computerChoice == "ronk" || userChoice == "snips" && computerChoice == "papes") {
                        $("#player").html("<img src=\"images/" + userChoice + ".png\" /><p>-YOU-</p>");
                        $("#computer").html("<img src=\"images/" + computerChoice + ".png\" /><p>-COMPUTER-</p>");
                        $("#result").html("<div class=\"col-lg-12\"><h2>YOU WIN!</h2></div>");
                } else if (computerChoice == "ronk" && userChoice == "snips" || computerChoice == "papes" && userChoice == "ronk" || computerChoice == "snips" && userChoice == "papes") {
                        $("#player").html("<img src=\"images/" + userChoice + ".png\" /><p>-YOU-</p>");
                        $("#computer").html("<img src=\"images/" + computerChoice + ".png\" /><p>-COMPUTER-</p>");
                        $("#result").html("<div class=\"col-lg-12\"><h2>YOU LOSE...</h2></div>");
                } else if (userChoice == computerChoice) {
                        $("#player").html("<img src=\"images/" + userChoice + ".png\" /><p>-YOU-</p>");
                        $("#computer").html("<img src=\"images/" + computerChoice + ".png\" /><p>-COMPUTER-</p>");
                        $("#result").html("<div class=\"col-lg-12\"><h2>Tie.</h2></div>");
                }
        });
});
