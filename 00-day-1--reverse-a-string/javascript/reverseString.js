// function reverseString(str) {
//   let reversed = "";

//   for (i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   return reversed;
// }

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i > -1; --i) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log("noj");
console.log(reverseString("jon"));

console.log("");
console.log(reverseString(""));

console.log("ba");
console.log(reverseString("ab"));

console.log("Expecting: 'ih'");
console.log(reverseString("hi"));

console.log("");

console.log("Expecting: 'ybabtac'");
console.log(reverseString("catbaby"));

console.log("");

console.log("Expecting: 'a'");
console.log(reverseString("a"));

console.log("");

console.log("Expecting: '' (empty string)");
console.log(reverseString(""));
