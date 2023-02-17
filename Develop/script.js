// Assignment Code
function generatePassword() {
var passwordLength = prompt("How many characters would you like your password to contain?");
passwordLength = parseInt(passwordLength);

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be between 8 and 128 characters. Try again.");
  passwordLength = prompt("How many characters would you like your password to contain?");
  passwordLength = parseInt(passwordLength);
}

var passwordLowercase = confirm("Click OK to confirm including lowercase characters.");
var passwordUppercase = confirm("Click OK to confirm including uppercase characters.");
var passwordNumeric = confirm("Click OK to confirm including numeric characters.");
var passwordSpecial = confirm("Click OK to confirm including special characters.");

while (!passwordLowercase && !passwordUppercase && !passwordNumeric && !passwordSpecial) {
  alert("You must select at least one character type. Try again.");
  passwordLowercase = confirm("Click OK to confirm including lowercase characters.");
  passwordUppercase = confirm("Click OK to confirm including uppercase characters.");
  passwordNumeric = confirm("Click OK to confirm including numeric characters.");
  passwordSpecial = confirm("Click OK to confirm including special characters.");
}

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var password = "";
var possibleCharacters = "";

if (passwordLowercase) {
  possibleCharacters += lowercase;
}

if (passwordUppercase) {
  possibleCharacters += uppercase;
}

if (passwordNumeric) {
  possibleCharacters += numeric;
}

if (passwordSpecial) {
  possibleCharacters += special;
}

for (var i = 0; i < passwordLength; i++) {
  password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
}

return password;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
