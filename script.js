



//assignment criteria:
// 1. prompt user password criteria x
//   a. password length 8 < 128 x
//   b. type: lowered cased, uppered cased, sepcial characters, & numbers 
// 2. validates user's input x
// 3. generate password based on user's allowed/selected criteria
// 4. display password on the page x



// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var userInput = window.prompt("What length of password would you like?")

  var passwordLength = parseInt(userInput)

  // conditional statement for alert if user input something other than a number
  if (isNaN(passwordLength)) {
    window.alert("This is not a number.")
    return
  }

  //conditional statemeht for password length criteria 
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 to 128 characters!")
    return
  }

  // criteria prompts for users
  var userWantsNumbers = window.confirm("Do you want to have numbers in your password?")
  var userWantsLoweredCased = window.confirm("Do you want to have lowered cased letters in your password?")
  var userWantsUpperedCased = window.confirm("Do you want to have uppered cased letters in your password?")
  var userWantsSpecialCharacters = window.confirm("Do you want to have special characters in your password?")


  // The Array object, as with arrays in other programming languages, 
  //enables storing a collection of multiple items under a single variable name,
  //and has members for performing common array operations.

  //Arrays of lowered cased to select from
  var loweredCased = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //Arrays of uppered cased to select from
  var upperedCased = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  //Arrays of numbers choices to select from
  var numbersChoice = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //Arrays of special characters to to select from
  var specialCharaters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?', '>', '<'];

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
