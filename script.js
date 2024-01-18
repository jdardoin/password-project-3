// Assignment code here

var length = 128;

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

var input = [];

var output = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//return the variable

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = parseInt(
    prompt("Please choose password length between 8 to 128 characters")
  );

  // Check for password length

  if (length < 8 || length > 128) {
    alert("Please choose password length between 8 to 128 characters");
    return generatePassword(); // return to the beginning of the function
  }

  if (confirm("Do you want lowercase letters in your password")) {
    input = input.concat(lowerCase);
  }

  if (confirm("Do you want Uppercase letters in your password")) {
    input = input.concat(upperCase);
  }

  if (confirm("Do you want numbers in your password")) {
    input = input.concat(number);
  }

  if (confirm("Do you want a special char in your password")) {
    input = input.concat(specialChar);
  }

  console.log(input);
  for (var i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * input.length);
    output.push(input[random]);
  }

  console.log(output);
  return output.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
