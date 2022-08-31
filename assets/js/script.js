//created arrays for each of the input criteria that is lower and uppercase, special characters, numbers
var lowercase_Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase_Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

//define generatePassword function
function generatePassword(){

  //Taking user input
  var userInput = prompt("How many characters do you need for the password? (Please choose Min 8 to Max 128)");
  //defining variable to check password crieteria
  var inputLength = parseInt(userInput);

if (isNaN(userInput)){
  alert("This not a number");
  return
}

//Validates that the user has coose the correct input within the allowed number range.
while (inputLength < 8 || inputLength > 128) {
  //Let the user know their submission was outside of the acceptable range & prompt again.
  alert("Character length must be between 8 and 128.");
  return
}


 //Confirm which character types will be needed in the password. 
var confirmLowerCase = confirm("Do you need at least one Lower case character?");
var confirmUpperCase = confirm("Do you need at least one Upper case character?");
var confirmNumbers = confirm("Do you need at least one numerical character?");
var confirmSpecial = confirm("Do you need at least one special character?");


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
