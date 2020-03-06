// Assignment Code
var generateBtn = document.querySelector("#generate");

// Lets get the variables and constant setup
const range = {
  lowercase: [97, 111],
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

  for(var x in range) {
    //console.log(range[x]);
    
    var startOfRange = range[x][0],
        endOfRange = range[x][1],
        lengthOfRange = endOfRange - startOfRange;

    for(i=0;i<=lengthOfRange;i++){
      var charCode = startOfRange + i;
      console.log(String.fromCharCode(charCode));
    }
    
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

