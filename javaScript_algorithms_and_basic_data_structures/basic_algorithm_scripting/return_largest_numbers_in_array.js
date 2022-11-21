// Return an array consisting of the largest number from each provided sub-array. For 
// simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member 
// with array syntax arr[i].

function largestOfFour(arr) {
    // Step 1. Map over the main arrays
    return arr.map(function (subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]
      
       // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
      return Math.max.apply(null, subArray)
    });
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);