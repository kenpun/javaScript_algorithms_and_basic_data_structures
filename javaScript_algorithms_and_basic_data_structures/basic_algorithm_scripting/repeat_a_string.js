// Repeat a given string str (first argument) for num times (second argument). Return an empty 
// string if num is not a positive number. For the purpose of this challenge, do not use the 
// built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let newStr = "";
  
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
    
    return newStr
  }
  
  repeatStringNumTimes("abc", 3);

// Code explanation
// Create an empty string variable to store the repeated word.
// Use a for loop to repeat code as many times as needed according to num
// Then we add the string to the variable created on step one inside of the loop.
// At the end of the loop, return the variable for the repeated word.