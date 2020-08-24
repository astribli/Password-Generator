// Assignment code here
// Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var plength = prompt("How many characters would you like your password to be?")

  if (plength < 8 || plength > 128){
    alert("Length must be 8-128 characters")
  } 

  if (plength >= 8 && plength <= 128){
  var cuppercase = confirm("Would you like to use uppercase letters?")
  var clowercase = confirm("Would you like to use lowercase letters?")
  var cnumbers = confirm("would you like to use numbers?")
  var csymbols = confirm("would you like to use special characters?")
  }    

  if (cuppercase != true && clowercase != true && cnumbers != true && csymbols != true){
    alert("You must select at least one character type!")
  }

//Selected password parameters
  var passwordCharacters = []

    if (csymbols) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }
    if (cnumbers) {
      passwordCharacters = passwordCharacters.concat(number)
    }
    if (clowercase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }
    if (cuppercase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

//Empty string to be fill by for loop to generate password
var randomPassword = ""

  for (var i = 0; i < plength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}

function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


