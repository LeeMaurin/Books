// A recursive function, isEven, accepts a single parameter (a positive, whole number) and returns a Boolean

function isEven(a) {
  if (a % 2 == 0) {
    console.log(`${a} is an even number (True).`);
  } else {
    console.log(`${a} is an odd number (False).`);
  }
}

isEven(50);
isEven(75);
isEven(-1);
isEven(-2);
