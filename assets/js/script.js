// The Password generator will provide a password with 8-128 characters based on user selections

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// pwd can include alphanumeric and special characters
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = [" ", ".", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "^", ",", ":", ";", "<", ">", "=", "?", "@", "[", "]", "|", "{", "}", "_", "`"];
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

// function to generate a random pwd
let generatePassword = function () {
    confirmLength = window.prompt("How many characters would you like your password to contain?");

    // if length of pwd is outside pwd requirements display an alert to the user
    while ((confirmLength <= 7) || (confirmLength >= 129)) {
        window.alert("Password length must be between 8 - 128 characters Try again");
        confirmLength = window.prompt("How many characters would you like your password to contain?");
    }

    // confirm pwd length to the user
    window.alert(`Your password will have ${confirmLength} characters`);

    // confirm character types to include in the pwd
    confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
    confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
    confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");

    // validating input - least one character type should be selected
    while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one character type");
        confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
        confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
        confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
        confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
    }

    /*
        Could use concat instead of the spread operator
            pwdChars = pwdChars.concat(specialChar)
     */

    // resulting pwd string
    let randomPwd = "";

    if (confirmSpecialCharacter) {
        pwdChars = [...pwdChars, ...specialChar];
    }

    if (confirmNumericCharacter) {
        pwdChars = [...pwdChars, ...number];
    }

    if (confirmLowerCase) {
        pwdChars = [...pwdChars, ...alphaLower];
    }

    if (confirmUpperCase) {
        pwdChars = [...pwdChars, ...alphaUpper];
    }

    // password is generated that matches the selected criteria
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