// function fibonacci(num) {
//   // type your code here

//   let a = 0;
//   let b = 1;
//   let c = num;

//   for (let i = 2; i <= num; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return c;
// }

//Recursive Solution
// function fibonacci(num) {

//   if (num <= 1) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

function fibonacci(num) {
  let a = 0,
    b = 1,
    c = num;

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
