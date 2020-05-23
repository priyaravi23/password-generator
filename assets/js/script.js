// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// pwd can include alphanumeric and special characters
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "^", ",", ":", ";", "<", ">", "=", "?", "@", "[", "]", "|", "{", "}", "_"];
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variables for criteria to include in the password
let confirmLength = "";
let confirmSpecialCharacter;
let confirmNumericCharacter;
let confirmUpperCase;
let confirmLowerCase;

// store the result in an array
let pwdChars = [];

// resulting pwd string
let randomPwd = "";


let generatePassword = function () {
    confirmLength = window.prompt("How many characters would you like your password to contain?");

    // if length of pwd is outside pwd requirements
    while (confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be between 8 - 128 characters Try again");
        confirmLength = window.prompt("How many characters would you like your password to contain?");
    }

    // confirm pwd length to the user
    window.alert(`Your password will have ${confirmLength} characters`);

    confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
    confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
    confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");

    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one character type");
        confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
        confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
        confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
        confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
    }

    if (confirmSpecialCharacter) {
        pwdChars = pwdChars.concat(specialChar)
    }

    if (confirmNumericCharacter) {
        pwdChars = pwdChars.concat(number)
    }

    if (confirmLowerCase) {
        pwdChars = pwdChars.concat(alphaLower)
    }

    if (confirmUpperCase) {
        pwdChars = pwdChars.concat(alphaUpper)
    }

    for (let i = 0; i < confirmLength; i++) {
        randomPwd = randomPwd + pwdChars[Math.floor(Math.random() * pwdChars.length)];
        console.log(randomPwd)
    }
    return randomPwd;
};

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);