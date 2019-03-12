// The function min takes two arguments and returns their minimum.

function min(a, b) {
  var minestNumber = Math.min(a, b);
  console.log(`${minestNumber} is the smallest number.`);
}

min(5, 10);

// Alternative function to min.
// The function min2 takes two arguments and returns the minimum number.

function min2(a, b) {
  if (a < b) {
    console.log(`${a} is smaller than ${b}`);
  } else if (b < a) {
    console.log(`${b} is smaller than ${a}`);
  }
}

min2(5, 10);
