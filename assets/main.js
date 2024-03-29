// -------------DOM VARS-----------------

var display = document.querySelector("#pwbox");
var genBtn = document.querySelector('#generate').addEventListener("click", doGenPass)

// -------------GLOBAL VARS-----------------
var charList = []; 
var charFinal;
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allNum = "0123456789";
var specialChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var userPassLength;
var finalPass;
var generatedPass = [];


// -------------FUNCTIONS-----------------


// This function will set/reset global vars  
function init(){
    serPassLength= null
    finalPass= null
    generatedPass = []
    charList = []
    charFinal = null
}

// this function will display content to the screen
function render () {
    display.textContent = finalPass;
}

function charSelect () {

    var lowerselect = confirm("Include lower case letters?");

    var upperselect = confirm("Include upper case letters?");

    var numbselect = confirm("Include numbers?");

    var specialselect = confirm("Include special characters?");

    if(lowerselect) {
        charList.push(lowerLetters);
    } 
    if(upperselect) {
        charList.push(upperLetters);
    } 
    if(numbselect) {
        charList.push(allNum);
    } 
    if(specialselect) {
        charList.push(specialChars);
    }
    if(lowerselect === false && upperselect === false && numbselect === false && specialselect === false) {
        alert("You must select at least one character type.  Please try again.");
        return charSelect()
    }
}

function doGenPass () {
    
    init() // run init to reset global vars 

    var userPassLength = prompt("Enter a password length between 8 and 128 characters."); // save user's length to a var
    
    if(userPassLength < 8 || userPassLength > 128 || isNaN(userPassLength)) {  
        alert("Please enter a valid password length.");
        /* Side note
            A function can call itself. So basically the following line will stop and restart the "doGenPass" function from the beginning
            if the user doesn't make a valid length choice. This essentially makes a looping effect without using the 
            traditional for loop 
        */
        return doGenPass()
    }

    charSelect()

    charFinal = charList.join('');

    for (var i = 0; i < userPassLength; i++) {
        var userChar = charFinal.charAt(Math.floor(Math.random() * charFinal.length));
        generatedPass.push(userChar);
    }
    finalPass = generatedPass.join('');

    render()
    
    console.log(finalPass);

}