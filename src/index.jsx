var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers); 

//Filter - Create a new array by keeping the items that return true.

const newNumbers2 = numbers.filter(function (num){
  return num < 10;  
});
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = 0;
// numbers.forEach(function (currentNumber){
//   newNumber += currentNumber;
// });
var newNumber = numbers.reduce(function(accumulator, currentNumber){
  console.log("Accumulator: ", accumulator);
  console.log("Current Number: ", currentNumber);
  return accumulator + currentNumber;
})

console.log(newNumber);

//Find - find the first item that matches from an array.

const newNumber3 = numbers.find(function (num){
  return num > 10;
});
console.log(newNumber3);

//FindIndex - find the index of the first item that matches.

const newNumber4 = numbers.findIndex(function (num){
  return num > 10;
});
console.log(newNumber4);


/*Now to use the knowledge using the emojipedia stuff*/
import emojipedia from "./emojipedia.js";

// You will use substring to create a new array of just the meaning for each emoji, and only
// the first 100 characters of the meaning. 
const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
})

console.log(newEmojipedia);