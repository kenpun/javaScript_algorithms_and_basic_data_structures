// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
	let newTitle = str.split(' ');
  let updatedTitle = [];
  
  for (let word in newTitle)  {
    updatedTitle[word] = newTitle[word][0].toUpperCase() + newTitle[word].slice(1).toLowerCase()
  }
  return updatedTitle.join(' ')
}

titleCase("I'm a little tea pot");

// Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the 
// first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole 
// word in lowercase with the first character replaced by its uppercase.