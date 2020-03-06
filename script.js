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

// Lets get the variables and constant setup
const range = {
  lowercase: [97, 122],
  uppercase: [65, 90],
  numerical: [48, 57],
  special: [33, 47]
};
/*
function runRange(key, value) {
  console.log(key);
}
*/

// Lets make the range input field dynamic to assist the value.
var passwordRange = document.querySelector("input[type='range']"),
    valueRange = document.getElementById("range");

passwordRange.oninput = function() {
  valueRange.innerHTML = this.value;
}


function generatePassword() {

  var charSet = [];
  var buildPassword = [];
  var rangeCount = 0;
 
  for(var x in range) {
    //console.log(range[x]);

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
        //console.log(String.fromCharCode(charCode));
      }

      // Lets make sure we include one character from each inclusion range.
      buildPassword.push(mustIncludeRange[Math.floor(Math.random() * mustIncludeRange.length)]);
      rangeCount++;
    }
  }

  if (charSet.length > 0) {
    // Run generator
 
    var passwordLength = passwordRange.value - rangeCount;
    for (var i=0; i < passwordLength; ++i) {
      buildPassword.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }

  } 
  else {
    // Return some error
  }
  
  return shuffle(buildPassword).join('');
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

