// function selectionSort(arr) {

//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     const temp = arr[i];
//     arr[i] = arr[minIndex];
//     array[minIndex] = temp;
//   }
//   return arr;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// }

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

// function selectionSort(arr) {
//   const array = arr.slice();
//   for (let i = 0; i < array.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [array[i], array[minIndex]] = [array[minIndex], array[i]];
//   }
//   return array;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
