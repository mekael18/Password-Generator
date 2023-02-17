// Assignment Code
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like your password to be? (Must be between 8 and 128 characters)");
  var passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var passwordLowercase = confirm("Would you like to include lowercase letters?");
  var passwordUppercase = confirm("Would you like to include uppercase letters?");
  var passwordNumbers = confirm("Would you like to include numbers?");
  var passwordSpecialCharacters = confirm("Would you like to include special characters?");
  var passwordCharacters = "";
  if (passwordLowercase) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordUppercase) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordNumbers) {
    passwordCharacters += "0123456789";
  }
  if (passwordSpecialCharacters) {
    passwordCharacters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  }
  if (passwordCharacters === "") {
    alert("You must select at least one character type");
    return;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
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
