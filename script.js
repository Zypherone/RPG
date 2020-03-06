// Assignment Code
var generateBtn = document.querySelector("#generate");

// Lets get the variables and constant setup
const range = {
  lowercase: [97, 122],
  uppercase: [65, 90],
  numerical: [48, 57],
  special: [33, 47]
};

function runRange(key, value) {
  console.log(key);
}


function generatePassword() {
  /*
  var fruits, text;
  fruits = ["Banana", "Orange", "Apple", "Mango"];

  text = "<ul>";
  fruits.forEach(myFunction);
  text += "</ul>";

  function myFunction(value) {
    console.log("<li>" + value + "</li>");
  }

*/
 // range.forEach(runRange);

  /*
  for(i=0;i<range.length;i++) {
    range[i]
    for(x=0;x<range[i].length;x++) {
      console.log(range[x]);
    }
  }
  */

 //fromCharCode();
  // Lets initalised the charset var so we can push the characters based on the checked field.
  var charSet = [];
 
  for(var x in range) {
    //console.log(range[x]);

    // Lets pull which character set to use
    var inputField = document.querySelector("input[name='" + x + "'");

    // Lets check if the ranges has been checked. By default, lowercase is set.
    if (inputField.checked) {

      var startOfRange = range[x][0],
          endOfRange = range[x][1],
          lengthOfRange = endOfRange - startOfRange;

      for(var i=0;i<=lengthOfRange;i++){
        var charCode = startOfRange + i;
        charSet.push(String.fromCharCode(charCode));
        //console.log(String.fromCharCode(charCode));
      }

      /*

      for (var i=0; i< charset.length; i < length; ++i) {
        //retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      */
    }
  }

  if (charSet.length > 0) {
    // Run generator
    console.log(charSet);
  } 
  else {
    // Return some error
  }
  
  return 'test';
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

