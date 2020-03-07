
// Utlised a shuffle function from 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Lets get the character set ranges, based on https://www.ascii-code.com/
// Paramaters, start, finish, exclude
const range = {
  lowercase: [97, 122], // [a-z]
  uppercase: [65, 90], // [A-Z]
  numerical: [48, 57], // [0-9]
  special: [33, 43]
};

// Lets make the range input field dynamic to assist the value.
var passwordRange = document.querySelector("input[type='range']"),
    valueRange = document.getElementById("range");

passwordRange.oninput = function() {
  valueRange.value = this.value;
}


function generatePassword() {

  // Lets initialized the basic variables
  var charSet = [];
  var buildPassword = [];
  var rangeCount = 0;
  
  // Run through the all the different character set ranges.
  for(var x in range) {

    // Lets pull which character set to use
    var inputField = document.querySelector("input[name='" + x + "'");

    // Lets check if the ranges has been checked. By default, lowercase is set.
    if (inputField.checked) {

      var startOfRange = range[x][0],
          endOfRange = range[x][1],
          lengthOfRange = endOfRange - startOfRange;

      var mustIncludeRange = [];

      for(var i=0;i<=lengthOfRange;i++){
        var charCode = startOfRange + i;
        charSet.push(String.fromCharCode(charCode));
        mustIncludeRange.push(String.fromCharCode(charCode));
      }

      // Lets make sure we include at least one character from each character set.
      buildPassword.push(mustIncludeRange[Math.floor(Math.random() * mustIncludeRange.length)]);
      rangeCount++;
    }
  }

  // Make sure we have a character set to run the generator.
  if (charSet.length > 0) {
    
    // Set the length of the password, minus the rangeCount 
    // the min of one character requirement for each character set 
    var passwordLength = passwordRange.value - rangeCount;
    // Run generator
    for (var i=0; i < passwordLength; ++i) {
      buildPassword.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }

  } 
  else {
    // Return some error
    alert("ERROR! Unable to build your password. Please contact support.");
  }
  
  return shuffle(buildPassword).join('');
}




// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  } else {
    alert("Please select at least one character set");
    return;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

