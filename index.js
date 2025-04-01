function hasTargetSum(array, target) {
  // Write your algorithm here
  // Solution 1
   /* let currentElement = array[0];
   for (let element of array) {
     if(currentElement != element) {
       let sum = currentElement + element;
       if (sum === target) {
         console.log(sum)
         return true;
       } else {
         currentElement = element;
         console.log('currentElement', currentElement)
       }
     }
     return false;
   } */


  const trackedElements = {};
  for (const element of array) {
    const complement = target - element;
    if (trackedElements[complement]) return true;
    trackedElements[element] = true;
  }

  return false;

}

/* 
  Write the Big O time complexity of your function here
  O(1) for object initialization.
  O(n) for the array iteration. (for (const element of array))
  O(n) for getting our complement from target difference with element.
  O(n) for checking the complement against trackedElements.
  O(1) for function return value.

  Dropping the constants we have O(3n) time, which we can reduce to O(n) after dropping the constant, 3.
*/

/* 
  Add your pseudocode here
  // Solution 1
   1. Iterate over the array
   2. Store the first element in the array, add it to all the others while doing the comparison.
   3. If no match is found, replace the fist element with the second one. Compare all the others. If there is no match drop it, and continue until the second last element.
   (array.length -1) + the last element completes the process.

   // Solution 2
   1. Iterate over the array
   2. Determine complement. Subtracting the iterated element from the target gives the complement. 
   3. Iterate over remaining elements, checking whether they are the complement.
   4. If any is return true.
   5. If we reach the end and neither matches our complemnent, return false.
*/

/*
  Add written explanation of your solution here
   We terate over the array.We determine the complement, difference between the target and first element. 
   We loop through the remaining elements, checking whether they are the complement.
   If there is a match we return true.
   If we reach the end and there is no match we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
