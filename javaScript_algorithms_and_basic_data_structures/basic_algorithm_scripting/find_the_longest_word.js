// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let strArr = str.split(' ');
   // console.log(strArr)
   let longestWord = 0;
   
   for (let i = 0; i < strArr.length; i++) {
     // console.log(strArr[i])
     // returns the largest of the numbers given as input parameters
     longestWord = Math.max(longestWord, strArr[i].length)
   }
   return longestWord;
 }
 
 findLongestWordLength("The quick brown fox jumped over the lazy dog");