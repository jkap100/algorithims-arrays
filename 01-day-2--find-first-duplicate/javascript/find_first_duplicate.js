function findFirstDuplicate(arr) {
  // type your code here

  let uniques = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (uniques.has(arr[i])) {
      return arr[i];
    } else {
      uniques.add(arr[i]);
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 2, 3, 4, 4]));

  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([2, 5, 3, 4, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
