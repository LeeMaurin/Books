// Part 1 - Write a range function that takes two arguments, start and end, and 
// returns an array containing all the numbers from start up to (and including) end.

function rangeList(a, b) {
  let rangeOutput = [];
  for (let i = a; i <= b; i++) {
    rangeOutput += i + ' ';
  }
  console.log(`The range output is: ${rangeOutput}`);
}

rangeList(1, 10);

// Part 2 - Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function rangeSum(a, b) {
  let rangeSum = 0;
  for (let i = a; i <= b; i++) {
    rangeSum = rangeSum + i;
  }
  console.log(`The range sum is: ${rangeSum}`);
}

rangeSum(1, 10);

// Part 3 (optional) - As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function rangeIncrementalOutput(a, b, c) {
  let rangeIO = [];
  if (c > 0) {
    for (let i = a; i <= b; i += c) {
      rangeIO.push(i);
    }
  } else {
    for (let i = a; i >= b; i += c) {
      rangeIO.push(i);
    }
  }
  console.log(`The range Incremental Output is: ${rangeIO}`);
}

rangeIncrementalOutput(1, 10, 2);
rangeIncrementalOutput(5, 2, -1);
