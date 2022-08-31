//created arrays for each of the input criteria that is lower and uppercase, special characters, numbers
var lowercase_Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase_Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Initialize an empty array for the newPassword being generated.
var newPassword = [];

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

//Initialize an empty array for the possible character arrays based on the user's response.
var characterTypeArray = [];

 //Confirm which character types will be needed in the password. 
 //Push 1 character from the respective character type array to the newPassword array.
var confirmLowerCase = confirm("Do you need at least one Lower case character?");
if (confirmLowerCase) {      
  //Select a random character from the lowercaseLetters array and push it to the newPassword array.
  var randomLower = lowercase_Letters[Math.floor(Math.random() * lowercase_Letters.length)];
  newPassword.push(randomLower);
  //Add lowercaseLetters array to the characterTypeArray
  characterTypeArray.push(lowercase_Letters);
}

var confirmUpperCase = confirm("Do you need at least one Upper case character?");
if (confirmUpperCase) {
  var randomUpper = uppercase_Letters[Math.floor(Math.random() * uppercase_Letters.length)];
  newPassword.push(randomUpper);
  characterTypeArray.push(uppercase_Letters);
}

var confirmNumericals = confirm("Do you need at least one numerical character?");
if (confirmNumericals) {
  var randomNumerical = num[Math.floor(Math.random() * num.length)];
  newPassword.push(randomNumerical);
  characterTypeArray.push(num);
}

var confirmSpecial = confirm("Do you need at least one special character?");
if (confirmSpecial) {
  var randomSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
  newPassword.push(randomSpecial);
  characterTypeArray.push(specialChar);
}

  //Loop once for the generation of each character up to the exact character length chosen by the user.
  for (var i = newPassword.length; i < inputLength; i++) {

  //Select one random array within characterTypeArray and then one random character from that array.
  //Push random character to the end of the newPassword array.
  var randomCharacterTypeArray = characterTypeArray[Math.floor(Math.random() * characterTypeArray.length)];
  var randomCharacter = randomCharacterTypeArray[Math.floor(Math.random() * randomCharacterTypeArray.length)];
  newPassword.push(randomCharacter);

  //Repeat this loop until the length of the newPassword array matches the user's specifications inputLength.
  }

//Shuffle the characters within the newPassword array to avoid formulaic passwords.
newPassword = newPassword.sort(() => Math.random() - 0.5)

//display generated password on Html page
var password = newPassword.join().replace(/,/g,"");
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
