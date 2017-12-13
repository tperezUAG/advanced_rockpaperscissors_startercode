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
//FUNCTIONS


// DOCUMENT READY FUNCTION
$(document).ready(function() {
        $("#begin").click(function(){
                userChoice = $("#pick").val();
        });
        if (userChoice == "ronk" && computerChoice == "snips" || userChoice == "papes" && computerChoice == "ronk" || userChoice == "snips" && computerChoice == "papes") {
                $("#player").html();
                $("#computer").html();
                $("#result").html("<div class=\"col-lg-12\"><h2>YOU WIN!</h2></div>");
        } else if (computerChoice == "ronk" && userChoice == "snips" || computerChoice == "papes" && userChoice == "ronk" || computerChoice == "snips" && userChoice == "papes") {
                $("#player").html();
                $("#computer").html();
                $("#result").html("<div class=\"col-lg-12\"><h2>YOU LOSE...</h2></div>");
        }
});
